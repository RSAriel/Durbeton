import React from "react";
import { Container, HeaderContainer, MeetUs, OverlayImage, ScrollImage, MeetDurbetonContainer, Text1, Text2, Text3 } from './styles';
import { Overlay, ScrollDown } from '../../assets';

export const Header: React.FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <Text3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text3>
                <ScrollImage src={ScrollDown} alt=""/>
            </HeaderContainer>
            <MeetDurbetonContainer id="aboutus">
                <Text1>
                    <MeetUs>
                        Conheça a <p>Durbeton!</p>
                    </MeetUs>
                    <Text2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text2>
                </Text1>
                <OverlayImage src= {Overlay} alt=""/>
            </MeetDurbetonContainer>
        </Container>
    );
}