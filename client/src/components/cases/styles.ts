import styled from "styled-components";


export const Box = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	.swiper-pagination-bullet{
		width: 31px;
		height: 7px;
		border-radius: 3.5px;

		background-color: #D9D9D9;
		opacity: 1;
		transition: 0.5s;
	}

	.swiper-pagination-bullet-active{
		width: 58px;
		height: 7px;
		border-radius: 3.5px;

		background-color: #185392;
		opacity: 1;
		transition: 0.5s;
	}

	.swiper-pagination {
		position: relative;
		bottom: 0;
	}
`;

export const SliderButton = styled.div`
	width: 40px;
	height: 40px;
	margin: 15px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	color: #185392;

	cursor: pointer;
`;

export const Slide = styled.img`
	width: 100%;
	height: 100%; 

	border-radius: 5px;
`;

