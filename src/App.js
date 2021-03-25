import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Fit from './pages/fit';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import AcademicInstitutes from './pages/academic_institutes';
// import Subjects from "./pages/subjects";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/fit" component={Fit} />
				<Route exact path="/login" component={LogIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/academic_institutes" component={AcademicInstitutes} />
				{/* <Route exact path="/subject" component={subjects} /> */}
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}

export default App;
