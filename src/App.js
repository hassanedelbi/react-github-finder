import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import GithubContextProvider from './context/github/GithubContextProvider';
import { AlertContextProvider } from './context/alert/AlertContext';

function App() {
	return (
		<div className='App'>
			<GithubContextProvider>
				<AlertContextProvider>
					<Router>
						<div className='App'>
							<Navbar />
							<div className='container'>
								<Routes>
									<Route path='/' element={<Home />} />
									<Route path='/about' element={<About />} />
									<Route path='/user/:login' element={<User />} />
									<Route element={<NotFound />} />
								</Routes>
							</div>
						</div>
					</Router>
				</AlertContextProvider>
			</GithubContextProvider>
		</div>
	);
}

export default App;
