import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRouter from "./routes";

function App() {
	return (
		<Router>
			<Header />
			<AppRouter />
            <Footer />
		</Router>
	);
}

export default App;