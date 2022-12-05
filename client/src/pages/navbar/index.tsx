import React from "react";
import { Arrow, Contact, NavbarContainer, Sec } from './styles';
import { Name, PageSections } from './styles';
import { RightArrow } from '../../assets';



export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Name>
                DURBETON
            </Name>
            <PageSections>
                <Sec href="#home">Home</Sec>
                <Sec href="#aboutus">Sobre Nós</Sec>
                <Sec href="#services">Serviços</Sec>
                <Sec href="#portfolio">Portifólio</Sec>
            </PageSections>
            <Contact>
                <Sec href="#contact">Fale Conosco</Sec>
                <Sec href="#contact"><Arrow src={RightArrow} alt="Seta" /></Sec>
            </Contact>
        </NavbarContainer>
    );
}