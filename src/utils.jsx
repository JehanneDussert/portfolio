export const    download = () => {
	const	link = document.createElement('a');

	link.download = 'CV-JehanneDussert.pdf';
	link.href = '/CV.pdf';

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export const	sendMail = () => {
	const   emailAddress = 'jehanne-dussert@hotmail.fr';
	const   mailtoLink = `mailto:${emailAddress}`;
			
	return window.location.href = mailtoLink;
}