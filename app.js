/* ============================================
   جامع السعادات - ملف JavaScript الرئيسي
   ============================================ */

// اختبار تحميل الملف
console.log('🔵 app.js loaded successfully!');

// ── بيانات المحاضرات الافتراضية ──
const DEFAULT_LECTURES = [
  {
    id: 1,
    title: 'مقدمة في شرح جامع السعادات',
    speaker: 'الشيخ أحمد الشهابي',
    date: '١ محرم ١٤٤٨',
    category: 'مقدمة الكتاب',
    type: 'مرئية',
    duration: '٤٥ دقيقة',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    desc: 'تعريف بكتاب جامع السعادات ومنهج المؤلف والمحاور الرئيسية التي يتناولها الكتاب.',
    summary: `## مقدمة تمهيدية
كتاب **جامع السعادات** للعلامة النراقي يعتبر من أجمع وأدق كتب الأخلاق وتهذيب النفس في المدرسة الإسلامية.

> "إن أشرف العلوم بعد معرفة الله تعالى هو علم تهذيب الأخلاق وتطهير النفوس عن الرذائل."

### جدول محاور دراسة الكتاب:
| المحور | الموضوع | الهدف العملي |
|---|---|---|
| الأول | معرفة قوى النفس | فهم دوافع السلوك الإنساني |
| الثاني | الفضائل الأربع | تنمية أركان الأخلاق الحميدة |
| الثالث | معالجة الرذائل | تطهير الباطن والوقاية من المهلكات |

### أهمية المنهج الأخلاقي:
يمتاز أسلوب المؤلف بالجمع بين **البرهان العقلي** و**النص النقلي** و**التطبيق العملي السلوكي**.`,
    points: ['التعريف بالمؤلف العلامة المحقق المولى مهدي النراقي', 'منهج الكتاب الفلسفي والأخلاقي المتكامل', 'أهمية علم الأخلاق وتزكية النفس في بناء المجتمع'],
    keywords: 'جامع السعادات، مقدمة، النراقي، أخلاق',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', audioUrl: ''
  },
  {
    id: 2,
    title: 'القوى النفسية الثلاث',
    speaker: 'الشيخ محمد الحسيني',
    date: '١٥ محرم ١٤٤٨',
    category: 'شرح جامع السعادات',
    type: 'صوتية',
    duration: '٥٢ دقيقة',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    desc: 'شرح مفصل للقوى النفسية الثلاث: العقلية والغضبية والشهوية وعلاقتها بالأخلاق.',
    summary: `## تصنيف قوى النفس الإنسانية
بيّن المحقق النراقي أن النفس الإنسانية تحتوي على **ثلاث قوى رئيسية**، وكل قوة لها غايتها وفضيلتها الخاصة عند الاعتدال:

| القوة النفسية | وظيفتها الفطرية | الفضيلة عند الاعتدال | الرذيلة عند الإفراط أو التفريط |
|---|---|---|---|
| **القوة العاقلة** | إدراك الحقائق والتمييز | الحكمة | الجربزة / البلادة |
| **القوة الغضبية** | دفع المضار وحماية النفس | الشجاعة | التهور / الجبن |
| **القوة الشهوية** | جلب المنافع وبقاء البدن | العفة | الشره / الخمود |

> "العدالة هي انقياد القوتين الغضبية والشهوية للقوة العاقلة في جميع التصرفات والأفعال."`,
    points: ['القوة العقلية وفضيلة الحكمة', 'القوة الغضبية وفضيلة الشجاعة', 'القوة الشهوية وفضيلة العفة', 'تحقيق التوازن والعدالة بين القوى'],
    keywords: 'قوى نفسية، عقل، غضب، شهوة، أخلاق',
    videoUrl: '', audioUrl: ''
  },
  {
    id: 3,
    title: 'الفضائل الأخلاقية الأربع',
    speaker: 'الشيخ أحمد الشهابي',
    date: '١ صفر ١٤٤٨',
    category: 'الفضائل الأخلاقية',
    type: 'مرئية',
    duration: '٦٠ دقيقة',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80',
    desc: 'شرح الفضائل الأخلاقية الأربع الرئيسية: الحكمة والشجاعة والعفة والعدالة.',
    summary: `## أركان الفضائل الأخلاقية
أصول الفضائل الإنسانية تنحصر في **أربعة أركان** يبتني عليها صرح الكمال الأخلاقي:

| الفضيلة | التعريف | الأثر في حياة الإنسان |
|---|---|---|
| 👑 **الحكمة** | معرفة حقائق الأشياء على ما هي عليه | البصيرة في القرارات وحسن التدبير |
| 🛡️ **الشجاعة** | إطاعة القوة الغضبية للعقل في الإقدام | الثبات في الحق ومقاومة الباطل |
| 🕊️ **العفة** | خضوع الشهوة لأمر العقل والشرع | طهارة النفس والابتعاد عن المحرمات |
| ⚖️ **العدالة** | ضبط سائر القوى تحت ميزان العقل | استقامة السلوك والتوازن في الحياة |`,
    points: ['الحكمة: فضيلة القوة العقلية', 'الشجاعة: فضيلة القوة الغضبية', 'العفة: فضيلة القوة الشهوية', 'العدالة: توازن القوى الثلاث'],
    keywords: 'فضائل، حكمة، شجاعة، عفة، عدالة',
    videoUrl: '', audioUrl: ''
  }
];

// ── إدارة البيانات عبر localStorage ──
function getLectures() {
  try {
    const s = localStorage.getItem('saadat_lectures');
    return s ? JSON.parse(s) : DEFAULT_LECTURES;
  } catch { return DEFAULT_LECTURES; }
}

function saveLectures(arr) {
  localStorage.setItem('saadat_lectures', JSON.stringify(arr));
}

function toAr(n) {
  return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

// ── بطاقة محاضرة ──
function makeCard(x) {
  const currentFilter = document.getElementById('typeFilter')?.value || '';
  
  // تحديد النوع والوسم الظاهر بحسب السياق
  let displayType = x.type;
  let cls = x.type === 'الدرس' ? 'lesson' : x.type === 'مرئية' ? 'video' : x.type === 'صوتية' ? 'audio' : x.type === 'مقطع' ? 'clip' : 'text';
  
  if (currentFilter === 'مرئية' && x.videoUrl) {
    displayType = 'مرئية';
    cls = 'video';
  } else if (currentFilter === 'صوتية' && x.audioUrl) {
    displayType = 'صوتية';
    cls = 'audio';
  }

  let img = x.image;
  if (!img || img.includes('unsplash.com')) {
    const ytThumb = getYouTubeThumbnail(x.videoUrl);
    if (ytThumb) img = ytThumb;
  }
  img = img || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80';
  
  return `
  <article class="card">
    <div class="thumb">
      <img src="${img}" alt="${x.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'">
      <span class="tag">${x.category || 'عام'}</span>
      <span class="type-badge ${cls}">${displayType}</span>
    </div>
    <div class="card-body">
      <h3>${x.title}</h3>
      <div class="meta">${x.speaker} · ${x.date}</div>
      <p class="desc">${x.desc}</p>
      <div class="card-foot">
        <button class="watch" data-detail="${x.id}" data-viewmode="${currentFilter}">عرض المحاضرة ←</button>
      </div>
    </div>
  </article>`;
}

// ── تحديث الإحصائيات ──
function updateStats() {
  const L = getLectures();
  const speakers = [...new Set(L.map(l => l.speaker))].length;
  // أي مادة تحتوي على رابط يوتيوب/فيديو تُحسب تلقائياً في المرئيات
  const videos   = L.filter(l => l.type === 'مرئية' || Boolean(l.videoUrl)).length;
  // أي مادة تحتوي على رابط ساوندكلاود/صوت تُحسب تلقائياً في الصوتيات
  const audios   = L.filter(l => l.type === 'صوتية' || Boolean(l.audioUrl)).length;
  const $ = id => document.getElementById(id);
  if ($('totalCount'))   $('totalCount').textContent   = toAr(L.length);
  if ($('statTotal'))    $('statTotal').textContent    = toAr(L.length);
  if ($('statVideo'))    $('statVideo').textContent    = toAr(videos);
  if ($('statAudio'))    $('statAudio').textContent    = toAr(audios);
  if ($('statSpeakers')) $('statSpeakers').textContent = toAr(speakers);
}

// ── آخر المحاضرات ──
function renderLatest() {
  const el = document.getElementById('latestCards');
  if (!el) return;
  el.innerHTML = getLectures().slice(0, 3).map(makeCard).join('');
}

// ── قاعدة بيانات المشايخ والعلماء (Speakers Directory) ──
const SPEAKERS_DATA = {
  'الشيخ أحمد الشهابي': {
    name: 'سماحة الشَّيْخُ أَحْمَدُ الشَّهَابِيُ (حفظه الله)',
    photo: 'https://lh3.googleusercontent.com/d/1FIJreLO0ClW6ksKZcelBmd6UjTVANaCb',
    title: 'أستاذ الحوزة العلمية ومفسر القرآن الكريم',
    origin: 'البحرين - الدراز',
    sections: [
      {
        title: '📜 النَّسَبُ الشَّرِيفُ وَالوِلَادَةُ',
        content: `هُوَ الشَّيْخُ أَحْمَدُ بِنْ الحَاجُّ عَلِيٌّ بِنْ الحَاجُّ أَحْمَدُ بِنْ مُحَمَّدٌ بِنْ... آلُ شِهَابَ البحراني.<br><br>وُلِدَ فِي <strong>١٤ رَجَبِ ١٣٨٠ هِجْرِي (١٩٦١ م)</strong> فِي قَرْيَةِ الدِّرَازِ بِالبَحْرَيْنِ.`
      },
      {
        title: '🎓 الدِّرَاسَةُ الأَكَادِيمِيَّةُ',
        content: `اِلْتَحَقَ بِالتَّعْلِيمِ النِّظَامِيِّ سَنَةَ <strong>١٩٦٨ م</strong>، وَأَنْهَى مَرْحَلَةَ التَّعْلِيمِ الأَسَاسِيِّ وَالثَّانَوِيِّ فِي <strong>١٩٨٠ م</strong>.. ثُمَّ وَاصَلَ تَعْلِيمَهُ الجَامِعِيَّ وَاِلْتَحَقَ بِكُلِّيَّةِ العُلُومِ الصِّحِّيَّةِ (قَسْمُ الأَجْهِزَةِ الدَّقِيقَةِ).`
      },
      {
        title: '📖 الدِّرَاسَةُ الدِّينِيَّةُ وَالمُيُولُ المُبَكِّرَةُ',
        content: `كَانَتْ لَهُ مُيُولٌ لِدِرَاسَةِ العُلُومِ الدِّينِيَّةِ فِي سِنٍّ مُبَكِّرَةٍ، فَدَرَسَ فِي نِهَايَةِ السَّبْعِينَاتِ عَلَى يَدِ:`,
        bullets: [
          'العَلَّامَةِ الشَّيْخِ عَبْدِالمُحْسِنِ الشَّهَابِيِّ (رَحِمَهُ الله).',
          'سَمَاحَةِ آيَةِ اللهِ الشَّيْخِ عِيسَى أَحْمَدَ قَاسِمَ (حَفِظَهُ الله).'
        ]
      },
      {
        title: '🕌 الدِّرَاسَةُ فِي الجُمْهُورِيَّةِ الإِسْلَامِيَّةِ الإِيرَانِيَّةِ (١٩٨١ م)',
        content: `تَوَجَّهَ سَمَاحَتُهُ لِلجُمْهُورِيَّةِ الإِسْلَامِيَّةِ فِي سَنَةِ <strong>١٩٨١ م</strong> وَلَهُ مِنَ العُمْرِ عِشْرُونَ عَامًا، وَانْتَظَمَ حِينَهَا لِمَدْرَسَةِ (دَارِ الحِكْمَةِ) التَّابِعَةِ لِآيَةِ اللهِ السَّيِّدِ مُحَمَّد بَاقِر الحَكِيم (أَعْلَى اللهُ مَقَامَهُ) وَالَّتِي هِيَ الآنَ بِإِشْرَافِ السَّيِّدِ عَمَّار الحَكِيم (حَفِظَهُ الله):`,
        bullets: [
          '<strong>دِرَاسَةُ الفِقْهِ:</strong> عَلَى يَدِ مُحَمَّد التَّرْحِينِيِّ، وَالشَّيْخِ بَاقِرِ الإِيرَوَانِيِّ. كَمَا حَضَرَ لِآيَةِ اللهِ السَّيِّدِ مَحْمُود الهَاشِمِيِّ (حَفِظَهُ الله)، وَآيَةِ اللهِ السَّيِّدِ كَاظِمِ الحَائِرِيِّ (حَفِظَهُ الله) وَآخَرِينَ.',
          '<strong>أُصُولُ الفِقْهِ:</strong> دَرَسَهَا عَلَى يَدِ الشَّيْخِ بَاقِرِ الإِيرَوَانِيِّ، وَالشَّيْخِ حُسَيْن نَجَاتِي.',
          '<strong>الفَلْسَفَةُ وَالعُلُومُ العَقْلِيَّةُ:</strong> دَرَسَ بِدَايَاتِ الفَلْسَفَةِ مَعَ سَمَاحَةِ السَّيِّدِ كَمَالِ الحَيْدَرِيِّ (حَفِظَهُ الله) وَالأُسْتَاذِ الشَّيْخِ حَسَن رَمَضَان (حَفِظَهُ الله)، ثُمَّ تَابَعَ دَرْسَ الأَسْفَارِ لِآيَةِ اللهِ الشَّيْخِ جَوَادِي آمُلِي (حَفِظَهُ الله) عَنْ طَرِيقِ أَشْرِطَةِ الكَاسِيتِ.',
          '<strong>التَّدْرِيسُ وَالتَّبْلِيغُ:</strong> بَدَأَ بِالتَّدْرِيسِ فِي نِهَايَةِ الثَّمَانِينَاتِ لِلعُلُومِ العَقْلِيَّةِ وَالتَّفْسِيرِ، وَكَانَتْ لَهُ نَشَاطَاتٌ تَبْلِيغِيَّةٌ حَيْثُ ابْتُعِثَ لِلُبْنَانَ سَنَةَ ١٩٨٦ م وَمَنَاطِقَ دَاخِلَ إِيرَانَ.'
        ]
      },
      {
        title: '🇧🇭 العَوْدَةُ إِلَى البِلَادِ (٢٠٠١ م)',
        content: `وَبَعْدَ رِحْلَةٍ عِلْمِيَّةٍ طَالَتْ <strong>٢٠ سَنَةً</strong>، عَادَ لِوَطَنِهِ البَحْرَيْنِ فِي سَنَةِ <strong>٢٠٠١ م</strong>، وَالْتَحَقَ بِحَوْزَةِ (زَيْنِ العَابِدِينَ) بِقَرْيَةِ بَنِي جَمْرَة التَّابِعَةِ لِسَمَاحَةِ الشَّيْخِ عَبْدِالأَمِيرِ الجَمْرِيِّ (أَعْلَى اللهُ مَقَامَهُ)، أُسْتَاذًا لِأُصُولِ الفِقْهِ وَالفَلْسَفَةِ وَالتَّفْسِيرِ وَالعَقَائِدِ وَالأَخْلَاقِ.<br><br>وَلَمْ يَنْقَطِعْ مُنْذُ رُجُوعِهِ عَنِ الاِهْتِمَامِ بِشَرِيحَةِ الشَّبَابِ؛ كَمَا أَنَّهُ قَامَ بِنَدَوَاتٍ خَاصَّةٍ بِعُنْوَانِ <em>«بِنَاءِ الذَّاتِ»</em> الَّتِي تَهْتَمُّ بِالاِرْتِقَاءِ وَالتَّطْوِيرِ لِلنَّفْسِ الإِنْسَانِيَّةِ.<br><br>(كَمَا تَابَعَ نَشَاطَهُ التَّبْلِيغِيَّ دَاخِلَ قَرْيَتِهِ مِنْ خِلَالِ إِقَامَةِ صَلَاةِ الجَمَاعَةِ بِالمَسْجِدِ الوَسَطِيِّ وَإِلْقَاءِ المُحَاضَرَاتِ فِي مُخْتَلِفِ المَحَافِلِ وَالمُنَاسَبَاتِ، وَلَهُ جَلْسَةٌ أُسْبُوعِيَّةٌ فِي مَنْزِلِهِ المُتَوَاضِعِ تَتَخَلَّلُهَا مُحَاضَرَاتٌ فِي التَّفْسِيرِ وَالعَقَائِدِ وَالأَخْلَاقِ).`
      },
      {
        title: '✨ صِفَاتُهُ وَشَمَائِلُهُ',
        content: `تَمَيَّزَ سَمَاحَتُهُ بِتَقْوَاهُ وَتَوَاضُعِهِ الشَّدِيدِ وَنَفْسِهِ الطَّيِّبَةِ وَرُوحِهِ الفَكِهَةِ وَابْتِسَامَتِهِ العَرِيضَةِ وَتَرْحِيبِهِ الوَاضِحِ بِكُلِّ مَنْ يُلَاقِيهِ مِنْ صَغِيرٍ وَكَبِيرٍ، مِمَّا جَعَلَهُ مَوْضِعَ احْتِرَامٍ وَمَحَبَّةٍ لَدَى كُلِّ مَنْ عَرَفَهُ أَوْ جَالَسَهُ.`
      }
    ]
  }
};
// ── عرض المشايخ ──
function renderSpeakers(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const map = {};
  getLectures().forEach(l => { map[l.speaker] = (map[l.speaker] || 0) + 1; });
  
  el.innerHTML = Object.entries(map).map(([name, count]) => {
    const speakerInfo = SPEAKERS_DATA[name];
    const photo = speakerInfo?.photo || '';
    const avatarHtml = photo 
      ? `<img src="${photo}" alt="${name}" onerror="this.parentElement.innerHTML='🕌'">`
      : '🕌';
      
    return `
    <div class="speaker-card" onclick="openSpeakerBio('${name.replace(/'/g, "\\'")}')">
      <div class="speaker-avatar">${avatarHtml}</div>
      <h4>${name}</h4>
      <span class="speaker-count">${toAr(count)} مادة مشروحة</span>
      <div class="speaker-bio-btn">السيرة الذاتية والمعلومات ←</div>
    </div>`;
  }).join('');
}

function openSpeakerBio(speakerName) {
  const bio = SPEAKERS_DATA[speakerName];
  const overlay = document.getElementById('bioModalOverlay');
  const body = document.getElementById('bioModalBody');
  if (!overlay || !body) return;

  if (!bio) {
    body.innerHTML = `
      <div style="text-align:center;padding:20px;">
        <div style="font-size:48px;margin-bottom:12px;">🕌</div>
        <h3 style="color:var(--green);margin-bottom:10px;">${speakerName}</h3>
        <p style="color:var(--muted)">جاري توثيق وإعداد السيرة الذاتية لسماحة الشيخ قريباً بإذن الله تعالى.</p>
      </div>`;
    overlay.classList.add('open');
    return;
  }

  let sectionsHtml = bio.sections.map(sec => `
    <div style="margin-bottom:20px;">
      <h4 class="bio-section-title">${sec.title}</h4>
      <p class="bio-text">${sec.content}</p>
      ${sec.bullets ? `<ul class="bio-list">${sec.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
    </div>
  `).join('');

  body.innerHTML = `
    <div class="bio-header">
      <img src="${bio.photo}" alt="${bio.name}" class="bio-avatar" onerror="this.style.display='none'">
      <div>
        <h2 style="color:var(--green);font-size:22px;margin:0 0 6px;">${bio.name}</h2>
        <p style="color:var(--gold);font-weight:700;font-size:14px;margin:0 0 4px;">${bio.title}</p>
        <span style="font-size:13px;color:var(--muted);">📍 ${bio.origin}</span>
      </div>
    </div>
    <div class="bio-body">
      ${sectionsHtml}
    </div>
  `;

  overlay.classList.add('open');
}

function closeSpeakerBio() {
  const overlay = document.getElementById('bioModalOverlay');
  if (overlay) overlay.classList.remove('open');
}


// ── الأرشيف والبحث ──
let currentPage = 1;
const PER_PAGE = 9;

function renderArchive() {
  const L    = getLectures();
  const q    = (document.querySelector('#archiveSearch input')?.value || '').toLowerCase();
  const type = document.getElementById('typeFilter')?.value || '';
  const cat  = document.getElementById('categoryFilter')?.value || '';
  const sort = document.getElementById('sortFilter')?.value || 'newest';

  let found = L.filter(x => {
    const text = [x.title, x.speaker, x.category, x.keywords, x.desc].join(' ').toLowerCase();
    
    // مطابقة النوع بذكاء:
    // إذا اختار "مرئية"، يجلب المواد المرئية + أي درس يحتوي على فيديو
    // إذا اختار "صوتية"، يجلب المواد الصوتية + أي درس يحتوي على صوت
    let matchesType = !type;
    if (type === 'مرئية') {
      matchesType = x.type === 'مرئية' || Boolean(x.videoUrl);
    } else if (type === 'صوتية') {
      matchesType = x.type === 'صوتية' || Boolean(x.audioUrl);
    } else if (type) {
      matchesType = x.type === type;
    }

    return (!q || text.includes(q)) && matchesType && (!cat || x.category.includes(cat));
  });

  if (sort === 'oldest') found = [...found].reverse();
  else if (sort === 'az') found = [...found].sort((a, b) => a.title.localeCompare(b.title, 'ar'));

  const pages = Math.max(1, Math.ceil(found.length / PER_PAGE));
  currentPage = Math.min(currentPage, pages);
  const slice = found.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const rc = document.getElementById('resultsCount');
  if (rc) rc.textContent = `${toAr(found.length)} نتيجة`;

  const ac = document.getElementById('archiveCards');
  if (ac) {
    ac.innerHTML = slice.length
      ? slice.map(makeCard).join('')
      : `<div class="empty-state" style="grid-column:1/-1">
           <div class="icon">🔍</div><h3>لم نجد مواد مطابقة</h3>
           <p>جرّب بحثاً مختلفاً أو غيّر الفلاتر</p>
         </div>`;
  }

  const pg = document.getElementById('pagination');
  if (pg) {
    pg.innerHTML = pages > 1
      ? Array.from({length: pages}, (_, i) =>
          `<button class="page-btn${i+1===currentPage?' active':''}" data-pg="${i+1}">${toAr(i+1)}</button>`
        ).join('')
      : '';
  }
}



// ── تحويل روابط يوتيوب إلى صيغة Embed تلقائياً ──
function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|live\/|shorts\/))([\w-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

// ── استخراج صورة الغلاف تلقائياً من فيديو يوتيوب ──
function getYouTubeThumbnail(url) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|live\/|shorts\/))([\w-]{11})/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return '';
}

// ── تحويل روابط SoundCloud إلى مشغل Embed ──
function getSoundCloudEmbed(url) {
  if (!url) return '';
  if (url.includes('soundcloud.com')) {
    const encoded = encodeURIComponent(url);
    return `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encoded}&color=%231c4b3f&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>`;
  }
  return `<audio controls src="${url}" style="width:100%"></audio>`;
}

// ── دالة تحليل وتنسيق الملخص (Markdown & Tables Parser) ──
function parseMarkdown(text) {
  if (!text) return '';
  
  // تحويل الجداول بنمط Markdown
  const lines = text.split('\n');
  let inTable = false;
  let tableHtml = '';
  let resultLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // التحقق من سطر الجدول
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // سطر الفاصل |---|---|
      if (cells.every(c => /^[-:]+$/.test(c))) {
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHtml = '<div class="table-wrapper"><table class="detail-table"><thead><tr>';
        cells.forEach(c => { tableHtml += `<th>${c}</th>`; });
        tableHtml += '</tr></thead><tbody>';
      } else {
        tableHtml += '<tr>';
        cells.forEach(c => { tableHtml += `<td>${c}</td>`; });
        tableHtml += '</tr>';
      }
    } else {
      if (inTable) {
        inTable = false;
        tableHtml += '</tbody></table></div>';
        resultLines.push(tableHtml);
        tableHtml = '';
      }
      resultLines.push(line);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table></div>';
    resultLines.push(tableHtml);
  }

  let parsed = resultLines.join('\n');

  // العناوين ## و ###
  parsed = parsed.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  parsed = parsed.replace(/^## (.*$)/gim, '<h3>$1</h3>');
  
  // الخط العريض والمائل
  parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  parsed = parsed.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // الاقتباسات >
  parsed = parsed.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // تحويل الأسطر إلى فقرات
  const blocks = parsed.split(/\n\n+/);
  return blocks.map(b => {
    b = b.trim();
    if (!b) return '';
    if (b.startsWith('<div class="table-wrapper"') || b.startsWith('<h3>') || b.startsWith('<blockquote>')) {
      return b;
    }
    return `<p>${b.replace(/\n/g, '<br>')}</p>`;
  }).join('');
}

// ── صفحة التفاصيل ──
function showDetail(id, viewMode = '') {
  const L = getLectures();
  const x = L.find(l => l.id === Number(id));
  if (!x) return;
  
  // إذا تم تحديد نمط عرض صريح (مثلاً تصفح من القسم الصوتي أو المرئي)
  const effectiveType = viewMode === 'مرئية' ? 'مرئية' : viewMode === 'صوتية' ? 'صوتية' : x.type;

  const $ = sel => document.querySelector(sel);
  $('#detailTitle').textContent    = x.title;
  $('#detailCategory').textContent = x.category;
  $('#detailMeta').textContent     = `${x.speaker} · ${x.date} · ${effectiveType} · ${x.duration}`;
  
  // عرض الملخص بتنسيق غني وجداول
  const summaryContent = x.summary || x.desc || '';
  const summaryEl = document.getElementById('detailSummary');
  if (summaryEl) {
    summaryEl.innerHTML = parseMarkdown(summaryContent);
  }

  const pointsEl = document.getElementById('detailPoints');
  if (pointsEl) {
    pointsEl.className = 'points-list';
    pointsEl.innerHTML = (x.points || []).map(p => `<li>${p}</li>`).join('');
  }

  $('#infoSpeaker').textContent    = x.speaker;
  $('#infoDate').textContent       = x.date;
  $('#infoCategory').textContent   = x.category;
  $('#infoDuration').textContent   = x.duration;
  $('#infoType').textContent       = effectiveType;
  $('#infoKeywords').textContent   = x.keywords || '—';

  const media = document.getElementById('detailMedia');
  
  // تحديد الوسيط المعروض بدقة بحسب السياق:
  if (viewMode === 'مرئية' && x.videoUrl) {
    // الزائر قادم من القسم المرئي -> عرض الفيديو فقط
    media.className = 'detail-media';
    const embedUrl = getYouTubeEmbedUrl(x.videoUrl);
    media.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;
  } else if (viewMode === 'صوتية' && x.audioUrl) {
    // الزائر قادم من القسم الصوتي -> عرض مشغل الصوت فقط
    media.className = 'detail-media audio-only';
    media.innerHTML = `
      <div style="text-align:center;width:100%;max-width:550px;padding:20px;">
        <div style="font-size:50px;margin-bottom:12px">🎧</div>
        <p style="color:var(--green);font-weight:700;margin:0 0 16px">${x.title}</p>
        ${getSoundCloudEmbed(x.audioUrl)}
      </div>`;
  } else if (x.videoUrl && x.audioUrl) {
    // المادة تحتوي على فيديو وصوت معاً ومعروضة من الأرشيف العام أو كدرس شامل
    media.className = 'detail-media';
    const embedUrl = getYouTubeEmbedUrl(x.videoUrl);
    media.innerHTML = `
      <div style="display:flex;flex-direction:column;width:100%;height:100%;">
        <div style="flex:1;min-height:380px;">
          <iframe src="${embedUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style="width:100%;height:100%;"></iframe>
        </div>
        <div style="background:#f4f9f6;padding:16px 20px;border-top:2px solid var(--gold);">
          <div style="font-size:13px;font-weight:700;color:var(--green);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
            <span>🎧 الاستماع للتسجيل الصوتي (SoundCloud / Audio):</span>
          </div>
          ${getSoundCloudEmbed(x.audioUrl)}
        </div>
      </div>`;
  } else if (x.videoUrl) {
    media.className = 'detail-media';
    const embedUrl = getYouTubeEmbedUrl(x.videoUrl);
    media.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;
  } else if (x.audioUrl) {
    media.className = 'detail-media audio-only';
    media.innerHTML = `
      <div style="text-align:center;width:100%;max-width:550px;padding:20px;">
        <div style="font-size:50px;margin-bottom:12px">🎧</div>
        <p style="color:var(--green);font-weight:700;margin:0 0 16px">${x.title}</p>
        ${getSoundCloudEmbed(x.audioUrl)}
      </div>`;
  } else {
    media.className = 'detail-media';
    media.innerHTML = `<div style="display:grid;place-items:center;height:100%;color:#aaa;font-size:14px;background:#f5f5f5">⏳ لم يُرفع وسيط بعد</div>`;
  }

  const actions = document.getElementById('mediaActions');
  actions.innerHTML = '';
  if (x.videoUrl) actions.innerHTML += `<a href="${x.videoUrl}" target="_blank" class="btn-primary">🎬 فتح في YouTube</a>`;
  if (x.audioUrl) actions.innerHTML += `<a href="${x.audioUrl}" target="_blank" class="btn-outline">🎧 فتح في SoundCloud</a>`;
  actions.innerHTML += `<button type="button" class="btn-outline" style="border-color:var(--gold);color:var(--gold);cursor:pointer;" onclick="editLecture(${x.id})">✏️ تعديل المادة</button>`;
  actions.innerHTML += `<button type="button" class="btn-outline" style="border-color:#e53e3e;color:#e53e3e;cursor:pointer;" onclick="deleteLecture(${x.id})">🗑️ حذف</button>`;

  const related = L.filter(l => l.id !== x.id && (l.category === x.category || l.speaker === x.speaker)).slice(0, 4);
  const rl = document.getElementById('relatedList');
  rl.innerHTML = related.length
    ? related.map(r => `<div class="related-item" data-detail="${r.id}"><img class="related-thumb" src="${r.image}" alt="" onerror="this.style.display='none'"><div><h5>${r.title}</h5><span>${r.speaker} · ${r.duration}</span></div></div>`).join('')
    : '<p style="color:var(--muted);font-size:13px">لا توجد محاضرات ذات صلة.</p>';
  show('detail');
}

function show(view) {
  document.querySelector('.home')?.classList.toggle('hidden', view !== 'home');
  document.querySelectorAll('.section-page').forEach(p => p.classList.toggle('active', p.id === view));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (view === 'archive') renderArchive();
  if (view === 'speakers-page') { renderSpeakers('speakersGrid'); renderSpeakers('allSpeakersGrid'); }
}

function showToast(msg, dur = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ── نظام حماية الإدارة وكلمة المرور (Admin Security) ──
const ADMIN_STORAGE_KEY = 'saadat_admin_auth';

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
}

function requireAdminAuth(callback) {
  if (isAdminAuthenticated()) {
    if (callback) callback();
    return;
  }
  
  const password = prompt('🔒 لوحة الإدارة محمية\nيرجى إدخال كلمة مرور المشرف (Admin Password):');
  if (!password) return;

  // كلمة المرور للمشرف
  if (password === '222666') {
    sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
    showToast('🔓 مرحباً بك أيها المشرف');
    if (callback) callback();
  } else {
    alert('❌ كلمة المرور غير صحيحة!');
  }
}

function openAdmin()  { 
  console.log('✅ openAdmin() called');
  requireAdminAuth(() => {
    const modalTitle = document.getElementById('adminModalTitle');
    if (modalTitle) modalTitle.textContent = '➕ إضافة مادة جديدة';
    const editIdInput = document.getElementById('fEditId');
    if (editIdInput) editIdInput.value = '';
    const form = document.getElementById('adminForm');
    if (form) form.reset();

    const overlay = document.getElementById('adminOverlay');
    if (overlay) {
      overlay.classList.add('open');
      console.log('✅ Modal opened');
    }
  });
}

function editLecture(id) {
  requireAdminAuth(() => {
    const L = getLectures();
    const x = L.find(l => l.id === Number(id));
    if (!x) return;

    const setVal = (fid, val) => {
      const el = document.getElementById(fid);
      if (el) el.value = val || '';
    };

    setVal('fEditId', x.id);
    setVal('fTitle', x.title);
    setVal('fSpeaker', x.speaker);
    setVal('fDate', x.date);
    setVal('fCategory', x.category);
    setVal('fType', x.type);
    setVal('fDuration', x.duration);
    setVal('fImage', x.image);
    setVal('fDesc', x.desc);
    setVal('fSummary', x.summary || x.desc);
    setVal('fPoints', (x.points || []).join('\n'));
    setVal('fKeywords', x.keywords);
    setVal('fVideoUrl', x.videoUrl);
    setVal('fAudioUrl', x.audioUrl);

    const modalTitle = document.getElementById('adminModalTitle');
    if (modalTitle) modalTitle.textContent = '✏️ تعديل مادة: ' + x.title;

    const overlay = document.getElementById('adminOverlay');
    if (overlay) overlay.classList.add('open');
  });
}

function deleteLecture(id) {
  requireAdminAuth(() => {
    if (!confirm('هل أنت متأكد من رغبتك في حذف هذه المحاضرة نهائياً؟')) return;
    let L = getLectures();
    L = L.filter(l => l.id !== Number(id));
    saveLectures(L);
    showToast('🗑️ تم حذف المحاضرة بنجاح');
    show('home');
    updateStats();
    renderLatest();
    renderArchive();
  });
}

function closeAdmin() { 
  console.log('✅ closeAdmin() called');
  const overlay = document.getElementById('adminOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    console.log('✅ Modal closed');
  }
}

// ── كل الأحداث داخل DOMContentLoaded ──
function initializeApp() {
  console.log('✅ Initializing app...');
  
  // ربط أزرار الإدارة
  const adminToggle = document.getElementById('adminToggle');
  const closeAdminBtn = document.getElementById('closeAdmin');
  const cancelAdminBtn = document.getElementById('cancelAdmin');
  const adminOverlay = document.getElementById('adminOverlay');

  console.log('Elements found:', {
    adminToggle: !!adminToggle,
    closeAdminBtn: !!closeAdminBtn,
    cancelAdminBtn: !!cancelAdminBtn,
    adminOverlay: !!adminOverlay
  });

  if (adminToggle) {
    adminToggle.addEventListener('click', function(e) {
      console.log('🖱️ Button clicked!');
      openAdmin();
    });
    console.log('✅ Event listener attached to adminToggle');
  } else {
    console.error('❌ adminToggle button not found!');
  }

  if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdmin);
  if (cancelAdminBtn) cancelAdminBtn.addEventListener('click', closeAdmin);
  
  const closeBioModalBtn = document.getElementById('closeBioModal');
  const bioModalOverlay = document.getElementById('bioModalOverlay');
  if (closeBioModalBtn) closeBioModalBtn.addEventListener('click', closeSpeakerBio);
  if (bioModalOverlay) {
    bioModalOverlay.addEventListener('click', e => {
      if (e.target === bioModalOverlay) closeSpeakerBio();
    });
  }

  if (adminOverlay) {
    adminOverlay.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeAdmin();
    });
  }

  // Admin Form
  const adminForm = document.getElementById('adminForm');
  if (adminForm) {
    adminForm.addEventListener('submit', e => {
      e.preventDefault();
      const v = id => document.getElementById(id).value.trim();
      let L = getLectures();
      const editId = v('fEditId');

      if (editId) {
        // تعديل مادة موجودة
        const index = L.findIndex(l => l.id === Number(editId));
        if (index !== -1) {
          L[index] = {
            ...L[index],
            title: v('fTitle'),
            speaker: v('fSpeaker'),
            date: v('fDate') || L[index].date,
            category: v('fCategory') || L[index].category,
            type: v('fType'),
            duration: v('fDuration') || L[index].duration,
            image: v('fImage') || L[index].image,
            desc: v('fDesc'),
            summary: v('fSummary') || v('fDesc'),
            points: v('fPoints').split('\n').filter(Boolean),
            keywords: v('fKeywords'),
            videoUrl: v('fVideoUrl'),
            audioUrl: v('fAudioUrl')
          };
          saveLectures(L);
          showToast('✏️ تم تعديل المادة بنجاح!');
          showDetail(editId);
        }
      } else {
        // إضافة مادة جديدة
        const newId = L.length ? Math.max(...L.map(l => l.id)) + 1 : 1;
        const newLecture = {
          id: newId, title: v('fTitle'), speaker: v('fSpeaker'),
          date: v('fDate') || new Date().toLocaleDateString('ar-SA'),
          category: v('fCategory') || 'شرح جامع السعادات',
          type: v('fType'), duration: v('fDuration') || '—',
          image: v('fImage') || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
          desc: v('fDesc'), summary: v('fSummary') || v('fDesc'),
          points: v('fPoints').split('\n').filter(Boolean),
          keywords: v('fKeywords'), videoUrl: v('fVideoUrl'), audioUrl: v('fAudioUrl')
        };
        L.unshift(newLecture);
        saveLectures(L);
        showToast('✅ تم حفظ المادة بنجاح!');
      }

      e.target.reset();
      closeAdmin();
      updateStats();
      renderLatest();
      renderArchive();
    });
  }


  // Event Delegation
  document.addEventListener('click', e => {
    const detailBtn = e.target.closest('[data-detail]');
    if (detailBtn) { 
      e.preventDefault(); 
      showDetail(detailBtn.dataset.detail, detailBtn.dataset.viewmode || ''); 
      return; 
    }
    const pageLink = e.target.closest('[data-page]');
    if (pageLink) { e.preventDefault(); show(pageLink.dataset.page); return; }
    const typeLink = e.target.closest('[data-type]');
    if (typeLink) { e.preventDefault(); document.getElementById('typeFilter').value = typeLink.dataset.type; currentPage = 1; show('archive'); return; }
    if (e.target.closest('[data-archive]')) { e.preventDefault(); currentPage = 1; show('archive'); return; }
    if (e.target.closest('[data-home]')) { e.preventDefault(); show('home'); return; }
    const tag = e.target.closest('[data-tag]');
    if (tag) {
      e.preventDefault();
      document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
      tag.classList.add('active');
      document.getElementById('typeFilter').value = tag.dataset.tag;
      currentPage = 1; renderArchive(); return;
    }
    const pgBtn = e.target.closest('[data-pg]');
    if (pgBtn) { currentPage = Number(pgBtn.dataset.pg); renderArchive(); return; }
  });

  // ربط عناصر البحث والفلاتر
  const heroSearch = document.getElementById('heroSearch');
  const archiveSearch = document.getElementById('archiveSearch');
  const typeFilter = document.getElementById('typeFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const menuBtn = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');
  const mobileNav = document.getElementById('mobileNav');

  if (heroSearch) {
    heroSearch.addEventListener('submit', e => {
      e.preventDefault();
      document.querySelector('#archiveSearch input').value = e.target.querySelector('input').value;
      currentPage = 1; show('archive');
    });
  }

  if (archiveSearch) {
    archiveSearch.addEventListener('submit', e => {
      e.preventDefault(); currentPage = 1; renderArchive();
    });
  }

  if (typeFilter) typeFilter.addEventListener('change', () => { currentPage = 1; renderArchive(); });
  if (categoryFilter) categoryFilter.addEventListener('change', () => { currentPage = 1; renderArchive(); });
  if (sortFilter) sortFilter.addEventListener('change', () => { currentPage = 1; renderArchive(); });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.add('open');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
    });
  }

  if (mobileNav) {
    mobileNav.addEventListener('click', e => {
      if (e.target.closest('a') && !e.target.closest('.close-menu')) {
        mobileNav.classList.remove('open');
      }
    });
  }

  // ── التهيئة ──
  updateStats();
  renderLatest();
  renderSpeakers('speakersGrid');
  renderArchive();
  
  console.log('✅ All initialization complete!');
} // إغلاق دالة initializeApp

// ── تشغيل التطبيق ──
if (document.readyState === 'loading') {
  // DOM لم يتم تحميله بعد
  document.addEventListener('DOMContentLoaded', initializeApp);
  console.log('⏳ Waiting for DOMContentLoaded...');
} else {
  // DOM تم تحميله بالفعل
  console.log('⚡ DOM already loaded, initializing immediately...');
  initializeApp();
}



