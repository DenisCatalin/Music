import styled from "styled-components";
import { backgroundColor, textColor, mainColor, facebookButtonColor, googleButtonColor, spotifyButtonColor } from "../../global.styles";

export const SignInPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

export const DivWrapper = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`;

export const LogoContainer = styled.img`
    width: 10%;

    @media screen and (max-width: 420px) {
        width: 35%;
    }
`;

export const LogoTitle = styled.h1`
    color: ${textColor};
    text-align: center;
`;

export const Title = styled.h2`
    color: ${textColor};
    text-align: center;
    font-weight: 100;
`;

export const FormButton = styled.button`
    width: 10%;
    height: 5vh;
    border-radius: 50px;
    border: none;
    outline: none;
    font-weight: 100;
    color: white;
    background: ${mainColor};
    font-size: 1.6em;

    @media screen and (max-width: 420px) {
        width: 40%;
    }
`;

export const LoginButtons = styled.div`
    width: 10%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 420px) {
        width: 40%;
    }
`;

export const FacebookButton = styled.button`
    width: 30%;
    height: 70%;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2em;
    color: white;
    font-weight: bold;
    background: ${facebookButtonColor};

    @media screen and (max-width: 420px) {
        font-size: 1.5em;
        width: 50px;
        height: 50px;
    }
`;

export const GoogleButton = styled.button`
    width: 30%;
    height: 70%;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2em;
    color: white;
    font-weight: bold;
    background: ${googleButtonColor};

    @media screen and (max-width: 420px) {
        font-size: 1.5em;
        width: 50px;
        height: 50px;
    }
`;

export const SpotifyButton = styled.button`
    width: 30%;
    height: 70%;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 2em;
    color: white;
    font-weight: bold;
    background: ${spotifyButtonColor};

    @media screen and (max-width: 420px) {
        font-size: 1.5em;
        width: 50px;
        height: 50px;
    }
`;