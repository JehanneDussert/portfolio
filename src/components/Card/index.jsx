// import PropTypes from 'prop-types'
import React from 'react';
// import DefaultPicture from '../../assets/42.jpg'
import styled from 'styled-components'
// import { useTheme } from '../../utils/hooks'
import colors from '../../utils/style/color'
import { PageSubtitle } from '../../utils/style/Atoms'

const CardContainer = styled.div `
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 90vw;
  height: auto;
  margin: 15vh;
  // padding-bottom: 10vh;
`

const TitleContainer = styled.div `
  align-items: left;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #CFDBD5;
  border-radius: 30px;
  width: 20vw;
  height: 6vh;
  padding: 0.5vh;
  // margin: 7vh;
  padding-bottom: 2vh;
`

const PageTitle = styled.h1 `
    color: #373737;
    // align-item: center;
    // text-align: center;
    font-size: 1.5vw;
`

function Card( { title, paragraph }) {
  // const { theme } = useTheme()

  return (
    <CardContainer>
      <TitleContainer>
        <PageTitle>
            {title}
        </PageTitle>
      </TitleContainer>
      <PageSubtitle>
          {paragraph}
      </PageSubtitle>
    </CardContainer>
  )
}
  
  export default Card