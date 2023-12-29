import { useEffect } from "react";

export const    LinkedIn = () => {
    const   redirectToLinkedIn = () => {
        const	link = document.createElement('a');

        link.href = 'https://www.linkedin.com/in/jehanne-dussert/';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    return <button onClick={redirectToLinkedIn}></button>
}