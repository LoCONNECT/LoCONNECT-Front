import styled from "styled-components";

export const FindIdStyled = styled.div`
  &.findid_wrap {
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .findid_title {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin: 50px 0 10px 0;
    }

    .findid_form {
      max-width: 508px;
      width: 100%;
      padding: 0 10px;
      .findid_label {
        display: block;
        font-size: 18px;
        font-weight: 500;
        margin-top: 35px;
        margin-bottom: 10px;
      }
      .findid_error {
        font-size: 13px;
        margin: 5px 8px 0 8px;
        color: rgb(246, 35, 35);
      }
      .findid_input {
        width: 100%;
        height: 52px;
        border: 1px solid #e9ebef;
        border-radius: 12px;
        font-size: 15px;
        padding: 17px 15px;
      }

      .findid_button {
        margin-top: 30px;
        width: 100%;
        height: 52px;
        border-radius: 12px;
        border: 1px solid #1253ec;
        background-color: #1253ec;
        color: white;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:disabled {
          background-color: #a3b1ff;
        }

        &:hover:not(:disabled) {
          background-color: #0e44c6;
        }
      }
    }

    .verify_section {
      margin-top: 44px;
      min-height: 100px;
      max-width: 508px;
      width: 100%;
      padding: 0 10px;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: opacity 0.3s ease, height 0.3s ease;
    }

    .verify_section.visible {
      opacity: 1;
      height: auto;
    }

    .verify_label {
      display: block;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
      width: 100%;
    }
    .verify_input {
      width: 100%;
      height: 52px;
      border: 1px solid #e9ebef;
      border-radius: 12px;
      font-size: 15px;
      padding: 17px 15px;
    }
    .verify_button {
      width: 100%;
      height: 52px;
      border-radius: 12px;
      border: 1px solid #1253ec;
      background-color: #1253ec;
      color: white;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-top: 10px;

      &:hover {
        background-color: #0e44c6;
      }
    }

    .message {
      margin-top: 20px;
      font-size: 14px;
      color: #1253ec;
      text-align: center;
      font-weight: 600;
    }
  }
`;
