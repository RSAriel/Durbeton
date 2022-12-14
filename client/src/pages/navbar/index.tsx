import React from "react";
import { Arrow, Contact, NavbarContainer, Sec } from './styles';
import { Name, PageSections } from './styles';
import { RightArrow } from '../../assets';



export const Navbar: React.FC = () => {
    return (
        <NavbarContainer >
            <Name id="home">
                durbeton
            </Name>
            <PageSections className="menu">
                <ul>
                    <li><Sec href="#home">Home</Sec></li>
                    <li><Sec href="#aboutus">Sobre Nós</Sec></li>
                    <li><Sec href="#services">Serviços</Sec></li>
                    <li><Sec href="#portfolio">Portifólio</Sec></li>
                </ul>
            </PageSections>
            <Contact className="menu">
                <ul>
                    <li><Sec href="#contact">Fale Conosco</Sec></li>
                    <li><Sec href="#contact"><Arrow src={RightArrow} alt="Seta" /></Sec></li>
                </ul>
            </Contact>
                
        </NavbarContainer>
    );
}