import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: auto;
@media (max-width: 500px) {
  margin-top: -160px; 
}
`;

export const Radio = styled.div`
margin-top: 5px;
margin-bottom: 10px;
`;


export const Input = styled.input`  
@media (max-width: 500px) {
  width: 300px;  
}

    width: 694px;   
    height: 48px;
    border-radius: 8px;
    padding: 
    8px, 16px, 8px, 16px;
    margin-bottom: 10px;
    border-style: none;
    background-color: #ffffff;
    `;

export const Button = styled.button`

    width: 81px;
    height: 41px;
    border-radius: 8px;
    background-color: #000;
    color: #fff;
    border-style: none;

      &:hover {
      color: #000000;
      background-color: #06aacf;
      cursor: pointer;     
    }
    `;