import styled from "styled-components";
import Header from "../../components/Header";
import node from "../../assets/nodejs.svg";
import react from "../../assets/react.svg";
import angular from "../../assets/angular.svg";
import js from "../../assets/js.svg";
import vue from "../../assets/vue.svg";
import laravel from "../../assets/laravel.svg";
import ts from "../../assets/ts.svg";
import flask from "../../assets/flask.svg";
import flutter from "../../assets/flutter.svg";
import swift from "../../assets/swift.svg";
import android from "../../assets/android.svg";
import postgre from "../../assets/postgre.svg";
import mongo from "../../assets/mongo.svg";
import git from "../../assets/git.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../../components/Footer";

export default function TechnologiesPage(){
    const [hoveredImage, setHoveredImage] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [db, setDb] = useState(null);
    const titles = ['NodeJS', 'ReactJS', 'AngularJS', 'JavaScript', 'VueJs', 'Laravel', 'TypeScript', 'Flask'];
    const mobiletitles = ['Android Studio', 'Flutter', 'Swift', 'React Native'];
    const dbtitles = ['MongoDB', 'PostgreSQL', 'GitHub'];
    const imgs = [node, react, angular, js, vue, laravel, ts, flask];
    const mobileimgs = [android, flutter, swift, react];
    const dbimgs = [mongo, postgre, git];
    const texts = ['O Node.js é uma plataforma de backend JavaScript que permite, ao usar o framework ExpressJS, a construção de aplicações escaláveis e de alta performance. Com ele, é possível desenvolver desde pequenas ferramentas até aplicações complexas para web, mobile e IoT. O Node.js é amplamente utilizado por grandes empresas, startups e desenvolvedores independentes em todo o mundo devido à sua flexibilidade, eficiência e facilidade de uso. Com sua arquitetura orientada a eventos e sua biblioteca de módulos, o Node.js é uma ótima escolha para quem busca uma solução poderosa para o desenvolvimento de aplicações de servidor.',
    'O React é uma biblioteca de JavaScript, criada pelo Facebook, para construção de interfaces de usuário. Ele é muito utilizado para construir aplicações web de alta performance e escaláveis, e tem como característica principal o uso de componentes reutilizáveis.',
    'Angular é um framework de JavaScript de código aberto criado pelo Google e é amplamente utilizado para criar aplicativos web e móveis escaláveis e de alta performance. Ele é baseado em TypeScript e permite que os desenvolvedores criem aplicativos complexos e interativos com facilidade. O Angular oferece uma ampla gama de recursos e funcionalidades para criar aplicativos dinâmicos e responsivos com uma curva de aprendizado relativamente baixa.',
    'O JavaScript é uma linguagem de programação utilizada para criar conteúdo dinâmico em websites e aplicações web. É a base para muitos outros frameworks e bibliotecas, como o Angular, React, Vue, entre outros. É uma linguagem de script multi-paradigma, ou seja, suporta programação orientada a objetos, programação funcional e programação imperativa. Com a popularização do Node.js, o JavaScript também se tornou uma opção popular para programação no lado do servidor.',
    'Vue.js é um framework de código aberto utilizado para construção de interfaces de usuário e single-page applications. É considerado uma das principais alternativas ao Angular e React, oferecendo uma abordagem progressiva e flexível para o desenvolvimento web. O Vue.js é conhecido pela sua curva de aprendizado suave, documentação completa e grande comunidade de desenvolvedores, tornando-se uma excelente opção para projetos de diferentes tamanhos e complexidades. O Vue.js foi criado por Evan You em fevereiro de 2014 e atualmente é mantido pela comunidade open source.',
    'O Laravel é um framework de desenvolvimento web em PHP, que segue o padrão de arquitetura MVC (Model-View-Controller). Ele tem como objetivo simplificar o processo de desenvolvimento de aplicações web backend em PHP, fornecendo diversas ferramentas e recursos úteis para o desenvolvedor. O Laravel foi criado por Taylor Otwell em 2011 e se tornou rapidamente um dos frameworks PHP mais populares e utilizados no mundo.',
    'TypeScript é um superset do JavaScript que adiciona tipagem estática ao JavaScript. Ele permite uma melhor verificação de erros em tempo de compilação, o que pode levar a uma melhor qualidade de código. O TypeScript é uma ferramenta poderosa para desenvolvedores que desejam escrever código JavaScript mais seguro e fácil de manter. Além disso, é amplamente utilizado em grandes empresas de tecnologia, como a Microsoft e a Google.',
    'Flask é um framework minimalista de Python para construção de aplicativos web. É conhecido pela sua simplicidade e facilidade de aprendizado, tornando-se uma ótima opção para desenvolvedores iniciantes. Flask é altamente customizável e pode ser expandido com facilidade através de suas extensões. Ele oferece suporte para bibliotecas e ferramentas comuns, como SQLAlchemy para banco de dados, Jinja2 para templates e WTForms para validação de formulários. Flask é uma escolha popular para criação de APIs RESTful e aplicativos web simples, bem como para prototipação rápida de projetos.'];
    const mobiletexts = ['O Android Studio é um ambiente de desenvolvimento integrado (IDE) oficial para o desenvolvimento de aplicativos para o sistema operacional Android. Ele oferece várias ferramentas e recursos para ajudar no desenvolvimento de aplicativos para Android, incluindo emulador de dispositivo, depurador, editor de layout de interface do usuário, além de permitir a criação de aplicativos em várias linguagens de programação, incluindo Java e Kotlin.',
    'Flutter é um framework desenvolvido pela Google para criar aplicativos móveis de alta qualidade para iOS, Android e web a partir de um único código base em Dart. Ele é conhecido por sua velocidade, eficiência e facilidade de uso, permitindo que os desenvolvedores criem interfaces de usuário personalizadas e animações suaves usando uma ampla variedade de widgets. O Flutter também possui um conjunto robusto de ferramentas de desenvolvimento e bibliotecas, tornando-o uma opção popular para o desenvolvimento de aplicativos móveis multiplataforma.',
    'Swift é uma linguagem de programação desenvolvida pela Apple para criação de aplicativos iOS, macOS, watchOS e tvOS. Ela é uma linguagem moderna, segura e de alto desempenho, com uma sintaxe fácil de aprender. O Swift oferece recursos poderosos, como inferência de tipo, segurança de memória e recursos de programação funcional, tornando a criação de aplicativos para plataformas Apple mais rápida e eficiente. Ele também é compatível com Objective-C, permitindo que os desenvolvedores integrem facilmente códigos antigos em seus projetos.',
    'React Native é um framework JavaScript para desenvolvimento mobile que permite criar aplicativos nativos para iOS e Android usando a mesma base de código. Ele permite que os desenvolvedores criem aplicativos móveis de alta qualidade usando tecnologias web, como React e JavaScript. O React Native permite que os aplicativos sejam desenvolvidos rapidamente, com uma interface de usuário rápida e fluida. Com sua ampla comunidade de desenvolvedores e suporte para bibliotecas externas, o React Native se tornou uma das opções mais populares para o desenvolvimento mobile multiplataforma.'];
    const dbtexts = ['O MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em um formato flexível de documentos JSON. Ele permite que os desenvolvedores trabalhem com dados estruturados e não estruturados em uma única coleção e oferece escalabilidade horizontal para suportar aplicativos de grande porte. O MongoDB também tem uma API de consulta rica e recursos de indexação para melhorar o desempenho de consultas complexas. Ele é frequentemente usado em aplicativos web e móveis, bem como em análises de big data e IoT.',
    'PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado em aplicativos empresariais e da web. Ele fornece recursos avançados, como transações ACID, chaves estrangeiras, triggers, integridade referencial e suporte a JSON. O PostgreSQL é altamente extensível, permitindo que os usuários adicionem recursos personalizados e funções de programação em várias linguagens. Ele é compatível com várias plataformas, incluindo Windows, Linux e MacOS.',
    'GitHub é uma plataforma de hospedagem de código-fonte e colaboração em projetos de software que usa o Git como sistema de controle de versão. É amplamente utilizado por desenvolvedores para gerenciar projetos de software e colaborar com outros desenvolvedores em todo o mundo. Com o GitHub, é possível armazenar, compartilhar e colaborar em projetos de software de forma eficiente e escalável.']
    return(
        <Container>
            <Header />
            <Body>
                <Title  initial={{x: '-30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Tecnologias as quais trabalhamos</Title>
                <Title  initial={{x: '30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Desenvolvimento WEB</Title>
                <Tech initial={{x: '-40%'}} animate={{x: 0}} transition={{duration: 0.8}}>
                    <Logos initial={{x: '-50%'}} animate={{x: 0}} transition={{duration: 0.8}}>
                    {imgs.map((t, index) =>{
                        return(
                            <>
                                <Logo whileHover={{
                                scale: 1.5,
                                transition: {duration: 0.5}
                                }}
                                onMouseEnter={() => setHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}
                                src={t} />
                            </>
                        )
                    })}
                    </Logos>
                    <Description show={hoveredImage !== null}>
                        <DescriptionTitle>{titles[hoveredImage]}</DescriptionTitle>
                        <LogoExplained src={imgs[hoveredImage]} />
                        <DescriptionText>{texts[hoveredImage]}</DescriptionText>
                    </Description>
                </Tech>
                <Title  initial={{x: '30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Desenvolvimento Mobile</Title>
                <Tech initial={{x: '-40%'}} animate={{x: 0}} transition={{duration: 0.8}}>
                    <Logos>
                        {mobileimgs.map((t, index) =>{
                        return(
                            <>
                                <Logo whileHover={{
                                scale: 1.5,
                                transition: {duration: 0.5}
                                }}
                                onMouseEnter={() => setMobile(index)}
                                onMouseLeave={() => setMobile(null)}
                                src={t} />
                            </>
                        )
                    })}
                    </Logos>
                    <Description show={mobile !== null}>
                        <DescriptionTitle>{mobiletitles[mobile]}</DescriptionTitle>
                        <LogoExplainedMobile src={mobileimgs[mobile]} />
                        <DescriptionText>{mobiletexts[mobile]}</DescriptionText>
                    </Description>
                </Tech>
                <Title  initial={{x: '30%'}} animate={{x: 0}} transition={{duration: 0.8}}>Banco de dados e Versionamento de Código</Title>
                <TechDb initial={{x: '-40%'}} animate={{x: 0}} transition={{duration: 0.8}}>
                    <Logos>
                    {dbimgs.map((t, index) =>{
                        return(
                            <>
                                <Logo whileHover={{
                                scale: 1.5,
                                transition: {duration: 0.5}
                                }}
                                onMouseEnter={() => setDb(index)}
                                onMouseLeave={() => setDb(null)}
                                src={t} />
                            </>
                        )
                    })}
                    </Logos>
                    <Description show={db !== null}>
                        <DescriptionTitle>{dbtitles[db]}</DescriptionTitle>
                        <LogoExplainedDb src={dbimgs[db]} />
                        <DescriptionText>{dbtexts[db]}</DescriptionText>
                    </Description>
                </TechDb>
                <Footer />
            </Body>
            
        </Container>
    )
}

const Logos = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-left: 4%;
`;

const Description = styled(motion.div)`
    font-family: 'RalewaY';
    width: 75%;
    padding-top: 2%;
    padding-right: 4%;
    font-family: 'Raleway';
    font-size: 22px;
    visibility: ${({show}) => (show ? "visible" : "hidden")};
    transform-origin: top;
    transform: ${({ show }) => (show ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.5s ease-in-out;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #1c1c1c;
`;

const Tech = styled(motion.div)`
    width: 80%;
    display: flex;
    height: auto;
    background-clip: padding-box;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 15px;
`;

const TechDb = styled(motion.div)`
    width: 80%;
    display: flex;
    height: 435px;
    align-items: center;
    background-clip: padding-box;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 15px;
`;

const DescriptionTitle = styled.h1`
    font-family: 'Raleway';
    font-size: 30px;
    font-weight: 700;
`;

const DescriptionText = styled.p`
    margin-top: 3%;
    font-family: 'Raleway';
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
`

const Logo = styled(motion.img)`
    width: 70px;
    height: 100px;
    padding-left: 3%;
`;

const LogoExplained = styled(motion.img)`
    width: 20%;
    height: auto;
    margin-top: 3%;
`;

const LogoExplainedMobile = styled(motion.img)`
    width: 11%;
    height: auto;
    margin-top: 3%;
`;

const LogoExplainedDb = styled(motion.img)`
    width: 12%;
    height: auto;
    margin-top: 5px;
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

const Title = styled(motion.h1)`
    width: 100%;
    padding-bottom: 50px;
    padding-top: 35px;
    font-size: 45px;
    font-weight: 700;
    color: #d96220;
    font-family: 'Raleway';
`;