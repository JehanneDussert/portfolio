import React from 'react';
import GithubPicture from '../../assets/GithubPicture.png'
import LinkedInPicture from '../../assets/LinkedInPicture.png'
import { FooterContainer, SocialMedia } from '../../utils/style/Nav'

function Footer() {

  return (
    <FooterContainer>
      <a href="https://github.com/JehanneDussert">
         <SocialMedia alt="Github" src={GithubPicture}/>
      </a>
      <a href="https://www.linkedin.com/in/jehanne-dussert/">
         <SocialMedia alt="LinkedIn" src={LinkedInPicture}/>
      </a>
    </FooterContainer>
  )
}

export default Footer