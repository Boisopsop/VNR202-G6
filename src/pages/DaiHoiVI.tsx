import { useState, useEffect, useRef } from 'react';

// ── 14 NHÂN VẬT ───────────────────────────────────────────────────────────────
const figures = [
  { name: 'Nguyễn Văn Linh (1915–1998)', img: '/images/portrait_nvl.jpg', role: 'Tổng Bí thư của Đảng, Uỷ viên Bộ Chính trị – đọc diễn văn khai mạc Đại hội.' },
  { name: 'Trường Chinh (1907–1988)',     img: '/images/portrait_tc.jpg',  role: 'Tổng Bí thư – đọc Báo cáo Chính trị của Ban Chấp hành Trung ương Đảng.' },
  { name: 'Phạm Hùng (1912–1988)',        img: '/images/portrait_ph.jpg',  role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng, Đại biểu Quốc hội.' },
  { name: 'Võ Văn Kiệt (1922–2008)',      img: '/images/portrait_vvk.jpg', role: 'Uỷ viên Bộ Chính trị – đọc Báo cáo phương hướng phát triển kinh tế – xã hội 5 năm (1986–1990).' },
  { name: 'Đỗ Mười (1917–2018)',          img: '/images/portrait_dm.jpg',  role: 'Uỷ viên Bộ Chính trị, Thường trực Ban Bí thư.' },
  { name: 'Võ Chí Công (1912–2011)',      img: '/images/portrait_vcc.jpg', role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Lê Đức Anh (1920–2019)',       img: '/images/portrait_lda.jpg', role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Nguyễn Cơ Thạch (1923–1998)', img: '/images/portrait_nct.jpg', role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Mai Chí Thọ (1922–2007)',      img: '/images/portrait_mct.jpg', role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Đồng Sỹ Nguyên (1923–2019)',  img: '/images/portrait_dsn.jpg', role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Nguyễn Đức Tâm (1920–2010)',  img: '/images/portrait_ndt.jpg', role: 'Uỷ viên Bộ Chính trị, Bí thư Trung ương Đảng.' },
  { name: 'Nguyễn Thanh Bình (1920–2008)', img: '/images/portrait_ntb.jpg', role: 'Uỷ viên Bộ Chính trị, Thường trực Ban Bí thư.' },
  { name: 'Đoàn Khuê (1923–1999)',        img: '/images/portrait_dk.jpg',  role: 'Uỷ viên Bộ Chính trị, Ủy viên Trung ương Đảng.' },
  { name: 'Đào Duy Tùng (1924–1998)',     img: '/images/portrait_ddt.jpg', role: 'Uỷ viên Bộ Chính trị, Bí thư Trung ương Đảng.' },
];

// ── NHÂN VẬT Carousel (RED bg with muted Trống Đồng pattern) ─────────────────
function PortraitCarousel() {
  const [idx, setIdx] = useState(0);
  const n = figures.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goto = (i: number) => {
    setIdx((i + n) % n);
    // Reset auto-advance timer on manual interaction
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(c => (c + 1) % n), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(c => (c + 1) % n), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [n]);

  const prev = figures[(idx - 1 + n) % n];
  const curr = figures[idx];
  const next = figures[(idx + 1) % n];

  const arrowBtn = (label: string, onClick: () => void, dir: 'left' | 'right') => (
    <button onClick={onClick} aria-label={label} style={{
      flexShrink: 0, background: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer',
      width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', transition: 'background 0.2s', zIndex: 2,
    }}
      onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.32)')}
      onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}>
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
        {dir === 'left'
          ? <polyline points="20,6 10,16 20,26" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          : <polyline points="12,6 22,16 12,26" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </button>
  );

  return (
    <div className="anim-fade-up" style={{
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      overflow: 'hidden',
      /* Strong red overlay → mutes the gold trống đồng pattern */
      background: `linear-gradient(rgba(215,25,32,0.78), rgba(215,25,32,0.78)), url('/images/bg_trong_dong.jpg') center/cover`,
      padding: '44px 28px 32px',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {arrowBtn('Trước', () => goto(idx - 1), 'left')}

        {/* Portraits stage */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 20 }}>

          {/* Prev – dimmed */}
          <div style={{ flex: '0 0 auto', alignSelf: 'center' }}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden',
              width: 160, height: 210, boxShadow: '0 4px 18px rgba(0,0,0,0.55)', cursor: 'pointer' }}
              onClick={() => goto(idx - 1)}>
              <img src={prev.img} alt={prev.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
            </div>
          </div>

          {/* Current – main, larger, with text */}
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{ borderRadius: 18, overflow: 'hidden', width: 240, height: 310,
              boxShadow: '0 10px 32px rgba(0,0,0,0.6)', border: '3px solid rgba(255,255,255,0.7)' }}>
              <img src={curr.img} alt={curr.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%)' }} />
            </div>
            <div style={{ color: '#FFFF00', fontWeight: 700, fontStyle: 'italic', fontSize: 19,
              textAlign: 'center', maxWidth: 300, textShadow: '0 2px 8px rgba(0,0,0,0.6)', lineHeight: 1.45 }}>
              Đồng chí {curr.name}
            </div>
            <div style={{ color: '#fff', fontSize: 15, textAlign: 'center', maxWidth: 300,
              lineHeight: 1.6, opacity: 0.93 }}>
              {curr.role}
            </div>
          </div>

          {/* Next – dimmed */}
          <div style={{ flex: '0 0 auto', alignSelf: 'center' }}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden',
              width: 160, height: 210, boxShadow: '0 4px 18px rgba(0,0,0,0.55)', cursor: 'pointer' }}
              onClick={() => goto(idx + 1)}>
              <img src={next.img} alt={next.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
            </div>
          </div>
        </div>

        {arrowBtn('Tiếp', () => goto(idx + 1), 'right')}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 22 }}>
        {figures.map((_, i) => (
          <div key={i} onClick={() => goto(i)} style={{
            width: i === idx ? 24 : 10, height: 10, borderRadius: 6, cursor: 'pointer',
            transition: 'all 0.3s',
            background: i === idx ? '#FFFF00' : 'rgba(255,255,255,0.4)',
          }} />
        ))}
      </div>
    </div>
  );
}

// ── Vertical zigzag timeline ───────────────────────────────────────────────────
const zigzagItems = [
  { side: 'right', text: 'Sản xuất tăng trưởng chậm' },
  { side: 'left',  text: 'Hiệu quả kinh tế thấp' },
  { side: 'right', text: 'Phân phối hàng hóa rối ren' },
  { side: 'left',  text: 'Đời sống nhân dân gặp nhiều khó khăn' },
];

function ZigzagTimeline() {
  return (
    <div style={{ position: 'relative', maxWidth: 'var(--content-max)', margin: '16px auto 0', padding: '8px 0' }}>
      {/* Center vertical line */}
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 3, background: '#bbb', transform: 'translateX(-50%)' }} />
      {zigzagItems.map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: item.side === 'right' ? 'flex-end' : 'flex-start', marginBottom: 0, position: 'relative' }}>
          <div style={{
            background: 'var(--pink-light)',
            borderRadius: 0,
            padding: '20px 28px',
            width: '45%',
            fontSize: 17, fontWeight: 500, color: '#111',
            marginRight: item.side === 'right' ? '4%' : 0,
            marginLeft: item.side === 'left' ? '4%' : 0,
            minHeight: 70,
            display: 'flex', alignItems: 'center',
          }}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Horizontal lessons timeline ────────────────────────────────────────────────
const lessons = [
  'Lấy dân làm gốc, phát huy quyền làm chủ của nhân dân',
  'Xuất phát từ thực tế và tôn trọng quy luật khách quan',
  'Kết hợp sức mạnh dân tộc với sức mạnh của thời đại',
  'Xây dựng Đảng vững mạnh',
];

function HorizontalLessons() {
  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '16px auto 0', overflowX: 'auto', minWidth: 480 }}>
      {/* Row 1: horizontal line + dots – completely separate from the boxes */}
      <div style={{ position: 'relative', height: 52, display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 6%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: 2, background: '#000', transform: 'translateY(-50%)' }} />
        {lessons.map((_, i) => (
          <div key={i} style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--red)',
            flexShrink: 0, position: 'relative', zIndex: 1,
            boxShadow: '0 3px 10px rgba(215,25,32,0.5)' }} />
        ))}
      </div>
      {/* Row 2: yellow boxes – totally separate, no z-index conflicts */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
        {lessons.map((text, i) => (
          <div key={i} style={{ flex: 1, padding: '0 8px' }}>
            <div style={{ background: 'var(--yellow-light)', borderRadius: 24, padding: '32px 18px',
              fontSize: 24, fontWeight: 700, textAlign: 'center', lineHeight: 1.5,
              boxShadow: 'var(--shadow)', minHeight: 200,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── NỘI DUNG ĐỔI MỚI – 4 stacked yellow buttons ───────────────────────────────
const doiMoiData = [
  {
    label: 'ĐỔI MỚI TƯ DUY',
    content: (
      <div className="body-text" style={{ padding: '0 8px' }}>
        <p><strong>Nhận thức rõ thực trạng:</strong> Đảng thẳng thắn nhìn nhận những sai lầm trong tư duy lãnh đạo trước đây, đặc biệt là bệnh chủ quan duy ý chí và giáo điều rập khuôn.</p>
        <p style={{ marginTop: 10 }}><strong>Đổi mới tư duy lý luận:</strong> Từ bỏ mô hình kinh tế kế hoạch hóa tập trung thuần túy để chuyển sang tư duy kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.</p>
        <p style={{ marginTop: 10 }}><strong>Tinh thần "nhìn thẳng vào sự thật":</strong> Đây là tư tưởng chủ đạo của Đại hội VI: đánh giá đúng sự thật, nói thẳng sự thật và hành động theo sự thật. → Đây là cuộc cách mạng trong tư duy lãnh đạo, tạo nền tảng tư tưởng vững chắc cho toàn bộ công cuộc Đổi Mới.</p>
      </div>
    ),
  },
  {
    label: 'ĐỔI MỚI KINH TẾ',
    content: (
      <div className="body-text" style={{ padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--yellow-light)', borderRadius: 12, padding: '10px 16px', fontWeight: 700, fontSize: 15, textAlign: 'center', flex: 1, minWidth: 140 }}>
            Cơ chế kế hoạch hóa<br />tập trung quan liêu bao cấp
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--red)' }}>→</div>
          <div style={{ background: 'var(--yellow-light)', borderRadius: 12, padding: '10px 16px', fontWeight: 700, fontSize: 15, textAlign: 'center', flex: 1, minWidth: 140 }}>
            Nền kinh tế hàng hóa nhiều thành phần,<br />vận hành theo cơ chế thị trường
          </div>
        </div>
        <p><strong>Xóa bỏ cơ chế bao cấp:</strong> Giá cả hàng hóa được xác định theo thị trường.</p>
        <p style={{ marginTop: 8 }}><strong>Thừa nhận kinh tế nhiều thành phần:</strong> Kinh tế tư nhân, hộ gia đình, vốn nước ngoài được tham gia sản xuất.</p>
        <p style={{ marginTop: 8 }}><strong>Khoán trong nông nghiệp (NQ 10/1988):</strong> Giao đất cho hộ nông dân tự chủ, phần còn lại tự do buôn bán.</p>
      </div>
    ),
  },
  {
    label: 'ĐỔI MỚI XÃ HỘI',
    content: (
      <div className="body-text" style={{ padding: '0 8px' }}>
        <p><strong>Dân chủ hóa đời sống xã hội:</strong> Mở rộng quyền tự do ngôn luận, báo chí trong khuôn khổ pháp luật; tăng cường đối thoại giữa Đảng, Nhà nước và nhân dân.</p>
        <p style={{ marginTop: 10 }}><strong>Phát triển văn hóa – giáo dục:</strong> Chú trọng đầu tư cho giáo dục và đào tạo, xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.</p>
        <p style={{ marginTop: 10 }}><strong>Cải thiện phúc lợi xã hội:</strong> Từng bước cải thiện đời sống nhân dân, xây dựng hệ thống an sinh xã hội.</p>
      </div>
    ),
  },
  {
    label: 'ĐỔI MỚI ĐỐI NGOẠI',
    content: (
      <div className="body-text" style={{ padding: '0 8px' }}>
        <p><strong>Mở cửa và hội nhập quốc tế:</strong> Đa phương hóa, đa dạng hóa quan hệ quốc tế theo phương châm "Việt Nam muốn làm bạn với tất cả các nước".</p>
        <p style={{ marginTop: 10 }}><strong>Bình thường hóa quan hệ:</strong> Trung Quốc (1991), Hoa Kỳ (1995). Gia nhập ASEAN (1995), WTO (2007).</p>
        <p style={{ marginTop: 10 }}><strong>Thu hút đầu tư nước ngoài:</strong> Luật Đầu tư nước ngoài (1987) tạo hành lang pháp lý thu hút vốn và công nghệ. → Phá vỡ thế bao vây cô lập, mở ra thời kỳ hội nhập toàn diện.</p>
      </div>
    ),
  },
];

// ── Modal overlay for đổi mới detail ──────────────────────────────────────────
function DoiMoiModal({ item, onClose }: { item: typeof doiMoiData[0]; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.62)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--pink-light)', borderRadius: 32, padding: '40px 44px',
        maxWidth: 820, width: '100%', maxHeight: '80vh', overflowY: 'auto',
        boxShadow: '0 12px 48px rgba(0,0,0,0.35)',
        animation: 'fadeInUp 0.3s ease-out both',
      }}>
        {/* Modal header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 26,
            color: 'var(--red)', textTransform: 'uppercase' }}>
            {item.label}
          </h2>
          <button onClick={onClose} style={{
            background: 'var(--red)', border: 'none', cursor: 'pointer', color: '#fff',
            width: 36, height: 36, borderRadius: '50%', fontSize: 18, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>✕</button>
        </div>
        {item.content}
      </div>
    </div>
  );
}

function DoiMoiButtons() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? doiMoiData[open] : null;

  return (
    <>
      {/* 4 tall yellow buttons – centered, matching Figma proportions */}
      <div style={{ maxWidth: 'var(--content-max)', margin: '16px auto 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        {doiMoiData.map((item, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            style={{
              width: '72%', minHeight: 80, background: 'var(--yellow-light)',
              borderRadius: 42, border: 'none',
              fontWeight: 700, fontSize: 26, textAlign: 'center', cursor: 'pointer',
              boxShadow: 'var(--shadow)', transition: 'all 0.22s', color: '#111',
              padding: '24px 36px',
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#eff87a'; e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'var(--yellow-light)'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Modal overlay */}
      {active && <DoiMoiModal item={active} onClose={() => setOpen(null)} />}
    </>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function DaiHoiVI() {
  return (
    <>
      {/* 1. Banner – red card with congress background image */}
      <div className="section-banner anim-fade-up"
        style={{
          backgroundImage: `linear-gradient(rgba(215,25,32,0.65), rgba(215,25,32,0.65)), url('/images/daihoi_vi_tuli.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: 440,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 48px',
        }}>
        {/* Flag logo above title – Figma: logo_header_f3623, width 160×90, centered */}
        <img
          src="/images/logo_header_f3623.png"
          alt="Cờ Đảng và Quốc kỳ"
          style={{ width: 160, height: 90, objectFit: 'contain', display: 'block',
            margin: '0 auto 18px', position: 'relative', zIndex: 1 }}
        />
        <div className="banner-title">
          Đại Hội Đảng VI Năm 1986<br />
          Mở Ra Công Cuộc Đổi Mới
        </div>
      </div>

      {/* 2. Intro yellow card */}
      <div className="info-card anim-fade-up delay-1">
        <p className="body-text">
          Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam được tổ chức tại Hà Nội từ
          ngày <strong>15 đến ngày 18 tháng 12 năm 1986</strong>. Đại hội có <strong>1.129 đại biểu</strong>,
          đại diện cho gần 1,9 triệu đảng viên trong toàn Đảng, cùng với 32 đoàn đại biểu quốc tế tham dự.
        </p>
      </div>

      {/* 3. NHÂN VẬT TIÊU BIỂU – standalone red heading */}
      <div className="section-standalone-heading anim-fade-up">
        NHÂN VẬT TIÊU BIỂU TẠI ĐẠI HỘI VI:
      </div>

      {/* Portrait carousel – red + trong-dong background */}
      <PortraitCarousel />

      {/* 4. Two photos + stats row */}
      <div className="nvl-info-row anim-fade-up" style={{
        maxWidth: 'var(--content-max)', margin: '20px auto 0',
        display: 'grid', gridTemplateColumns: '356px 356px 1fr', gap: 20, alignItems: 'center',
      }}>
        <img className="hist-img sm" src="/images/dhvi619.png" alt="Đại hội VI toàn cảnh" />
        <img className="hist-img sm" src="/images/daihoi4475.png" alt="Đại hội VI biểu quyết" />
        <div style={{ fontSize: 22, lineHeight: 2, color: '#111' }}>
          <div>• <strong>Thời gian:</strong> 15/12 đến 18/12/1986</div>
          <div>• <strong>Địa điểm:</strong> Thủ đô Hà Nội</div>
          <div>• <strong>Số lượng đại biểu:</strong> 1.129</div>
          <div>• <strong>Số lượng đảng viên:</strong> 1.900.000</div>
        </div>
      </div>

      {/* 5. Pink card – "Sau Đại hội..." */}
      <div className="anim-fade-up" style={{
        background: 'var(--pink-light)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '20px auto 0', padding: '32px 48px',
        transition: 'transform var(--transition), box-shadow var(--transition)',
      }}>
        <p className="body-text">
          Sau Đại hội, Ban Chấp hành Trung ương khóa VI được bầu và <strong>Nguyễn Văn Linh</strong> được bầu
          làm Tổng Bí thư. Dưới sự lãnh đạo của ông, công cuộc Đổi mới được triển khai mạnh mẽ trong
          những năm sau đó.
        </p>
      </div>

      {/* 6. TINH THẦN ĐỔI MỚI – standalone heading */}
      <div className="section-standalone-heading anim-fade-up">
        TINH THẦN ĐỔI MỚI CỦA ĐẠI HỘI
      </div>

      {/* Yellow quote card */}
      <div className="info-card anim-fade-up" style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 700, fontSize: 24, color: 'var(--red)', textTransform: 'uppercase', lineHeight: 1.5 }}>
          "NHÌN THẲNG VÀO SỰ THẬT, ĐÁNH GIÁ ĐÚNG SỰ THẬT, NÓI RÕ SỰ THẬT."
        </p>
      </div>

      {/* 7. Large congress photo */}
      <div className="img-center-wrap anim-fade-up">
        <img className="hist-img congress" src="/images/nvl_khai_mac.jpg" alt="Đồng chí Nguyễn Văn Linh đọc diễn văn khai mạc Đại hội. Ảnh: TTXVN" />
      </div>

      {/* Caption */}
      <div style={{ maxWidth: 'var(--content-max)', margin: '8px auto 0', textAlign: 'center' }}>
        <p style={{ fontSize: 14, fontStyle: 'italic', color: '#444', textDecoration: 'underline' }}>
          Đồng chí Nguyễn Văn Linh – Ủy viên Bộ Chính trị đọc diễn văn khai mạc Đại hội. (Ảnh: TTXVN)
        </p>
      </div>

      {/* 8. Pink long quote card */}
      <div className="anim-fade-up" style={{
        background: 'var(--pink-light)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '20px auto 0', padding: '36px 48px',
      }}>
        <p className="body-text" style={{ fontWeight: 700, fontStyle: 'italic', lineHeight: 1.75 }}>
          "Chỉ có đổi mới thì mới thấy đúng và thấy hết sự thật, thấy những nhân tố mới để phát huy,
          những sai lầm để sửa chữa, nhằm vận dụng tốt chủ nghĩa Mác-Lênin vào hoàn cảnh nước ta,
          phát huy truyền thống lịch sử và cách mạng của dân tộc, động viên tính năng động, sáng tạo
          và khả năng vô tận của nhân dân lao động làm chủ tập thể để đồng thời đẩy mạnh ba cuộc cách mạng,
          xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc"
        </p>
        <p style={{ fontSize: 15, fontStyle: 'italic', color: '#555', marginTop: 14, textAlign: 'right' }}>
          — (Đồng chí Nguyễn Văn Linh – Ủy viên Bộ Chính trị)
        </p>
      </div>

      {/* 9. Red "Thể hiện" card */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '20px auto 0', padding: '28px 48px',
      }}>
        <p style={{ fontWeight: 700, fontSize: 22, color: 'var(--yellow)', lineHeight: 1.5 }}>
          Thể hiện sự thẳng thắn nhìn nhận những hạn chế trong quản lý kinh tế và xã hội trước đó như:
        </p>
      </div>

      {/* 10. Vertical zigzag items */}
      <ZigzagTimeline />

      {/* 11. NHỮNG BÀI HỌC – standalone heading */}
      <div className="section-standalone-heading anim-fade-up" style={{ textAlign: 'center' }}>
        NHỮNG BÀI HỌC KINH NGHIỆM QUAN TRỌNG
      </div>
      <HorizontalLessons />

      {/* 12. NỘI DUNG ĐƯỜNG LỐI ĐỔI MỚI – standalone heading */}
      <div className="section-standalone-heading anim-fade-up" style={{ textAlign: 'center' }}>
        NỘI DUNG ĐƯỜNG LỐI ĐỔI MỚI
      </div>
      <DoiMoiButtons />

      {/* 13. Ý nghĩa – RED card with white/yellow text */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '32px auto 24px', padding: '40px 52px',
      }}>
        <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 38,
          color: '#FFFF00', textAlign: 'center', textTransform: 'uppercase',
          marginBottom: 24, lineHeight: 1.35 }}>
          Ý NGHĨA LỊCH SỬ CỦA ĐẠI HỘI VI
        </h2>
        <p style={{ color: '#fff', fontSize: 20, lineHeight: 1.8, marginBottom: 16 }}>
          Đại hội VI năm 1986 có ý nghĩa đặc biệt quan trọng trong lịch sử Việt Nam như:
        </p>
        <ul style={{ color: '#fff', fontSize: 20, lineHeight: 2.1, paddingLeft: 22, marginBottom: 18 }}>
          <li>Khởi xướng <strong style={{ color: '#FFFF00' }}>công cuộc Đổi mới toàn diện</strong> đất nước</li>
          <li>Thay đổi <strong style={{ color: '#FFFF00' }}>tư duy phát triển kinh tế</strong></li>
          <li>Tạo nền tảng cho nền kinh tế vận hành theo <strong style={{ color: '#FFFF00' }}>cơ chế thị trường định hướng xã hội chủ nghĩa</strong></li>
        </ul>
        <p style={{ color: '#fff', fontSize: 20, lineHeight: 1.8 }}>
          Nhờ đường lối đổi mới này, Việt Nam đã từng bước{' '}
          <strong style={{ color: '#FFFF00' }}>vượt qua khủng hoảng</strong> và{' '}
          <strong style={{ color: '#FFFF00' }}>đạt được nhiều thành tựu phát triển kinh tế – xã hội</strong>{' '}
          trong những thập niên sau đó.
        </p>
      </div>
    </>
  );
}
