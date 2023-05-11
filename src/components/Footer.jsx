import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import insta from "../assets/insta.svg";
import whats from "../assets/whats.svg";

export default function Footer(){

    return(
        <Bottom>
        <Img src={logo} />
        <Social>
            <p>Formas de contato</p>
            <Collection>
                <a href="https://www.instagram.com/agnom_tech/"><Media src={insta} /></a>
                <Space />
                <a href="https://wa.me/5565996587126">
                    <Media src={whats} />
                </a>
            </Collection>
        </Social>
    </Bottom>
    )
}







const Img = styled.img`
    width: 90px;
    height: 72.42px;
    margin-left: 5%;
`;

const Space = styled.div`
    width: 5px;
`

const Media = styled.img`
    width: 30px;
    &:first-of-type{
        margin-right: 3%;
        width: 35px;
    }
    &:last-of-type{

    }
    :hover{
        cursor: pointer;
    }
`;

const Collection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Social = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: 'Raleway';
        color: #fdfdfb;
        margin-bottom: 5px;
        font-size: 21px;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    width: 125%;
    background-color: #065ad4;
    height: 120px;
`;