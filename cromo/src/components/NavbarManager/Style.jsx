import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;
  background: #22272e;
 
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  width: 20%;
  min-width: 300px;

  img {
    height: 100px;
  }
  
`;

export const ContainerSitePreview = styled.div`
  display: flex;
  margin: auto;
  width: 60%;
 
  margin-left: 50px;
`;

export const ContainerSitePerfil = styled.div`
  display: flex;
  margin: auto;
  width: 20%;
  height: 100%;
  background-color: #d3ad66;
`;

export const ContainerSair = styled.div`
  margin: auto;
  width: 20%;
  height: 100%;
  background-color: #91d366;
`;
