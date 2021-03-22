import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Fit() {
  return (
    <main>
      <div className="App">
        <nav className="navBar">
          <FontAwesomeIcon icon={faBars} />
          <h1>الموجه الاكاديمي</h1>
        </nav>

        <fieldset>
          <legend className="topic">ملائمة موضوع</legend>
          <section className="fittopic">
            <label htmlFor="Psychometric">
              <input
                type="number"
                name="Psychometric"
                id="Psychometric"
                size="4"
              />
              :بسيخومتري
              <br />
            </label>
            <label htmlFor="bagrut">
              <input type="number" name="bagrut" id="bagrut" size="4" />
              :بجروت
            </label>
            <br />
            <label htmlFor="number">
              <input type="number" name="number" id="number" size="4" />
              :יע"ל
            </label>
            <br />
            <label htmlFor="math">
              <select>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <input type="number" name="math" id="math" size="4" />
              :رياضيات
            </label>
            <br />
            <label htmlFor="physics">
              <select>
                <option>3</option>

                <option>5</option>
              </select>
              <input type="checkbox" name="physics" id="physics" />
              :فيزياء
            </label>
            <br />
          </section>
        </fieldset>
        <div className="topicdiv">
          <button className="topic" type="submit">
            ملائمة
          </button>
        </div>
      </div>
    </main>
  );
}
export default Fit;
