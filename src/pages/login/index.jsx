import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function LogIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onChange = (statekey) => ({ target }) =>
    setLoginData({ ...loginData, [statekey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="App">
        <nav className="navBar">
          <FontAwesomeIcon icon={faBars} />
          <h1>الموجه الاكاديمي</h1>
        </nav>
        <div className="form">
          <form onSubmit={onSubmit}>
            <fieldset className="border">
              <legend className="login">الدخول الى حساب قائم</legend>
              <div className="Div">
                <label htmlFor="email">
                  البريد الالكتروني:
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required="required"
                    onChange={onChange("email")}
                    value={loginData.email}
                  />
                </label>
                <label htmlFor="password">
                  كلمة المرور:
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required="required"
                    onChange={onChange("password")}
                    value={loginData.password}
                  />
                </label>
              </div>
            </fieldset>
          </form>
          <div>
            <button type="submit">دخول</button>
          </div>
          <a href="/signup">انشاء حساب جديد</a>
        </div>
      </div>
    </main>
  );
}
export default LogIn;
