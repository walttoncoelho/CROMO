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
cursor: pointer;

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
cursor: pointer;

&:hover {
  background-color: #11922d; 
}
`;

export const ButtonSite= styled.button`
box-sizing: border-box;
width: 183px;
height: 56px;
border-radius: 5px;
color: #fff;
background-color: #22272e;
border: 1px dashed #20B941;
cursor: pointer;

&:hover {
  background-color: #11922d; 
}

`;

export const ButtonSair= styled.button`
box-sizing: border-box;
width: 183px;
height: 56px;
border-radius: 5px;
color: #fff;
background-color: #22272e;
border: 1px dashed #cecece;
cursor: pointer;

&:hover {
  border: 1px dashed #20B941;
}

`;


export const ButtonVerMais= styled.button`
box-sizing: border-box;
width: 101px;
height: 41px;
border-radius: 10px;

background-color: #ffffff;

border: 2px solid #0A0A0A;


p{
  margin: auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.05em;

   a{
    text-decoration: none;
    color: #0A0A0A;  
   }
}

&:hover {
  background-color: #118FAA;
  color: #fff;
  border-style: none;

     a{
 
    color: #ffffff;  
   }
}

`;

