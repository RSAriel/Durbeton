import styled from 'styled-components'; 


export const Container = styled.div`
    width: 100%;

    background-color: #FFFFFF;
    background: linear-gradient(360deg, #185392 -71.85%, rgba(217, 217, 217, 0) 58.52%);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60.9vw; 
    height: 61.5vh; 
    background: #185392;
    margin: 5.5vh 13.9vw 8.8vh 13.9vw; 
    padding: 4.54% 5.1vw 2.6vh 5.1vw;
    border-radius: 2px;
`;



export const Title = styled.h1`
    
    margin: 0 0 4.3vh 0; 
    padding: 0;
    border: 0;

    font-family: 'Anybody';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 41px;
    color: #FFFFFF;
    
    
`;

export const Info = styled.div`
    height: auto;
    
`;

export const InputB = styled.input`
    
    all: unset;
    box-sizing: border-box;
    width: 100%;
    

    ::placeholder{
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    }
    padding: 0.5vh 0 2vh 1.3vh;
    border-bottom: 1px solid #FFFFFF;
    margin-top:0;
    margin-bottom: 5.7vh;
    color: #FFFFFF;

`
export const InputL = styled.input`
    
    all: unset;
    width: 46%;
    ::placeholder{
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    }
    padding: 0.5vh 0 2vh 1.3vh;
    border-bottom: 1px solid #FFFFFF;

    margin-bottom: 5.7vh;
    margin-right: 3.75%;
    
    color: #FFFFFF;

   @media (max-width: 1280px){
    margin-right: 3%;

   } 
`
//margin-right: 2.32vw;

export const InputR = styled.input`
    
    all: unset;
    width: 47.1%;
    ::placeholder{
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    }
    padding: 0.5vh 0 2vh 1.3vh;
    border-bottom: 1px solid #FFFFFF;
    margin-bottom: 5.7vh;
    color: #FFFFFF;

`
export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
`;