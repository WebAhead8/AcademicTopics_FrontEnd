import "./style.css";
import Nav from "../../components/navBar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getPosts } from "../../utlis/mainFetsh";

function Home() {
  let data = getPosts();
  console.log(data);
  return (
    <div className="App">
      <Nav />
      <div>
        <label htmlFor="mainSearch" className="mainSearch">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            name="mainSearch"
            id="mainSearch"
            placeholder="جامعات/مواضيع/مرشدين"
          />
        </label>
      </div>

      <div className="mainCover">
        <img
          src="images/circle_students1.png"
          alt="mainImage"
          className="mainImage"
        />

        <h2 className="slogenT">طريقك</h2>
        <h3 className="slogenE">الى</h3>
        <h2 className="slogenJ">الجامعة</h2>
      </div>

      <div>
        <h1 className="curlyB1"> &#123;</h1>
        <p className="mainPara">
          الموجه الاكاديمي هو موقع لمساعدة خريجي المدارس الثانوية العربية
          باللإلتحاق بالتعليم العالي. الموقع يحتوي على جميع المعلومات حول
          االمواضيع التي تدرس في الجامعات والكليات وشروط القبول لها
        </p>
        <h1 className="curlyB2"> &#125;</h1>
      </div>
    </div>
  );
}

export default Home;
