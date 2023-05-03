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
margin-top: 10px;
margin-bottom: 12px;
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

export const InputArea = styled.input`  

@media (max-width: 550px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-width: 300px;

}


height: 148px;
border-radius: 8px;
padding: 2px;
min-width: 400px;
margin-bottom: 10px;
border-style: none;
background-color: #F1F1F1;
font-size: 14px;
font-weight: 500;
    &:focus {
    outline: 2px solid #06aacf;
  }
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

export const Popup = styled.div`
  display: flex;
  padding: 20px;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: #fafafaf6;
  padding: 20px;
  margin: auto;
  position: fixed;
  max-width: 370px;
  height: 270px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #ca1e1e;
  font-weight: 700;
  flex-direction: column;
  border: solid 2px #0076ac83;
button{
  margin-top: 10px;
  width: 150px;
  height: 45px;
  border-radius: 8px;
  border-style: none;
  color: #0075ac;
  font-weight: 500;
  border: solid 2px #0075ac;
cursor: pointer;

  &:hover{
  background-color: #0075ac;
  color: #fff;
  font-weight: 700;
  }
}
`;