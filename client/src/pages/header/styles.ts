import styled from 'styled-components'; 
import { HeaderImage } from '../../assets';

export const Container = styled.div`
    
`;

export const HeaderContainer = styled.div`
    background-image: url(${HeaderImage});
    background-repeat: no-repeat;
    background-size: 100vw 67.8vh;
    width: 100%;
    height: 67.8vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Text3 = styled.p`
    width: 65vw;

    font-family: 'Anybody';
    font-style: normal;
    font-weight: 700;
    font-size: 7vh;
    line-height: 7.2vh;

    color: #FDFDFD;
`;

export const ScrollImage = styled.img`
    width: 14.8vw;
    height: auto;

    margin-top: 3.8vh;
`;

export const MeetDurbetonContainer = styled.div`
    width: 100%;
    height: 76.4vh;
    padding-top: 8vh;
    padding-left: 7.3vw;
    padding-right: 1vw;
    padding-bottom: 6vh;

    background-color: #FDFDFD;

    display: flex;
    flex-direction: row;
    justify-content: start;
`;

export const MeetUs = styled.p`
    width: 85%;

    font-family: 'Anybody';
    font-style: normal;
    font-weight: 700;
    font-size: 4.2vh;
    line-height: 4.3vh;

    color: #185392;
`;

export const Text1 = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Text2 = styled.p`
    width: 34.7vw;
    margin-top: 3.1vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2.1vh;
    line-height: 3.1vh;

    color: #000000;
`;

export const OverlayImage = styled.img`
    //width: 53.1vw;
    width: 50vw;
    height: 62.7vh;

    margin-left: 3vw
`;
