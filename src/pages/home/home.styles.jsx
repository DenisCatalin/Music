import styled from "styled-components";
import { backgroundColor, NavbarBackground, ControllerBackground } from "../../global.styles";

export const HomepageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid; 
    grid-template-columns: 250px 1fr 1fr; 
    grid-template-rows: 750px 90px; 
    gap: 0px 0px; 
    background: ${backgroundColor};
    grid-template-areas: 
        "Nav Content2 Content2"
        "Nav Content2 Content2"
        "Controller Controller Controller"; 
`;

export const NavContainer = styled.div`
    background: ${NavbarBackground};
    grid-area: Nav;
`;

export const ContentContainer = styled.div`
    background: transparent;
    grid-area: Content2;
`;

export const ControllerContainer = styled.div`
    background: ${ControllerBackground};
    grid-area: Controller;
    z-index: 100;
`;