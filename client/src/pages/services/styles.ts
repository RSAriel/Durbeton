import styled from 'styled-components'; 


export const Container = styled.div`
    width: 100%;
    height: 76.9vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 8.7vh;
    margin-bottom: 5.3%;

    @media (min-height: 700px) {
        margin-bottom: 0;
    }

    @media (max-width: 900px) {
        height: auto;

    }
`;

export const Bar = styled.div`
	width: 18em;
	height: 4px;
	margin-bottom: 16px;
	background-color: #185392;
	border-radius: 2px;
`;

export const Title = styled.h1 `
    font-family: Anybody;
    font-size: 2em;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: #185392;

`;

export const ServicesContainer = styled.div `

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    aligh-items: center;
    justify-content: space-around;

    padding: 5.4% 10% 0 10%;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
  
`;
