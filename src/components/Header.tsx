import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* ── Yellow title bar ── */}
      <header style={{
        background: 'var(--yellow)',
        width: '100%',
        minHeight: 110,
        display: 'flex',
        alignItems: 'center',
        padding: '14px 54px',
        gap: 20,
      }}>
        {/* Logo – fixed width left column */}
        <div style={{ flexShrink: 0, width: 120 }}>
          <img
            src="/images/logo_fpt2.png"
            alt="Logo FPT"
            style={{ height: 82, objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Title – takes remaining space, centred */}
        <h1 style={{
          flex: 1,
          textAlign: 'center',
          fontFamily: "'La Co','Be Vietnam Pro',serif",
          fontSize: 'clamp(20px, 3vw, 44px)',
          fontWeight: 700,
          color: 'var(--red)',
          lineHeight: 1.2,
          letterSpacing: '1px',
          whiteSpace: 'nowrap',
        }}>
          ĐỔI MỚI 1986 – BƯỚC NGOẶT LỊCH SỬ CỦA DÂN TỘC
        </h1>

        {/* Right balance spacer – same width as logo to keep title centred */}
        <div style={{ flexShrink: 0, width: 120 }} />
      </header>

      {/* ── Red navbar ── */}
      <nav style={{
        background: 'var(--red)',
        width: '100%',
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        flexWrap: 'wrap',
        padding: '6px 20px',
      }}>
        {[
          { to: '/boi-canh',   label: 'BỐI CẢNH' },
          { to: '/dai-hoi-vi', label: 'ĐẠI HỘI VI' },
          { to: '/bien-dong',  label: 'BIẾN ĐỘNG' },
          { to: '/thanh-tuu',  label: 'THÀNH TỰU' },
          { to: '/ket-luan',   label: 'KẾT LUẬN' },
          { to: '/tro-choi',   label: 'TRÒ CHƠI' },
          { to: '/tai-lieu',   label: 'TÀI LIỆU THAM KHẢO' },
          { to: '/ai-usage',   label: 'AI USAGE' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              color: isActive ? 'var(--red)' : '#fff',
              background: isActive ? '#fff' : 'transparent',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              padding: '6px 12px',
              whiteSpace: 'nowrap',
              borderRadius: 3,
              transition: 'background 0.2s, color 0.2s',
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
