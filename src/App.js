import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Fit from "./pages/fit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fit" component={Fit} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
