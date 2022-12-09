import React from "react";
import { ServicesContainer } from "./styles";
import { ServicesTitle } from "./styles";
import { ServicesDescription } from "./styles";
import { Shield} from "../../assets";

type ServicesProps = {
  title: string;
  description: string;
}


export const ServicesBox: React.ElementType= ({title, description}: ServicesProps) => (
  <ServicesContainer>
    <img src={Shield}/> 
    <ServicesTitle>{title}</ServicesTitle>
    <ServicesDescription>{description}</ServicesDescription>
  </ServicesContainer>
)