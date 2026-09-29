# Hikmah Archive: Google Sites build guide

This prototype is the visual and content reference for a native Google Sites implementation. Google Sites does not support a custom database or application-level filtering, so the recommended setup uses stable page templates, a Google Sheet index, YouTube embeds, Drive images, and the built-in Sites search.

## 1. Site map

Create these top-level pages in Google Sites:

- **Home**: introduction, search prompt, featured lectures, latest lectures, topics, speakers, and footer links.
- **Lecture Archive**: a searchable index page with sections grouped by year or category.
- **Video Lectures**: archive view for YouTube content.
- **Audio Lessons**: archive view for audio embeds or linked Drive files.
- **Written Lessons**: article-style lessons.
- **Topics & Categories**: visual directory linking to category pages.
- **Speakers**: directory linking to speaker pages.
- **About / Contact**: project purpose and contact details.

Use a consistent URL structure:

- `/lecture-archive`
- `/lecture-archive/2026/the-art-of-returning-to-allah`
- `/speakers/shaykh-hamza-rahman`
- `/topics/spirituality`

## 2. Google Sites theme

- **Primary**: dark green `#0C4A3C`
- **Secondary**: soft mint `#E9F0E9`
- **Warm background**: beige `#F8F4EC`
- **Accent**: muted gold `#C69B52`
- **Body text**: deep green `#17312B`
- Use a clean sans-serif for English and a readable Arabic font available in Google Sites. Keep Arabic titles at a larger size and avoid all-caps.
- Use rounded image corners and subtle shadows, but keep pages spacious and light.
- Use one small geometric or Arabic typographic accent per section at most.

## 3. Home page sections

Build the Home page in this order:

1. **Header**: Hikmah Archive logo, one-line description, navigation.
2. **Hero**: “Learn. Reflect. Live with purpose.” plus a button to Lecture Archive.
3. **Search prompt**: tell visitors to use the Google Sites search icon. Keep important searchable metadata in page titles, headings, and body text.
4. **Quick links**: Video Lectures, Audio Lessons, Written Lessons, Topics, Speakers.
5. **Latest lectures**: three to six compact cards linked to individual lecture pages.
6. **Featured lecture**: one larger image, short summary, and YouTube button.
7. **Browse speakers**: four profile cards.
8. **Explore by topic**: category buttons.
9. **Footer**: archive links, YouTube channel, email, and copyright.

## 4. Lecture page template

Duplicate one completed lecture page whenever a new lecture is added. Keep this order:

### Header

- Lecture title
- Speaker
- Date
- Category
- Lecture type

### Main content

- YouTube embed using **Insert > YouTube**
- Summary paragraph
- Main topics discussed
- Key takeaways as a short numbered list
- Related lectures as three linked cards

### Information panel

- Speaker
- Lecture date
- Location, when available
- Category
- Duration, when available
- Keywords

### Actions

- **Watch on YouTube**: link to the canonical YouTube URL.
- **Share**: use the published page URL or a simple text link.
- **Back to Archive**: link to the archive page.

Put the following metadata in visible text on every page so Google Sites search can find it:

```text
Lecture Title: The art of returning to Allah
Speaker: Shaykh Hamza Rahman
Date: 18 September 2026
Category: Spirituality
Type: Video
Topics: repentance, hope, spiritual renewal
Summary: ...
Key Points: ...
YouTube Link: https://youtube.com/...
Location: ...
Duration: 48 minutes
Keywords: repentance, hope, spirituality
```

## 5. Google Sheet content index

Create a Google Sheet called **Hikmah Archive Index**. Use one row per lecture and freeze the header row.

| Column | Example |
|---|---|
| Status | Published |
| Title | The art of returning to Allah |
| Slug | the-art-of-returning-to-allah |
| Speaker | Shaykh Hamza Rahman |
| Date | 2026-09-18 |
| Year | 2026 |
| Category | Spirituality |
| Type | Video |
| Topics | repentance; hope; renewal |
| Summary | One or two sentence summary |
| Thumbnail URL | Drive share link |
| YouTube URL | Canonical YouTube link |
| Location | London Islamic Centre |
| Duration | 48 minutes |
| Keywords | repentance; hope; spirituality |
| Related lecture slugs | dua-the-language-of-nearness |
| Google Sites page URL | Published page link |

The Sheet is the editorial source of truth. Google Sites remains the presentation layer. For a large archive, use one Sheet tab for **Lectures**, one for **Speakers**, and one for **Categories**.

## 6. Adding a new lecture

1. Copy the existing lecture page template.
2. Rename the page with the lecture title and year.
3. Add the YouTube embed and thumbnail from Drive.
4. Replace every metadata field in the information panel.
5. Add the same metadata block as visible text near the bottom of the page.
6. Add two or three related lecture links.
7. Add the new row to **Hikmah Archive Index**.
8. Add the page to the latest or category section when appropriate.
9. Preview at desktop and mobile widths.
10. Publish and paste the final URL back into the Sheet.

## 7. Search strategy

Native Google Sites search is the lowest-maintenance option. Make it effective by:

- Starting every page title with the lecture title.
- Including speaker, category, year, type, and keywords in visible text.
- Using consistent spellings for names and categories.
- Adding Arabic and English alternative spellings when relevant.
- Avoiding important metadata that exists only inside an image or YouTube video.

For a more advanced searchable directory, embed a published Google Sheet or a filtered Google Looker Studio table on the Archive page. Keep the canonical lecture pages as the long-term archive because they remain readable and shareable.

## 8. Mobile QA checklist

- Navigation has no more than five primary links.
- Every tap target is comfortably sized.
- Lecture cards use one column on narrow screens.
- YouTube embeds use the responsive embed option.
- Titles wrap instead of being truncated.
- No table is wider than the viewport.
- Thumbnail images are compressed before upload to Drive.
- Important metadata appears before long summaries.

## 9. Launch checklist

- Replace all sample names, links, images, and contact details.
- Confirm every YouTube video is embeddable.
- Set Drive image permissions to the intended audience.
- Test the Sites search with a title, speaker, category, and keyword.
- Check published pages on a phone.
- Add a clear contact address for corrections or takedown requests.
- Keep a monthly Sheet backup and an export of the archive index.
