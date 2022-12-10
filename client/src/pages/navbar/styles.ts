import styled from 'styled-components'; 


export const NavbarContainer = styled.div`
    width: 100%;
    height: 11.7vh;
    
    padding-top: 3.5vh;
    padding-left: 8.5vw;
    padding-right:8.5vw;
    padding-bottom: 3.5vh;

    background-color: #185392E5;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
`;

export const BackImage = styled.img`
    width: 100vw;
    height: 68vh;
`;

export const Name = styled.p`
    width: 13vw;
    height: 4vh;

    font-family: 'Anybody';
    font-weight: 700;
    font-size: 4vh;
    line-height:4.3vh;

    color: #FFFFFF;
`;

export const PageSections = styled.div`
    width: 45vw;
    
    display: flex;
    justify-content: space-around;
`;

export const Contact = styled.div`
    width: 11vw;
    
    display: flex;
    justify-content: space-between;
`;

export const Arrow = styled.img`
    width: 17px;
    height: 13px;
`;

export const Sec = styled.a`
    height: 3.5vh;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 2.5vh;
    line-height: 3.5vh;
    
    color: #FFFFFF;
    font-style: normal;

    :link{
        text-decoration: none;
    }

    :hover{
        text-decoration: underline;
    }
`;
