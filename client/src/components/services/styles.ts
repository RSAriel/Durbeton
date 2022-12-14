import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 27.8%; 
    height: 122%; 
    background: #185392;
    border-radius: 2px;
    img {
        width: 24px;
        height: 30px;  
    }
    padding: 3.75% 4.912% 0 4%;  

    @media (min-height: 700px) {
        width: 27.8%; 
        height: 170%; 
    }

    @media (max-width: 900px) {
        width: 58%;
        height: 200%;
        margin-bottom: 8%;
    }

    ;
`;


export const ServicesTitle = styled.h1`
    display: inline-block;
    
    padding: 0;
    border: 0;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF; 
    margin-top: 9%
    

`;

export const ServicesDescription = styled.p`
 
    padding: 0;
    border: 0;
    color: #FFFFFF; 

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;  
    margin-top: 6%;

    @media (min-height: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 900px) {
        margin-bottom: 10%;


`;