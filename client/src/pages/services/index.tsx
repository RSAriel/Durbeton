import React from "react";
import { Container } from "./styles";
import { Title } from "./styles";
import { Boxes} from "./styles";
import { ServicesBox } from "../../components/";

export const Services: React.FC = () => {
    return (
        <Container>
            <Title> Nossos Serviços </Title>
            <Boxes>
                <ServicesBox title={"Segurança"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <ServicesBox title={"Segurança"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <ServicesBox title={"Segurança"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            </Boxes>
        </Container>
    );
}