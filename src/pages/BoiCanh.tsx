import Carousel from '../components/Carousel';

export default function BoiCanh() {
  const nutThatSlides = [
    {
      header: 'NÚT THẮT THỂ CHẾ: CƠ CHẾ KẾ HOẠCH HÓA TẬP TRUNG',
      content: (
        <p className="body-text">
          Nhà nước can thiệp vào mọi mặt của nền kinh tế. Phủ nhận quy luật giá trị và kinh tế hàng hóa.
          Mọi vật tư, hàng hóa đều do Nhà nước nắm giữ và phân phối qua hệ thống tem phiếu, sổ gạo.<br /><br />
          Tạo ra sự cào bằng. Cắt đứt động lực cá nhân vì làm nhiều hay làm ít cũng chỉ nhận được
          khẩu phần quy định. Cửa hàng bách hóa mậu dịch trở thành nơi quyền lực, và <em>"xếp hàng"</em>{' '}
          trở thành nét văn hóa bất đắc dĩ.
        </p>
      ),
    },
    {
      header: 'NÚT THẮT KINH TẾ: KHỦNG HOẢNG VÀ LẠM PHÁT PHI MÃ',
      content: (
        <p className="body-text">
          Do sản xuất không gắn liền với nhu cầu thị trường, hàng hóa thiếu hụt trầm trọng trong khi
          lạm phát bùng nổ phi mã. Đỉnh điểm là năm 1986, lạm phát lên đến <strong>774,7%</strong> —
          một con số chưa từng có trong lịch sử kinh tế Việt Nam.<br /><br />
          Người dân xếp hàng từ đêm khuya chỉ để mua được lương thực, thực phẩm theo tem phiếu.
          Kinh tế ngầm và chợ đen phát triển mạnh như một hệ quả tất yếu.
        </p>
      ),
    },
    {
      header: 'NÚT THẮT TƯ DUY: CĂN BỆNH "DUY Ý CHÍ"',
      content: (
        <p className="body-text">
          <strong>Tư duy duy ý chí, chủ quan:</strong> Áp đặt các mô hình kinh tế theo lý thuyết
          thuần túy, bỏ qua thực tiễn khách quan của đất nước.<br />
          <strong>Bảo thủ và rập khuôn:</strong> Ngại thay đổi, sợ sai lầm, không dám nhìn thẳng vào
          những bất cập của mô hình kinh tế kế hoạch hóa tập trung.<br />
          <strong>Hệ quả:</strong> Toàn bộ xã hội bị cuốn vào một guồng máy thiếu sức sống, thiếu
          động lực sáng tạo. Nhu cầu thực tế của người dân và doanh nghiệp bị phủ nhận, dẫn đến sự
          phá vỡ tự phát từ bên dưới.
        </p>
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
          Kỳ 1: "Đêm trước" đổi mới: Ký ức thời "sổ gạo"<br />
          Kỳ 2: "Vòng kim cô"<br />
          Kỳ 3: Khi chợ trời bị đánh sập<br />
          Kỳ 4: Công phá "lũy tre"<br />
          Kỳ 5: Chiếc áo cơ chế mới<br />
          Kỳ 6: Tưởng như xa xôi lắm<br />
          Kỳ 7: Từ chạy gạo đến phá cơ chế giá<br />
          Kỳ 8: Bù giá vào lương<br />
          Kỳ 9: Những thông điệp gửi đến Ba Đình
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
            style={{ width: 200, height: 'auto', margin: '0 auto', display: 'block', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,.25)', objectFit: 'cover' }}
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
        style={{ backgroundImage: "url('/images/bg_trong_dong.jpg')" }}
      >
        <div className="banner-title">
          Bối cảnh trước năm 1986<br />
          Những khó khăn của đất nước
        </div>
      </div>

      {/* ── 2. 6 Tem phiếu images (3×2 grid) ─────── */}
      <div
        className="anim-fade-up delay-1"
        style={{ maxWidth: 'var(--content-max)', margin: '20px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}
      >
        {[1,2,3,4,5,6].map(n => (
          <img key={n} className="hist-img grid-photo" src={`/images/tem_phieu_${n}.jpg`} alt="Ảnh tư liệu tem phiếu" />
        ))}
      </div>
      <div className="img-caption-full anim-fade-up delay-1">
        Bộ sưu tập tem phiếu, sổ gạo (VietNamNet)
      </div>

      {/* ── 3. KÝ ỨC card (full-width, text only) ── */}
      <div className="info-card anim-fade-up delay-2">
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
      <div className="info-card anim-fade-up delay-2">
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
      <div className="image-row anim-fade-up">
        <div className="image-col">
          <img className="hist-img half" src="/images/mau_dich.jpg" alt="Cảnh chen chúc ở cửa hàng mậu dịch" />
          <div className="img-caption">
            Cảnh chen chúc ở cửa hàng mậu dịch thời bao cấp. (BÁO GIÁO DỤC &amp; THỜI ĐẠI)
          </div>
        </div>
        <div className="image-col">
          <img className="hist-img half" src="/images/tet_bao_cap.jpg" alt="Tết thời bao cấp" />
          <div className="img-caption">
            Tết thời bao cấp (Báo và Phát thanh, Truyền hình Ninh Bình)
          </div>
        </div>
      </div>

      {/* ── 6. ĐẶC ĐIỂM CỦA NỀN KINH TẾ "TEM PHIẾU" ── */}
      <div className="info-card anim-fade-up">
        <div className="section-heading">Đặc Điểm Của Nền Kinh Tế "Tem Phiếu"</div>
        <p className="body-text" style={{ fontStyle: 'italic', color: '#555', marginBottom: 12 }}>
          Thời bao cấp là giai đoạn nào, thời bao cấp kéo dài bao lâu, đồ dùng thời bao cấp trông ra sao?<br />
          <em>(Báo điện tử của Trung ương Hội Nông dân Việt Nam)</em>
        </p>
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
      </div>

      {/* ── 7. NÚT THẮT carousel ── */}
      <div className="anim-fade-up">
        <Carousel slides={nutThatSlides} />
      </div>

      {/* ── 8. VÒNG VÂY BÊN NGOÀI ── */}
      <div className="info-card anim-fade-up">
        <div className="section-heading">Vòng Vây Bên Ngoài: Áp Lực Kép</div>
        <p className="body-text" style={{ marginBottom: 10 }}>
          Không chỉ gặp vướng mắc bên trong, bối cảnh bên ngoài lúc bấy giờ như một "gọng kìm" siết
          chặt lấy nền kinh tế.
        </p>
        <ul className="body-text" style={{ paddingLeft: 24, lineHeight: 1.9, listStyle: 'disc' }}>
          <li>
            <strong>Cấm vận:</strong> Mỹ và nhiều nước phương Tây áp đặt lệnh cấm vận thương mại khắt
            khe. Quan hệ Việt Nam - Hoa Kỳ: Từ cấm vận đến hợp tác toàn diện.
          </li>
          <li>
            <strong>Chiến tranh biên giới:</strong> Đất nước vừa thống nhất lại phải gồng mình bảo vệ
            biên giới Tây Nam và biên giới phía Bắc, vắt kiệt nguồn lực quốc gia.
          </li>
          <li>
            <strong>Điểm tựa lung lay:</strong> Nguồn viện trợ từ Liên Xô và các nước XHCN Đông Âu
            giảm mạnh do bản thân khối này cũng đang bước vào thời kỳ suy thoái trầm trọng.
          </li>
        </ul>
      </div>

      {/* ── 9. Wide document image (LỆNH CHỦ TỊCH) ── */}
      <div className="wide-image-wrap anim-fade-up">
        <img className="hist-img wide" src="/images/lenh_chu_tich.jpg" alt="Lệnh của Chủ tịch nước" />
      </div>

      {/* ── 10. Hai ảnh chiến tranh ── */}
      <div className="image-row anim-fade-up">
        <div className="image-col">
          <img className="hist-img war" src="/images/bodoi_c5.jpg" alt="Bộ đội C5" />
          <div className="img-caption">
            Bộ đội C5 lực lượng vũ trang tỉnh An Giang đánh trả quân Pol Pot xâm lược năm 1978.
            Ảnh tư liệu
          </div>
        </div>
        <div className="image-col">
          <img className="hist-img war" src="/images/bien_gioi_phia_bac.jpg" alt="Ngày 17/2/1979" />
          <div className="img-caption">
            Ngày 17/2/1979, lính Trung Quốc tràn sang biên giới nước ta.
          </div>
        </div>
      </div>

      {/* ── 11. KẾT LUẬN ── */}
      <div className="info-card anim-fade-up">
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
              ('Đổi mới hay là chết', Tổng Bí thư Trường Chinh – người đặt nền móng cho công cuộc Đổi
              mới | VOV.VN)
            </em>
          </li>
        </ul>
      </div>

      {/* ── 12. Hai leader cards ── */}
      <div className="leaders-row anim-fade-up">
        <div className="leader-card">
          <img src="/images/logo_fpt2.png" alt="Logo" style={{ height: 50, objectFit: 'contain', display: 'block' }} />
          <img className="avatar-circle" src="/images/truong_chinh.jpg" alt="Trường Chinh" />
          <div className="leader-name">TRƯỜNG CHINH (CỐ TỔNG BÍ THƯ)</div>
          <div className="leader-quote-label">Đổi mới hay là chết</div>
          <div className="leader-quote-main">"Nhìn thẳng vào sự thật, nói rõ sự thật, đánh giá đúng sự thật"</div>
        </div>
        <div className="leader-card">
          <img src="/images/logo_fpt2.png" alt="Logo" style={{ height: 50, objectFit: 'contain', display: 'block' }} />
          <img className="avatar-circle" src="/images/nguyen_van_linh.jpg" alt="Nguyễn Văn Linh" />
          <div className="leader-name">NGUYỄN VĂN LINH (CỐ TỔNG BÍ THƯ)</div>
          <div className="leader-quote-main">Những việc cần làm ngay</div>
        </div>
      </div>

      {/* ── 13. SÁCH VÀ SERIES carousel ── */}
      <div className="anim-fade-up">
        <Carousel slides={sachSlides} />
      </div>

      {/* ── 14. Video ── */}
      <div className="video-section anim-fade-up">
        <div className="video-placeholder">
          <div className="play-btn" />
        </div>
      </div>
    </>
  );
}
