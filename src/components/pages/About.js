import React from 'react';

const About = () => {
	return (
		<div
			style={{
				width: '50vw',
				textAlign: 'center',
				border: '1px solid #333333',
			}}
		>
			<h1
				style={{
					background: 'var(--dark-color)',
					color: 'white',
					marginBottom: '10px',
				}}
			>
				About
			</h1>
			<h3>Simple React App to Search Github Users</h3>
			<p>
				- React Router v6 was used for main routing <br />
				- Axios was used for HTTP Request handling
				<br />
				- ContextAPI ( AlertContext with useState & GithubContext with
				useReducer ) was used for state management. <br />
			</p>
			<p
				style={{
					background: 'var(--dark-color)',
					color: 'gold',
					marginTop: '10px',
				}}
			>
				Simple React App v 1.0.8 &copy; {new Date().getFullYear()} All Rights
				Reserved
			</p>
		</div>
	);
};

export default About;
