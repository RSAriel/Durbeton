import styled from "styled-components";

export const SliderContainer = styled.section`
	width: 52.8vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const LeftArrow = styled.div`
	width: 2.9vw;
	height: 2.9vw;
	margin-right: 1.2vw;
`;

export const RightArrow = styled.div`
	width: 2.9vw;
	height: auto;
	margin-left: 1.2vw;
`;

export const SlidesContainer = styled.div`
	width: 44.7vw;
	height: 59.2vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Slides = styled.div`
	width: 44.7vw;
	height: 59.2vh;
	display: flex;
	flex-direction: row;
	overflow: hidden;
`;

export const Slide = styled.div`
	img{
		width: 44.7vw;
		height: 59.2vh;
		position: relative;
	}
`;

export const SlideBar = styled.div`
	width: 9.7vw;
	height: 0.9vh;
	margin-top: 5.7vh;
	display: flex;
	flex-direction: row;
	input{
		display: none;
	}
`;

export const Bar = styled.label`
	width: 2.3vw;
	height: 0.9vh;
	
	background-color: #D9D9D9;
	border-radius: 6.5px;
	:not(:last-child){
		margin-right: 0.4vw;
	}
	
	cursor: pointer;
	transition: 1s;
	:hover{
		width: 4.3vw;
		background-color: #185392;
	}
	:checked{
		width: 4.3vw;
		background-color: #185392
	}
`;