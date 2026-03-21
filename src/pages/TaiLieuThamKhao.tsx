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

const underlineStyle: React.CSSProperties = {
  textDecorationLine: 'underline',
  textDecorationColor: 'rgba(0,0,0,0.35)',
  textDecorationThickness: '1px',
  textUnderlineOffset: '3px',
};

const referenceLinks: Record<string, string> = {
  'Bộ sưu tập tem phiếu, sổ gạo thời bao cấp':
    'https://vietnamnet.vn/ky-uc-thoi-gian-kho-qua-bo-suu-tap-tem-phieu-so-gao-song-dong-cua-nguoi-tre-8x-723044.html',
  'Tết thời bao cấp':
    'https://baoninhbinh.org.vn/tet-thoi-bao-cap/d20230112091014465.htm',
  'Dấu ấn thời bao cấp trong ký ức tiến sĩ tài chính':
    'https://giaoducthoidai.vn/dau-an-thoi-bao-cap-trong-ky-uc-tien-si-tai-chinh-post656831.html',
  'Thời bao cấp là giai đoạn nào, thời bao cấp kéo dài bao lâu, đồ dùng thời bao cấp trông ra sao?':
    'https://danviet.vn/thoi-bao-cap-la-giai-doan-nao-thoi-bao-cap-keo-dai-bao-lau-do-thoi-bao-cap-trong-the-nao-20221031235047089-d1053541.html',
  'Bối cảnh lịch sử bài viết Ý kiến về Giá, Lương, Tiền của Vũ Ngọc Phương năm 1985':
    'https://nghiencuulichsu.com/2018/07/13/boi-canh-lich-su-bai-viet-y-kien-ve-gia-luong-tien-cua-vu-ngoc-phuong-nam-1985/#:~:text=B%E1%BB%91i%20c%E1%BA%A3nh%20l%E1%BB%8Bch%20s%E1%BB%AD%20b%C3%A0i,1985%20%7C%20Nghi%C3%AAn%20C%E1%BB%A9u%20L%E1%BB%8Bch%20S%E1%BB%AD',
  'Giá – lương – tiền câu chuyện không chỉ của một thời… | Việt Nam.':
    'https://tennguoidepnhat.net/2012/09/15/gia-luong-tien-cau-chuyen-khong-chi-cua-mot-thoi/#:~:text=Mong%20mu%E1%BB%91n%20c%E1%BB%A7a%20c%C3%A1c%20nh%C3%A0%20c%E1%BA%A3i%20c%C3%A1ch,%C4%91%C3%B3%20nh%C6%B0ng%20cu%E1%BB%91i%20c%C3%B9ng%20%C4%91%C3%A3%20th%E1%BA%A5t%20b%E1%BA%A1i',
  'Nghị định 235-HĐBT cải tiến chế độ tiền lương của công nhân, viên chức và các lực lượng vũ trang':
    'https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Nghi-dinh-235-HDBT-cai-tien-che-do-tien-luong-cua-cong-nhan-vien-chuc-va-cac-luc-luong-vu-trang-43381.aspx',
  'Cuộc tổng điều chỉnh giá - lương - tiền năm 1985':
    'https://tapchicongthuong.vn/cuoc-tong-dieu-chinh-gia-luong-tien-nam-1985-111705.htm#:~:text=Cu%E1%BB%99c%20t%E1%BB%95ng%20%C4%91i%E1%BB%81u%20ch%E1%BB%89nh%20gi%C3%A1%20%2D%20l%C6%B0%C6%A1ng%20%2D%20ti%E1%BB%81n%20n%C4%83m%201985',
  'Nỗi lo bong bóng tài sản: Điểm năm lạm phát tăng mạnh, kỷ lục 774,7%':
    'https://vietnamfinance.vn/noi-lo-bong-bong-tai-san-diem-nam-lam-phat-tang-manh-ky-luc-7747-d124063.html',
  'Quan hệ Việt Nam - Hoa Kỳ: Từ cấm vận đến hợp tác toàn diện':
    'https://kinhtevadubao.vn/quan-he-viet-nam-hoa-ky-tu-cam-van-den-hop-tac-toan-dien-13745.html',
  'Bảo vệ biên giới phía Bắc 1979 – 45 năm cuộc chiến đấu chính nghĩa của Nhân dân Việt Nam':
    'https://baoquankhu4.com.vn/chinh-tri/bao-ve-bien-gioi-phia-bac-1979-45-nam-cuoc-chien-dau-chinh-nghia-cua-nhan-dan-viet-nam.html',
  'https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19':
    'https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19',
  'Bài 3: Chiến đấu bảo vệ Tổ quốc ở biên giới Tây Nam, phía Bắc':
    'https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/dau-an-trong-chang-duong-80-nam-cua-quan-doi-ta-bai-3-chien-dau-bao-ve-bien-gioi-chu-quyen-bien-dao-cua-to-quoc-va-hoan-thanh-nhiem-vu-quoc-te-807100',
  'VÀI NÉT VỀ QUAN HỆ VIỆT NAM-LIÊN XÔ TỪ NĂM 1975 ĐẾN NĂM 1990':
    'https://journal.hcmue.edu.vn/index.php/hcmuejos/article/viewFile/1558/1549',
  "'Đổi mới hay là chết'":
    'https://thanhnien.vn/doi-moi-hay-la-chet-185482133.htm',
  'Tổng Bí thư Trường Chinh – người đặt nền móng cho công cuộc Đổi mới | VOV.VN':
    'https://vov.vn/chinh-tri/dang/tong-bi-thu-truong-chinh-nguoi-dat-nen-mong-cho-cong-cuoc-doi-moi-591630.vov',
  '"Phá Rào" Trong Kinh Tế Vào Đêm Trước Đổi Mới - Tác giả Đặng Phong':
    'https://shop.alphabooks.vn/pha-rao-trong-kinh-te-vao-dem-truoc-doi-moi-tac-gia-dang-phong-p39108633.html',
  'Kỳ 1: "Đêm trước" đổi mới: Ký ức thời "sổ gạo"':
    'https://tuoitre.vn/dem-truoc-doi-moi-ky-uc-thoi-so-gao-110988.htm',
  'Kỳ 2: "Vòng kim cô"':
    'https://tuoitre.vn/dem-truoc-doi-moi-vong-kim-co-111252.htm',
  'Kỳ 3: Khi chợ trời bị đánh sập':
    'https://tuoitre.vn/dem-truoc-doi-moi-khi-cho-troi-bi-danh-sap-111415.htm',
  'Kỳ 4: Công phá "lũy tre"':
    'https://tuoitre.vn/dem-truoc-doi-moi-cong-pha-luy-tre-111625.htm',
  'Kỳ 5: Chiếc áo cơ chế mới':
    'https://tuoitre.vn/dem-truoc-doi-moi-chiec-ao-co-che-moi-111904.htm',
  'Kỳ 6: Tưởng như xa xôi lắm':
    'https://tuoitre.vn/dem-truocdoi-moi-tuong-nhu-xa-xoi-lam-112094.htm',
  'Kỳ 7: Từ chạy gạo đến phá cơ chế giá':
    'https://tuoitre.vn/dem-truocdoi-moi-tu-chay-gao-den-pha-co-che-gia-112315.htm',
  'Kỳ 8: Bù giá vào lương':
    'https://tuoitre.vn/dem-truocdoi-moi-bu-gia-vao-luong-112471.htm',
  'Kỳ 9: Những thông điệp gửi đến Ba Đình':
    'https://tuoitre.vn/dem-truocdoi-moi-nhung-thong-diep-gui-den-ba-dinh-112739.htm',
  'Đại hội VI của Đảng: Đổi mới tư duy, khởi xướng công cuộc đổi mới':
    'https://www.qdnd.vn/chinh-tri/tin-tuc/cac-ky-dai-hoi-cua-dang-va-nhung-dau-an-lich-su-dai-hoi-lan-thu-vi-khoi-xuong-va-lanh-dao-su-nghiep-doi-moi-dat-nuoc-813798',
  'Đại hội Đảng XIV': 'https://daihoidang.vn/',
  'Đại hội Đảng toàn quốc lần thứ XIV thành công tốt đẹp':
    'https://daihoidang.baohatinh.vn/dai-hoi-dang-toan-quoc-lan-thu-xiv-thanh-cong-tot-dep-post304515.html',
  'Các bài viết, phát biểu của Tổng Bí thư Tô Lâm':
    'https://daihoidangtoanquoc.vn/cac-bai-viet-phat-bieu-cua-tbt-to-lam',
  'Diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ VI của Đảng':
    'https://daihoidangtoanquoc.vn/dien-van-khai-mac-dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-post1613.html',
  'Lời khai mạc Đại hội của đồng chí Nguyễn Văn Linh':
    'https://www.hcmcpv.org.vn/tu-lieu/van-kien-dai-hoi-dai-bieu-dang-bo-tphcm-lan-thu-iii/loi-khai-mac-dai-hoi-cua-dong-chi-nguyen-van-linh-1077951094',
  'Đồng chí Tổng Bí thư Trường Chinh - Người cộng sản mẫu mực':
    'https://www.qdnd.vn/chinh-tri/cac-van-de/dong-chi-tong-bi-thu-truong-chinh-nguoi-cong-san-mau-muc-nha-lanh-dao-xuat-sac-cua-dang-va-cach-mang-viet-nam-813567',
  'Kinh tế Việt Nam: Sự trưởng thành về tư duy phát triển':
    'https://www.qdnd.vn/80-nam-cach-mang-thang-tam-va-quoc-khanh-2-9/su-truong-thanh-ve-tu-duy-phat-trien-843099',
  'Các kỳ Đại hội của Đảng và những dấu ấn lịch sử - Đại hội lần thứ VI: Khởi xướng và lãnh đạo sự nghiệp đổi mới đất nước':
    'https://vnexpress.net/cuoc-giang-co-doi-moi-bao-thu-truoc-them-dai-hoi-vi-3511922.html#:~:text=Hai%20l%C3%A0%2C%20trong%20c%E1%BA%A3i%20t%E1%BA%A1o,trong%20v%C3%A0%20sau%20%C4%90%E1%BB%95i%20m%E1%BB%9Bi',
  'https://www.tapchicongsan.org.vn/chinh-tri-xay-dung-dang/-/2018/815926/view_content#':
    'https://www.tapchicongsan.org.vn/chinh-tri-xay-dung-dang/-/2018/815926/view_content#',
  'Đại hội đại biểu toàn quốc lần thứ VI của Đảng':
    'https://daihoidangtoanquoc.vn/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-post1469.html',
  '30 năm Liên Xô sụp đổ và bài học cho Việt Nam - Bài 1: Khi Đảng Cộng sản tự xóa bỏ chính mình':
    'https://media.qdnd.vn/long-form/30-nam-lien-xo-sup-do-va-bai-hoc-cho-viet-nam-bai-1-khi-dang-cong-san-tu-xoa-bo-chinh-minh-53205?utm_source=chatgpt.com',
  'Đại hội VI của Đảng và hoạt động lãnh đạo của Ban Chấp hành Trung ương nhiệm kỳ khóa VI (1986-1991)':
    'https://tapchilichsudang.vn/dai-hoi-vi-cua-dang-va-hoat-dong-lanh-dao-cua-ban-chap-hanh-trung-uong-nhiem-ky-khoa-vi-1986-1991.html',
  'Tư tưởng "Dân là gốc" và bài học tăng cường mối quan hệ gắn bó máu thịt giữa Đảng với nhân dân của Tổng Bí thư Nguyễn Văn Linh':
    'https://www.hcmcpv.org.vn/tin-tuc/tu-tuong-dan-la-goc-va-bai-hoc-tang-cuong-moi-quan-he-gan-bo-mau-thit-giua-dang-voi-nhan-dan-cua-t-1435634558',
  'Nghị quyết số 10/NQ-CP của Chính phủ: Ban hành Chiến lược công tác dân tộc giai đoạn 2021 - 2030, tầm nhìn đến năm 2045':
    'https://vanban.chinhphu.vn/?pageid=27160&docid=205255',
  'Kinh tế Việt Nam sẽ tăng trưởng vượt bậc trong 5 năm tới':
    'https://thoibaotaichinhvietnam.vn/kinh-te-viet-nam-se-tang-truong-vuot-bac-trong-5-nam-toi-52083.html',
  'Quan hệ Việt Nam - Pháp: Năm mươi năm hợp tác và phát triển':
    'https://www.tapchicongsan.org.vn/web/guest/quoc-phong-an-ninh-oi-ngoai1/-/2018/827190/quan-he-viet-nam---phap--nam-muoi-nam-hop-tac-va-phat-trien.aspx#:~:text=QU%E1%BB%90C%20PH%C3%92NG%20%2D%20AN%20NINH%20%2D%20%C4%90%E1%BB%90I%20NGO%E1%BA%A0I%20%2D%20T%E1%BA%A1p%20ch%C3%AD%20C%E1%BB%99ng%20s%E1%BA%A3n',
  'Những dấu mốc trong hành trình quan hệ Việt - Pháp - Báo VnExpress':
    'https://vnexpress.net/nhung-dau-moc-trong-hanh-trinh-quan-he-viet-phap-4378251.html',
  'Những dấu mốc quan trọng trong quan hệ Việt - Mỹ | Báo Dân trí':
    'https://dantri.com.vn/the-gioi/nhung-dau-moc-quan-trong-trong-quan-he-viet-my-20230910112429395.htm',
  'Ảnh: Nhìn lại 70 năm quan hệ Việt Nam - Trung Quốc':
    'https://vov.gov.vn/anh-nhin-lai-70-nam-quan-he-viet-nam-trung-quoc-dtnew-143354',
  '18 năm Việt Nam gia nhập WTO: Hành trình hội nhập và phát triển':
    'https://hungyen.dcs.vn/18-nam-viet-nam-gia-nhap-wto-hanh-trinh-hoi-nhap-va-phat-trien-c222429.html',
  'Việt Nam thiết lập quan hệ ngoại giao với quốc gia thứ 195':
    'https://baochinhphu.vn/viet-nam-va-tuvalu-thiet-lap-quan-he-ngoai-giao-102250925080757632.htm',
  '72 nước đã ký kết Công ước Hà Nội trong 2 ngày 25 - 26/10':
    'https://vtv.vn/72-nuoc-da-ky-ket-cong-uoc-ha-noi-trong-2-ngay-25-26-10-10025102621455026.htm',
  'Bộ Nông nghiệp và Phát triển nông thôn': 'https://www.youtube.com/watch?v=jZ-BjWO3hHk',
  'Trung tâm WTO (VCCI)':
    'https://trungtamwto.vn/hiep-dinh-khac/28481-xuat-khau-gao-nam-2024-dat-ky-luc-ca-ve-luong-va-gia-tri',
  'Tạp chí Cộng sản':
    'https://www.tapchicongsan.org.vn/nghien-cu/-/2018/2735/vi-the-viet-nam-trong-bao-dam-an-ninh-luong-thuc-the-gioi.aspx',
  'Tổng cục Thống kê (GSO)':
    'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-tinh-hinh-kinh-te-xa-hoi-quy-iv-va-nam-2024/',
  'Báo Đầu tư': 'https://baodautu.vn/quy-mo-gdp-viet-nam-som-can-moc-1000-ty-usd-d471397.html',
  'Infographics: T.L Nguồn: TTXVN':
    'https://thoibaotaichinhvietnam.vn/kinh-te-viet-nam-se-tang-truong-vuot-bac-trong-5-nam-toi-52083.html',
  'Cổng thông tin điện tử Chính phủ': 'https://baochinhphu.vn/gdp-nam-2020-tang-291-102285021.htm',
  'Tổng cục Thống kê':
    'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2025/01/thong-cao-bao-chi-ket-qua-bien-soan-chi-tieu-ty-trong-gia-tri-tang-them-cua-kinh-te-so-trong-gdp-grdp-giai-doan-2020-2024/',
  'Báo Chính phủ':
    'https://baochinhphu.vn/samsung-se-dau-tu-them-1-ty-usd-moi-nam-tai-viet-nam-102240509183855562.htm',
  'Tạp chí VietnamFinance':
    'https://vietnamfinance.vn/samsung-dau-tu-232-ty-usd-vao-viet-nam-da-san-xuat-2-ty-dien-thoai-d131610.html',
  CafeF: 'https://cafef.vn/6-nha-may-loi-cua-samsung-tai-viet-nam-dat-doanh-thu-65-ty-usd-nam-2025-188260306100014413.chn',
  'Vì một Việt Nam hùng cường thịnh vượng, người dân ấm no hạnh phúc hơn':
    'https://baochinhphu.vn/vi-mot-viet-nam-hung-cuong-thinh-vuong-nguoi-dan-am-no-hanh-phuc-hon-1022401010902321.htm',
  'Ngoại giao Việt Nam: Khẳng định vai trò tiên phong trong kỷ nguyên mới':
    'https://vov.vn/chinh-tri/ngoai-giao-viet-nam-khang-dinh-vai-tro-tien-phong-trong-ky-nguyen-moi-post1218300.vov',
};

function renderReferenceItem(item: string) {
  const href = referenceLinks[item];
  if (!href) return item;

  return (
    <a href={href} target="_blank" rel="noreferrer" style={{ color: 'inherit', ...underlineStyle }}>
      {item}
    </a>
  );
}

export default function TaiLieuThamKhao() {
  return (
    <>
      {/* Banner */}
      <div
        className="section-banner anim-fade-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,25,32,0.72), rgba(215,25,32,0.72)), url('/images/bg_trong_dong.jpg')",
        }}
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
            <li key={i} style={liStyle}>
              {renderReferenceItem(item)}
            </li>
          ))}
          <li style={liStyle}>
            <span>Series "Đêm trước" Đổi mới:</span>
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
                <li key={j} style={liStyle}>
                  {renderReferenceItem(kì)}
                </li>
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
            <li key={i} style={liStyle}>
              {renderReferenceItem(item)}
            </li>
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
            <li key={i} style={liStyle}>
              {renderReferenceItem(item)}
            </li>
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
            <li key={i} style={liStyle}>
              {renderReferenceItem(item)}
            </li>
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
            <li key={i} style={liStyle}>
              {renderReferenceItem(item)}
            </li>
          ))}
        </ol>
      </div>

      {/* YouTube embed */}
      <div className="anim-fade-up" style={{ maxWidth: 'var(--content-max)', margin: '36px auto 48px' }}>
        <h2
          style={{
            ...headingStyle,
            textAlign: 'center',
            marginBottom: 18,
          }}
        >
          ĐẠI HỘI VI
        </h2>
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
