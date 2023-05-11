import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage(){
    return(
        <Container>
            <Header />
            <Body>
            <Title  initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Projetos já feitos pela AgnomTech</Title>
            <Projects>
                <Title>Em Breve...</Title>
            </Projects>
            <Footer />
            </Body>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1c1c1c;
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
    //background-color: #1c1c1c;
`;

const Title = styled(motion.h1)`
    width: 100%;
    padding-bottom: 50px;
    padding-top: 35px;
    font-size: 45px;
    font-weight: 700;
    color: #d96220;
    font-family: 'Raleway';
`;

const Projects = styled(motion.div)`
    width: 80%;
    height: 615px;
    background-color: #FFFFFF;
    border-radius: 15px;
`;