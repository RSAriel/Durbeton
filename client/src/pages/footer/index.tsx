import React from "react";
import { FooterContainer } from './styles';
import { FooterDiv1 } from './styles';
import { FooterDiv2} from './styles';
import CITi from '../../assets/CITi.png';




export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterDiv1>
                <p> Av. Jornalista, Cidade Universitária, </p>
                <p> Recife - PE</p>
                <p> (81) 9888-8888 </p>
            </FooterDiv1>
            <FooterDiv2>
            <p>&#169; Copyright 2022 | Todos os direitos reservados</p>
				<p> Made with <strong>&lt; &#x0002F; &gt;</strong> and <strong>&hearts;</strong> by <img src={CITi} alt="Logo CITi"></img> </p>
            </FooterDiv2>
        </FooterContainer>
    );
}