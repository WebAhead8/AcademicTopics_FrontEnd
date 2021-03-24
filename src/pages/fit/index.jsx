import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CategoryFilter from "../../components/Category";
// import Nav from "../../components/navBar/navBar";
import "./style.css";

function Fit() {
  const [catFilter, setCatFilter] = React.useState("");

  return (
    <main>
      <div className="App">
        <nav className="navBar">
          <FontAwesomeIcon icon={faBars} />
          <h1>الموجه الاكاديمي</h1>
        </nav>
        <fieldset className="border">
          <section className="search">
            <select>
              <CategoryFilter
                catFilter={catFilter}
                setCatFilter={setCatFilter}
              />
              <option value="" selected disabled hidden>
                Choose here
              </option>

              <option value="engineering">הנדסה</option>
              <option value="Sciences">מדעים</option>
              <option value="Humanities">מדעי הרוח</option>
              <option value="Social">מדעי החברה</option>
              <option value="medicine">מדעי הרפואה ובריאות</option>
              <option value="laws">"משפטים וניהול</option>
              <option value="PracticalEng">הנדסאים</option>
            </select>
          </section>

          <legend className="topic">ملائمة موضوع</legend>
          <section className="fittopic">
            <label htmlFor="Psychometric">
              بسيخومتري:
              <input type="number" name="Psychometric" id="Psychometric" />
            </label>
            <label htmlFor="bagrut">
              بجروت:
              <input type="number" name="bagrut" id="bagrut" />
            </label>
            <br />
            <label htmlFor="number">
              יע"ל:
              <input type="number" name="number" id="number" />
            </label>
            <br />
            <section className="relative">
              <label htmlFor="math">
                رياضيات:
                <input type="number" name="math" id="math" />
                <select className="absolute">
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>
              <label htmlFor="physics">
                فيزياء:
                <input type="checkbox" name="physics" id="physics" />
                <select className="absolute1">
                  <option>3</option>

                  <option>5</option>
                </select>
              </label>
            </section>
          </section>
        </fieldset>
        <div>
          <button className="topic" type="submit">
            ملائمة
          </button>
        </div>
      </div>
    </main>
  );
}
export default Fit;
