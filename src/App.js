import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import FooterSection from './components/Footer/Footer';
import RobotAnalysis from './pages/VersionComparisons';
import { GlobalStyle } from './theme';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/version-comparisons" element={<RobotAnalysis />} />
			</Routes>
			<FooterSection />
		</BrowserRouter>
	);
}

export default App;
