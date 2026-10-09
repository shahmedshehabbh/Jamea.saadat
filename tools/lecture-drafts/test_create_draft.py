import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from create_draft import (
    DB_FIELDS,
    DraftError,
    create_draft,
    request_ollama,
    stable_source_id,
    validate_generated_content,
    validate_metadata,
)


class LectureDraftTests(unittest.TestCase):
    def setUp(self):
        self.metadata = {
            "title": "الدرس الثالث عشر",
            "speaker": "الشيخ أحمد الشهابي",
            "date": "",
            "category": "شرح جامع السعادات",
            "type": "مرئية",
            "duration": "٤٥ دقيقة",
            "image": "",
            "video_url": "https://www.youtube.com/watch?v=abcdefghijk&si=first",
            "audio_url": "",
        }
        self.model_response = json.dumps(
            {
                "description": "يتناول الدرس موضوعاً أخلاقياً كما ورد في التفريغ.",
                "summary": "## المحور الأول\nشرح الفكرة الواردة في الدرس.",
                "points": ["الفكرة الرئيسة في التفريغ"],
                "keywords": ["الأخلاق", "جامع السعادات"],
                "uncertainties": ["يراجع لفظ المقطع عند الدقيقة ١٢."],
            },
            ensure_ascii=False,
        )

    def test_draft_matches_site_schema_and_requires_manual_review(self):
        with tempfile.TemporaryDirectory() as temp_dir, patch(
            "create_draft.request_ollama", return_value=self.model_response
        ):
            path = create_draft(
                self.metadata, "نص التفريغ التجريبي", "test-model", Path(temp_dir)
            )
            raw_draft = path.read_text(encoding="utf-8")
            draft = json.loads(raw_draft)

        self.assertEqual(draft["status"], "pending_review")
        self.assertTrue(draft["review"]["required"])
        self.assertEqual(set(draft["fields"]), set(DB_FIELDS))
        self.assertEqual(draft["fields"]["points"], ["الفكرة الرئيسة في التفريغ"])
        self.assertEqual(draft["fields"]["keywords"], "الأخلاق، جامع السعادات")
        self.assertEqual(draft["fields"]["video_url"], self.metadata["video_url"])
        self.assertNotIn("id", draft["fields"])
        self.assertNotIn("نص التفريغ التجريبي", raw_draft)

    def test_youtube_tracking_parameters_do_not_change_source_identity(self):
        first = stable_source_id(validate_metadata(self.metadata))
        second_metadata = dict(self.metadata, video_url="https://youtu.be/abcdefghijk")
        second = stable_source_id(validate_metadata(second_metadata))
        self.assertEqual(first, second)

    def test_duplicate_source_is_rejected_before_model_call(self):
        with tempfile.TemporaryDirectory() as temp_dir, patch(
            "create_draft.request_ollama", return_value=self.model_response
        ) as request_model:
            output_dir = Path(temp_dir)
            create_draft(self.metadata, "نص التفريغ", "test-model", output_dir)
            with self.assertRaisesRegex(DraftError, "توجد مسودة سابقة"):
                create_draft(self.metadata, "نص التفريغ", "test-model", output_dir)

        self.assertEqual(request_model.call_count, 1)

    def test_unknown_site_type_is_rejected(self):
        with self.assertRaisesRegex(DraftError, "نوع المادة غير متوافق"):
            validate_metadata(dict(self.metadata, type="محاضرة"))

    def test_malformed_generated_points_are_rejected(self):
        malformed = json.dumps(
            {
                "description": "وصف",
                "summary": "ملخص",
                "points": "ليست مصفوفة",
                "keywords": ["كلمة"],
                "uncertainties": [],
            },
            ensure_ascii=False,
        )
        with self.assertRaisesRegex(DraftError, "الحقل points"):
            validate_generated_content(malformed)

    def test_source_is_required_for_duplicate_protection(self):
        without_source = dict(self.metadata, video_url="", audio_url="")
        with self.assertRaisesRegex(DraftError, "لمنع إنشاء مسودات مكررة"):
            validate_metadata(without_source)

    def test_non_local_ollama_endpoint_is_rejected_before_network_call(self):
        with patch("create_draft.build_opener") as build_opener:
            with self.assertRaisesRegex(DraftError, "عنوان Ollama يجب أن يكون محلياً"):
                request_ollama("test-model", "transcript", "https://example.com")

        build_opener.assert_not_called()


if __name__ == "__main__":
    unittest.main()
