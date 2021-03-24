import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function SignUp() {
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
              <legend className="signup">انشاء حساب جديد</legend>
              <div className="signUpInput">
                <label htmlFor="name">
                  الاسم الكامل:
                  <br />
                  <input type="text" name="name" id="name" required />
                </label>
              </div>{" "}
              <label htmlFor="last_name">
                البلد:
                <input type="text" name="city" id="city" />
              </label>
              <label htmlFor="email">
                البريد الالكتروني:
                <input type="email" name="email" id="email" required />
              </label>
              <label htmlFor="password">
                كلمةالمرور:
                <input type="password" name="password" id="password" required />
              </label>
              <div>
                <button type="submit">
                  <a href="/">تسجيل</a>
                </button>
              </div>
            </fieldset>
          </form>
        </div>{" "}
      </div>
    </main>
  );
}

export default SignUp;
