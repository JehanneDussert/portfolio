import React from 'react';
import { BigCard } from '../../utils/style/Atoms'
import Card from '../../components/Card'

function About() {

    return (
        <div>
        <BigCard>
            {/* <TitleContainer> */}
                <Card 
                    title="Qui suis-je ?" 
                    paragraph = "Après avoir étudié six ans le droit, une double spécialisation en droit des nouvelles technologies et en criminologie, j'ai décidé d'acquérir des compétences techniques à travers le code. Pour cela, je me suis formée à 42 Paris de 2019 à 2022."
                />
            {/* </TitleContainer> */}
        </BigCard>
        <BigCard>
            {/* <TitleContainer> */}
            <Card 
                title="Ce sur quoi je travaille"
                paragraph = "Je me forme à Unity et au C# afin de créer des jumeaux numériques de villes pour le Ministère de l'Intérieur."
            />
            {/* </TitleContainer> */}
        </BigCard>
        </div>
    )
}
  
export default About