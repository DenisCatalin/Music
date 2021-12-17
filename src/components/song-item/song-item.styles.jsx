import styled from "styled-components";
import { textColor } from "../../global.styles";

export const SongItemContainer = styled.div`
    width: 100%;
    height: 8%;
    border-bottom: 1px solid rgba(243, 243, 243, .2);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    cursor: pointer;

    &:hover {
        background: rgba(243, 243, 243, .3);
    }
`;

export const SongNumber = styled.h1`
    width: 4.5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${textColor};
    font-weight: 100;
    font-size: 1.5em;
`;

export const SongTitleContainer = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const SongDescription = styled.div`
    color: ${textColor};
    margin-left: .5em;
`;

export const SongTitle = styled.h1`
    font-weight: 100;
    font-size: 1.4em;
`;

export const SongArtist = styled.h1`
    font-weight: 100;
    font-size: 1em;
    color: rgba(255, 255, 255, .4)
`;

export const SongImage = styled.img`
    width: 10%;
    border-radius: 5px;
`;

export const SongAlbum = styled.div`
    width: 21%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${textColor};
    font-size: 1.2em;
    font-weight: 100;
    padding: 0 .2rem;
`;

export const SongDateAdded = styled.div`
    width: 19%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${textColor};
    font-size: 1.2em;
    font-weight: 100;
    padding: 0 1.2rem;
`;

export const SongDuration = styled.h1`
    width: 21%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${textColor};
    font-size: 1.2em;
    font-weight: 100;
    padding: 0 .7rem;
`;