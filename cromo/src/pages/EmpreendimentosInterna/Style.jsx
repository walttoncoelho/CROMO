import styled from "styled-components";
import imagemDeFundo from "./img/florenca.png";

export const ContainerHeader = styled.div`

@media (max-width:550px) {
  flex-direction: column; 
  max-width: 100%;
}
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1920px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: #007a97;
  background-image: url(${imagemDeFundo});

  img {
    display: flex;
    margin: auto;
    max-width: 270px;
  }
`;

export const SectionDescription = styled.div`

@media (max-width:550px) {
  flex-direction: column;

  img{
    width: 85%;
  }
  
}




  display: flex;
  margin: auto;
  max-width: 1420px;
  padding: 5px;

  
  
  img {
    display: flex;
    margin: auto;
    max-width: 512px;
  }

`;

export const ContainerDescription = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;

`;

export const ContainerPlanta = styled.div`
  display: flex;
  margin: auto;
`;

export const ContainerSobre = styled.div`

@media (max-width:550px) {
  flex-direction: column; 
  max-width: 330px;
}

  display: flex;
  margin: auto;
  width: 100%;
  max-width: 718px;
  height: 339px;
  background-color: #f1f1f1;
  padding: 10px;
`;

export const SobreStyleText = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 590px;
  padding: 10px;

  h2 {
    font-weight: 700;
    font-size: 32px;
    color: #0a0a0a;
    p {
      font-weight: 700;
      font-size: 20px;
      color: #0a0a0a;
      
    }
  }

  .numeros {
    color: #cb2c2c;
  }
`;

export const ContainerIcons = styled.div`


@media (max-width:550px) {
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  height: 250px;
  width: 300px;
  
}
  display: flex;
  margin: auto;
  width: 100%;
  height: 100px; 
  max-width: 718px;  
  
  img{

    margin-top: 10px;
    width:59px ;
    margin-bottom: 5px;
  }
  

  .styleIcons{

    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 69px;

  p{            
    margin: auto;
    font-size: 14px;
    font-weight: 500;
    color: #222222;      
  }  
    
  }
`;

export const SectionGalery = styled.div`
@media (max-width:550px) {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  padding: 2px;

  img{
    width: 100px;
    height: 96px;
  }
  
}
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;  
  flex-direction: row;
  margin: auto;
  max-width: 1440px;
  padding: 5px;
gap:10px;

  

  img{
    display:flex;
    margin: auto;  
    padding: 2px;
    max-width: 400px;
  }
`;
