export default function Footer() {
  return (
    <footer style={{
      background: 'var(--yellow)',
      width: '100%',
      padding: '32px 54px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 24,
      marginTop: 48,
    }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--red)', lineHeight: 1.7 }}>
          Môn học: VNR202_LỊCH SỬ ĐẢNG<br />
          Lớp: GD1811<br />
          Nội dung: ĐỔI MỚI 1986 – BƯỚC NGOẶT LỊCH SỬ CỦA DÂN TỘC
        </div>
        <img
          src="/images/logo_fpt.png"
          alt="Logo FPT"
          style={{ height: 46, objectFit: 'contain', marginTop: 12, display: 'block' }}
        />
        <div style={{ fontSize: 13, color: 'var(--red)', marginTop: 8 }}>
          Website này phục vụ cho mục đích học thuật, không mang yếu tố thương mại
        </div>
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--red)', lineHeight: 1.8, textAlign: 'right' }}>
        NHÓM 6<br />
        1. Phan Nguyễn Khánh Trang SE182623<br />
        2. Nguyễn Thị Kiều Anh SA180014<br />
        3. Nguyễn Hoàng Nhật SE182399<br />
        4. Trần Hoàng Phúc SE162127<br />
        5. Hà Phương Uyên SE182925
      </div>
    </footer>
  );
}
