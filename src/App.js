import './index.css';
import Header from './components/header/Header.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import FooterSection from "./components/Footer/Footer";
import RobotAnalysis from "./pages/VersionComparisons";

function App() {
	return (
		<BrowserRouter>
			{/*<Header />*/}
			<Routes>
				<Route path={"/"} element={<Home/>}/>
				<Route path={"/version-comparisons"} element={<RobotAnalysis/>}/>
			</Routes>

			<FooterSection />
		</BrowserRouter>
	);
}

export default App;
