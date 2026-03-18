// ── Reusable sub-bullet component ─────────────────────────────────────────────
function SubItem({ children, color = 'var(--red)' }: { children: React.ReactNode; color?: string }) {
  return (
    <li style={{ display: 'flex', gap: 10, marginTop: 6, alignItems: 'flex-start', listStyle: 'none' }}>
      <span style={{ color, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>–</span>
      <span>{children}</span>
    </li>
  );
}

export default function BienDong() {
  return (
    <>
      {/* 1. Banner */}
      <div className="section-banner anim-fade-up"
        style={{ backgroundImage: `url('/images/bg_trong_dong.jpg')` }}>
        <div className="banner-title">
          Việt Nam Trước Những Biến Động Thế Giới<br />
          (Cuối Những Năm 1980 – Đầu 1990)
        </div>
      </div>

      {/* 2. Two side-by-side photos */}
      <div className="anim-fade-up" style={{
        maxWidth: 'var(--content-max)', margin: '24px auto 0',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
      }}>
        <div>
          <img src="/images/lienxo_1.jpg" alt="Người dân Litva biểu tình" style={{
            width: '100%', height: 340, objectFit: 'cover',
            borderRadius: 16, display: 'block', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }} />
          <p style={{ marginTop: 8, fontSize: 15, fontStyle: 'italic', lineHeight: 1.5,
            color: '#333', textDecoration: 'underline', textAlign: 'right' }}>
            Người dân Litva (nước thành viên của Liên Xô) tụ tập ở thủ đô Vilnius vào ngày 12-1-1990 để đòi tách khỏi Liên Xô. Litva là nước cộng hòa Xô viết đầu tiên tuyên bố độc lập. Ảnh: Getty. (Báo điện tử Quân đội nhân dân)
          </p>
        </div>
        <div>
          <img src="/images/lienxo_2.jpg" alt="Gorbachev tại Vilnius" style={{
            width: '100%', height: 340, objectFit: 'cover',
            borderRadius: 16, display: 'block', boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }} />
          <p style={{ marginTop: 8, fontSize: 15, fontStyle: 'italic', lineHeight: 1.5,
            color: '#333', textDecoration: 'underline', textAlign: 'right' }}>
            Tổng thống Liên Xô Mikhail Gorbachev (giữa) đang nói chuyện với cư dân Vilnius, Litva, vào ngày 11-1-1990 trong một nỗ lực làm chậm lại quá trình ly khai của nước cộng hòa này. Ảnh: AP. (Báo điện tử Quân đội nhân dân)
          </p>
        </div>
      </div>

      {/* 3. Yellow card – Bối cảnh thế giới */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)', borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)', maxWidth: 'var(--content-max)',
        margin: '24px auto 0', padding: '36px 52px',
      }}>
        <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 32,
          color: 'var(--red)', textTransform: 'uppercase', marginBottom: 20, lineHeight: 1.3 }}>
          Bối cảnh thế giới cực kỳ phức tạp và biến động lớn
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.85, color: '#000', marginBottom: 12 }}>
          Cuối thập niên 1980, thế giới bước vào thời kỳ <strong>"rung chuyển"</strong> làm thay đổi sâu sắc cục diện chính trị toàn cầu:
        </p>
        <ul style={{ fontSize: 18, lineHeight: 1.85, color: '#000', paddingLeft: 24, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>
            <strong>Sự sụp đổ của hệ thống XHCN ở Đông Âu:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Các quốc gia đồng minh truyền thống của Việt Nam lần lượt thay đổi chế độ chính trị, gây ra sự đứt gãy trong quan hệ hợp tác quốc tế.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Đỉnh điểm là sự tan rã của Liên Xô (1991):</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Đây là biến động địa chính trị lớn nhất thế kỷ XX, chấm dứt sự tồn tại của cực đối trọng quan trọng nhất đối với phe tư bản chủ nghĩa.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Mất chỗ dựa kinh tế và quân sự:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Việt Nam đột ngột mất đi nguồn viện trợ khổng lồ về vốn, công nghệ, nhiên liệu, thiết bị và lương thực.</SubItem>
            </ul>
          </li>
          <li>
            <strong>Bao vây và cô lập:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Việt Nam rơi vào tình trạng khó khăn chồng chất khi vừa bị bao vây kinh tế, vừa mất đi thị trường xuất nhập khẩu truyền thống.</SubItem>
            </ul>
          </li>
        </ul>
      </div>

      {/* 4. Yellow card – Sự dao động về tư tưởng */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)', borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)', maxWidth: 'var(--content-max)',
        margin: '20px auto 0', padding: '36px 52px',
      }}>
        <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 32,
          color: 'var(--red)', textTransform: 'uppercase', marginBottom: 20, lineHeight: 1.3 }}>
          Sự dao động về tư tưởng và con đường phát triển
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.85, color: '#000', marginBottom: 12 }}>
          Sự sụp đổ của mô hình XHCN ở Liên Xô và Đông Âu đã tạo ra những tác động tâm lý và lý luận nặng nề:
        </p>
        <ul style={{ fontSize: 18, lineHeight: 1.85, color: '#000', paddingLeft: 24, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>
            <strong>Khủng hoảng niềm tin:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Xuất hiện sự dao động về tư tưởng, đặt ra những hoài nghi về tính đúng đắn của con đường XHCN.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Tranh luận gay gắt:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Ở trong nước, xuất hiện nhiều ý kiến khác nhau về việc nên tiếp tục kiên trì hay thay đổi hoàn toàn con đường phát triển để thích ứng với tình hình mới.</SubItem>
            </ul>
          </li>
          <li>
            <strong>Thách thức về lý luận:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Đảng phải đối mặt với nhiệm vụ giải quyết các quan niệm lạc hậu, <em>"duy ý chí"</em> trong nhận thức cũ để định hình một mô hình phát triển mới phù hợp với thực tiễn quốc tế.</SubItem>
            </ul>
          </li>
        </ul>
      </div>

      {/* 5. Yellow card – Sự phản ứng và bản lĩnh */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)', borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)', maxWidth: 'var(--content-max)',
        margin: '20px auto 0', padding: '36px 52px',
      }}>
        <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 32,
          color: 'var(--red)', textTransform: 'uppercase', marginBottom: 20, lineHeight: 1.3 }}>
          Sự phản ứng và bản lĩnh của Việt Nam: Kiên định và Đẩy mạnh Đổi mới
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.85, color: '#000', marginBottom: 12 }}>
          Thay vì rơi vào trạng thái thụ động, Đảng Cộng sản Việt Nam đã thể hiện vai trò lãnh đạo quyết định qua những quyết sách lịch sử:
        </p>
        <p style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5, color: '#000', marginBottom: 8 }}>
          Kiên định mục tiêu và nền tảng tư tưởng
        </p>
        <ul style={{ fontSize: 18, lineHeight: 1.85, color: '#000', paddingLeft: 24, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>
            <strong>Khẳng định con đường đã chọn:</strong> Tiếp tục kiên trì mục tiêu Độc lập dân tộc gắn liền với chủ nghĩa xã hội.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Đổi mới không phải là thay đổi mục tiêu mà là làm cho mục tiêu đó được thực hiện hiệu quả hơn.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Nền tảng kim chỉ nam:</strong> Kiên trì lấy chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Tại Hội nghị Trung ương 6 (khóa VI) năm 1989, Đảng đã đề ra các nguyên tắc cơ bản để định hướng, không cho phép sự chệch hướng trong quá trình đổi mới.</SubItem>
            </ul>
          </li>
          <li>
            <strong>Tăng cường vai trò lãnh đạo:</strong> Khẳng định sự lãnh đạo của Đảng là điều kiện tiên quyết cho mọi thắng lợi.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Đổi mới hệ thống chính trị nhằm mục tiêu tăng cường sức mạnh chứ không làm yếu đi vai trò điều hành của Nhà nước.</SubItem>
            </ul>
          </li>
        </ul>
      </div>

      {/* 6. Large congress photo */}
      <div className="anim-fade-up" style={{ maxWidth: 'var(--content-max)', margin: '28px auto 0' }}>
        <img src="/images/daihoi_vi_tuli.jpg" alt="Đại hội đại biểu toàn quốc lần thứ VI"
          style={{ width: '100%', maxWidth: 887, display: 'block', margin: '0 auto',
            borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }} />
        <p style={{ maxWidth: 887, margin: '10px auto 0', fontSize: 15, fontStyle: 'italic',
          textDecoration: 'underline', textAlign: 'center', color: '#333', lineHeight: 1.5 }}>
          Đại hội đại biểu toàn quốc lần thứ VI của Đảng. Ảnh tư liệu: Báo Nhân Dân (Báo Quân đội Nhân dân)
        </p>
      </div>

      {/* 7. Yellow card – Đẩy mạnh công cuộc Đổi mới toàn diện */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)', borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)', maxWidth: 'var(--content-max)',
        margin: '24px auto 0', padding: '36px 52px',
      }}>
        <p style={{ fontSize: 18, lineHeight: 1.85, color: '#000', marginBottom: 16 }}>
          <strong>Đẩy mạnh công cuộc Đổi mới toàn diện (từ sau 1986)</strong> — Sự lãnh đạo của Đảng được thể hiện qua việc thay đổi tư duy kinh tế một cách sâu sắc và quyết liệt:
        </p>
        <ul style={{ fontSize: 18, lineHeight: 1.85, color: '#000', paddingLeft: 24, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 8 }}>
            <strong>Đổi mới tư duy kinh tế:</strong> Chuyển từ kế hoạch hóa tập trung, bao cấp sang nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường dưới sự quản lý của Nhà nước.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Thừa nhận sự tồn tại của nhiều thành phần kinh tế (quốc doanh, tập thể, tư nhân, cá thể...) là khách quan trong thời kỳ quá độ.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Thực hiện các chương trình đột phá:</strong> Tập trung vào Ba chương trình kinh tế lớn: Lương thực – thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu để giải quyết nhu cầu thiết yếu của nhân dân.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Nghị quyết 10 (1988) khẳng định hộ nông dân là đơn vị kinh tế tự chủ, tạo động lực mạnh mẽ cho sản xuất nông nghiệp.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Cải cách quản lý và chống lạm phát:</strong> Thực hiện hạch toán kinh doanh, xóa bỏ bao cấp qua giá, thắt chặt ngân sách để kiềm chế lạm phát phi mã.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Hội nhập và Đối ngoại:</strong> Chủ động chuyển từ đối đầu sang đấu tranh và hợp tác trong hòa bình.
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 4 }}>
              <SubItem>Ban hành Luật Đầu tư nước ngoài (12/1987) để mở cửa đón dòng vốn và công nghệ quốc tế, từng bước thoát khỏi thế bị bao vây.</SubItem>
            </ul>
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Đại hội VII (6/1991):</strong> Thông qua Cương lĩnh xây dựng đất nước thời kỳ quá độ lên CNXH, khẳng định con đường phát triển đúng đắn.
          </li>
          <li>
            <strong>Bình thường hóa quan hệ (11/1991):</strong> Với Trung Quốc, mở ra con đường ngoại giao mới đưa Việt Nam hội nhập vào trật tự quốc tế, chấm dứt cô lập.
          </li>
        </ul>
      </div>

      {/* 8. Red conclusion card */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)', margin: '24px auto 32px', padding: '36px 52px',
      }}>
        <h2 style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 700, fontSize: 32,
          color: 'var(--yellow)', textTransform: 'uppercase', marginBottom: 20, lineHeight: 1.3 }}>
          Kết Luận
        </h2>
        <ul style={{ fontSize: 18, lineHeight: 1.85, color: '#fff', paddingLeft: 24, listStyleType: 'disc' }}>
          <li style={{ marginBottom: 10 }}>
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
