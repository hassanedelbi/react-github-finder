import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
