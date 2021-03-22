import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Home() {
  return (
    <div className="App">
      <nav className="navBar">
        <FontAwesomeIcon icon={faBars} />
        <h1>الموجه الاكاديمي</h1>
      </nav>
    </div>
  );
}

export default Home;
