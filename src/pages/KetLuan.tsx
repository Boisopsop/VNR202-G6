export default function KetLuan() {
  return (
    <>
      {/* 1. Banner */}
      <div
        className="section-banner anim-fade-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,25,32,0.72), rgba(215,25,32,0.72)), url('/images/bg_trong_dong.jpg')",
        }}
      >
        <div className="banner-title">Ý Nghĩa-Kết Luận</div>
      </div>

      {/* 2. Yellow card – Ý nghĩa lịch sử */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)',
        margin: '32px auto 0',
        padding: '36px 52px 40px',
      }}>
        <h2 style={{
          fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 700,
          fontSize: 40, color: 'var(--red)', textTransform: 'uppercase',
          marginBottom: 24, lineHeight: 1.2,
        }}>Ý nghĩa lịch sử của công cuộc đổi mới</h2>

        <p style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.7, color: '#000', marginBottom: 12 }}>
          Công cuộc đổi mới năm 1986 có ý nghĩa rất lớn:
        </p>
        <ul style={{ fontSize: 26, fontWeight: 400, lineHeight: 1.75, color: '#000', paddingLeft: 32, listStyleType: 'disc', marginBottom: 16 }}>
          <li style={{ marginBottom: 8 }}>Là <strong>bước ngoặt lịch sử</strong> trong sự phát triển của Việt Nam.</li>
          <li style={{ marginBottom: 8 }}>Giúp đất nước thoát khỏi khủng hoảng kinh tế – xã hội.</li>
          <li style={{ marginBottom: 8 }}>Đưa Việt Nam bước vào thời kỳ phát triển và hội nhập quốc tế.</li>
        </ul>
        <p style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.7, color: '#000' }}>
          Khẳng định sự đúng đắn trong đường lối lãnh đạo của Đảng.
        </p>
      </div>

      {/* 3. Two side-by-side photos */}
      <div style={{
        maxWidth: 'var(--content-max)',
        margin: '36px auto 0',
        display: 'grid',
        gridTemplateColumns: '706fr 609fr',
        gap: 16,
      }}>
        <img
          className="anim-slide-left"
          src="/images/ketluan_co_dang.jpg"
          alt="Cờ Đảng và cờ Tổ quốc – Việt Nam phát triển sau Đổi mới"
          style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 12, boxShadow: 'var(--shadow)', display: 'block' }}
        />
        <img
          className="anim-slide-right"
          src="/images/ketluan_ngoai_giao.jpg"
          alt="Việt Nam hội nhập và mở rộng quan hệ quốc tế"
          style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 12, boxShadow: 'var(--shadow)', display: 'block' }}
        />
      </div>

      {/* 4. Yellow card – Kết luận */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)',
        margin: '36px auto 0',
        padding: '36px 52px 40px',
      }}>
        <h2 style={{
          fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 700,
          fontSize: 40, color: 'var(--red)', textTransform: 'uppercase',
          marginBottom: 20, lineHeight: 1.2,
        }}>Kết luận</h2>
        <p style={{ fontSize: 26, fontWeight: 400, lineHeight: 1.75, color: '#000', marginBottom: 12 }}>
          Sau gần 40 năm đổi mới, Việt Nam đã đạt nhiều thành tựu to lớn về kinh tế, chính trị và xã hội.
        </p>
        <p style={{ fontSize: 26, fontWeight: 400, lineHeight: 1.75, color: '#000' }}>
          Công cuộc đổi mới từ năm 1986 không chỉ giúp đất nước vượt qua khó khăn mà còn mở ra con đường phát triển lâu dài cho dân tộc.
        </p>
      </div>

      {/* 5. Red statement banner */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)',
        margin: '36px auto 48px',
        padding: '52px 64px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontSize: 40,
          fontWeight: 700,
          color: '#FFFF00',
          lineHeight: 1.55,
          textTransform: 'uppercase',
          margin: 0,
        }}>
          Đổi mới 1986 được xem là một bước ngoặt lịch sử của Việt Nam trong thời kỳ hiện đại.
        </p>
      </div>
    </>
  );
}
