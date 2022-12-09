import React from "react";
import { Container, Title, Info, InputB, InputL, InputR, Button } from "./styles";
import { Enviar } from "../../assets"

export const Form: React.ElementType= () => {
    return (  
        <Container>
            <Title>Ficou interessado?<br/>Fale conosco!</Title>
            <Info>
                <InputB placeholder="Nome" type="text"/>
                <InputL placeholder="E-mail" type="email"/>
                <InputR placeholder="Telefone" type="tel"/>
                <InputB placeholder="Motivo do contato" type="text"/>      
            </Info>                     
            <Button><img src={Enviar} alt="Enviar"/></Button>
        </Container>
        
  );
 }