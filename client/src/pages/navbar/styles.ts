import styled from 'styled-components'; 


export const NavbarContainer = styled.div`
    width: 100%;
    height: 11.7vh;

    position: fixed;
    top: 0;
    z-index: 100;
    
    padding-top: 3.5vh;
    padding-left: 8.5vw;
    padding-right:8.5vw;
    padding-bottom: 3.5vh;

    background-color: rgba(24, 83, 146, 1);

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
    text-transform: uppercase;

    color: #FFFFFF;
`;

export const PageSections = styled.div`
    width: 45vw;
    
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        list-style: none;
    }
`;

export const Contact = styled.div`
    width: 11vw;
    
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        list-style: none;
    }
    
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
    text-decoration: none;


    :hover{
        text-decoration: underline;
    }
`;
