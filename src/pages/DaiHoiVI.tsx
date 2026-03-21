import { useState, useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

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
  const prevIdxRef = useRef(idx);
  const dirRef = useRef<1 | -1>(1);
  const [swapKey, setSwapKey] = useState(0);
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

  useEffect(() => {
    if (idx === prevIdxRef.current) return;
    dirRef.current = idx > prevIdxRef.current ? 1 : -1;
    prevIdxRef.current = idx;
    setSwapKey(k => k + 1);
  }, [idx]);

  const prev = figures[(idx - 1 + n) % n];
  const curr = figures[idx];
  const next = figures[(idx + 1) % n];

  const splitNameAndYears = (fullName: string) => {
    // Ví dụ: "Nguyễn Thanh Bình (1920–2008)"
    const match = fullName.match(/^(.*?)(\s*\(.*\))$/);
    if (!match) return { person: fullName, years: '' };
    return { person: match[1].trim(), years: match[2].trim() };
  };

  const { person, years } = splitNameAndYears(curr.name);

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
            <div
              key={swapKey}
              className="portrait-current-swap"
              style={{ ['--portrait-shift' as any]: `${dirRef.current * 10}px` }}
            >
              <div style={{ borderRadius: 18, overflow: 'hidden', width: 260, height: 310,
                boxShadow: '0 10px 32px rgba(0,0,0,0.6)', border: '3px solid rgba(255,255,255,0.7)' }}>
                <img
                  src={curr.img}
                  alt={curr.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%)' }}
                />
              </div>

              <div
                style={{
                  color: '#FFFF00',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 19,
                  textAlign: 'center',
                  maxWidth: 300,
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  lineHeight: 1.35,
                }}
              >
                Đồng chí {person}
                {years ? <br /> : null}
                {years ? years : null}
              </div>
            </div>
            <div
              style={{
                color: '#fff',
                fontSize: 14,
                textAlign: 'center',
                maxWidth: 360,
                lineHeight: 1.55,
                opacity: 0.93,
                // Tránh tình trạng xuống dòng “lẻ” sau dấu phẩy
                whiteSpace: 'normal',
                overflowWrap: 'normal',
                wordBreak: 'keep-all',
              }}
            >
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

// ── NỘI DUNG ĐƯỜNG LỐI ĐỔI MỚI (click nút hiển thị thẻ) ───────────────────────
const doiMoiLinkStyle: CSSProperties = {
  fontFamily: 'Be Vietnam Pro, sans-serif',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 24,
  lineHeight: '30px',
  textDecorationLine: 'underline',
  color: '#FFFF00',
  display: 'inline-block',
};

function DoiMoiOuterCard({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'var(--content-max)',
        background: '#FFF3F3',
        borderRadius: 42,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '48px',
        fontFamily: 'Be Vietnam Pro, sans-serif',
      }}
    >
      {title ? (
        <div
          style={{
            width: 359,
            maxWidth: '100%',
            margin: '0 auto 28px',
            fontWeight: 700,
            fontSize: 36,
            lineHeight: '46px',
            textAlign: 'center',
            color: '#D71920',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
      ) : null}
      {children}
    </div>
  );
}

function DoiMoiRedCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: '#D71920',
        borderRadius: 40,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '48px',
      }}
    >
      {children}
    </div>
  );
}

// 1) ĐỔI MỚI TƯ DUY (hiển thị như hình 1 + ảnh hình 2)
function DoiMoiTuDuyContent() {
  return (
    <DoiMoiOuterCard>
      <div style={{ fontSize: 24, lineHeight: '30px', fontWeight: 400, color: '#000' }}>
        <p style={{ margin: 0 }}>
          Đại hội VI nhấn mạnh đổi mới tư duy lãnh đạo và quản lý, với tinh thần:
        </p>
        <ul style={{ margin: '10px 0 0', paddingLeft: 28, listStyleType: 'disc', lineHeight: '30px' }}>
          <li style={{ fontWeight: 700, margin: '3px 0' }}>Nhìn thẳng vào sự thật</li>
          <li style={{ fontWeight: 700, margin: '3px 0' }}>Đánh giá đúng thực trạng đất nước</li>
          <li style={{ fontWeight: 700, margin: '3px 0' }}>Khắc phục tư duy chủ quan, duy ý chí</li>
        </ul>
        <p style={{ margin: '12px 0 0' }}>
          Đây là bước đột phá quan trọng, tạo cơ sở cho các chính sách đổi mới sau này.
        </p>
      </div>

      <div
        style={{
          marginTop: 28,
          fontWeight: 700,
          fontSize: 32,
          lineHeight: '40px',
          color: '#000',
        }}
      >
        Dẫn chứng thực tế:
      </div>

      <div style={{ marginTop: 22 }}>
        <DoiMoiRedCard>
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            {/* Cột trái theo figma: caption container rộng hơn ảnh để căn giữa đúng */}
            <div style={{ flex: '0 0 467px' }}>
              <img
                src="/images/truong_chinh_ttxvn.png"
                alt="Đồng chí Trường Chinh đọc Báo cáo chính trị tại Đại hội lần thứ VI của Đảng, tháng 12.1986. (Ảnh tư liệu: TTXVN)"
                style={{
                  width: 397,
                  height: 308,
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div
                style={{
                  marginTop: 0,
                  height: 48,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 8px',
                }}
              >
                Đồng chí Trường Chinh đọc Báo cáo chính trị tại Đại hội lần thứ VI của Đảng, tháng 12.1986. (Ảnh tư liệu: TTXVN)
              </div>
            </div>

            <div
              style={{
                flex: '0 0 635px',
                paddingTop: 0,
                // Căn nội dung giữa ô đỏ như Figma: trái là ảnh 308px + caption 48px
                height: 356,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#FFFFFF',
                }}
              >
                Trước 1986, Nhà nước ngăn sông cấm chợ, coi thương mại tư nhân là “đầu cơ tích trữ”.{' '}
                <span style={{ marginLeft: 10 }}>
                  <a
                    href="https://www.qdnd.vn/80-nam-cach-mang-thang-tam-va-quoc-khanh-2-9/su-truong-thanh-ve-tu-duy-phat-trien-843099"
                    target="_blank"
                    rel="noreferrer"
                    style={doiMoiLinkStyle}
                  >
                    Link tham khảo
                  </a>
                </span>
              </p>

              <p
                style={{
                  margin: '22px 0 0',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#FFFFFF',
                }}
              >
                Báo cáo chính trị tại Đại hội VI do Tổng Bí thư Trường Chinh trình bày đã nhấn mạnh yêu cầu phải tôn trọng quy luật khách quan, coi đây là điều kiện đảm bảo sự lãnh đạo đúng đắn của Đảng.{' '}
                <span style={{ marginLeft: 10 }}>
                  <a
                    href="https://daihoidangtoanquoc.vn/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-post1469.html"
                    target="_blank"
                    rel="noreferrer"
                    style={doiMoiLinkStyle}
                  >
                    Link tham khảo
                  </a>
                </span>
              </p>
            </div>
          </div>
        </DoiMoiRedCard>
      </div>

      <div
        style={{
          marginTop: 24,
          fontWeight: 700,
          fontSize: 24,
          lineHeight: '30px',
          color: '#000000',
        }}
      >
        =&gt; Đây chính là tiền đề để chúng ta chấp nhận{' '}
        <span style={{ color: 'var(--red)' }}>Kinh tế nhiều thành phần</span>. Nếu không “nhìn thẳng” vào sự thất bại của mô hình cũ, chúng ta đã không có thị trường năng động như hôm nay.
      </div>
    </DoiMoiOuterCard>
  );
}

// 2) ĐỔI MỚI KINH TẾ (hiển thị như hình 3 + ảnh hình 4)
function DoiMoiKinhTeContent() {
  // Kinh tế: khung ngoài cố định, còn nội dung dài chỉ cuộn bên trong.
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'var(--content-max)',
        background: '#FFF3F3',
        borderRadius: 42,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '40px',
        fontFamily: 'Be Vietnam Pro, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0, // allow scroll child to size correctly
      }}
    >
      <div className="doi-moi-scroll">
        {/* Top: 2 cơ chế vàng + mũi tên */}
        <div style={{ marginTop: 0 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#111', marginBottom: 14, textAlign: 'left' }}>
            Chuyển đổi mô hình:
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, flexWrap: 'nowrap' }}>
            <div style={{
              width: 280,
              height: 195,
              background: '#F8FA7D',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 18,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '25px',
              color: '#000',
            }}>
              Cơ chế kế hoạch<br />hóa tập trung,<br />quan liêu bao cấp
            </div>

            <div style={{ width: 91, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="91" height="34" viewBox="0 0 60 34" fill="none">
                <path d="M10 17H44" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                <path d="M38 9L46 17L38 25" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>

            <div style={{
              width: 280,
              height: 195,
              background: '#F8FA7D',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 18,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '25px',
              color: '#000',
            }}>
              Nền kinh tế hàng hóa<br />
              nhiều thành phần vẫn<br />
              vận hành theo cơ<br />
              chế thị trường<br />
              có sự quản lý của<br />
              Nhà nước
            </div>
          </div>
        </div>

        {/* Nội dung đen */}
        <div style={{ marginTop: 18, fontSize: 21, lineHeight: '27px', fontWeight: 400, color: '#000' }}>
          <p style={{ margin: 0 }}>
            <strong>Điều chỉnh cơ cấu kinh tế:</strong> phát triển nông nghiệp, công nghiệp nhẹ và cơ sở hạ tầng; nông nghiệp là mặt trận hàng đầu.
          </p>

          <p style={{ marginTop: 14, fontWeight: 700 }}>
            Ba chương trình kinh tế:
          </p>
          <ul style={{ margin: '6px 0 0', paddingLeft: 28, listStyleType: 'disc' }}>
            <li>Lương thực – thực phẩm</li>
            <li>Hàng tiêu dùng</li>
            <li>Hàng xuất khẩu</li>
          </ul>

          <p style={{ marginTop: 14 }}>
            <span style={{ color: '#000', fontWeight: 700 }}>Nền kinh tế nhiều thành phần:</span> gồm kinh tế nhà nước, tập thể, tư nhân, cá thể và có vốn đầu tư nước ngoài.
          </p>

          <p style={{ marginTop: 14 }}>
            <strong>Đổi mới cơ chế quản lý:</strong> xóa dần bao cấp, tăng quyền tự chủ cho doanh nghiệp.
          </p>
        </div>

        {/* Dẫn chứng */}
        <div style={{ marginTop: 20, fontWeight: 700, fontSize: 27, lineHeight: '34px', color: '#000' }}>
          Dẫn chứng thực tế:
        </div>

        <div style={{ marginTop: 16 }}>
          <DoiMoiRedCard>
            <div style={{ width: '100%', display: 'flex', gap: 24, alignItems: 'flex-start', justifyContent: 'center' }}>
              <img
                src="/images/khoan10.jpg"
                alt="Khoán 10 (1988)"
                style={{
                  width: 1125,
                  maxWidth: '100%',
                  height: 311,
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 12,
                }}
              />
            </div>

            <a
              href="https://www.vietnamplus.vn/tu-bai-hoc-khoan-10-den-cuong-quoc-xuat-khau-gao-post619310.vnp"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: 14,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '20px',
                textAlign: 'center',
                textDecorationLine: 'underline',
                color: '#fff',
                display: 'block',
              }}
            >
              Chỉ sau một năm ban hành Nghị quyết 10, từ một nước thiếu lương thực triền miên, đến năm 1989, sản lượng lúa gạo đạt con số 21,5 triệu tấn và lần đầu tiên Việt Nam xuất khẩu được 1,2 triệu tấn lúa gạo. Trong ảnh: Thực hiện khoán gọn theo đơn giá, vụ mùa năm 1988, HTX Nhân Khang, huyện Lý Nhân, tỉnh Hà Nam Ninh thu hoạch lúa đạt năng suất 42 tạ/ha, đưa năng suất cả năm lên 92,5 tạ/ha.
              <br />
              (Ảnh: Thế Thuận/TTXVN).
            </a>

            <div style={{ marginTop: 14 }}>
              <p style={{ margin: 0, fontWeight: 400, fontSize: 21, lineHeight: '27px', color: '#fff' }}>
                Trước 1986, mua một cân gạo hay miếng thịt cũng cần sổ gạo, tem phiếu. Sau Đại hội VI, hàng hóa được lưu thông tự do theo giá thị trường.
              </p>

              <p style={{ marginTop: 16, fontWeight: 400, fontSize: 21, lineHeight: '27px', color: '#fff' }}>
                Khoán 10 (1988) là minh chứng tiêu biểu cho việc hiện thực hóa tư duy đổi mới của Đại hội VI trong lĩnh vực nông nghiệp.
              </p>

              <div style={{ marginTop: 10, textAlign: 'center' }}>
                <a
                  href="https://tapchicongsan.org.vn/en_US/sinh-hoat-tu-tuong/-/2018/25235/suc-song-ve-ly-luan-va-thuc-tien-cua-nghi-quyet-10%2C-bo-chinh-tri-khoa-vi-trong-25-nam-qua.aspx"
                  target="_blank"
                  rel="noreferrer"
                  style={doiMoiLinkStyle}
                >
                  Link tham khảo
                </a>
              </div>
            </div>
          </DoiMoiRedCard>
        </div>

        <div style={{ marginTop: 18, fontWeight: 700, fontSize: 21, lineHeight: '27px', color: '#000' }}>
          =&gt; <span style={{ color: 'var(--red)' }}>Đây là bước chuyển quan trọng</span>, mở đường cho việc phát triển <span style={{ color: 'var(--red)' }}>nền kinh tế hàng hóa nhiều thành phần</span> và tạo nền tảng cho <span style={{ color: 'var(--red)' }}>sự tăng trưởng của kinh tế Việt Nam trong thời kỳ Đổi mới</span>.
        </div>
      </div>
    </div>
  );
}

// 3) ĐỔI MỚI XÃ HỘI (hiển thị như hình 5 + ảnh hình 6)
function DoiMoiXaHoiContent() {
  return (
    <DoiMoiOuterCard>
      <div style={{ fontSize: 24, lineHeight: '30px', fontWeight: 400, color: '#000' }}>
        Tại Đại hội VI của Đảng Cộng sản Việt Nam, đổi mới không chỉ giới hạn ở kinh tế mà còn hướng tới cải thiện đời sống xã hội và phát huy vai trò của con người. Đại hội nhấn mạnh phát triển kinh tế phải gắn với giải quyết việc làm, nâng cao đời sống nhân dân và phát triển giáo dục, văn hóa, y tế.
      </div>

      <div
        style={{
          marginTop: 24,
          fontWeight: 700,
          fontSize: 32,
          lineHeight: '40px',
          color: '#000',
        }}
      >
        Dẫn chứng thực tế:
      </div>

      <div style={{ marginTop: 18 }}>
        <DoiMoiRedCard>
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            {/* Left image block */}
            <div style={{ flex: '0 0 467px' }}>
              <img
                src="/images/lang_bac.jpg"
                alt="Lai Châu - CT135"
                style={{
                  width: 421,
                  height: 287,
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div
                style={{
                  marginTop: 12,
                  height: 48,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 6px',
                }}
              >
                Những bản làng vùng ĐBKK của tỉnh Lai Châu dần đổi mới một phần nhờ nguồn vốn hỗ trợ của CT135. (Ảnh TL)
              </div>
            </div>

            {/* Right text block */}
            <div
              style={{
                flex: '0 0 635px',
                height: 347,
                paddingTop: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#FFFFFF',
                }}
              >
                Sau Đại hội VI, nhiều chính sách xã hội được triển khai nhằm cải thiện đời sống nhân dân và giảm nghèo. Tiêu biểu là các chương trình phát triển vùng khó khăn như Chương trình 135, hỗ trợ xây dựng cơ sở hạ tầng, trường học và nâng cao đời sống cho người dân vùng miền núi.
              </p>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <a
                  href="https://dantocphattrien.vietnamnet.vn/chuong-trinh-135-nhin-lai-mot-chang-duong-1619692299579.htm"
                  target="_blank"
                  rel="noreferrer"
                  style={doiMoiLinkStyle}
                >
                  Link tham khảo
                </a>
              </div>
            </div>
          </div>
        </DoiMoiRedCard>
      </div>

      <div
        style={{
          marginTop: 18,
          fontWeight: 700,
          fontSize: 24,
          lineHeight: '30px',
          color: '#000000',
        }}
      >
        =&gt; Đây là{' '}
        <span style={{ color: 'var(--red)' }}>bước chuyển quan trọng trong tư duy phát triển</span>, khẳng định{' '}
        <span style={{ color: 'var(--red)' }}>con người vừa là mục tiêu vừa là động lực</span> của công cuộc đổi mới.
      </div>
    </DoiMoiOuterCard>
  );
}

// 4) ĐỔI MỚI ĐỐI NGOẠI (hiển thị như hình 7 + ảnh hình 8)
function DoiMoiDoiNgoaiContent() {
  return (
    <DoiMoiOuterCard>
      <div style={{ fontSize: 24, lineHeight: '30px', fontWeight: 400, color: '#000' }}>
        Đại hội VI cũng đề ra chủ trương đổi mới tư duy đối ngoại, mở rộng quan hệ hợp tác quốc tế và kết hợp sức mạnh dân tộc với sức mạnh của thời đại. Điều này đánh dấu sự chuyển biến từ tư duy đối ngoại khép kín sang mở cửa và hội nhập quốc tế.
      </div>

      <div
        style={{
          marginTop: 24,
          fontWeight: 700,
          fontSize: 32,
          lineHeight: '40px',
          color: '#000',
        }}
      >
        Dẫn chứng thực tế:
      </div>

      <div style={{ marginTop: 18 }}>
        <DoiMoiRedCard>
          <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            {/* Left image block (fixed like Figma) */}
            <div style={{ flex: '0 0 467px' }}>
              <img
                src="/images/asean_bntng.jpg"
                alt="Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký kết gia nhập ASEAN 28/7/1995"
                style={{
                  width: 421,
                  height: 287,
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div
                style={{
                  marginTop: 12,
                  height: 48,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 6px',
                }}
              >
                Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm tại Lễ ký kết Việt Nam chính thức gia nhập ASEAN ngày 28/7/1995. (Nguồn: Ảnh tư liệu)
              </div>
            </div>

            {/* Right text block (fixed to avoid narrow/wrapped text) */}
            <div
              style={{
                flex: '0 0 635px',
                height: 347,
                paddingTop: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#FFFFFF',
                }}
              >
                Sau công cuộc đổi mới, Việt Nam từng bước mở rộng quan hệ quốc tế và tham gia nhiều tổ chức quan trọng như Hiệp hội các quốc gia Đông Nam Á (ASEAN), đồng thời bình thường hóa quan hệ với Hoa Kỳ vào năm 1995.
              </p>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <a
                  href="https://hcmcpv.org.vn/tin-tuc/gia-nhap-asean-buoc-dot-pha-trong-doi-moitu-duy-doi-ngoai-cua-viet-nam-1491881281"
                  target="_blank"
                  rel="noreferrer"
                  style={doiMoiLinkStyle}
                >
                  Link tham khảo
                </a>
              </div>
            </div>
          </div>
        </DoiMoiRedCard>
      </div>

      <div
        style={{
          marginTop: 18,
          fontWeight: 700,
          fontSize: 24,
          lineHeight: '30px',
          color: '#000000',
        }}
      >
        =&gt; Đây là{' '}
        <span style={{ color: 'var(--red)' }}>nền tảng quan trọng</span> giúp Việt Nam từng bước{' '}
        <span style={{ color: 'var(--red)' }}>hội nhập quốc tế</span> và thúc đẩy sự phát triển kinh tế – xã hội trong thời kỳ đổi mới.
      </div>
    </DoiMoiOuterCard>
  );
}

const doiMoiData = [
  {
    label: 'ĐỔI MỚI TƯ DUY',
    Content: DoiMoiTuDuyContent,
  },
  {
    label: 'ĐỔI MỚI KINH TẾ',
    Content: DoiMoiKinhTeContent,
  },
  {
    label: 'ĐỔI MỚI XÃ HỘI',
    Content: DoiMoiXaHoiContent,
  },
  {
    label: 'ĐỔI MỚI ĐỐI NGOẠI',
    Content: DoiMoiDoiNgoaiContent,
  },
];

// ── Accordion expand/collapse cho Nội dung Đường lối Đổi mới ──────────────────
function DoiMoiButtons() {
  const [open, setOpen] = useState<number | null>(null);
  const headerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = prev === i ? null : i;
      if (next !== null) {
        const scrollToHeader = () => {
          headerRefs.current[next]?.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'auto',
          });
        };
        requestAnimationFrame(scrollToHeader);
        // Run once more after expand starts to prevent scroll anchoring drift.
        setTimeout(scrollToHeader, 120);
      }
      return next;
    });
  };

  return (
    <div style={{
      maxWidth: 'var(--content-max)',
      margin: '16px auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    }}>
      {doiMoiData.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ width: '100%' }}>
            {/* ── Nút tiêu đề ── */}
            <button
              ref={(el) => {
                headerRefs.current[i] = el;
              }}
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                minHeight: 80,
                background: isOpen ? '#D71920' : 'var(--yellow-light)',
                borderRadius: isOpen ? '42px 42px 0 0' : 42,
                border: 'none',
                fontWeight: 700,
                fontSize: 26,
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: isOpen ? 'none' : 'var(--shadow)',
                transition: 'background 0.25s, border-radius 0.25s, box-shadow 0.25s',
                color: isOpen ? '#FFFF00' : '#111',
                padding: '24px 52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginTop: i === 0 ? 0 : (open === i - 1 ? 0 : 18),
              }}
            >
              {/* Mũi tên chỉ hướng */}
              <span style={{
                display: 'inline-block',
                transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: 20,
                lineHeight: 1,
                flexShrink: 0,
              }}>
                ▼
              </span>
              {item.label}
            </button>

            {/* ── Nội dung accordion ── */}
            <div style={{
              overflow: 'hidden',
              overflowAnchor: 'none',
              maxHeight: isOpen ? '9999px' : '0px',
              transition: isOpen
                ? 'max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
                : 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '0 0 42px 42px',
              boxShadow: isOpen ? 'var(--shadow)' : 'none',
              marginBottom: isOpen ? 18 : 0,
            }}>
              <div style={{
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.3s ease',
                transitionDelay: isOpen ? '0.15s' : '0s',
              }}>
                <item.Content />
              </div>
            </div>
          </div>
        );
      })}
    </div>
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
        <div
          className="banner-title"
          style={{
            // Tăng cỡ chữ banner theo đúng yêu cầu
            fontSize: 'clamp(30px, 4.2vw, 48px)',
            lineHeight: 1.18,
          }}
        >
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

      {/* 6.5 Yellow quote strip (restore by request) */}
      <div
        className="anim-fade-up"
        style={{
          maxWidth: 'var(--content-max)',
          margin: '24px auto 0',
          background: '#E9EE72',
          borderRadius: 36,
          boxShadow: 'var(--shadow)',
          padding: '22px 34px 18px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <p
          style={{
            margin: 0,
            color: 'var(--red)',
            fontWeight: 800,
            fontSize: 'clamp(20px, 2.05vw, 30px)',
            lineHeight: 1.12,
            textTransform: 'uppercase',
            letterSpacing: '0.05px',
            whiteSpace: 'nowrap',
          }}
        >
          “NHÌN THẲNG VÀO SỰ THẬT, ĐÁNH GIÁ ĐÚNG SỰ THẬT, NÓI RÕ SỰ THẬT.”
        </p>
        <p
          style={{
            margin: 0,
            color: '#111',
            fontStyle: 'italic',
            fontSize: 'clamp(13px, 1.08vw, 18px)',
            lineHeight: 1.2,
          }}
        >
          (Đồng chí Trường Chinh - Tổng bí thư)
        </p>
      </div>

      {/* 7. Two congress photos + captions (match Figma layout) */}
      <div
        className="anim-fade-up"
        style={{
          maxWidth: 1180,
          margin: '44px auto 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
        }}
      >
        <div>
          <img
            className="hist-img"
            src="/images/nvl_khai_mac.jpg"
            alt="Đồng chí Nguyễn Văn Linh – Ủy viên Bộ Chính trị đọc diễn văn khai mạc Đại hội. (Ảnh: TTXVN)"
            style={{ width: '92%', margin: '0 auto', aspectRatio: '16 / 10', objectFit: 'cover' }}
          />
          <a
            href="https://daihoidangtoanquoc.vn/dien-van-khai-mac-dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-post1613.html"
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 8,
              display: 'block',
              textAlign: 'center',
              fontSize: 16,
              lineHeight: 1.35,
              fontStyle: 'italic',
              color: '#222',
              textDecorationLine: 'underline',
              textDecorationColor: 'rgba(34,34,34,0.38)',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }}
          >
            Đồng chí Nguyễn Văn Linh – Ủy viên Bộ Chính trị đọc diễn văn
            <br />
            khai mạc Đại hội.(Ảnh: TTXVN)
          </a>
        </div>

        <div>
          <img
            className="hist-img"
            src="/images/truong_chinh_ttxvn.png"
            alt="Đồng chí Trường Chinh đọc Báo cáo chính trị tại Đại hội lần thứ VI của Đảng, tháng 12-1986."
            style={{ width: '92%', margin: '0 auto', aspectRatio: '16 / 10', objectFit: 'cover' }}
          />
          <a
            href="https://www.sggp.org.vn/dong-chi-truong-chinh-tong-bi-thu-cua-doi-moi-post213044.html"
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 8,
              display: 'block',
              textAlign: 'center',
              fontSize: 16,
              lineHeight: 1.35,
              fontStyle: 'italic',
              color: '#222',
              textDecorationLine: 'underline',
              textDecorationColor: 'rgba(34,34,34,0.38)',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            }}
          >
            Đồng chí Trường Chinh đọc Báo cáo chính trị tại Đại hội lần thứ VI
            <br />
            của Đảng, tháng 12-1986.
          </a>
        </div>
      </div>

      {/* 8. Pink long quote card */}
      <div className="anim-fade-up" style={{
        background: 'var(--pink-light)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '20px auto 0', padding: '36px 48px',
      }}>
        <p className="body-text" style={{ fontWeight: 400, fontStyle: 'italic', lineHeight: 1.75 }}>
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
        <p style={{ fontWeight: 700, fontSize: 22, color: 'var(--yellow)', lineHeight: 1.5, textAlign: 'center' }}>
          Thể hiện sự thẳng thắn nhìn nhận những hạn chế trong quản lý kinh tế và xã hội trước đó như
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
      <div className="section-standalone-heading anim-fade-up" style={{ textAlign: 'center', marginTop: 52 }}>
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
        <ul style={{ color: '#fff', fontSize: 20, lineHeight: 2.1, paddingLeft: 28, marginBottom: 18, listStyleType: 'disc' }}>
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
