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
// Primeiro Menu

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

export const PainelListaMenu = styled.li`
    font-size: 14px;
    background-color: #21559D;
    list-style-type: none;
    align-self: center;
    padding: 21px 0px 23px 51px;
    font-weight: 400;
    &:last-child {
        border-radius: 0px 0px 5px 5px;
    }
`

// Segundo Menu

export const PainelConteudo = styled.div`
    margin-top: 5px;
    padding: 10px;
    color: #0a2f62;
    font-size: 20px;
    padding: 19px 0px 19px 27px;
    border-top: 3px;
    width: 299px;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 10px;
    position: relative;
    font-weight: 400;
    &:before {
        content: '';
        position: absolute;
        left: 15px;
        bottom: 0;
        height: 20px;
        width: 281px;
        border-bottom: 1px solid #21559D80;
    }
`

export const PainelListaConteudo = styled.li`
    color: #0a2f62;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    padding: 21px 0px 23px 51px;
    margin-left: -40px;
`