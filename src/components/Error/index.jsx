import React from 'react';
import Logo from '../../assets/404.svg'
import styled from 'styled-components'
import { BigCard } from '../../utils/style/Atoms'

const ErrorImage = styled.img `
	padding: 2vh;
	width: 60vw;
	height: auto;
	margin-left: auto;  
	margin-right: auto; 
`

function Error() {
    return (
		<BigCard>
			<h1>Il semblerait qu'il y ait un problème</h1>
			<ErrorImage src={Logo} alt="Error"></ErrorImage>
			{/* <h1>Il semblerait qu'il y ait un problème</h1> */}
		</BigCard>
	)
}
 
export default Error