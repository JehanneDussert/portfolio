import React from 'react';
import { StyledLink, BigStyledLink } from '../../utils/style/Atoms'
import { NavContainer, HomeLink } from '../../utils/style/Nav'

function Header() {
  return (
	<NavContainer>
		<HomeLink>
			<BigStyledLink to="/">Jehanne Dussert</BigStyledLink>
		</HomeLink>
		<div>
			<StyledLink to="/about">À propos</StyledLink>
			{/* <StyledLink to="/contact">Contact</StyledLink> */}
			{/* <StyledLink to="/survey/1" $isFullLink>
				EN
			</StyledLink> */}
		</div>
	</NavContainer>
  )
}

export default Header