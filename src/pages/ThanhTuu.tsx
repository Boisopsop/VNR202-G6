import { useState } from 'react';

/* ─── Types ─────────────────────────────────────────── */
type InlineLink = { label: string; href: string };
interface CarouselSlide {
  title: string;
  bodyLines: string[];
  source: string;
  imageSrc?: string;
  imageAlt?: string;
}

const mutedUnderlineLinkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecorationLine: 'underline',
  textDecorationColor: 'rgba(0,0,0,0.35)',
  textDecorationThickness: '1px',
  textUnderlineOffset: '3px',
};

function renderLinkedText(text: string, links: InlineLink[]) {
  if (!links.length) return text;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let nextMatch: { index: number; link: InlineLink } | null = null;

    for (const link of links) {
      const i = text.indexOf(link.label, cursor);
      if (i === -1) continue;
      if (!nextMatch || i < nextMatch.index) nextMatch = { index: i, link };
    }

    if (!nextMatch) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (nextMatch.index > cursor) nodes.push(text.slice(cursor, nextMatch.index));

    nodes.push(
      <a
        key={`${nextMatch.index}-${nextMatch.link.label}`}
        href={nextMatch.link.href}
        target="_blank"
        rel="noreferrer"
        style={mutedUnderlineLinkStyle}
      >
        {nextMatch.link.label}
      </a>,
    );
    cursor = nextMatch.index + nextMatch.link.label.length;
  }

  return nodes;
}

const sourceLinkMap: Record<string, InlineLink[]> = {
  'Nguồn: Bộ Nông nghiệp và Phát triển nông thôn, Trung tâm WTO (VCCI), Tạp chí Cộng sản.': [
    { label: 'Bộ Nông nghiệp và Phát triển nông thôn', href: 'https://www.youtube.com/watch?v=jZ-BjWO3hHk' },
    { label: 'Trung tâm WTO (VCCI)', href: 'https://trungtamwto.vn/hiep-dinh-khac/28481-xuat-khau-gao-nam-2024-dat-ky-luc-ca-ve-luong-va-gia-tri' },
    { label: 'Tạp chí Cộng sản.', href: 'https://www.tapchicongsan.org.vn/nghien-cu/-/2018/2735/vi-the-viet-nam-trong-bao-dam-an-ninh-luong-thuc-the-gioi.aspx' },
  ],
  'Nguồn: Tổng cục Thống kê (GSO), Báo Đầu tư, Infographics: T.L – Nguồn: TTXVN.': [
    { label: 'Tổng cục Thống kê (GSO)', href: 'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-tinh-hinh-kinh-te-xa-hoi-quy-iv-va-nam-2024/' },
    { label: 'Báo Đầu tư', href: 'https://baodautu.vn/quy-mo-gdp-viet-nam-som-can-moc-1000-ty-usd-d471397.html' },
    { label: 'Infographics: T.L – Nguồn: TTXVN.', href: 'https://thoibaotaichinhvietnam.vn/kinh-te-viet-nam-se-tang-truong-vuot-bac-trong-5-nam-toi-52083.html' },
  ],
  'Nguồn: Cổng thông tin điện tử Chính phủ, Tổng cục Thống kê.': [
    { label: 'Cổng thông tin điện tử Chính phủ', href: 'https://baochinhphu.vn/gdp-nam-2020-tang-291-102285021.htm' },
    { label: 'Tổng cục Thống kê.', href: 'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-ket-qua-bien-soan-chi-tieu-ty-trong-gia-tri-tang-them-cua-kinh-te-so-trong-gdp-grdp-giai-doan-2020-2024/' },
  ],
  'Nguồn: Báo Chính phủ, Tạp chí VietnamFinance, CafeF.': [
    { label: 'Báo Chính phủ', href: 'https://baochinhphu.vn/samsung-se-dau-tu-them-1-ty-usd-moi-nam-tai-viet-nam-102240509183855562.htm' },
    { label: 'Tạp chí VietnamFinance', href: 'https://vietnamfinance.vn/samsung-dau-tu-232-ty-usd-vao-viet-nam-da-san-xuat-2-ty-dien-thoai-d131610.html' },
    { label: 'CafeF', href: 'https://cafef.vn/6-nha-may-loi-cua-samsung-tai-viet-nam-dat-doanh-thu-65-ty-usd-nam-2025-188260306100014413.chn' },
  ],
  'Nguồn: Báo điện tử Nhân Dân, Ngân hàng Thế giới (World Bank), CafeBiz.': [
    { label: 'Báo điện tử Nhân Dân', href: 'https://nhandan.vn/ty-le-ho-ngheo-ca-nuoc-con-193-post837061.html' },
    { label: 'CafeBiz', href: 'https://cafebiz.vn/quy-mo-gdp-viet-nam-duoc-du-bao-se-vuot-moc-1000-ty-usd-sau-10-nam-nua-vay-gdp-binh-quan-dau-nguoi-thi-sao-176260122110733437.chn' },
  ],
  'Nguồn: Chương trình Phát triển Liên Hợp Quốc (UNDP), Báo Lao Động.': [
    { label: 'Chương trình Phát triển Liên Hợp Quốc (UNDP)', href: 'https://www.undp.org/vi/vietnam/press-releases/theo-bao-cao-moi-nhat-cua-undp-viet-nam-nam-trong-nhom-phat-trien-con-nguoi-cao' },
    { label: 'Báo Lao Động', href: 'https://laodong.vn/thoi-su/viet-nam-thuoc-nhom-quoc-gia-dat-muc-cao-trong-bao-cao-phat-trien-con-nguoi-2025-1505805.ldo' },
  ],
  'Nguồn: Tổng công ty Cảng hàng không Việt Nam (ACV), Báo điện tử Chính phủ, VTC News.': [
    { label: 'Tổng công ty Cảng hàng không Việt Nam (ACV)', href: 'https://cafef.vn/mo-ho-so-acv-dinh-lum-xum-goi-thau-lon-nhat-du-an-san-bay-long-thanh-188260306140334792.chn' },
    { label: 'Báo điện tử Chính phủ', href: 'https://doanhnhansaigon.vn/chinh-phu-ra-chi-dao-moi-ve-tien-do-du-an-san-bay-long-thanh-332474.html' },
    { label: 'VTC News', href: 'https://www.youtube.com/watch?v=c3EpWf5ooLk' },
  ],
};

const captionLinkMap: Record<string, InlineLink[]> = {
  'Tổng thống Pháp Francois Mitterrand (trái) trò chuyện cùng Đại tướng Võ Nguyên Giáp trong chuyến thăm Việt Nam vào tháng 2/1993. Ảnh: Reuters': [
    { label: 'Tổng thống Pháp Francois Mitterrand (trái) trò chuyện cùng Đại tướng Võ Nguyên Giáp trong chuyến thăm Việt Nam vào tháng 2/1993. Ảnh: Reuters', href: 'https://vnexpress.net/nhung-dau-moc-trong-hanh-trinh-quan-he-viet-phap-4378251.html' },
  ],
  'Ngày 12/7/1995, Thủ tướng Việt Nam Võ Văn Kiệt tuyên bố bình thường hóa quan hệ Việt Nam – Mỹ. Tại thủ đô Washington, Tổng thống Mỹ Bill Clinton thông báo quyết định bình thường hóa quan hệ ngoại giao với Việt Nam (Ảnh: TTXVN).': [
    { label: 'Ngày 12/7/1995, Thủ tướng Việt Nam Võ Văn Kiệt tuyên bố bình thường hóa quan hệ Việt Nam – Mỹ. Tại thủ đô Washington, Tổng thống Mỹ Bill Clinton thông báo quyết định bình thường hóa quan hệ ngoại giao với Việt Nam (Ảnh: TTXVN).', href: 'https://dantri.com.vn/the-gioi/nhung-dau-moc-quan-trong-trong-quan-he-viet-my-20230910112429395.htm' },
  ],
  'Lễ ký kết hiệp định thương mại Trung-Việt và hiệp định tạm thời về việc giải quyết công việc ở biên giới hai nước Trung Quốc – Việt Nam tại thủ đô Bắc Kinh, ngày 7/11/1991, trong chuyến thăm Trung Quốc của Tổng Bí thư Đỗ Mười và Chủ tịch Hội đồng Bộ trưởng Võ Văn Kiệt (5-10/11/1991). (Ảnh: TTXVN)': [
    { label: 'Lễ ký kết hiệp định thương mại Trung-Việt và hiệp định tạm thời về việc giải quyết công việc ở biên giới hai nước Trung Quốc – Việt Nam tại thủ đô Bắc Kinh, ngày 7/11/1991, trong chuyến thăm Trung Quốc của Tổng Bí thư Đỗ Mười và Chủ tịch Hội đồng Bộ trưởng Võ Văn Kiệt (5-10/11/1991). (Ảnh: TTXVN)', href: 'https://vov.gov.vn/anh-nhin-lai-70-nam-quan-he-viet-nam-trung-quoc-dtnew-143354' },
  ],
  'Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký Tuyên bố kết nạp Việt Nam trở thành thành viên chính thức của ASEAN ngày 28/7/1995, tại thủ đô Bandar Seri Begawan, Brunei. Ảnh: TTXVN': [
    { label: 'Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký Tuyên bố kết nạp Việt Nam trở thành thành viên chính thức của ASEAN ngày 28/7/1995, tại thủ đô Bandar Seri Begawan, Brunei. Ảnh: TTXVN', href: 'https://mekongasean.vn/30-nam-gia-nhap-asean-anh-le-ket-nap-viet-nam-tai-brunei-nam-1995-44118.html' },
  ],
  'Sáng 11/1/2007, tại trụ sở Tổ chức Thương mại Thế giới (WTO) ở Geneva (Thuỵ Sĩ) treo biểu ngữ "Chào mừng Việt Nam" bằng các thứ tiếng Anh, Pháp, Tây Ban Nha, khi Việt Nam chính thức trở thành thành viên thứ 150 của tổ chức thương mại lớn nhất thế giới này. (Ảnh: Lan Hương/TTXVN)': [
    { label: 'Sáng 11/1/2007, tại trụ sở Tổ chức Thương mại Thế giới (WTO) ở Geneva (Thuỵ Sĩ) treo biểu ngữ "Chào mừng Việt Nam" bằng các thứ tiếng Anh, Pháp, Tây Ban Nha, khi Việt Nam chính thức trở thành thành viên thứ 150 của tổ chức thương mại lớn nhất thế giới này. (Ảnh: Lan Hương/TTXVN)', href: 'https://hungyen.dcs.vn/18-nam-viet-nam-gia-nhap-wto-hanh-trinh-hoi-nhap-va-phat-trien-c222429.html' },
  ],
  'Hai bên khẳng định việc ký kết Thông cáo chung hôm nay là một dấu mốc lịch sử, đặt nền móng cho quan hệ hợp tác giữa hai nước – Ảnh: BNG': [
    { label: 'Hai bên khẳng định việc ký kết Thông cáo chung hôm nay là một dấu mốc lịch sử, đặt nền móng cho quan hệ hợp tác giữa hai nước – Ảnh: BNG', href: 'https://baochinhphu.vn/viet-nam-va-tuvalu-thiet-lap-quan-he-ngoai-giao-102250925080757632.htm' },
  ],
  'Lễ mở ký Công ước Hà Nội đã thu hút được 72 nước ký kết Công ước trong 2 ngày 25 – 26/10/2025, trong đó có 64 quốc gia đã ký ngay trong Phiên ký tại Hội trường chính. Mang ý nghĩa: Khẳng định vai trò, uy tín của Việt Nam trong việc chủ động kiến tạo khuôn khổ pháp lý quốc tế về an ninh mạng.': [
    { label: 'Lễ mở ký Công ước Hà Nội đã thu hút được 72 nước ký kết Công ước trong 2 ngày 25 – 26/10/2025, trong đó có 64 quốc gia đã ký ngay trong Phiên ký tại Hội trường chính. Mang ý nghĩa: Khẳng định vai trò, uy tín của Việt Nam trong việc chủ động kiến tạo khuôn khổ pháp lý quốc tế về an ninh mạng.', href: 'https://vtv.vn/72-nuoc-da-ky-ket-cong-uoc-ha-noi-trong-2-ngay-25-26-10-10025102621455026.htm' },
  ],
};

/* ─── Inline Carousel Component (matches Figma design) ── */
function ThanhTuuCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);
  const slide = slides[current];

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 36,
    height: 72,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--red)',
    fontSize: 36,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    zIndex: 3,
    transition: 'opacity 0.2s',
  };

  return (
    <div className="anim-fade-up" style={{
      position: 'relative',
      background: '#FFF3F3',
      borderRadius: 60,
      padding: '28px 64px 44px',
      maxWidth: 'var(--content-max)',
      margin: '0 auto 36px',
      boxShadow: 'var(--shadow)',
    }}>
      {/* Left arrow – vertically centered on left edge */}
      <button onClick={prev} aria-label="Previous" style={{ ...arrowStyle, left: 14 }}>‹</button>

      {/* Right arrow – vertically centered on right edge */}
      <button onClick={next} aria-label="Next" style={{ ...arrowStyle, right: 14 }}>›</button>

      {/* Red pill title bar */}
      <div style={{
        background: 'var(--red)',
        borderRadius: 10,
        padding: '12px 24px',
        textAlign: 'center',
        marginBottom: 28,
        marginLeft: '6%',
        marginRight: '6%',
      }}>
        <span style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: 700,
          fontSize: 26,
          color: '#FFFF00',
          lineHeight: 1.35,
          display: 'block',
        }}>{slide.title}</span>
      </div>

      {/* Content: text only OR text + image */}
      {slide.imageSrc ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 28px 1fr',
          gap: 0,
          alignItems: 'start',
          minHeight: 260,
        }}>
          {/* Left: text */}
          <div style={{ paddingRight: 28, paddingLeft: 8 }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: 20, margin: 0 }}>
              {slide.bodyLines.map((line, i) => (
                <li key={i} style={{ fontSize: 19, lineHeight: 1.8, color: '#000', marginBottom: 10 }}>{line}</li>
              ))}
            </ul>
            <p style={{ fontSize: 16, fontStyle: 'italic', color: '#555', marginTop: 16, lineHeight: 1.5 }}>
              {renderLinkedText(slide.source, sourceLinkMap[slide.source] ?? [])}
            </p>
          </div>
          {/* Spacer */}
          <div />
          {/* Right: image */}
          <div style={{ paddingLeft: 28, paddingRight: 8 }}>
            <img
              src={slide.imageSrc}
              alt={slide.imageAlt}
              style={{
                width: '100%',
                height: 310, // tăng chiều cao để hạn chế bị "cắt khuất"
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: 14,
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                display: 'block',
              }}
            />
          </div>
        </div>
      ) : (
        /* Text-only layout */
        <div style={{ padding: '0 8px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: 24, margin: 0 }}>
            {slide.bodyLines.map((line, i) => (
              <li key={i} style={{ fontSize: 20, lineHeight: 1.85, color: '#000', marginBottom: 12 }}>{line}</li>
            ))}
          </ul>
          <p style={{ fontSize: 17, fontStyle: 'italic', color: '#555', marginTop: 18, lineHeight: 1.5 }}>
            {renderLinkedText(slide.source, sourceLinkMap[slide.source] ?? [])}
          </p>
        </div>
      )}

      {/* Navigation dots – centered at bottom */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 22,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: 14, height: 14, borderRadius: '50%',
              background: i === current ? 'var(--red)' : '#FFFF00',
              border: '1px solid var(--red)',
              cursor: 'pointer', padding: 0,
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Slide Data ──────────────────────────────────────── */
const kinhTeSlides: CarouselSlide[] = [
  {
    title: 'TỪ NƯỚC THIẾU LƯƠNG THỰC ĐẾN CƯỜNG QUỐC XUẤT KHẨU GẠO',
    bodyLines: [
      'Năm 2024, Việt Nam xác lập kỷ lục xuất khẩu với hơn 9 triệu tấn gạo, thu về khoảng 5,7 tỷ USD.',
      'Việt Nam hiện duy trì vị thế là nhà xuất khẩu gạo lớn thứ 2 hoặc thứ 3 thế giới (sau Ấn Độ và Thái Lan).',
      'Dự báo năm 2025, Việt Nam tiếp tục xuất khẩu trên 8 triệu tấn gạo.',
    ],
    source: 'Nguồn: Bộ Nông nghiệp và Phát triển nông thôn, Trung tâm WTO (VCCI), Tạp chí Cộng sản.',
    imageSrc: '/images/rice_export.jpg',
    imageAlt: 'Xuất khẩu gạo Việt Nam',
  },
  {
    title: 'TĂNG TRƯỞNG KINH TẾ ỔN ĐỊNH',
    bodyLines: [
      'Quy mô GDP Việt Nam đã tăng từ khoảng 31 tỷ USD (năm 2000) lên mức 476 tỷ USD (năm 2024).',
      'Tốc độ tăng trưởng GDP 6 tháng đầu năm 2025 đạt 7,52%, mức cao nhất kể từ năm 2011.',
      'Năm 2024, các tổ chức quốc tế như IMF và WB đều dự báo tăng trưởng của Việt Nam ở mức trên 6%.',
    ],
    source: 'Nguồn: Tổng cục Thống kê (GSO), Báo Đầu tư, Infographics: T.L – Nguồn: TTXVN.',
    imageSrc: '/images/kinh_te_gdp.jpg',
    imageAlt: 'Tăng trưởng kinh tế Việt Nam',
  },
  {
    title: 'CHUYỂN DỊCH CƠ CẤU KINH TẾ MẠNH MẼ',
    bodyLines: [
      'Tỷ trọng khu vực Nông, lâm nghiệp và thủy sản trong GDP giảm dần, hiện chỉ còn khoảng 14,85% (năm 2020), nhường chỗ cho Công nghiệp – Xây dựng và Dịch vụ chiếm gần 85%.',
      'Kinh tế số đang trở thành động lực mới với tốc độ tăng trưởng ước đạt 9,2% vào năm 2024.',
    ],
    source: 'Nguồn: Cổng thông tin điện tử Chính phủ, Tổng cục Thống kê.',
    imageSrc: '/images/kinh_te_gdp.jpg',
    imageAlt: 'Chuyển dịch cơ cấu kinh tế',
  },
  {
    title: 'TẬP ĐOÀN SAMSUNG TẠI VIỆT NAM',
    bodyLines: [
      'Vốn đầu tư: Tính đến tháng 8/2025, Samsung đã đầu tư tổng cộng 23,2 tỷ USD vào Việt Nam.',
      'Sản xuất: Samsung đã xuất xưởng tổng cộng 2 tỷ chiếc điện thoại "Made in Vietnam" sau 16 năm đầu tư.',
      'Đóng góp: 6 nhà máy lõi của Samsung tại Việt Nam (bao gồm SEV tại Bắc Ninh và SEVT tại Thái Nguyên) đạt doanh thu khoảng 65 tỷ USD vào năm 2025.',
    ],
    source: 'Nguồn: Báo Chính phủ, Tạp chí VietnamFinance, CafeF.',
    imageSrc: '/images/samsung_bacninh.jpg',
    imageAlt: 'Samsung Bắc Ninh',
  },
];

const doiSongSlides: CarouselSlide[] = [
  {
    title: 'GIẢM NGHÈO ĐA CHIỀU VÀ NÂNG CAO MỨC SỐNG',
    bodyLines: [
      'Tỷ lệ hộ nghèo: Việt Nam đã tạo nên "kỳ tích" khi giảm tỷ lệ nghèo từ hơn 58% (năm 1993) xuống còn khoảng 1,93% (năm 2024). Dự kiến đến cuối năm 2025, tỷ lệ này chỉ còn khoảng 0,9% – 1,1% theo chuẩn nghèo đa chiều mới.',
      'Thu nhập bình quân: Thu nhập bình quân đầu người của Việt Nam tăng trưởng mạnh mẽ, từ mức cực thấp thời kỳ đầu Đổi mới lên khoảng 4.536 USD (năm 2024) và dự báo đạt 5.087 USD vào năm 2026.',
    ],
    source: 'Nguồn: Báo điện tử Nhân Dân, Ngân hàng Thế giới (World Bank), CafeBiz.',
  },
  {
    title: 'PHÁT TRIỂN Y TẾ, GIÁO DỤC VÀ CHỈ SỐ PHÁT TRIỂN CON NGƯỜI (HDI)',
    bodyLines: [
      'Chỉ số HDI: Việt Nam liên tục thăng hạng và hiện nằm trong nhóm các quốc gia có chỉ số phát triển con người cao trên thế giới. Giá trị HDI đã tăng từ 0,492 (năm 1990) lên 0,726 (năm 2022) và tiếp tục cải thiện trong báo cáo năm 2025.',
      'Hệ thống an sinh: Chính phủ đang củng cố "lưới an sinh đa tầng" để đảm bảo mọi người dân đều được tiếp cận các dịch vụ cơ bản như y tế, giáo dục, nước sạch và thông tin.',
    ],
    source: 'Nguồn: Chương trình Phát triển Liên Hợp Quốc (UNDP), Báo Lao Động.',
  },
  {
    title: 'DỰ ÁN SÂN BAY QUỐC TẾ LONG THÀNH',
    bodyLines: [
      'Quy mô đầu tư: Đây là dự án hạ tầng lớn nhất lịch sử Việt Nam với tổng mức đầu tư khoảng 16 tỷ USD (hơn 336.000 tỷ đồng).',
      'Tiến độ thực tế: Tính đến tháng 3/2026, dự án đang ở giai đoạn nước rút với hơn 15.000 nhân lực và hàng ngàn thiết bị làm việc xuyên đêm. Mục tiêu chính thức là đưa vào khai thác thương mại từ tháng 6/2026.',
      'Tầm nhìn: Sân bay được quy hoạch theo mô hình "Airport City" hiện đại, công suất thiết kế lên đến 100 triệu hành khách/năm, đưa Long Thành trở thành trung tâm logistics hàng không hàng đầu Đông Nam Á.',
    ],
    source: 'Nguồn: Tổng công ty Cảng hàng không Việt Nam (ACV), Báo điện tử Chính phủ, VTC News.',
  },
];

/* ─── Photo Grid Items ─────────────────────────────────── */
type PhotoItem = { type: 'photo'; src: string; alt: string } | { type: 'caption'; text: string };

// Strictly alternating: Row 1 hình|chữ → Row 2 chữ|hình → Row 3 hình|chữ → ...
const photoRows: [PhotoItem, PhotoItem][] = [
  // Row 1 – hình | chữ
  [
    { type: 'photo', src: '/images/2-2241-mitterrand.webp', alt: 'Tổng thống Pháp Francois Mitterrand trò chuyện cùng Đại tướng Võ Nguyên Giáp' },
    { type: 'caption', text: 'Tổng thống Pháp Francois Mitterrand (trái) trò chuyện cùng Đại tướng Võ Nguyên Giáp trong chuyến thăm Việt Nam vào tháng 2/1993. Ảnh: Reuters' },
  ],
  // Row 2 – chữ | hình
  [
    { type: 'caption', text: 'Ngày 12/7/1995, Thủ tướng Việt Nam Võ Văn Kiệt tuyên bố bình thường hóa quan hệ Việt Nam – Mỹ. Tại thủ đô Washington, Tổng thống Mỹ Bill Clinton thông báo quyết định bình thường hóa quan hệ ngoại giao với Việt Nam (Ảnh: TTXVN).' },
    { type: 'photo', src: '/images/vvkiet_clinton.webp', alt: 'Thủ tướng Võ Văn Kiệt và Tổng thống Bill Clinton bình thường hóa quan hệ Việt – Mỹ, 1995' },
  ],
  // Row 3 – hình | chữ
  [
    { type: 'photo', src: '/images/asean_vobu.jpg', alt: 'Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký kết nạp Việt Nam vào ASEAN, 1995' },
    { type: 'caption', text: 'Lễ ký kết hiệp định thương mại Trung-Việt và hiệp định tạm thời về việc giải quyết công việc ở biên giới hai nước Trung Quốc – Việt Nam tại thủ đô Bắc Kinh, ngày 7/11/1991, trong chuyến thăm Trung Quốc của Tổng Bí thư Đỗ Mười và Chủ tịch Hội đồng Bộ trưởng Võ Văn Kiệt (5-10/11/1991). (Ảnh: TTXVN)' },
  ],
  // Row 4 – chữ | hình
  [
    { type: 'caption', text: 'Bộ trưởng Ngoại giao Nguyễn Mạnh Cầm ký Tuyên bố kết nạp Việt Nam trở thành thành viên chính thức của ASEAN ngày 28/7/1995, tại thủ đô Bandar Seri Begawan, Brunei. Ảnh: TTXVN' },
    { type: 'photo', src: '/images/amm_meeting.jpg', alt: 'Hội nghị thường niên Bộ trưởng Ngoại giao ASEAN' },
  ],
  // Row 5 – hình | chữ
  [
    { type: 'photo', src: '/images/wto_entry.jpg', alt: 'Việt Nam gia nhập WTO tháng 1/2007' },
    { type: 'caption', text: 'Sáng 11/1/2007, tại trụ sở Tổ chức Thương mại Thế giới (WTO) ở Geneva (Thuỵ Sĩ) treo biểu ngữ "Chào mừng Việt Nam" bằng các thứ tiếng Anh, Pháp, Tây Ban Nha, khi Việt Nam chính thức trở thành thành viên thứ 150 của tổ chức thương mại lớn nhất thế giới này. (Ảnh: Lan Hương/TTXVN)' },
  ],
  // Row 6 – chữ | hình
  [
    { type: 'caption', text: 'Hai bên khẳng định việc ký kết Thông cáo chung hôm nay là một dấu mốc lịch sử, đặt nền móng cho quan hệ hợp tác giữa hai nước – Ảnh: BNG' },
    { type: 'photo', src: '/images/tuvalu_sign.jpg', alt: 'Ký kết Thông cáo chung Việt Nam – Tuvalu, 24/9/2025' },
  ],
  // Row 7 – hình | chữ
  [
    { type: 'photo', src: '/images/hanoi_conv_2025.webp', alt: 'Lễ mở ký Công ước Hà Nội 2025' },
    { type: 'caption', text: 'Lễ mở ký Công ước Hà Nội đã thu hút được 72 nước ký kết Công ước trong 2 ngày 25 – 26/10/2025, trong đó có 64 quốc gia đã ký ngay trong Phiên ký tại Hội trường chính. Mang ý nghĩa: Khẳng định vai trò, uy tín của Việt Nam trong việc chủ động kiến tạo khuôn khổ pháp lý quốc tế về an ninh mạng.' },
  ],
];

/* ─── Page Component ──────────────────────────────────── */
export default function ThanhTuu() {
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
        <div className="banner-title">
          Thành tựu của Việt Nam sau gần 40 năm Đổi mới<br />(1986 – nay)
        </div>
      </div>

      {/* 2. Yellow card – Thành tựu kinh tế */}
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
          fontSize: 36, color: 'var(--red)', textTransform: 'uppercase',
          marginBottom: 20, lineHeight: 1.2,
        }}>Thành tựu kinh tế</h2>
        <ul style={{ fontSize: 22, lineHeight: 1.8, color: '#000', paddingLeft: 28, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>Việt Nam từ nước thiếu lương thực trở thành một trong những nước xuất khẩu gạo hàng đầu thế giới.</li>
          <li style={{ marginBottom: 8 }}>Tăng trưởng kinh tế ổn định trong nhiều năm.</li>
          <li style={{ marginBottom: 8 }}>Cơ cấu kinh tế chuyển dịch mạnh từ nông nghiệp sang công nghiệp và dịch vụ.</li>
          <li>Nền kinh tế ngày càng hiện đại hóa và hội nhập quốc tế.</li>
        </ul>
      </div>

      {/* 3. Carousel – Kinh tế */}
      <div style={{ maxWidth: 'var(--content-max)', margin: '32px auto 0', padding: '0 0' }}>
        <ThanhTuuCarousel slides={kinhTeSlides} />
      </div>

      {/* 4. Yellow card – Mở rộng quan hệ quốc tế */}
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
        }}>Mở rộng quan hệ quốc tế</h2>
        <ul style={{ fontSize: 24, lineHeight: 1.85, color: '#000', paddingLeft: 28, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 10 }}>Việt Nam bình thường hóa và mở rộng quan hệ ngoại giao với nhiều quốc gia như Mỹ, Pháp, Trung Quốc…</li>
          <li style={{ marginBottom: 10 }}>Gia nhập <strong>ASEAN</strong> năm 1995.</li>
          <li style={{ marginBottom: 10 }}>Gia nhập <strong>WTO</strong> năm 2007.</li>
          <li style={{ marginBottom: 10 }}>Việt Nam ngày càng hội nhập sâu rộng với khu vực và thế giới. <strong>Việt Nam đã thiết lập quan hệ ngoại giao với 195 quốc gia</strong> và quốc gia thứ 195, <strong>Tuvalu</strong> ngày 24.9.2025.</li>
          <li style={{ marginBottom: 10 }}>
            Mới đây, tại Hà Nội, <strong>Công ước Hà Nội 2025</strong> (hay Công ước Liên Hợp Quốc về chống tội phạm mạng) là điều ước quốc tế đa phương đầu tiên về tội phạm mạng, được mở ký tại Hà Nội ngày 25/10/2025, thu hút được 72 nước ký kết Công ước trong 2 ngày 25 – 26/10/2025. Mang ý nghĩa: <strong>Khẳng định vai trò, uy tín của Việt Nam</strong> trong việc chủ động kiến tạo khuôn khổ pháp lý quốc tế về an ninh mạng.
          </li>
          <li style={{ marginBottom: 10 }}>
            Ngoài ra, <strong>Việt Nam hai lần đảm nhiệm vị trí Ủy viên không thường trực Hội đồng Bảo an</strong> của United Nations (Nhiệm kỳ 2008–2009, Nhiệm kỳ 2020–2021). Việc được bầu vào Hội đồng Bảo an cho thấy cộng đồng quốc tế đánh giá cao vai trò, uy tín và trách nhiệm của Việt Nam trong các vấn đề toàn cầu.
          </li>
          <li>Đây là <strong>minh chứng rõ ràng</strong> cho việc <strong>vị thế của Việt Nam ngày càng được nâng cao</strong> trên trường quốc tế.</li>
        </ul>
      </div>

      {/* 5. Photo grid – diplomatic photos */}
      <div className="anim-fade-up" style={{
        maxWidth: 'var(--content-max)',
        margin: '40px auto 0',
        padding: '0 4px',
        position: 'relative',
      }}>
        {/* Red vertical center divider spanning full grid height */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 20,
          background: 'var(--red)',
          transform: 'translateX(-50%)',
          borderRadius: 8,
          zIndex: 1,
          pointerEvents: 'none',
          boxShadow: '0 0 12px rgba(215,25,32,0.4)',
        }} />

        {photoRows.map((row, ri) => (
          <div key={ri} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 52,
            marginBottom: 32,
            alignItems: 'center',
          }} className={`anim-fade-up stagger-${Math.min(ri + 1, 6)}`}>
            {row.map((item, ci) => (
              /* ci=0 → left col: pad right away from center line; ci=1 → right col: pad left away from center line */
              <div key={ci} style={{ paddingRight: ci === 0 ? 20 : 0, paddingLeft: ci === 1 ? 20 : 0 }}>
                {item.type === 'photo' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: 320,
                      objectFit: 'cover',
                      borderRadius: 14,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                      display: 'block',
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                ) : (
                  <p style={{
                    fontSize: 22,
                    lineHeight: 1.8,
                    color: '#000',
                    textDecoration: 'underline',
                    textDecorationColor: '#bbb',
                    padding: '0 0 0 8px',
                    margin: 0,
                  }}>
                    {renderLinkedText(item.text, captionLinkMap[item.text] ?? [])}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 6. Yellow card – Cải thiện đời sống nhân dân */}
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
          fontSize: 36, color: 'var(--red)', textTransform: 'uppercase',
          marginBottom: 20, lineHeight: 1.2,
        }}>Cải thiện đời sống nhân dân</h2>
        <ul style={{ fontSize: 22, lineHeight: 1.8, color: '#000', paddingLeft: 28, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>Tỷ lệ hộ nghèo giảm mạnh so với trước thời kỳ Đổi mới.</li>
          <li style={{ marginBottom: 8 }}>Hệ thống giáo dục và y tế phát triển.</li>
          <li style={{ marginBottom: 8 }}>Thu nhập và mức sống của người dân tăng lên.</li>
          <li style={{ marginBottom: 8 }}>Đời sống vật chất và tinh thần ngày càng được nâng cao.</li>
          <li style={{ marginBottom: 8 }}>
            Dự án xây dựng Sân bay quốc tế Long Thành: Việc đầu tư xây dựng sân bay Long Thành cho thấy cơ sở hạ tầng của Việt Nam đang được nâng cấp mạnh mẽ nhằm đáp ứng nhu cầu phát triển kinh tế và đi lại của người dân. Điều này phản ánh mức sống, nhu cầu giao thương và hội nhập của xã hội ngày càng tăng.
          </li>
        </ul>
      </div>

      {/* 7. Carousel – Đời sống */}
      <div style={{ maxWidth: 'var(--content-max)', margin: '32px auto 0' }}>
        <ThanhTuuCarousel slides={doiSongSlides} />
      </div>

      {/* 8. Red conclusion card – Kết Luận */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)',
        margin: '0 auto 48px',
        padding: '36px 52px 44px',
      }}>
        <h2 style={{
          fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 700,
          fontSize: 36, color: '#FFFF00', textTransform: 'uppercase',
          marginBottom: 20, lineHeight: 1.2,
        }}>Kết Luận</h2>
        <ul style={{ fontSize: 22, lineHeight: 1.85, color: '#fff', paddingLeft: 28, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 12 }}>
            Sau gần 40 năm Đổi mới, Việt Nam đạt nhiều thành tựu quan trọng về kinh tế, xã hội và đối ngoại.
          </li>
          <li>
            Những thành tựu này khẳng định tính đúng đắn của đường lối Đổi mới từ năm 1986, mở ra thời kỳ phát triển và hội nhập mạnh mẽ của đất nước.
          </li>
        </ul>
      </div>
    </>
  );
}
