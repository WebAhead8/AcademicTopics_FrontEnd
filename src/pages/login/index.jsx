import React, { useState, useEffect } from "react";
import { getPosts, login } from "../../utlis/mainFetsh";

import "./style.css";
import Nav from "../../components/navBar/index";

function LogIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const onChange = (statekey) => ({ target }) =>
    setLoginData({ ...loginData, [statekey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
  };
  login(loginData)
    .then((data) => {
      window.localStorage.setItem("access_token", data.access_token);
      setUser(data);
      setIsLoggedIn(true);
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      getPosts(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  if (isLoggedIn) {
    return (
      <main>
        <div className="App">
          <Nav />
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
}
export default LogIn;
