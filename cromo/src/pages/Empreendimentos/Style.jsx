import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1440px;  

  h1{
    margin-top: 64px;
    margin-bottom: -10px;
    text-align: center;
    justify-content: center;
    font-size: 40px;
    color: #0A0A0A;
  }

`;

export const ContainerEmpreend = styled.div`
  display: flex; 
  margin: auto;
 
`;

export const ContainerVermais = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1440px;
  height: 90px;
`;

export const ContainerStatus = styled.div`
  display: flex;
  position: absolute;
  margin: auto;
  justify-content: center;
  width: 118px;
  height: 29px;
  gap: 8px;
  padding: 6px, 12px, 6px, 12px ;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;


  p{
    font-size: 12px;
    margin: auto;
    font-weight: 600;
    line-height: 18.8px;

  }

`;



export const StatusStyle = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  max-width: 1440px;
  height: 90px;
  background-color: #39c7c77f;
`;

export const CardGalery = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  max-width: 1248px;
  
  border-radius: 8px;
  background-color: #F1F1F1;
  margin-top: 64px;
 

`;

export const CardImg = styled.div`
display: flex;
width: 60%;
height: 100%;
img{
  width: 100%;
  height: 100%;
 border-bottom-left-radius: 8px;
border-top-left-radius: 8px;
}
`;





export const CardDescription = styled.div`
display: flex;
flex-direction: column;
margin: auto;
max-width: 350px;

h2{
  color: #007F9B;
  font-size: 32px;
}

`;

export const ContainerLoteButton = styled.div`
display: flex;
flex-direction: row;
margin: auto;
align-items: center;
width: 100%;
justify-content: space-between;


`;




