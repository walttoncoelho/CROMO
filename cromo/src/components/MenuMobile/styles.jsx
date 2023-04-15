
import styled from 'styled-components';



export const MenuButton = styled.button`
  @media screen and (min-width: 550px) {
    display: none;
  }


  display: block;
  height: 20px;
  position: relative;
  width: 20px;

  span {
    background-color: #333;
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transform-origin: center;
    transition-duration: 0.15s;
    transition-property: transform, opacity, left;
    width: 100%;

    &:nth-child(1) {
      top: ${props => props.open ? '50%' : '0'};
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      top: 50%;
    }

    &:nth-child(3) {
      bottom: ${props => props.open ? '50%' : '0'};
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export  const MenuList = styled.nav`
  background-color: #f1f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  width: 200px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    width:100%;
   

    li {
      margin: 0;
      background-color: #d8d8d8;
      padding: 5px;
      margin-bottom: 2px;
      height: 40px;
      
      
      &:hover {
        color: #333;        
          background-color: #949494;
               
      }

      a {
        display: flex;
        color: #333;
        font-size: 16px;
        font-weight: 500;
        padding: 10px;
        text-decoration: none;
      }
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 5px;
  right: 10px;
`;