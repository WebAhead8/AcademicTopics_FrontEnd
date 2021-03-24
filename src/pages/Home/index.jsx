import "./style.css";
import Nav from "../../components/navBar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="divSearch">
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
    </div>
  );
}

export default Home;
