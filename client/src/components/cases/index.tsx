import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as SwiperCore} from 'swiper/types';
import 'swiper/css/pagination';

import { Box, Slide, SliderButton } from "./styles";
import { SliderImage } from "../../assets";
import { Pagination } from "swiper";


export const SliderComponent : React.ElementType= () => {

	const swiperRef = React.useRef<SwiperCore>();

	/*const [number, setNumber] = useState(1);
	
	const prevSlide = () => {
		if (number > 1){
			setNumber((prevNumber) => prevNumber - 1);
		} else {
			setNumber(1);
		}
	}

	const nextSlide = () => {
		if (number < 3){
			setNumber((prevNumber) => prevNumber + 1);
		} else {
			setNumber(3);
		}
	}*/
	


	return(
		<Box>
			<SliderButton onClick={() => swiperRef.current?.slidePrev()}>
				<FaChevronLeft size={25}/>
			</SliderButton>
			
			
			<Swiper
				modules={[Pagination]}
				spaceBetween={10}
				slidesPerView={1}
				pagination={{ clickable: true }}
				onBeforeInit={(swiper) =>{
					swiperRef.current = swiper;
				}}
			>
			
			<SwiperSlide> <Slide src={SliderImage} alt="" /> </SwiperSlide>
			<SwiperSlide> <Slide src={SliderImage} alt="" /> </SwiperSlide>
			<SwiperSlide> <Slide src={SliderImage} alt="" /> </SwiperSlide>
			</Swiper>

			<SliderButton onClick={() => swiperRef.current?.slideNext()}>
				<FaChevronRight size={25}/>
			</SliderButton>

		</Box>
	)
}