import styled from "styled-components";

export const FormContainer = styled.form`
width: 400px;
height: 412px;
border-radius: 16px;
padding: 32px;
gap: 18px;
background-color: #ffffff;
`;

export const Radio = styled.div`
margin-top: 5px;
margin-bottom: 10px;
color: #222222;
font-size: 14px;
font-weight: 400px;
`;


export const Input = styled.input`  
    width: 100%;   
    min-width: 336px;
    height: 48px;
    border-radius: 8px;
    padding: 
    8px, 16px, 8px, 16px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #F1F1F1;
    font-size: 14px;
    font-weight: 400;

    `;

    export const InputArea = styled.input`  
    width: 100%;   
    min-width: 336px;
    height: 148px;
    border-radius: 8px;
    padding: 
    8px, 16px, 8px, 16px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #F1F1F1;
    font-size: 14px;
    font-weight: 400;

    `;

export const Button = styled.button`

    width: 100%;
    height: 41px;
    border-radius: 8px;
    background-color: #000;
    color: #ffffffd8;
    border-style: none;

        &:hover {
      color: #000000;
      background-color: #06aacf;
      cursor: pointer;     
    }
    `;