import React from 'react';
import styled from 'styled-components'
import { BigCard } from '../../utils/style/Atoms'
import HomeImage from '../../assets/home.png'
import { PageTitle, PageSubtitle } from '../../utils/style/Atoms'

const PageImage = styled.img `
	width: 30vw;
    height: auto;
    align-items: center;
`

const DivContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Box = styled.div `
    width: 100%;
    height: auto;
    padding: 4vw;
    margin-top: 6vh;
`

function Home() {

    return (
        <BigCard>
            <DivContainer>
                <Box>
                    <PageTitle>Bienvenue sur mon portfolio !</PageTitle>
                    <PageSubtitle>
                        Développeuse et juriste IT, j’aime apprendre et découvrir 
                        de nouveaux domaines.
                    </PageSubtitle>
                    <PageTitle>Mes technos préférées</PageTitle>
                    <PageSubtitle>
                        C/C++ | Unity | C# | React
                    </PageSubtitle>
                </Box>
                <Box>
                    <PageImage src={HomeImage}/>
                </Box>
            </DivContainer>
        </BigCard>
    )
}
  
export default Home