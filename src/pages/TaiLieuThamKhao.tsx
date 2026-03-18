const cardStyle: React.CSSProperties = {
  background: 'var(--yellow-light)',
  borderRadius: 'var(--radius)',
  boxShadow: 'var(--shadow)',
  maxWidth: 'var(--content-max)',
  margin: '32px auto 0',
  padding: '36px 52px 44px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'Be Vietnam Pro, sans-serif',
  fontWeight: 700,
  fontSize: 40,
  color: 'var(--red)',
  textTransform: 'uppercase',
  marginBottom: 20,
  lineHeight: 1.2,
};

const listStyle: React.CSSProperties = {
  fontSize: 26,
  lineHeight: 1.75,
  color: '#000',
  paddingLeft: 28,
  listStyleType: 'decimal',
};

const liStyle: React.CSSProperties = { marginBottom: 10 };

const underlineStyle: React.CSSProperties = { textDecorationLine: 'underline' };

export default function TaiLieuThamKhao() {
  return (
    <>
      {/* Banner */}
      <div
        className="section-banner anim-fade-up"
        style={{ backgroundImage: `url('/images/bg_trong_dong.jpg')` }}
      >
        <div className="banner-title">Tài Liệu Tham Khảo</div>
      </div>

      {/* BỐI CẢNH */}
      <div className="anim-fade-up" style={cardStyle}>
        <h2 style={headingStyle}>Bối Cảnh</h2>
        <ol style={listStyle}>
          {[
            'Bộ sưu tập tem phiếu, sổ gạo thời bao cấp',
            'Tết thời bao cấp',
            'Dấu ấn thời bao cấp trong ký ức tiến sĩ tài chính',
            'Thời bao cấp là giai đoạn nào, thời bao cấp kéo dài bao lâu, đồ dùng thời bao cấp trông ra sao?',
            'Bối cảnh lịch sử bài viết Ý kiến về Giá, Lương, Tiền của Vũ Ngọc Phương năm 1985',
            'Giá – lương – tiền câu chuyện không chỉ của một thời… | Việt Nam.',
            'Nghị định 235-HĐBT cải tiến chế độ tiền lương của công nhân, viên chức và các lực lượng vũ trang',
            'Cuộc tổng điều chỉnh giá - lương - tiền năm 1985',
            'Nỗi lo bong bóng tài sản: Điểm năm lạm phát tăng mạnh, kỷ lục 774,7%',
            'Quan hệ Việt Nam - Hoa Kỳ: Từ cấm vận đến hợp tác toàn diện',
            'Bảo vệ biên giới phía Bắc 1979 – 45 năm cuộc chiến đấu chính nghĩa của Nhân dân Việt Nam',
            'https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19',
            'Bài 3: Chiến đấu bảo vệ Tổ quốc ở biên giới Tây Nam, phía Bắc',
            'Bảo vệ biên giới phía Bắc 1979 – 45 năm cuộc chiến đấu chính nghĩa của Nhân dân Việt Nam',
            'VÀI NÉT VỀ QUAN HỆ VIỆT NAM-LIÊN XÔ TỪ NĂM 1975 ĐẾN NĂM 1990',
            `'Đổi mới hay là chết'`,
            'Tổng Bí thư Trường Chinh – người đặt nền móng cho công cuộc Đổi mới | VOV.VN',
            '"Phá Rào" Trong Kinh Tế Vào Đêm Trước Đổi Mới - Tác giả Đặng Phong',
          ].map((item, i) => (
            <li key={i} style={{ ...liStyle, ...underlineStyle }}>{item}</li>
          ))}
          <li style={liStyle}>
            <span style={underlineStyle}>Series "Đêm trước" Đổi mới:</span>
            <ol style={{ paddingLeft: 28, marginTop: 8, listStyleType: 'lower-alpha' }}>
              {[
                'Kỳ 1: "Đêm trước" đổi mới: Ký ức thời "sổ gạo"',
                'Kỳ 2: "Vòng kim cô"',
                'Kỳ 3: Khi chợ trời bị đánh sập',
                'Kỳ 4: Công phá "lũy tre"',
                'Kỳ 5: Chiếc áo cơ chế mới',
                'Kỳ 6: Tưởng như xa xôi lắm',
                'Kỳ 7: Từ chạy gạo đến phá cơ chế giá',
                'Kỳ 8: Bù giá vào lương',
                'Kỳ 9: Những thông điệp gửi đến Ba Đình',
              ].map((kì, j) => (
                <li key={j} style={{ ...liStyle, ...underlineStyle }}>{kì}</li>
              ))}
            </ol>
          </li>
        </ol>
      </div>

      {/* ĐẠI HỘI VI */}
      <div className="anim-fade-up" style={cardStyle}>
        <h2 style={headingStyle}>Đại Hội VI</h2>
        <ol style={listStyle}>
          {[
            'Đại hội VI của Đảng: Đổi mới tư duy, khởi xướng công cuộc đổi mới',
            'Đại hội Đảng XIV',
            'Đại hội Đảng toàn quốc lần thứ XIV thành công tốt đẹp',
            'Các bài viết, phát biểu của Tổng Bí thư Tô Lâm',
            'https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19',
            'Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ VI của Đảng',
            'Lời khai mạc Đại hội của đồng chí Nguyễn Văn Linh',
            'Đồng chí Tổng Bí thư Trường Chinh - Người cộng sản mẫu mực',
            'Kinh tế Việt Nam: Sự trưởng thành về tư duy phát triển',
            'Các kỳ Đại hội của Đảng và những dấu ấn lịch sử - Đại hội lần thứ VI: Khởi xướng và lãnh đạo sự nghiệp đổi mới đất nước',
            'https://www.tapchicongsan.org.vn/chinh-tri-xay-dung-dang/-/2018/815926/view_content#',
            'Đại hội đại biểu toàn quốc lần thứ VI của Đảng',
          ].map((item, i) => (
            <li key={i} style={{ ...liStyle, ...underlineStyle }}>{item}</li>
          ))}
        </ol>
      </div>

      {/* BIẾN ĐỘNG */}
      <div className="anim-fade-up" style={cardStyle}>
        <h2 style={headingStyle}>Biến Động</h2>
        <ol style={listStyle}>
          {[
            'Giáo trình Lịch sử Đảng Cộng sản Việt Nam',
            '30 năm Liên Xô sụp đổ và bài học cho Việt Nam - Bài 1: Khi Đảng Cộng sản tự xóa bỏ chính mình',
            'Đại hội VI của Đảng và hoạt động lãnh đạo của Ban Chấp hành Trung ương nhiệm kỳ khóa VI (1986-1991)',
            'Tư tưởng "Dân là gốc" và bài học tăng cường mối quan hệ gắn bó máu thịt giữa Đảng với nhân dân của Tổng Bí thư Nguyễn Văn Linh',
            'Nghị quyết số 10/NQ-CP của Chính phủ: Ban hành Chiến lược công tác dân tộc giai đoạn 2021 - 2030, tầm nhìn đến năm 2045',
          ].map((item, i) => (
            <li key={i} style={liStyle}>{item}</li>
          ))}
        </ol>
      </div>

      {/* THÀNH TỰU */}
      <div className="anim-fade-up" style={cardStyle}>
        <h2 style={headingStyle}>Thành Tựu</h2>
        <ol style={listStyle}>
          {[
            'Kinh tế Việt Nam sẽ tăng trưởng vượt bậc trong 5 năm tới',
            'Quan hệ Việt Nam - Pháp: Năm mươi năm hợp tác và phát triển',
            'Những dấu mốc trong hành trình quan hệ Việt - Pháp - Báo VnExpress',
            'Những dấu mốc quan trọng trong quan hệ Việt - Mỹ | Báo Dân trí',
            'Ảnh: Nhìn lại 70 năm quan hệ Việt Nam - Trung Quốc',
            '18 năm Việt Nam gia nhập WTO: Hành trình hội nhập và phát triển',
            'Việt Nam thiết lập quan hệ ngoại giao với quốc gia thứ 195',
            '72 nước đã ký kết Công ước Hà Nội trong 2 ngày 25 - 26/10',
            'Bộ Nông nghiệp và Phát triển nông thôn',
            'Trung tâm WTO (VCCI)',
            'Tạp chí Cộng sản',
            'Tổng cục Thống kê (GSO)',
            'Báo Đầu tư',
            'Infographics: T.L Nguồn: TTXVN',
            'Cổng thông tin điện tử Chính phủ',
            'Tổng cục Thống kê',
            'Báo Chính phủ',
            'Tạp chí VietnamFinance',
            'CafeF',
          ].map((item, i) => (
            <li key={i} style={{ ...liStyle, ...underlineStyle }}>{item}</li>
          ))}
        </ol>
      </div>

      {/* Ý NGHĨA-KẾT LUẬN */}
      <div className="anim-fade-up" style={cardStyle}>
        <h2 style={headingStyle}>Ý Nghĩa-Kết Luận</h2>
        <ol style={listStyle}>
          {[
            'Vì một Việt Nam hùng cường thịnh vượng, người dân ấm no hạnh phúc hơn',
            'Ngoại giao Việt Nam: Khẳng định vai trò tiên phong trong kỷ nguyên mới',
          ].map((item, i) => (
            <li key={i} style={{ ...liStyle, ...underlineStyle }}>{item}</li>
          ))}
        </ol>
      </div>

      {/* YouTube embed */}
      <div className="anim-fade-up" style={{ maxWidth: 'var(--content-max)', margin: '36px auto 48px' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
          <iframe
            src="https://www.youtube.com/embed/ZgAh541tN5Q?start=218"
            title="Đổi Mới 1986 – Bước ngoặt lịch sử của dân tộc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </>
  );
}
