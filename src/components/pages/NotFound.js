import React from 'react';
import './NotFound.css';
const NotFound = () => {
	return (
		<div>
			<div className='not-found-top'>
				<h1>404</h1>
				<h3>page not found</h3>
			</div>
			<div className='not-found-container'>
				<div className='not-found-ghost-copy'>
					<div className='not-found-one'></div>
					<div className='not-found-two'></div>
					<div className='not-found-three'></div>
					<div className='not-found-four'></div>
				</div>
				<div className='not-found-ghost'>
					<div className='not-found-face'>
						<div className='not-found-eye'></div>
						<div className='not-found-eye-right'></div>
						<div className='not-found-mouth'></div>
					</div>
				</div>
				<div className='not-found-shadow'></div>
			</div>
			<div className='not-found-bottom'>
				<p>Boo, I cannot find this Page ! :(</p>
			</div>
		</div>
	);
};

export default NotFound;
