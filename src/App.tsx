import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/calculator-page/calculaor-page';
import HomePage from './pages/home-page/home-page';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/calculator/:calculatorName" element={<CalculatorPage />} />
			</Routes>
		</Router>
	);
}