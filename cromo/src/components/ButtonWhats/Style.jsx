import styled from "styled-components";

  export const BtnContact = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  transform: translateY(50%);
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border-style: none;

  transition: all 0.3s ease-in-out;

  &.scrolled {
    position: absolute;
    bottom: 20px;
    right: 20px;
    transform: translateY(0%);
  }
`;

