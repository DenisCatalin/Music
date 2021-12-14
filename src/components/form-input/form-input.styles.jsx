import styled, { css } from "styled-components";
import { textColor } from "../../global.styles";

export const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;  

export const FormInputContainer = styled.div`
    position: relative;
    margin: 20px 0;
    width: 30%;

    @media screen and (max-width: 420px) {
        width: 80%;
    }
`;

const FormLabelStyle = css`
    color: grey;
    font-size: 1.2em;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;

export const FormInputLabel = styled.label`
    ${FormLabelStyle}
`;

const FormInputStyle = css`
    background: none;
    background-color: white;
    color: grey;
    font-size: 1.2em;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 50px;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        top: -25px;
        font-size: 1.2em;
        left: 10px;
        color: ${textColor};
    }

    &:valid ~ ${FormInputLabel} {
        top: -25px;
        left: 10px;
        font-size: 1.2em;
        color: ${textColor};
    }
`;

export const FormInputInput = styled.input`
    ${FormInputStyle}
`;