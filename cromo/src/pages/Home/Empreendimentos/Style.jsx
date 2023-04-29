import styled from "styled-components";

export const ContainerEmpreend = styled.div`
  display: flex;
  margin: auto;
  max-width: 1248px;
  margin-bottom: 50px;
  width: 100%;
/*   background-color: #9c2690; */


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
  padding: 6px, 12px, 6px, 12px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
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
  

`;

export const CardGalery = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 8px;
  /* background-color: #0042f6; */

  img {
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    
 
    width: 700px;
    padding: 5px;   
    margin-bottom: 24px;
    max-width: 800px;
   

    img {
      width: 100%;
      height: auto;
      max-width: 838px;
      max-height: 300px;
    }
  }
    @media (max-width: 500px) {
 
    width: 360px;
    padding: 5px;   
    margin-bottom: 24px;
    max-width: 800px;
    margin-left: 10px;
   

    img {
      width: 100%;
      height: auto;
      max-width: 838px;
      max-height: 300px;
    }
  }

    @media (max-width: 500px) {
          img {
      width: 400px;
      height: auto;
    
    }
    }
`;


export const CardContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  padding: 5px;
/*   background-color: #d60c0ce3; */

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    margin: auto;
    flex-direction: column;
 /*    background-color: #27c52f; */

  }
`;

export const CardDescription = styled.div`

  display: flex;
  margin-top: 174px;
  position: absolute;
  width: 380px;
  height: 107px;
  max-width: 400px;
  background: linear-gradient(to bottom, #aeaeae48 50%, #131a1fcb 100%);

  backdrop-filter: blur(20px);
  flex-direction: column;
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;

  h3 {
    margin-bottom: -13px;
    font-weight: 700;
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 8px;
  }

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 8px;
    color: #fff;
    img {
      width: 30px;
      height: 20px;
    }
  }


`;
