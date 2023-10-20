import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  max-width: 30%;

  form {
    padding: 20px;
    width: 350px;

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
      font-family: Merriweather;
      font-size: 28px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0px;
    }

    label {
      display: block;
      margin-top: 10px;
      font-family: Merriweather;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0px;
    }

    .form__pararaph {
      color: rgba(178, 159, 126, 1);
      text-align: right;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: rgba(224, 224, 224, 1);
      box-sizing: border-box;
    }

    p {
      text-align: center;
      margin-top: 10px;
    }

    button {
      width: 100%;
      padding: 11px;
      margin-top: 20px;
      background: rgba(178, 159, 126, 1);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      font-family: Merriweather;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0px;
      box-sizing: border-box;

      &:hover {
        background-color: rgba(170, 150, 126, 1);
      }
    }

    p span {
      cursor: pointer;
    }
  }
`;