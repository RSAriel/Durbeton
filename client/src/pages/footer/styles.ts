import styled from 'styled-components'; 


export const FooterContainer = styled.footer `
    
    display: flex;  
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    position:relative;

    bottom:0;
    left:0;
    width:100%;
    height: 44.5vh;
    background-color:#185392;


    p {
        margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
    }


`;

export const FooterDiv1 = styled.div `

display:flex;
    flex-direction: column;
    margin-left: 7.6vw;
    margin-top: 6.8vh;
    margin-bottom: 7.8vh;

p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    color: #F5F5F5;
    }

    p:nth-of-type(3) {
        margin-top: 2vh
    }
`;

export const FooterDiv2 = styled.div `
    width: 100vw;
    height: 36.7vh ;
    display:flex;
    align-items:center;
    justify-content: space-around;
    border-top: 0.1px solid #FFFFFF;

    p {
        margin:0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;  
    }

    p:nth-of-type(1) {
        margin-right:9.5vw;
    }
   
    p:nth-of-type(2) {
        margin-left:9.5vw;
    }
    `;
    

