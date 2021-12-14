import { createGlobalStyle } from "styled-components";

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
        background-color:rgb(0, 0, 0);
        border-radius:5px;
    }
`;

export const backgroundColor = '#2E2E2E';
export const textColor = '#F5F5F5';
export const facebookButtonColor = '#1D6AFF';
export const googleButtonColor = '#FF5757';
export const mainColor = '#9316C1';
export const isPlayingColor = '#C321FF';
export const isPlayingBackground = '#0C0C0C';
export const ProgressBarEnd = '#C4C4C4';