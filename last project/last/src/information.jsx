
import logo from "./assets/picture/logo.png";
import title from "./assets/picture/title.png";
import photo from "./assets/picture/photo.png"
import saed  from "./assets/picture/saed.png"
import bahram  from "./assets/picture/bahram.png"
import elnaz  from "./assets/picture/elnaz.png"
import line from "./assets/picture/line.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import {FaPlay} from "react-icons/fa";



export default function Information({ setPage }) {
  return (
    <div className="appSec">
      <Header1 setPage={setPage} />
      <MainSection />
      <Second/>
      <Actors/>
      <Footer/>
    </div>
  );
}

// ==================== Header1 Component ====================
// این کامپوننت نوار بالا (Header) سایت را شامل می‌شود
// شامل لوگو، منوی ناوبری، و دکمه ورود/عضویت
function Header1({ setPage }) {
  return (
    <div className="firstPart">
      <nav className="nav-container">
        {/* بخش راست شامل لوگو و آیتم‌های منو */}
        <div className="rightPart">
          <div className="logoPart">
            <img src={logo} alt="لوگو" />
          </div>

          {/* منوی ناوبری */}
          <ul className="ulSec">
            <li onClick={() => setPage("home")}>آثار و تولیدات</li>
            <li>آموزش</li>
            <li>اخبار و رویدادها</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        {/* دکمه ورود/عضویت */}
        <button className="btn-sec">ورود/عضویت</button>
      </nav>

      {/* خط زیر منو */}
      <div className="navLine"></div>
    </div>
  );
}

// ==================== MainSection Component ====================
// بخش معرفی فیلم یا محتوای اصلی بالای صفحه
function MainSection() {
  return (
    <div className="titleSection3">
      <div className="mainSection">
        <h1>فیلم موقعیت مهدی</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و <br />
          متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
          شرایط فعلی تکنولوژی
        </p>
      </div>

      {/* تصویر پوستر فیلم همراه با دکمه پلی */}
      <div className="image-container">
        <div className="circle">
          <FaPlay className="play-icon" /> {/* آیکون پخش (Play) */}
        </div>
        <img src={title} alt="پوستر فیلم" />
      </div>
    </div>
  );
}

// ==================== Second Component ====================
// بخش توضیحات و عکس‌های تودرتو (stack)
function Second() {
  return (
    <div className="secondPage">
      {/* عکس‌های روی هم */}
      <div className="photo-stack">
        <img src={photo} alt="عکس ۱" className="photo photo1" />
        <img src={photo} alt="عکس ۲" className="photo photo2" />
        <img src={photo} alt="عکس ۳" className="photo photo3" />
      </div>

      {/* متن توضیحی درباره پروژه یا فیلم */}
      <div className="paragraph">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان <br />
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
          که لازم است، و <br />
          برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
          ابزارهای کاربردی می باشد،<br />
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
          و<br />
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی <br />
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان<br />
          .امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ
          به پایان رسد
        </p>
      </div>
    </div>
  );
}

// ==================== Actors Component ====================
// بخش بازیگران و عوامل فیلم، همراه با کارت‌های اعضا و فلش اسکرول
function Actors() {
  return (
    <div className="actorsSection">
      {/* عنوان بخش */}
      <div className="description">
        <div className="line1"></div>
        <h2>بازیگران و عوامل</h2>
      </div>

      {/* کارت‌های مربوط به بازیگران */}
      <div className="cardSectionn">
        {/* هر کارت شامل عکس، نام و سمت فرد است */}
        <div className="infos">
          <img src={saed} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={bahram} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={elnaz} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={saed} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={bahram} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={elnaz} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={saed} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={bahram} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="infos">
          <img src={elnaz} alt="" />
          <h3>ساعد سهیلی</h3>
          <p>کارگردان</p>
        </div>
        <div className="arrow-left">
          <span className="arrow">&#10095;</span>
        </div>

        
      </div>
    </div>
  );
}

// ==================== Footer Component ====================
// بخش پایین سایت و درباره ما
function Footer() {
  return (
    <div className="mainSection" style={{ marginTop: "100px" }}>
      <div className="grey-line"></div>
      <footer className="stateSection">
        {/* بخش لوگو و توضیحات */}
        <div className="logoSection">
          <img src={logo} alt="logo" className="logo2" />
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت <br />
            چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            <br />
            روزنامه و مجله
          </p>
        </div>

        {/* خط جداکننده */}
        <img src={line} alt="" />

        {/* بخش میانی شامل لینک‌های سایت */}
        <div className="middleSection">
          <div className="listSection">
            <h2>بخش های سایت</h2>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>اخبار و رویداد ها</li>
            </ul>
          </div>

          {/* خط عمودی بین لینک‌ها و متن حقوق */}
          <div className="greyLine"></div>

          {/* متن کپی‌رایت */}
          <p>
            کلیه حقوق برای انجمن سینمای بنیاد رواییت فتح محفوظ است
            <br />
            ۱۳۶۰ - ۱۴۰۴
          </p>
        </div>

        {/* خط جداکننده پایینی */}
        <img className="lastLine" src={line} alt="" />

        {/* بخش پایانی شامل آدرس */}
        <div className="lastSection">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaMapMarkerAlt size={24} color="#007DC3" />
            <span>تبریز، دانشگاه تبریز، مرکز نوآوری و شکوفایی، واحد ۸</span>
          </div>
          <div className="greyLine"></div>
        </div>
      </footer>
    </div>
  );
}
