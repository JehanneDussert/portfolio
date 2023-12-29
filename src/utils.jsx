import { useDispatch, useSelector } from "react-redux";

export const    download = () => {
	const	link = document.createElement('a');

	link.download = 'CV-JehanneDussert.pdf';
	link.href = '/CV.pdf';

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export const     redirect = (type) => {
    const	link = document.createElement('a');

	if (type === 'linkedin')
    	link.href = 'https://www.linkedin.com/in/jehanne-dussert/';
	else
		link.href = 'https://medium.com/@jehanne-dussert';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export const	sendMail = () => {
	const   emailAddress = 'jehanne-dussert@hotmail.fr';
	const   mailtoLink = `mailto:${emailAddress}`;
			
	return window.location.href = mailtoLink;
}

export function	explore (name, activeWdw, dispatch) {
	dispatch({ type: 'SET_ACTIVE_WDW', nextWdw: name });
}