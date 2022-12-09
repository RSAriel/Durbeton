import React from "react";
import { setSyntheticLeadingComments } from "typescript";
import { SliderContainer, Slides, SlidesContainer, SlideBar, Bar, Slide } from "./styles";
import { CITi, LogoCITi, SliderImage } from "../../assets"

type SliderProps = {
	slide1: URL;
	slide2: URL;
	slide3: URL;
}

export const Slider: React.ElementType= ({slide1, slide2, slide3}: SliderProps) => (
	<SliderContainer>

		<SlidesContainer>
			
			<Slides> 

				<Slide> <img id="image1" src={SliderImage} alt=""/> </Slide>
				<Slide> <img id="image2" src={CITi} alt=""/> </Slide>
				<Slide> <img id="image3" src={LogoCITi} alt=""/> </Slide>
			 
			</Slides>

			<SlideBar>

				<input type="radio" id="btn1"/>		
				<input type="radio" id="btn2"/>
				<input type="radio" id="btn3"/>

				<Bar htmlFor="btn1"></Bar>
				<Bar htmlFor="btn2"></Bar>
				<Bar htmlFor="btn3"></Bar>

			</SlideBar>

		</SlidesContainer>

	</SliderContainer>
)