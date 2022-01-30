import axios from 'axios';
import { createContext, useState } from 'react';

const AlertContext = createContext({
	alert: [],
	addAlert: () => {},
	setAlert: () => {},
});

export const AlertContextProvider = (props) => {
	const [alertMessage, setAlertMessage] = useState(null);

	function setAlertHandler(msg, type) {
		setAlertMessage({ msg, type });
		setTimeout(() => setAlertMessage(null), 3000);
	}

	const context = {
		alert: alertMessage,
		setAlert: setAlertHandler,
	};

	return (
		<AlertContext.Provider value={context}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
