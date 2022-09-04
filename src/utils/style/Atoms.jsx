import styled, { keyframes } from 'styled-components'
import colors from './color'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  padding: 1vw 2vw;
  color: white;
  text-decoration: none;
  font-size: 2vw;
  text-align: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const CardLabel = styled.span`
	color: #5843e4;
	font-size: 22px;
	font-weight: bold;
	padding-left: 3vw;
	padding-top: 3vh;
`

export const CardImage = styled.img`
	height: 10vw;;
	border-radius: 50%;
	margin-left: auto;
	margin-right: auto;
	padding: 6vh;
`

export const CardWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	// padding: 15px;
	background-color: ${colors.backgroundLight};
	border-radius: 30px;
	width: 350px;
	transition: 200ms;
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px #e2e3e9;
	}
`

export const BigCard = styled.div `
	text-align: center;
`