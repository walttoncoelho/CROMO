import styled from "styled-components";

export const ButtonSucess= styled.button`
display: flex;
width: 130px;
height: 50px;
max-width: 130px;
max-height: 50px;
border-radius: 4px;
align-items: center;
justify-content: center;
cursor: pointer;
border-style: none;

background-color: #20B941;
p{
  color: #ffffff ;   
  font-size: 1.2em;
}

&:hover {
  background-color: #11922d; 
}
`;

export const Button= styled.button`
width: 100%;
height: 56px;
left: 32px;
top: 185px;
background-color: #22272E;
color: #fff;

border: 1px dashed #4d5055;
border-radius: 5px;

&:hover {
  background-color: #11922d; 
}
`;

export const SubMenu= styled.button`
width: 100%;
height: 56px;
left: 32px;
top: 185px;
background-color: #393b3d;
color: #fff;

border: 1px dashed #4d5055;
border-radius: 5px;

&:hover {
  background-color: #11922d; 
}
`;