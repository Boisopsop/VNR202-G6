import Carousel from '../components/Carousel';

export default function BoiCanh() {
  const mutedUnderlineLinkStyle = {
    textDecorationLine: 'underline',
    textDecorationColor: 'rgba(0,0,0,0.35)',
    textDecorationThickness: '1px',
    textUnderlineOffset: 3,
    color: 'inherit',
    display: 'inline-block',
    verticalAlign: 'baseline' as const,
    whiteSpace: 'normal',
  } as React.CSSProperties;

  const nutThatSlides = [
    {
      header: 'NÚT THẮT THỂ CHẾ: CƠ CHẾ KẾ HOẠCH HÓA TẬP TRUNG',
      content: (
        <div className="body-text">
          <ul style={{ margin: 0, paddingLeft: 24, listStyleType: 'disc', lineHeight: 1.65 }}>
            <li>
              Nhà nước can thiệp vào mọi mặt của nền kinh tế. Phủ nhận quy luật giá trị và kinh tế hàng
              hóa. Mọi vật tư, hàng hóa đều do Nhà nước nắm giữ và phân phối qua hệ thống tem phiếu, sổ gạo.
            </li>
          </ul>
          <p style={{ marginTop: 6, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.55 }}>
            → Tạo ra sự cào bằng. Cắt đứt động lực cá nhân vì làm nhiều hay làm ít cũng chỉ nhận được khẩu
            phần quy định. Cửa hàng bách hóa mậu dịch trở thành nơi quyền lực, và "xếp hàng" trở thành nét
            văn hóa bất đắc dĩ.
          </p>
        </div>
      ),
    },
    {
      header: 'NÚT THẮT KINH TẾ: KHỦNG HOẢNG VÀ LẠM PHÁT PHI MÃ',
      content: (
        <div className="body-text">
          <ul style={{ margin: 0, paddingLeft: 24, listStyleType: 'disc', lineHeight: 1.65 }}>
            <li>
              Do sản xuất không gắn liền với nhu cầu thị trường, hàng hóa khan hiếm trầm trọng. Cuộc cải
              cách "Giá - Lương - Tiền" (1985) là nỗ lực cuối cùng nhằm cứu vãn nền kinh tế Việt Nam khỏi
              khủng hoảng trước thời kỳ{' '}
              <a
                href="https://ninhbinh.baohiemxahoi.gov.vn/UserControls/Publishing/News/BinhLuan/pFormPrint.aspx?UrlListProcess=/content/tintuc/Lists/News&ItemID=6962&IsTA=False"
                target="_blank"
                rel="noreferrer"
                style={mutedUnderlineLinkStyle}
              >
                Đổi mới (1986)
              </a>
              . Mặc dù mang mục đích xóa bỏ bao cấp, cuộc cải cách này đã thất bại nặng nề và đẩy đất nước
              vào tình trạng lạm phát phi mã{' '}
              <a
                href="https://tapchicongthuong.vn/cuoc-tong-dieu-chinh-gia-luong-tien-nam-1985-111705.htm#:~:text=Cu%E1%BB%99c%20t%E1%BB%95ng%20%C4%91i%E1%BB%81u%20ch%E1%BB%89nh%20gi%C3%A1%20%2D%20l%C6%B0%C6%A1ng%20%2D%20ti%E1%BB%81n%20n%C4%83m%201985"
                target="_blank"
                rel="noreferrer"
                style={mutedUnderlineLinkStyle}
              >
                (Cuộc tổng điều chỉnh giá - lương - tiền năm 1985)
              </a>
            </li>
          </ul>
          <p style={{ marginTop: 6, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.55 }}>
            → Lạm phát năm 1986 đạt đỉnh mức 774,7%{' '}
            <a
              href="https://vietnamfinance.vn/noi-lo-bong-bong-tai-san-diem-nam-lam-phat-tang-manh-ky-luc-7747-d124063.html"
              target="_blank"
              rel="noreferrer"
              style={mutedUnderlineLinkStyle}
            >
              (Nỗi lo bong bóng tài sản: Điểm năm lạm phát tăng mạnh, kỷ lục 774,7%)
            </a>
          </p>
        </div>
      ),
    },
    {
      header: 'NÚT THẮT TƯ DUY: CĂN BỆNH "DUY Ý CHÍ"',
      content: (
        <div className="body-text">
          <ul style={{ margin: 0, paddingLeft: 24, listStyleType: 'disc', lineHeight: 1.65 }}>
            <li>
              <strong>Tư duy duy ý chí, chủ quan:</strong> Đại hội thẳng thắn cho rằng: "Những sai lầm nói
              trên là những sai lầm nghiêm trọng và kéo dài về chủ trương, chính sách lớn, sai lầm về chỉ
              đạo chiến lược và tổ chức thực hiện", đặc biệt là bệnh chủ quan duy ý chí, lạc hậu về nhận thức
              lý luận.”{' '}
              <a
                href="https://tulieuvankien.dangcongsan.vn/ban-chap-hanh-trung-uong-dang/dai-hoi-dang/lan-thu-vi/dai-hoi-dai-bieu-toan-quoc-lan-thu-vi-cua-dang-19"
                target="_blank"
                rel="noreferrer"
                style={mutedUnderlineLinkStyle}
              >
                (Cục Chuyển đổi số - Cơ yếu)
              </a>
            </li>
            <li>
              <strong>Bảo thủ và rập khuôn:</strong> Hệ thống bị trói buộc bởi những mô hình cũ, sao chép máy
              móc từ bên ngoài mà thiếu sự linh hoạt với đặc điểm cụ thể của đất nước.
            </li>
          </ul>
          <p style={{ marginTop: 6, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.55 }}>
            → Tạo ra một bộ máy quản lý cồng kềnh, quan liêu, "đẻ" ra nhiều cơ quan trung gian, gây ra sức ì
            lớn và triệt tiêu động lực phát triển của nền kinh tế
          </p>
        </div>
      ),
    },
  ];

  const sachSlides = [
    {
      header: 'Sách và series "Đêm trước Đổi Mới"',
      content: (
        <p className="body-text">
          Do Báo Tuổi Trẻ thực hiện, tổng hợp nhiều câu chuyện và tư liệu lịch sử về giai đoạn trước
          khi diễn ra Đại hội VI. Loạt bài mô tả rõ tình trạng khủng hoảng kinh tế – xã hội trong thời
          kỳ bao cấp:<br /><br />
          Kỳ 1:{' '}
          <a href="https://tuoitre.vn/dem-truoc-doi-moi-ky-uc-thoi-so-gao-110988.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            "Đêm trước" đổi mới: Ký ức thời "sổ gạo"
          </a>
          <br />
          Kỳ 2:{' '}
          <a href="https://tuoitre.vn/dem-truoc-doi-moi-vong-kim-co-111252.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            "Vòng kim cô"
          </a>
          <br />
          Kỳ 3:{' '}
          <a href="https://tuoitre.vn/dem-truoc-doi-moi-vong-kim-co-111252.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Khi chợ trời bị đánh sập
          </a>
          <br />
          Kỳ 4:{' '}
          <a href="https://tuoitre.vn/dem-truoc-doi-moi-cong-pha-luy-tre-111625.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Công phá "lũy tre"
          </a>
          <br />
          Kỳ 5:{' '}
          <a href="https://tuoitre.vn/dem-truoc-doi-moi-chiec-ao-co-che-moi-111904.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Chiếc áo cơ chế mới
          </a>
          <br />
          Kỳ 6:{' '}
          <a href="https://tuoitre.vn/dem-truocdoi-moi-tuong-nhu-xa-xoi-lam-112094.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Tưởng như xa xôi lắm
          </a>
          <br />
          Kỳ 7:{' '}
          <a href="https://tuoitre.vn/dem-truocdoi-moi-tu-chay-gao-den-pha-co-che-gia-112315.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Từ chạy gạo đến phá cơ chế giá
          </a>
          <br />
          Kỳ 8:{' '}
          <a href="https://tuoitre.vn/dem-truocdoi-moi-bu-gia-vao-luong-112471.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Bù giá vào lương
          </a>
          <br />
          Kỳ 9:{' '}
          <a href="https://tuoitre.vn/dem-truocdoi-moi-nhung-thong-diep-gui-den-ba-dinh-112739.htm" target="_blank" rel="noreferrer" style={mutedUnderlineLinkStyle}>
            Những thông điệp gửi đến Ba Đình
          </a>
        </p>
      ),
    },
    {
      header: 'Sách và series "Đêm trước Đổi Mới"',
      content: (
        <div style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'left', marginBottom: 20 }}>
            <strong>"Phá Rào" Trong Kinh Tế Vào Đêm Trước Đổi Mới</strong> — Tác giả: Đặng Phong.<br /><br />
            Đây là công trình nghiên cứu chuyên sâu của GS. Đặng Phong về giai đoạn "phá rào" của nền
            kinh tế Việt Nam trước Đổi Mới 1986. Cuốn sách ghi lại những câu chuyện thực tế về các
            địa phương, doanh nghiệp và cá nhân dũng cảm vượt rào cơ chế.
          </p>
          <img
            src="/images/sach_pha_rao.jpg"
            alt="Bìa sách Phá Rào"
            style={{
              width: 320,
              maxWidth: '100%',
              height: 'auto',
              margin: '0 auto',
              display: 'block',
              borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,.25)',
              objectFit: 'cover',
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      {/* ── 1. Section Banner ─────────────────────── */}
      <div
        className="section-banner anim-fade-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(215,25,32,0.72), rgba(215,25,32,0.72)), url('/images/bg_trong_dong.jpg')",
        }}
      >
        <div className="banner-title">
          Bối cảnh trước năm 1986<br />
          Những khó khăn của đất nước
        </div>
      </div>

      {/* ── 2. 6 Tem phiếu images (3×2 grid) ─────── */}
      <div
        className="anim-fade-up stagger-1"
        style={{ maxWidth: 'var(--content-max)', margin: '20px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}
      >
        {[1,2,3,4,5,6].map(n => (
          <img key={n} className={`hist-img grid-photo anim-fade-up stagger-${Math.min(n, 6)}`} src={`/images/tem_phieu_${n}.jpg`} alt="Ảnh tư liệu tem phiếu" />
        ))}
      </div>
      <a
        className="img-caption-full anim-fade-up stagger-1"
        href="https://vietnamnet.vn/ky-uc-thoi-gian-kho-qua-bo-suu-tap-tem-phieu-so-gao-song-dong-cua-nguoi-tre-8x-723044.html"
        target="_blank"
        rel="noreferrer"
        style={mutedUnderlineLinkStyle}
      >
        Bộ sưu tập tem phiếu, sổ gạo (VietNamNet)
      </a>

      {/* ── 3. KÝ ỨC card (full-width, text only) ── */}
      <div className="info-card anim-fade-up stagger-2">
        <div className="section-heading">
          KÝ ỨC THỜI KỲ BAO CẤP (1976 – 1986)<br />
          TỪ NIỀM VUI THỐNG NHẤT ĐẾN BÀI TOÁN THOÁT NGHÈO
        </div>
        <p className="body-text">
          Năm 1975, đất nước vỡ òa trong niềm vui thống nhất. Thế nhưng, ngay khi bước vào thời bình,
          sự hồ hởi ban đầu đã nhanh chóng phải đối mặt với một hiện thực kinh tế khắc nghiệt. Chúng
          ta đã chiến thắng trong chiến tranh, nhưng lại bước vào một cuộc chiến mới đầy chật vật:{' '}
          <strong>Bài toán thoát nghèo.</strong>
        </p>
      </div>

      {/* ── 4. THỜI KỲ BAO CẤP card (full-width, text only — NO images inside) ── */}
      <div className="info-card anim-fade-up stagger-3">
        <div className="section-heading">Thời Kỳ Bao Cấp Bắt Đầu Từ Khi Nào?</div>
        <p className="body-text">
          "Thời kỳ bao cấp" là cụm từ quen thuộc dùng để chỉ giai đoạn từ sau khi giải phóng miền Nam
          cho đến khi đất nước tiến hành công cuộc Đổi Mới.
        </p>
        <p className="body-text" style={{ marginTop: 10 }}>
          <strong>Bối cảnh:</strong> Nền kinh tế kế hoạch hoá tập trung thực chất đã được áp dụng tại
          miền Bắc từ năm 1954.
        </p>
        <p className="body-text" style={{ marginTop: 10 }}>
          <strong>Giai đoạn toàn diện:</strong> Thời kỳ bao cấp diễn ra đầy đủ và rõ nét nhất trên
          phạm vi cả nước là từ đầu năm <strong>1976 đến năm 1986</strong>. Đối với những thế hệ đi
          trước, đây không chỉ là một dấu mốc thời gian mà còn là một vùng ký ức lịch sử vô cùng đặc
          biệt, in hằn những dấu ấn khó phai.
        </p>
        <p className="body-text" style={{ marginTop: 10 }}>
          <strong>Vai trò của Sổ Hộ Khẩu:</strong> Chế độ hộ khẩu mang tính chất sống còn — là cơ sở
          để Nhà nước phân phối lương thực, thực phẩm và nhu yếu phẩm theo đầu người.
        </p>
      </div>

      {/* ── 5. Hai ảnh lịch sử (NGOÀI card, dạng image-row) ── */}
      <div className="image-row anim-fade-up stagger-4">
        <div className="image-col">
          <img className="hist-img half" src="/images/mau_dich.jpg" alt="Cảnh chen chúc ở cửa hàng mậu dịch" />
          <div className="img-caption">
            <a
              href="https://giaoducthoidai.vn/dau-an-thoi-bao-cap-trong-ky-uc-tien-si-tai-chinh-post656831.html"
              target="_blank"
              rel="noreferrer"
              style={mutedUnderlineLinkStyle}
            >
              Cảnh chen chúc ở cửa hàng mậu dịch thời bao cấp. (BÁO GIÁO DỤC &amp; THỜI ĐẠI)
            </a>
          </div>
        </div>
        <div className="image-col">
          <img className="hist-img half" src="/images/tet_bao_cap.jpg" alt="Tết thời bao cấp" />
          <div className="img-caption">
            <a
              href="https://baoninhbinh.org.vn/tet-thoi-bao-cap/d20230112091014465.htm"
              target="_blank"
              rel="noreferrer"
              style={mutedUnderlineLinkStyle}
            >
              Tết thời bao cấp (Báo và Phát thanh, Truyền hình Ninh Bình)
            </a>
          </div>
        </div>
      </div>

      {/* ── 6. ĐẶC ĐIỂM CỦA NỀN KINH TẾ "TEM PHIẾU" ── */}
      <div className="info-card anim-fade-up stagger-5">
        <div className="section-heading">Đặc Điểm Của Nền Kinh Tế "Tem Phiếu"</div>
        <p className="body-text" style={{ marginBottom: 10 }}>
          Trong suốt 10 năm của thời kỳ này, bức tranh kinh tế - xã hội được vận hành theo một cơ chế
          hoàn toàn khác biệt:
        </p>
        <ul className="body-text" style={{ paddingLeft: 24, lineHeight: 1.9, listStyle: 'disc' }}>
          <li>
            <strong>Chế độ phân phối:</strong> Hầu hết mọi sinh hoạt kinh tế và hàng hóa đều do Nhà
            nước nắm toàn quyền điều hành và phân phối.
          </li>
          <li>
            <strong>Giao dịch bằng tem phiếu:</strong> Việc trao đổi bằng tiền mặt bị hạn chế tối đa.
            Hàng hóa được cấp phát dựa trên hệ thống tem phiếu, sổ, và bìa.
          </li>
          <li>
            <strong>Vai trò của Sổ Hộ Khẩu:</strong> Chế độ hộ khẩu được thiết lập và mang tính chất
            sống còn, vì đây là cơ sở để Nhà nước phân phối lương thực, thực phẩm và các nhu yếu phẩm
            khác theo đầu người.
          </li>
        </ul>
        <p className="body-text" style={{ fontStyle: 'italic', color: '#555', marginTop: 12, marginBottom: 2 }}>
          <a
            href="https://danviet.vn/thoi-bao-cap-la-giai-doan-nao-thoi-bao-cap-keo-dai-bao-lau-do-thoi-bao-cap-trong-the-nao-20221031235047089-d1053541.html"
            target="_blank"
            rel="noreferrer"
            style={{ ...mutedUnderlineLinkStyle, color: '#555' }}
          >
            Thời bao cấp là giai đoạn nào, thời bao cấp kéo dài bao lâu, đồ dùng thời bao cấp trông ra sao?
            <br />
            <em>(Báo điện tử của Trung ương Hội Nông dân Việt Nam)</em>
          </a>
        </p>
      </div>

      {/* ── 7. NÚT THẮT carousel ── */}
      <div className="anim-fade-up stagger-6">
        <Carousel slides={nutThatSlides} />
      </div>

      {/* ── 8. VÒNG VÂY BÊN NGOÀI ── */}
      <div className="info-card anim-fade-up stagger-7">
        <div className="section-heading">Vòng Vây Bên Ngoài: Áp Lực Kép</div>
        <p className="body-text" style={{ marginBottom: 10 }}>
          Không chỉ gặp vướng mắc bên trong, bối cảnh bên ngoài lúc bấy giờ như một "gọng kìm" siết
          chặt lấy nền kinh tế.
        </p>
        <ul className="body-text" style={{ paddingLeft: 24, lineHeight: 1.9, listStyle: 'disc' }}>
          <li>
            <strong>Cấm vận:</strong> Mỹ và nhiều nước phương Tây áp đặt lệnh cấm vận thương mại khắt
            khe.{' '}
            <em>
              <a
                href="https://kinhtevadubao.vn/quan-he-viet-nam-hoa-ky-tu-cam-van-den-hop-tac-toan-dien-13745.html"
                target="_blank"
                rel="noreferrer"
                style={{ ...mutedUnderlineLinkStyle, display: 'inline', fontStyle: 'italic' }}
              >
                Quan hệ Việt Nam - Hoa Kỳ: Từ cấm vận đến hợp tác toàn diện
              </a>
            </em>
            .
          </li>
          <li>
            <strong>Chiến tranh biên giới:</strong> Đất nước vừa thống nhất lại phải gồng mình bảo vệ
            biên giới Tây Nam và biên giới phía Bắc, vắt kiệt nguồn lực quốc gia.
            <ul
              style={{
                paddingLeft: 22,
                marginTop: 8,
                lineHeight: 1.9,
                listStyleType: 'disc',
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <li style={{ margin: 0, padding: 0, lineHeight: 1.9 }}>
                <a
                  href="https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/dau-an-trong-chang-duong-80-nam-cua-quan-doi-ta-bai-3-chien-dau-bao-ve-bien-gioi-chu-quyen-bien-dao-cua-to-quoc-va-hoan-thanh-nhiem-vu-quoc-te-807100"
                  target="_blank"
                  rel="noreferrer"
                  style={mutedUnderlineLinkStyle}
                >
                  Bài 3: Chiến đấu bảo vệ Tổ quốc ở biên giới Tây Nam, phía Bắc
                </a>
              </li>
              <li style={{ margin: 0, padding: 0, lineHeight: 1.9 }}>
                <a
                  href="https://baoquankhu4.com.vn/chinh-tri/bao-ve-bien-gioi-phia-bac-1979-45-nam-cuoc-chien-dau-chinh-nghia-cua-nhan-dan-viet-nam.html"
                  target="_blank"
                  rel="noreferrer"
                  style={mutedUnderlineLinkStyle}
                >
                  Bảo vệ biên giới phía Bắc 1979 – 45 năm cuộc chiến đấu chính nghĩa của Nhân dân Việt Nam
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Điểm tựa lung lay:</strong> Nguồn viện trợ từ Liên Xô và các nước XHCN Đông Âu
            giảm mạnh do bản thân khối này cũng đang bước vào thời kỳ suy thoái trầm trọng.
            <ul
              style={{
                paddingLeft: 22,
                marginTop: 8,
                lineHeight: 1.9,
                listStyleType: 'disc',
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <li style={{ margin: 0, padding: 0, lineHeight: 1.9 }}>
                <a
                  href="https://www.figma.com/exit?url=https%3A%2F%2Fjournal.hcmue.edu.vn%2Findex.php%2Fhcmuejos%2Farticle%2FviewFile%2F1558%2F1549"
                  target="_blank"
                  rel="noreferrer"
                  style={mutedUnderlineLinkStyle}
                >
                  Vài nét về quan hệ Việt Nam - Liên Xô từ năm 1975 đến năm 1990
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* ── 9. Wide document image (LỆNH CHỦ TỊCH) ── */}
      <div className="wide-image-wrap anim-fade-up stagger-8">
        <img className="hist-img wide" src="/images/lenh_chu_tich.jpg" alt="Lệnh của Chủ tịch nước" />
      </div>

      {/* ── 10. Hai ảnh chiến tranh ── */}
      <div className="image-row anim-fade-up stagger-2">
        <div className="image-col">
          <img className="hist-img war" src="/images/bodoi_c5.jpg" alt="Bộ đội C5" />
          <div className="img-caption">
            <a
              href="https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/dau-an-trong-chang-duong-80-nam-cua-quan-doi-ta-bai-3-chien-dau-bao-ve-bien-gioi-chu-quyen-bien-dao-cua-to-quoc-va-hoan-thanh-nhiem-vu-quoc-te-807100"
              target="_blank"
              rel="noreferrer"
              style={mutedUnderlineLinkStyle}
            >
              Bộ đội C5 lực lượng vũ trang tỉnh An Giang đánh trả quân Pol Pot xâm lược năm 1978. Ảnh tư liệu
            </a>
          </div>
        </div>
        <div className="image-col">
          <img className="hist-img war" src="/images/bien_gioi_phia_bac.jpg" alt="Ngày 17/2/1979" />
          <div className="img-caption">
            <a
              href="https://baoquankhu4.com.vn/chinh-tri/bao-ve-bien-gioi-phia-bac-1979-45-nam-cuoc-chien-dau-chinh-nghia-cua-nhan-dan-viet-nam.html"
              target="_blank"
              rel="noreferrer"
              style={mutedUnderlineLinkStyle}
            >
              Ngày 17/2/1979, lính Trung Quốc tràn sang biên giới nước ta.
            </a>
          </div>
        </div>
      </div>

      {/* ── 11. KẾT LUẬN ── */}
      <div className="info-card anim-fade-up stagger-3">
        <div className="section-heading">KẾT LUẬN: "ĐÊM TRƯỚC ĐỔI MỚI" VÀ MỆNH LỆNH LỊCH SỬ</div>
        <ul className="body-text" style={{ paddingLeft: 24, lineHeight: 1.9, listStyle: 'disc' }}>
          <li style={{ marginBottom: 10 }}>
            Đất nước ở bờ vực khủng hoảng kinh tế – xã hội trầm trọng. Đổi mới lúc này không còn là
            một lựa chọn để tốt hơn, mà là con đường duy nhất để sinh tồn.
          </li>
          <li style={{ marginBottom: 10 }}>
            Tất cả những khó khăn, bế tắc từ năm 1975 đến 1985 đã dồn nên thành một động lực khổng
            lồ, bùng nổ tại Đại hội Đảng toàn quốc lần thứ VI{' '}
            <strong>(Tháng 12/1986)</strong>.
          </li>
          <li>
            Đứng trước bờ vực khủng hoảng, nền kinh tế nước ta đối mặt với mệnh đề khắc nghiệt.{' '}
            <strong>"ĐỔI MỚI HAY LÀ CHẾT"</strong>, nhận thức bức thiết về 'sự sống còn' này đã được
            Tổng Bí thư Trường Chinh dũng cảm đặt nền móng lý luận trước thềm Đại hội VI. Ngay sau đó,
            mệnh lệnh lịch sử này được Tổng Bí thư Nguyễn Văn Linh tiếp bước và hiện thực hóa một cách
            quyết liệt, đập tan cơ chế quan liêu bao cấp bằng tinh thần{' '}
            <em>'Những việc cần làm ngay'</em>.<br />
            <em style={{ fontSize: 13, color: '#666' }}>
              (
              <a
                href="https://thanhnien.vn/doi-moi-hay-la-chet-185482133.htm"
                target="_blank"
                rel="noreferrer"
                style={{ ...mutedUnderlineLinkStyle, color: '#666' }}
              >
                'Đổi mới hay là chết'
              </a>
              ,{' '}
              <a
                href="https://vov.vn/chinh-tri/dang/tong-bi-thu-truong-chinh-nguoi-dat-nen-mong-cho-cong-cuoc-doi-moi-591630.vov"
                target="_blank"
                rel="noreferrer"
                style={{ ...mutedUnderlineLinkStyle, color: '#666' }}
              >
                Tổng Bí thư Trường Chinh – người đặt nền móng cho công cuộc Đổi mới | VOV.VN
              </a>
              )
            </em>
          </li>
        </ul>
      </div>

      {/* ── 12. Hai leader cards ── */}
      <div className="leaders-row anim-fade-up stagger-4">
        <div className="leader-card">
          <img
            className="leader-flag"
            src="/images/logo_header_f3623.png"
            alt="Cờ Đảng và Quốc kỳ"
          />
          <img className="avatar-circle" src="/images/truong_chinh.jpg" alt="Trường Chinh" />
          <div className="leader-content">
            <div className="leader-name">
              <span className="leader-name-main">TRƯỜNG CHINH</span>
              <span className="leader-name-sub">(CỐ TỔNG BÍ THƯ)</span>
            </div>
            <div className="leader-quote-label">Đổi mới hay là chết</div>
            <div className="leader-quote-main">"Nhìn thẳng vào sự thật, nói rõ sự thật, đánh giá đúng sự thật"</div>
          </div>
        </div>
        <div className="leader-card">
          <img
            className="leader-flag"
            src="/images/logo_header_f3623.png"
            alt="Cờ Đảng và Quốc kỳ"
          />
          <img className="avatar-circle" src="/images/nguyen_van_linh.jpg" alt="Nguyễn Văn Linh" />
          <div className="leader-content">
            <div className="leader-name">
              <span className="leader-name-main">NGUYỄN VĂN LINH</span>
              <span className="leader-name-sub">(CỐ TỔNG BÍ THƯ)</span>
            </div>
            <div className="leader-quote-main">Những việc cần làm ngay</div>
          </div>
        </div>
      </div>

      {/* ── 13. SÁCH VÀ SERIES carousel ── */}
      <div className="anim-fade-up stagger-5">
        <Carousel slides={sachSlides} />
      </div>

      {/* ── 14. Video ── */}
      <div className="video-section anim-fade-up stagger-6" style={{ maxWidth: 860 }}>
        <div
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 700,
            color: 'var(--red)',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 22,
            marginBottom: 14,
          }}
        >
          MỞ ĐẦU ĐẠI HỘI VI
        </div>
        <iframe
          src="https://www.youtube.com/embed/BXScTu7Qfpk"
          title="MỞ ĐẦU ĐẠI HỘI VI"
          style={{
            width: '100%',
            aspectRatio: '710 / 439',
            border: 'none',
            borderRadius: 8,
            display: 'block',
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}
