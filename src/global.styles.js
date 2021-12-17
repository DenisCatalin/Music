import styled, { createGlobalStyle } from "styled-components";

export const backgroundColor = '#2E2E2E';
export const textColor = '#F5F5F5';
export const facebookButtonColor = '#1D6AFF';
export const googleButtonColor = '#FF5757';
export const mainColor = '#9316C1';
export const isPlayingColor = '#C321FF';
export const isPlayingBackground = '#0C0C0C';
export const ProgressBarEnd = '#C4C4C4';
export const NavbarBackground = '#1C1C1C';
export const ControllerBackground = '#262626';
export const spotifyButtonColor = '#54bf56';

export const Width100Height100 = styled.div`
    width: 100%;
    height: 100%;
`;

export const GlobalStyles = createGlobalStyle`
    * { 
        padding: 0; 
        margin: 0; 
        box-sizing: border-box; 
        font-family: 'Ropa Sans', sans-serif;
    }

    a { color: black; text-decoration: none; }

    ::-webkit-scrollbar { width:5px }
    ::-webkit-scrollbar-thumb {
        background-color: ${mainColor};
        border-radius:5px;
    }
`;