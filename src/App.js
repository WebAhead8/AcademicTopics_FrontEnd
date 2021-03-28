import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
<<<<<<< HEAD
import Home from './pages/Home';
import Fit from './pages/fit';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import AcademicInstitutes from './pages/academic_institutes';
import Subjects from './pages/subjects';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/fit" component={Fit} />
				<Route exact path="/login" component={LogIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/academic_institutes" component={AcademicInstitutes} />
				<Route exact path="/subjects" component={Subjects} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
=======
import Home from "./pages/Home";
import Fit from "./pages/fit";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Blog from "./pages/blog";

import AcademicInstitutes from "./pages/academic_institutes";
import IdBlog from "./components/idblogs";
// import Subjects from "./pages/subjects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fit" component={Fit} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/blog/:id" component={IdBlog} />
        <Route
          exact
          path="/academic_institutes"
          component={AcademicInstitutes}
        />

        {/* <Route exact path="/subject" component={subjects} /> */}
        {/* <Route exact path="/subject" component={subjects} /> */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
>>>>>>> d508f255f47d29024039c19f756ea1f8b475cf68
}

export default App;
