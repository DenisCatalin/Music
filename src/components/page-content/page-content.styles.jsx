import styled from "styled-components";
import { textColor } from "../../global.styles";

export const PageContentContainer = styled.div`
    width: 100%;
    height: 95%;
`;

export const UpperTable = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid rgba(243, 243, 243, .2);
`;

export const Desc = styled.div`
    color: ${textColor};
    font-size: 1.2em;
`;