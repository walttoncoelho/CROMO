import styled from "styled-components";

export const ContainerEmpreend = styled.div`
display: flex;
margin: auto;
max-width: 1440px;
height: 400px;
  
`;

export const CardGalery = styled.div`
display: flex;
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
max-width: 400px;
height: 300px;

border-radius: 8px;

img {
    max-width: 400px;
    height: 300px;
    border-radius: 8px;
}  
`;


export const CardContainer = styled.div`  
display: flex;
margin: auto;
flex-direction: row;
width: 100%;
max-width:1440px;
padding: 5px;
`;

export const CardDescription = styled.div`  
display: flex;
margin-top: 174px;
position: absolute;
width: 380px;
height: 107px;
max-width: 400px;
background-color: #2942525e;
backdrop-filter: blur(20px);
flex-direction: column;
color: #fff;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
padding: 10px;

h3{
    margin-bottom: -13px;
    font-weight: 700;
}
h4{
font-weight: 500;
font-size: 14px;
margin-bottom: 8px;

}

a{
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 14px;
margin-bottom: 8px;
    color: #fff;
    img{
    width: 30px;
    height: 20px;
}
}



`;