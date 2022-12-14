import React from "react";
import { Bar, CasesContainer, OurCases, OurCasesContainer, Text } from './styles';
import { SliderImage } from '../../assets';
import { SliderComponent } from "../../components";

export const Cases: React.FC = () => {
  return (
    <CasesContainer id="portfolio">
      <OurCasesContainer>
				<Bar> </Bar>
				<OurCases> Nossas Cases </OurCases>
				<Text> 
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod. 
				</Text>
			</OurCasesContainer>
			<SliderComponent/>
    </CasesContainer>
  );
}