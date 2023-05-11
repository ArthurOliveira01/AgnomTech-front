import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();

    function toProjects(){
        navigate('/projects');
    }
    function toAbout(){
        navigate('/about');
    }
    function toTech(){
        navigate('/technologies');
    }
    function toHome(){
        navigate("/")
    }
    
    return(
        <>
            <Top>
                <Logo onClick={toHome} src={logo} />
                <Pages>
                    <p onClick={toProjects}>Projetos</p>
                    <p onClick={toTech}>Tecnologias</p>
                    <p onClick={toAbout}>Sobre nós</p>
                </Pages>
            </Top>
        </>
    )
}

const Logo = styled.img`
    width: 60px;
    margin-left: 5%;
    :hover{
        cursor: pointer;
    }
`;

const Pages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 25%;
    font-family: 'Raleway';
    color: #FFFFFF;
    p:hover{
        cursor: pointer;
    }
`;

const Top = styled.div`
    width: 100%;
    background-color: #065ad4;
    height: 80px;
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;