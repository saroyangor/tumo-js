import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

const App = (): JSX.Element => {
	return (
		<div>
			<Header />
			<main className="container mx-auto">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
