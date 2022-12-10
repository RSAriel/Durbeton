import styled from 'styled-components'; 


export const Container = styled.div`
    width: 100%;

    padding-top: 52px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ServicesContainer = styled.section `

    width: 100%;
    height: 558px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
`;

export const Bar = styled.div`
	width: 37vh;
	height: 4px;
	margin-bottom: 16px;
	background-color: #185392;
	border-radius: 2px;
`;

export const Title = styled.h1 `
    font-family: Anybody;
    font-size: 32px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: #185392;

`;

export const Boxes = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 7vw;
    margin-right: 7vw;

`;