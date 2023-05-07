import styled from "styled-components";

// Container dos Menus

export const PainelAdministrativo = styled.nav`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 370px;
    height: calc(100vh - 81px);
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    color: #FFFF;
    background-color: #F5F5F5;
    align-items: center;
    overflow-y: auto;
`
// Card Painel

export const PainelMenu = styled.div`
    margin-top: 24px;
    background-color: #17417D;
    padding: 10px;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;
    width: 299px;
    border-radius: 5px 5px 0px 0px;
    font-weight: 400;
`

export const PainelListaMenu = styled.div`
display: flex;
flex-direction: column;
    font-size: 14px;
    background-color: #21559D;
    list-style-type: none;
    align-self: center;
    padding: 21px 0px 23px 51px;
    font-weight: 400;    
    margin-bottom: 1px;
    cursor: pointer;

    .styleList {     
        display: flex;
        margin:auto ;      
        width: 100%;       
        height: 48px;
        align-items: center;
        justify-content: center;
        border-bottom: solid 0.5px #17417D;

        :hover{
            background-color: #17417D;
        }
    }
    
    a{
        width: 100%;      
        color: #ffffff;         
        text-decoration: none;
    
    }

`

// Menu Conteúdo



export const PainelListaConteudo = styled.li`
    color: #0a2f62;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    padding: 21px 0px 23px 51px;
    margin-left: -40px;
`
export const PainelConteudo = styled.div`
  /* estilo para o conteúdo do painel */
  color: #2b4aaf;
  font-size: 20px;
  font-weight: 500;
`;

export const BannerMenuItem = styled.li`
  /* estilo para cada item do menu */

  color: #000;
  a{
    text-decoration: none;
  }

`;

export const BannerMenuLink = styled.a`
  /* estilo para o link do menu */
  color: #000;
  cursor: pointer;
`;

export const DropdownContent = styled.ul`
  /* estilo para o menu dropdown */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownLink = styled.a`
  /* estilo para cada item do menu dropdown */
`;