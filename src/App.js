import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
