import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%; 
  justify-content: center;
  background-color: #007F9B;
  align-items: flex-start;
`;


export const SectionFaleconosco = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
max-width:1440px;
height: 770px;
flex-direction: row; 
align-items: center;
`;









export const ColunaFormulario = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 64px;
  border-radius: 8px;  
  ul {  
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 20px;    
    padding: 0;
    overflow: hidden;
    flex-wrap: wrap;
    max-width: 150px;
    min-width: 150px;
  }

  li a {
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    width: 150px;
    margin: 20px;
  }
  li a:hover {
    border-radius: 5px;
    color: #ffd000; 
    font-weight: bold;
    transition-delay: 1.1;
    border-bottom: #ffd000 1px solid;
    
  }
`;



export const ByGoodApp = styled.div`
  margin: auto;
  display: flex;
  background-color: #007F9B;
  width: 100%;
  height: 35px;
  border-top: 1px solid #2f93aa;
  padding: 32px;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 12px;
    text-decoration: none;
  }

  strong {
    color: #fff;
    text-decoration: none;   
  }
`;


