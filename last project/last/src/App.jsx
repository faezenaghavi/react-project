import { useState } from "react";
import Information from "./information.jsx";
import UserPanel from "./UserPanel.jsx";
import { useEffect, useRef } from "react";

// تصاویر
import logo from "./assets/picture/logo.png";
import headerPhoto from "./assets/picture/soldier.png";
import mehdi from "./assets/picture/mehdi.png";
import mehdi2 from "./assets/picture/mehdi2.png";
import lorem from "./assets/picture/lorem.png";
import camera from "./assets/picture/camera.png";
import ali from "./assets/picture/ali.png";
import war1 from "./assets/picture/war.png";
import war2 from "./assets/picture/war2.png";
import hadi from "./assets/picture/hadi.png";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function App() {
  const [page, setPage] = useState("home");
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* صفحه اصلی */}
      {page === "home" && (
        <div className="app">
          <Header  setShowModal={setShowModal} />
          <SoldierPhoto />
          <Productions setPage={setPage} />
          <Courses />
          <News />
          <States />

          {/* پاپ‌آپ ورود */}
          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  ✖
                </button>
                <h2>ورود / عضویت</h2>
                <form
                  className="login-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowModal(false);
                    setPage("panel"); // رفتن به صفحه پنل کاربری
                  }}
                >
                  <label>ایمیل:</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    required
                  />
                  <label>رمز عبور:</label>
                  <input type="password" placeholder="******" required />
                  <button type="submit" className="submit-btn">
                    ورود
                  </button>
                  <p className="signup-text">
                    حساب ندارید؟ <a href="#">ثبت‌نام کنید</a>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* صفحه اطلاعات */}
      {page === "information" && <Information setPage={setPage} />}

      {/* صفحه پنل کاربری */}
      {page === "panel" && <UserPanel setPage={setPage} />}
    </div>
  );
}

// ==================== Header ====================
function Header({ setPage, setShowModal }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="part1">
        <a
          href="#"
          
        >
          <em>
            جشنواره بین‌المللی فیلم مقاومت برگزار می‌کند.
            <span>(برای اطلاعات بیشتر کلیک کنید)</span>
          </em>
        </a>
      </div>
      <div className="part2">
        <nav className="navbar">
          <div className="navbar-right">
            <div className="logoSection">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="navbar-menu">
              <li onClick={() => scrollToSection("productions")}>
                آثار و تولیدات
              </li>
              <li onClick={() => scrollToSection("Courses")}>آموزش</li>
              <li onClick={() => scrollToSection("News")}>اخبار</li>
              <li onClick={() => scrollToSection("States")}>درباره ما</li>
              <li onClick={() => scrollToSection("States")}>تماس با ما</li>
            </ul>
          </div>
          <button className="navbar-button" onClick={() => setShowModal(true)}>
            ورود / عضویت
          </button>
        </nav>
      </div>
    </div>
  );
}

// ==================== SoldierPhoto ====================
function SoldierPhoto() {
  return (
    <div className="headerPhoto">
      <img src={headerPhoto} alt="photo" />
    </div>
  );
}

// ==================== Productions ====================
function Productions({setPage}) {
  
   const imageRef = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("animate-mehdi");
        }
      },
      { threshold: 0.3 } // triggers when 30% of the section is visible
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div id="productions">
      <div className="titleSection">
        <div className="red-line"></div>
        <h1 className="page-title">آثار و تولیدات</h1>
      </div>

      <div className="explainContainer">
        <div className="grey-line"></div>
        <div className="rowContainer">
          <img ref={imageRef} src={mehdi} alt="mehdi"  className="mehdi-image" />
          <div className="columnSec">
            <h3>موقعیت مهدی</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،<br />
              و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه<br />
              روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای<br />
              شرایط فعلی تکنولوژی مورد نیاز.
            </p>
            <a href="#"
            onClick={(e) => {
            e.preventDefault();
            setPage("information");}}
            >بیشتر...</a>
          </div>
          <div className="photoSec">
            <img src={mehdi2} alt="" />
            <img src={lorem} alt="" />
            <img src={lorem} alt="" />
          </div>
        </div>
      </div>
      <div className="grey-line2"></div>
    </div>
  );
}

// ==================== Courses ====================
function Courses() {
  return (
    <div id="Courses" className="news" style={{ marginTop: "150px" }}>
      <div className="titleSection2">
        <div className="gray-line"></div>
        <h1>دوره‌های ما</h1>
      </div>
      <div className="grey-line"></div>
      <div className="rowContainer2">
        <p className="paragraph">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </p>
        <div className="horizontal-line"></div>
        <div className="cardContainer">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="grey-line"></div>
    </div>
  );
}

function CourseCard() {
  return (
    <div className="item1">
      <img src={camera} alt="camera" />
      <h2>مسترکلاس جرات فیلم‌سازی</h2>
      <div className="rowSection">
        <img src={ali} alt="picture" />
        <p>علی رضوی</p>
      </div>
    </div>
  );
}

// ==================== News ====================
function News() {
  return (
    <div id="News" className="newsSection" style={{ marginTop: "100px" }}>
      <div className="titleSection2">
        <div className="gray-line"></div>
        <h1>اخبار و رویداد ها</h1>
      </div>
      <div className="grey-line"></div>
      <div className="Container">
        <div className="section1">
          <img className="war" src={war1} alt="war" />
          <div className="explainingSection">
            <h3>
              چالش های فیلم برداری
              <br />
              سکانسی از فیلم سینمایی
              <br />
              موقعیت مهدی
            </h3>
            <p>۱۴۰۴/۰۲/۱۳</p>
          </div>
          <div className="horizontal-line"></div>
          <div className="explainingSection">
            <h3>
              چالش های فیلم برداری
              <br />
              سکانسی از فیلم سینمایی
              <br />
              موقعیت مهدی
            </h3>
            <p>۱۴۰۴/۰۲/۱۳</p>
          </div>
          <div className="horizontal-line"></div>
          <div className="warSec">
            <img className="war" src={war2} alt="war" />
            <div className="explainingSection">
              <h3>
                چالش های فیلم برداری
                <br />
                سکانسی از فیلم سینمایی
                <br />
                موقعیت مهدی
              </h3>
              <p>۱۴۰۴/۰۲/۱۳</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="explainingSection">
            <h3>
              چالش های فیلم برداری
              <br />
              سکانسی از فیلم سینمایی
              <br />
              موقعیت مهدی
            </h3>
            <p>۱۴۰۴/۰۲/۱۳</p>
          </div>
          <div className="horizontal-line"></div>
          <img className="war" src={hadi} alt="" />
          <div className="explainingSection">
            <h3>
              چالش های فیلم برداری
              <br />
              سکانسی از فیلم سینمایی
              <br />
              موقعیت مهدی
            </h3>
            <p>۱۴۰۴/۰۲/۱۳</p>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
      <div className="grey-line"></div>
    </div>
  );
}

// ==================== States ====================
function States() {
  return (
    <div id="States" className="mainSection" style={{ marginTop: "100px" }}>
      <div className="grey-line"></div>
      <div className="stateSection">
        <div className="logoSection">
          <img src={logo} alt="logo" className="logo2" />
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ<br />
            و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه <br />
             روزنامه و مجله
          </p>
        </div>
        <div className="horizontal-line"></div>
        <div className="middleSection">
          <div className="listSection">
            <h2>بخش‌های سایت</h2>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>اخبار و رویدادها</li>
            </ul>
          </div>
          <div className="greyLine"></div>
          <p>
            کلیه حقوق برای انجمن سینمای بنیاد روایت فتح محفوظ است.
            <br />
            ۱۳۶۰ - ۱۴۰۴
          </p>
        </div>
        <div className="horizontal-line"></div>
        <div className="lastSection">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaMapMarkerAlt size={24} color="#FF6600" />
            <span>تبریز، دانشگاه تبریز، مرکز نوآوری و شکوفایی، واحد ۸</span>
          </div>
          <div className="greyLine"></div>
        </div>
      </div>
    </div>
  );
}
