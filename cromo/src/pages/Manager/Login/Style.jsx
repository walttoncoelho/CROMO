import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    span {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      background-color: #0069d9;
    }
  }

  div {
    margin-top: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResetPasswordPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    h2 {
      margin-top: 0;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      input {
        height: 30px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
      }

      span {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      height: 40px;
      padding: 0 20px;
      font-size: 16px;
      margin-top: 10px;
      cursor: pointer;

      &:hover {
        background-color: #0069d9;
      }
    }
  }
`;

