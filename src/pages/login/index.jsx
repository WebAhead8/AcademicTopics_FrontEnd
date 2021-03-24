import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function LogIn() {
  return (
    <main>
      <div className="App">
        <nav className="navBar">
          <FontAwesomeIcon icon={faBars} />
          <h1>الموجه الاكاديمي</h1>
        </nav>
        <div className="form">
          <form>
            <fieldset className="border">
              <legend className="login">الدخول الى حساب قائم</legend>
              <div className="Div">
                <label htmlFor="email">
                  البريد الالكتروني:
                  <br />
                  <input type="email" name="email" id="email" />
                </label>
                <label htmlFor="password">
                  كلمة المرور:
                  <br />
                  <input type="password" name="password" id="password" />
                </label>
              </div>
              <div>
                <button type="submit">
                  <a href="/">دخول</a>
                </button>
              </div>
            </fieldset>
          </form>
          <a href="/signup">انشاء حساب جديد</a>
        </div>
      </div>
    </main>
  );
}
export default LogIn;
