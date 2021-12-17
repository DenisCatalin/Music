import styled from "styled-components";
import { textColor, mainColor } from "../../global.styles";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const LogoImage = styled.img`
    width: 55%;
`;

export const LogoText = styled.h1`
    color: ${textColor};
    font-weight: 100;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Option = styled.div`
    width: 100%;
    height: 30%;
    color: ${textColor};
    font-size: 1.5em;
    font-weight: 100;
    padding: 0 .5rem;
    display: flex;
    align-items: center;
    transition: .3s ease-in-out;
    cursor: pointer;
    padding: 0 1rem;

    &:hover {
        transform: scale(1.05);
    }
`;

export const AddNewContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(243, 243, 243, .2);
    cursor: pointer;
`;

export const AddNewCircle = styled.div`
    background: ${mainColor};
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 1.5em;
    display: flex;
    margin-right: 1em;
    align-items:center;
    justify-content: center;
    color: ${textColor};
`;

export const AddNewText = styled.h2`
    color: ${textColor};
    font-size: 1.5em;
    font-weight: 100;
`;

export const PlaylistContainer = styled.div`
    width: 100%;
    height: 45%;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    padding: .5rem 1rem;
    flex-direction: column;
`;

export const PlaylistName = styled.h1`
    color: ${textColor};
    font-size: 1.5em;
    font-weight: 100;
    cursor: pointer;
    margin-bottom: .5em;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;