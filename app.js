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
    summary: 'في هذا الدرس نتعرف على كتاب جامع السعادات للعلامة النراقي، ومكانته بين كتب الأخلاق الإسلامية.',
    points: ['التعريف بالمؤلف العلامة النراقي', 'منهج الكتاب وأسلوبه', 'أهمية علم الأخلاق في الإسلام'],
    keywords: 'جامع السعادات، مقدمة، النراقي، أخلاق',
    videoUrl: '', audioUrl: ''
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
    summary: 'يتناول الدرس شرح القوى النفسية الثلاث التي ذكرها النراقي، وكيف أن التوازن بينها أساس الأخلاق الفاضلة.',
    points: ['القوة العقلية وفضيلة الحكمة', 'القوة الغضبية وفضيلة الشجاعة', 'القوة الشهوية وفضيلة العفة'],
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
    summary: 'درس شامل في الفضائل الأربع الرئيسية التي يبنى عليها صرح الأخلاق الإسلامية وفق منهج جامع السعادات.',
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
  const cls = x.type === 'مرئية' ? 'video' : x.type === 'صوتية' ? 'audio' : 'text';
  const img = x.image || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80';
  return `
  <article class="card">
    <div class="thumb">
      <img src="${img}" alt="${x.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'">
      <span class="tag">${x.category || 'عام'}</span>
      <span class="type-badge ${cls}">${x.type}</span>
    </div>
    <div class="card-body">
      <h3>${x.title}</h3>
      <div class="meta">${x.speaker} · ${x.date}</div>
      <p class="desc">${x.desc}</p>
      <div class="card-foot">
        <button class="watch" data-detail="${x.id}">عرض المحاضرة ←</button>
      </div>
    </div>
  </article>`;
}

// ── تحديث الإحصائيات ──
function updateStats() {
  const L = getLectures();
  const speakers = [...new Set(L.map(l => l.speaker))].length;
  const videos   = L.filter(l => l.type === 'مرئية').length;
  const audios   = L.filter(l => l.type === 'صوتية').length;
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

// ── المشايخ ──
function renderSpeakers(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const map = {};
  getLectures().forEach(l => { map[l.speaker] = (map[l.speaker] || 0) + 1; });
  const icons = ['👨🏫','🧑🎓','📚','🕌','✍️'];
  el.innerHTML = Object.entries(map).map(([name, count], i) => `
    <div class="speaker-card">
      <div class="speaker-avatar">${icons[i % icons.length]}</div>
      <h4>${name}</h4>
      <span class="speaker-count">${toAr(count)} مادة</span>
    </div>`).join('');
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
    return (!q || text.includes(q)) && (!type || x.type === type) && (!cat || x.category.includes(cat));
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

// ── صفحة التفاصيل ──
function showDetail(id) {
  const L = getLectures();
  const x = L.find(l => l.id === Number(id));
  if (!x) return;
  const $ = sel => document.querySelector(sel);
  $('#detailTitle').textContent    = x.title;
  $('#detailCategory').textContent = x.category;
  $('#detailMeta').textContent     = `${x.speaker} · ${x.date} · ${x.type} · ${x.duration}`;
  $('#detailSummary').textContent  = x.summary || x.desc;
  $('#detailPoints').innerHTML     = (x.points || []).map(p => `<li>${p}</li>`).join('');
  $('#infoSpeaker').textContent    = x.speaker;
  $('#infoDate').textContent       = x.date;
  $('#infoCategory').textContent   = x.category;
  $('#infoDuration').textContent   = x.duration;
  $('#infoType').textContent       = x.type;
  $('#infoKeywords').textContent   = x.keywords || '—';

  const media = document.getElementById('detailMedia');
  if (x.videoUrl) {
    media.className = 'detail-media';
    const embedUrl = getYouTubeEmbedUrl(x.videoUrl);
    media.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;
  } else if (x.audioUrl) {
    media.className = 'detail-media audio-only';
    media.innerHTML = `<div style="text-align:center"><div style="font-size:60px;margin-bottom:16px">🎧</div><p style="color:var(--green);font-weight:700;margin:0 0 16px">${x.title}</p><audio controls src="${x.audioUrl}"></audio></div>`;
  } else {
    media.className = 'detail-media';
    media.innerHTML = `<div style="display:grid;place-items:center;height:100%;color:#aaa;font-size:14px;background:#f5f5f5">⏳ لم يُرفع وسيط بعد</div>`;
  }

  const actions = document.getElementById('mediaActions');
  actions.innerHTML = '';
  if (x.videoUrl) actions.innerHTML += `<a href="${x.videoUrl}" target="_blank" class="btn-primary">🎬 مشاهدة</a>`;
  if (x.audioUrl) actions.innerHTML += `<a href="${x.audioUrl}" target="_blank" class="btn-outline">⬇️ تحميل</a>`;

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

function openAdmin()  { 
  console.log('✅ openAdmin() called');
  const overlay = document.getElementById('adminOverlay');
  console.log('Overlay element:', overlay);
  if (overlay) {
    overlay.classList.add('open');
    console.log('✅ Modal opened');
  } else {
    console.error('❌ adminOverlay not found!');
  }
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
      const L = getLectures();
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
      e.target.reset();
      closeAdmin();
      updateStats(); renderLatest(); renderArchive();
      showToast('✅ تم حفظ المادة بنجاح!');
    });
  }


  // Event Delegation
  document.addEventListener('click', e => {
    const detailBtn = e.target.closest('[data-detail]');
    if (detailBtn) { e.preventDefault(); showDetail(detailBtn.dataset.detail); return; }
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



