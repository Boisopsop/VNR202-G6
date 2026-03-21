export default function TroChoi() {
  return (
    <>
      <div
        className="section-banner anim-fade-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,25,32,0.72), rgba(215,25,32,0.72)), url('/images/bg_trong_dong.jpg')",
        }}
      >
        <div className="banner-title">VIDEO TỔNG QUAN</div>
      </div>

      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '18px 0 40px' }}>
        {/* Video 1 (full screen section) */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <h2
            className="anim-fade-up"
            style={{
              fontFamily: 'Be Vietnam Pro, sans-serif',
              fontSize: 'clamp(22px, 2.6vw, 36px)',
              fontWeight: 800,
              color: 'var(--red)',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginTop: 14,
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            (Tóm gọn) Việt Nam trước và sau Đổi mới 1986
          </h2>
          <div className="anim-pop stagger-1" style={{ width: '100%', maxWidth: 980, margin: '0 auto', padding: '0 16px' }}>
            <iframe
              src="https://www.youtube.com/embed/CZEofJXLTaQ"
              title="(Tóm gọn) Việt Nam trước và sau Đổi mới 1986"
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                border: 'none',
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                display: 'block',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video 3 */}
        <div style={{ padding: '22px 16px 0' }}>
          <h2
            className="anim-fade-up"
            style={{
              fontFamily: 'Be Vietnam Pro, sans-serif',
              fontSize: 'clamp(18px, 2.1vw, 26px)',
              fontWeight: 800,
              color: 'var(--red)',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: 12,
              lineHeight: 1.25,
            }}
          >
            Ngày này năm xưa: Đại hội Đảng lần thứ VI: Quyết tâm đổi mới
          </h2>
          <div className="anim-pop stagger-1" style={{ width: '100%', maxWidth: 980, margin: '0 auto' }}>
            <iframe
              src="https://www.youtube.com/embed/enZg2jqhukc"
              title="Ngày này năm xưa: Đại hội Đảng lần thứ VI: Quyết tâm đổi mới"
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                border: 'none',
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                display: 'block',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video 4 */}
        <div style={{ padding: '40px 16px 40px' }}>
          <h2
            className="anim-fade-up"
            style={{
              fontFamily: 'Be Vietnam Pro, sans-serif',
              fontSize: 'clamp(18px, 2.1vw, 26px)',
              fontWeight: 800,
              color: 'var(--red)',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: 16,
              lineHeight: 1.25,
            }}
          >
            Đại hội Đại biểu toàn quốc lần thứ VI của Đảng
            <br />
            Mở ra thời kỳ đổi mới đất nước
          </h2>
          <div className="anim-pop stagger-1" style={{ width: '100%', maxWidth: 980, margin: '0 auto' }}>
            <iframe
              src="https://www.youtube.com/embed/xFHawdU99KQ"
              title="Đại hội Đại biểu toàn quốc lần thứ VI của Đảng - Mở ra thời kỳ đổi mới đất nước"
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                border: 'none',
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                display: 'block',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
}
