export default function UserPanel({ setPage }) {
  return (
    <div className="user-panel">
      <header className="user-header">
        <h2>🎬 پنل کاربری</h2>
        <button className="logout-btn" onClick={() => setPage("home")}>
          خروج
        </button>
      </header>

      <div className="user-content">
        <div className="user-info">
          
          <h3>کاربر محترم</h3>
          <p>example@email.com</p>
        </div>

        <div className="user-actions">
          <div className="card">
            <h4>🎥 دوره‌های من</h4>
            <p>در حال حاضر در ۲ دوره فعال هستید.</p>
            <button>مشاهده جزئیات</button>
          </div>
          <div className="card">
            <h4>📰 اخبار اختصاصی</h4>
            <p>۳ خبر جدید برای شما آماده است.</p>
            <button>مشاهده اخبار</button>
          </div>
          <div className="card">
            <h4>⚙️ تنظیمات حساب</h4>
            <p>ویرایش پروفایل یا تغییر رمز عبور.</p>
            <button>ورود به تنظیمات</button>
          </div>
        </div>
      </div>
    </div>
  );
}