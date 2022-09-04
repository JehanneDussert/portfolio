import React from 'react';
import { StyledLink } from '../../utils/style/Atoms'
import { NavContainer, HomeLink } from '../../utils/style/Nav'

function Header() {
  return (
	<NavContainer>
		<HomeLink>
			<StyledLink to="/">Jehanne Dussert</StyledLink>
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