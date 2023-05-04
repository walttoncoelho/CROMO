import styled from "styled-components";
export const ContainerNumeros = styled.div`
display: flex;
margin: auto;
width:100%;
max-width: 1200px;


@media (max-width: 500px) {
    flex-direction: column;    
}
;
`

export const BlocoDesc = styled.div`
display: flex;
width: 100%;
padding: 5px;
p{
    max-width: 510px;
}


@media ( max-width: 1024px){  
    padding: 20px;
    }

@media ( max-width: 500px){ 
    display: flex;
    width: 100%;
    margin: auto;
    max-width: 350px;
    padding: 20px;
    
}
;
`

export const BlocoNumbers = styled.div`
@media ( max-width: 550px){ 
    display: flex;
    margin: auto;
    padding: 5px;
    gap:10px;    
    max-width: 450px;
}

@media ( max-width: 1024px){ 
    min-width: 450px;
    padding: 5px;
    gap:10px;    
}

display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 100%;
gap: 10px;
;
`

export const StyleNumbers = styled.div`
@media (max-width: 1024px) { 
    padding: 10px;
    width: 200px;
    margin-left: 40px;
}

@media (max-width: 500px) {
    padding: 10px;
    width: 160px;
    margin-left: 9px;
    
}



display: flex;
flex-direction: column;
padding: 5px;
margin: auto;
width: 300px;
height: 100px;
margin-right: -30px;


h1{
    margin-bottom: -10px;  
    color:#118FAA;
}

;
`
