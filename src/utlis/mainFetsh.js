const dotenv = require("dotenv");
dotenv.config();

let serverUrl;

if (process.env.NODE_ENV === "production") {
  serverUrl = process.env.REACT_APP_SERVER_URL_PRODUCTION;
} else {
  serverUrl = process.env.REACT_APP_SERVER_URL_DEV;
  // serverUrl = process.env.REACT_APP_SERVER_URL_PRODUCTION;
}

function request(url, options) {
  return fetch(url, options).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}

export function getPosts(req, res, next) {
  return request(`${serverUrl}/posts`)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
}
export function login(loginData) {
  console.log(serverUrl, "inside login");
  return request(`${serverUrl}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}
