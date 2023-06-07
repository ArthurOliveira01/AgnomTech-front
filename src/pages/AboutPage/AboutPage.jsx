import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arthur from "../../assets/Arthur.jpeg";
import nicolas from "../../assets/Nicolas.jpeg";
import guilherme from "../../assets/Guilherme.jpeg";
import mateus from "../../assets/Mateus.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage(){
    const [hoveredImage, setHoveredImage] = useState(null);
    let mission1 = "A AgnomTech é uma empresa de tecnologia focada em fornecer soluções eficientes para outras empresas, por meio de serviços de desenvolvimento web e mobile e integração com banco de dados. Nós nos esforçamos para fornecer aos nossos clientes soluções personalizadas e inovadoras que atendam às suas necessidades específicas.";
    const descriptions = ["Arthur Oliveira da Silva é natural de Cuiabá nasceu em 2001 e está cursando Engenharia de Computação, no momento está no 8º semestre", 
    "Nícolas Mesquita de Faria é natural de Uberlândia nasceu em 2001 e está cursando Engenharia de Computação no momento, no momento está no 8º semestre",
    "Guilherme Brun Moraes é natural de Maringá nasceu em 2000 e está cursando Engenharia de Computação no momento, está no 7º semestre",
    "Mateus Ludwig Gunsch Ferreira Bertoli é natural de Cuiabá nasceu em 2001 e está cursando Engenharia de Computação no momento, está no 7º semestre"]
    let mission2 = "Acreditamos que a tecnologia é a chave para o sucesso empresarial, e nosso objetivo é ajudar nossos clientes a atingir seus objetivos de negócios, utilizando as mais recentes tecnologias disponíveis. Nossa equipe de profissionais altamente qualificados está constantemente atualizada com as últimas tendências e práticas do setor, e trabalha em estreita colaboração com nossos clientes para garantir que suas expectativas sejam atendidas e superadas."
    let mission3 = "Nós nos esforçamos para construir relacionamentos duradouros e mutuamente benéficos com nossos clientes, e acreditamos que a chave para isso é a honestidade, transparência e confiabilidade. Nosso compromisso é fornecer serviços de qualidade, dentro do prazo e dentro do orçamento acordado."
    let mission4 = "Se você está procurando uma empresa de tecnologia confiável e experiente para ajudá-lo a alcançar seus objetivos de negócios, não procure mais do que a AgnomTech. Estamos prontos para trabalhar com você para encontrar as soluções tecnológicas certas para sua empresa. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços e como podemos ajudá-lo."
    const render = [
        {
            src: arthur
        },
        {
            src: nicolas
        },
        {
            src: guilherme
        },
        {
            src: mateus
        }
    ]

    return(
        <Container>
            <Header />
            <Body>
                <Title initial={{x: '30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Fundadores</Title>
                <Photos>
                {render.map((person, index) => {
                    return( 
                        <>
                            <Profile initial={{x: '-40%'}} animate={{x: 0}} transition={{duration: 0.75}} src={person.src}
                            onMouseEnter={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(null)}
                            />
                            
                        </>
                        )
                })}
                </Photos>
                <div>
                    <Description initial={{ opacity: 0 }} animate={{ opacity: {...hoveredImage !== null} ? 1 : 0 }} transition={{duration: 0.5}} show={hoveredImage !== null}>{descriptions[hoveredImage]}</Description>
                </div>
                <Title initial={{x: '30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Nossa missão</Title>
                <Text initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>{mission1}</Text>
                <Text> <br /></Text>
                <Text initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>{mission2}</Text>
                <Text> <br /></Text>
                <Text initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>{mission3}</Text>
                <Text> <br /></Text>
                <Text initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>{mission4}</Text>
                <Footer />
            </Body>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1c1c1c;
`;

const Photos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Text = styled(motion.p)`
    width: 75%;
    line-height: 125%;
    font-family: 'Raleway';
    font-size: 22px;
    color: #ccff00;
`;

const Description = styled(motion.div)`
    width: 100%;
    height: 70px;
    padding-top: 2%;  
    border: 3px solid transparent;
    border-image: linear-gradient(60deg, #065ad4, #d96220, #ccff00) 1;
    font-family: 'Raleway';
    font-size: 22px;
    color: #ccff00;
    visibility: ${({show}) => (show ? "visible" : "hidden")};
    transform-origin: top;
    transform: ${({ show }) => (show ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.5s ease-in-out;
`;

const Title = styled(motion.h1)`
    width: 100%;
    padding-bottom: 50px;
    padding-top: 35px;
    font-size: 45px;
    font-weight: 700;
    color: #d96220;
`;

const Body = styled.div`
    width: 80%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    display: flex;
    align-items: center;
`;

const Profile = styled(motion.img)`
    width: 187.5px;
    height: 250px;
    border-radius: 50px;
    border: 6px solid #d96220;
    margin-bottom: 25px
`;
