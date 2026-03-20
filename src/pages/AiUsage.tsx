const tools = [
  {
    logo: '/images/logo_gemini.png',
    name: 'GEMINI',
    purpose: 'Sử dụng để trích dẫn và đối chiếu nội dung lý thuyết từ giáo trình học tập Lịch sử Đảng nhằm làm nền tảng lập luận và kiểm chứng thông tin.',
    edit: 'Đối chiếu lại với bản giáo trình gốc, ghi rõ chương–trang; nội dung không xác minh được sẽ bị loại bỏ hoặc viết lại theo nguồn chuẩn.',
  },
  {
    logo: '/images/logo_chatgpt.png',
    name: 'CHATGPT',
    purpose: 'Soạn nội dung cho phần thuyết trình (dàn ý, lời dẫn, ghi chú cho người thuyết trình).',
    edit: 'Rút gọn văn phong, chỉnh sửa các phần thuật ngữ chưa rõ nghĩa; bổ sung trích dẫn chính xác, ghi rõ nguồn và số trang trích dẫn từ văn bản chính thống.',
  },
  {
    logo: '/images/logo_grok.png',
    name: 'GROK',
    purpose: 'Kiểm tra lại ngôn ngữ bài viết, tính học thuật và luận điệu.',
    edit: 'Đọc lại kết quả từ AI và kiểm tra lại bài viết lần nữa trước khi để lên website.',
  },
];

const timelineItems = [
  {
    num: 1, color: '#000', position: 'above',
    title: 'Đánh Dấu Nội Dung AI',
    bodyLabel: '',
    body: 'Mọi nội dung do công cụ trí tuệ nhân tạo đề xuất (nhận định, trích dẫn, số liệu) được đánh dấu.',
  },
  {
    num: 2, color: 'var(--red)', position: 'below',
    title: 'Đối Chiếu Nguồn Chính Thống',
    bodyLabel: '',
    body: 'Đối chiếu với Giáo Trình Học Tập Lịch Sử Đảng, nghị quyết và các văn bản chính thức.',
  },
  {
    num: 3, color: '#000', position: 'above',
    title: 'Kết Luận Kiểm Chứng',
    bodyLabel: 'Phân Loại Nội Dung:',
    body: 'Hợp Lệ / Chưa Đủ Căn Cứ / Sai.',
  },
  {
    num: 4, color: 'var(--red)', position: 'below',
    title: 'Chỉnh Sửa Và Chịu Trách Nhiệm',
    bodyLabel: '',
    body: 'Chỉ giữ lại nội dung đã xác minh, nhóm chịu trách nhiệm về bản cuối cùng.',
  },
];

export default function AiUsage() {
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
        <div className="banner-title">Ai Usage</div>
      </div>

      {/* Objective card – yellow */}
      <div className="anim-fade-up" style={{
        background: 'var(--yellow-light)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 'var(--content-max)',
        margin: '32px auto 0',
        padding: '28px 52px 32px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'La Co', 'Be Vietnam Pro', serif",
          fontWeight: 700,
          fontSize: 28,
          color: 'var(--red)',
          lineHeight: 1.5,
          margin: 0,
        }}>
          MỤC TIÊU SỬ DỤNG TRÍ TUỆ NHÂN TẠO
        </p>
        <p style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: 400,
          fontSize: 22,
          color: '#000',
          lineHeight: 1.6,
          marginTop: 10,
          marginBottom: 0,
        }}>
          Nhóm sử dụng trí tuệ nhân tạo với vai trò hỗ trợ trong quá trình thực hiện bài tập.
          Trí tuệ nhân tạo <strong>không được sử dụng</strong> để thay thế hoàn toàn việc
          nghiên cứu, phân tích và viết nội dung học thuật.
        </p>
      </div>

      {/* 3 AI tool cards */}
      <div className="anim-fade-up" style={{
        maxWidth: 'var(--content-max)',
        margin: '28px auto 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {tools.map(({ logo, name, purpose, edit }) => (
          <div key={name} style={{
            background: '#FFF3F3',
            borderRadius: 32,
            padding: '28px 26px 28px',
            boxShadow: 'var(--shadow)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <img src={logo} alt={name} style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Be Vietnam Pro, sans-serif',
                fontWeight: 700,
                fontSize: 24,
                color: 'var(--red)',
              }}>{name}</span>
            </div>

            {/* Mục đích */}
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Mục đích</p>
              <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: 1.6 }}>{purpose}</p>
            </div>

            {/* Chỉnh sửa */}
            <div>
              <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Chỉnh sửa của sinh viên</p>
              <p style={{ fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: 1.6 }}>{edit}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Red disclaimer */}
      <div className="anim-fade-up" style={{
        background: 'var(--red)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        maxWidth: 776,
        margin: '28px auto 0',
        padding: '28px 44px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 24,
          color: '#fff',
          lineHeight: 1.6,
          margin: 0,
        }}>
          Trí tuệ nhân tạo chỉ đóng vai trò hỗ trợ việc nghiên cứu, sự phân tích và sự chịu trách nhiệm học thuật của nhóm.
        </p>
      </div>

      {/* Timeline */}
      <div className="anim-fade-up" style={{ maxWidth: 'var(--content-max)', margin: '48px auto 48px', padding: '0 32px' }}>
        <p style={{
          textAlign: 'center',
          fontFamily: 'Be Vietnam Pro, sans-serif',
          fontWeight: 600,
          fontSize: 24,
          color: 'var(--red)',
          marginBottom: 40,
        }}>QUY TRÌNH KIỂM CHỨNG THÔNG TIN</p>

        {/*
          Layout: total height = 260px, line at y=130 (centre).
          "above": spacer(52) + circle(48) + connector(30) = 130 → line → text(130)
          "below": text(130) → line → connector(30) + circle(48) + spacer(52)
        */}
        <div style={{ position: 'relative', height: 260 }}>
          {/* Red horizontal line with arrowhead */}
          <div style={{
            position: 'absolute',
            top: 130,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}>
            <div style={{ flex: 1, height: 3, background: 'var(--red)' }} />
            <div style={{
              width: 0, height: 0,
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              borderLeft: '13px solid var(--red)',
              flexShrink: 0,
            }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: '100%', position: 'relative', zIndex: 1 }}>
            {timelineItems.map(({ num, color, position, title, bodyLabel, body }) => {
              const isAbove = position === 'above';
              const pBase: React.CSSProperties = {
                fontFamily: 'Be Vietnam Pro, sans-serif',
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'center',
              };
              const circleEl = (
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Be Vietnam Pro, sans-serif', fontWeight: 800, fontSize: 18,
                  color: '#fff', flexShrink: 0, zIndex: 2,
                  position: 'relative',
                }}>
                  {num}
                </div>
              );
              const connectorEl = (
                <div style={{ width: 2, height: 36, background: color, flexShrink: 0 }} />
              );
              const textEl = (
                <div style={{ textAlign: 'center', maxWidth: 240 }}>
                  <p style={{ ...pBase, fontWeight: 700, marginBottom: 4 }}>{title}</p>
                  {bodyLabel ? (
                    <p style={{ ...pBase, fontWeight: 700, marginBottom: 2 }}>{bodyLabel}</p>
                  ) : null}
                  <p style={{ ...pBase, fontWeight: 400 }}>{body}</p>
                </div>
              );

              const junctionDot = (
                <div style={{
                  position: 'absolute',
                  top: 130,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 13, height: 13,
                  borderRadius: '50%',
                  background: color,
                  zIndex: 3,
                }} />
              );

              return (
                <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 260, position: 'relative' }}>
                  {junctionDot}
                  {isAbove ? (
                    <>
                      {/* spacer: 130 - 48 - 36 = 46 → connector bottom lands exactly on line */}
                      <div style={{ height: 46, flexShrink: 0 }} />
                      {circleEl}
                      {connectorEl}
                      {/* text area below line: 260 - 130 - 6(line) = 124px */}
                      <div style={{
                        flex: 1,
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                        paddingTop: 14,
                      }}>
                        {textEl}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* text area above line: 130px, text sticks to bottom */}
                      <div style={{
                        height: 130,
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'flex-end', paddingBottom: 12, flexShrink: 0,
                      }}>
                        {textEl}
                      </div>
                      {connectorEl}
                      {circleEl}
                      {/* bottom spacer: 260 - 130 - 36 - 48 = 46 */}
                      <div style={{ height: 46, flexShrink: 0 }} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
