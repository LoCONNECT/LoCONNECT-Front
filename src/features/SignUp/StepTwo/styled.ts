import styled from "styled-components";

export const StepTwoStyle = styled.div`
  &.StepTwo_wrap {
    width: 100%;

    .StepOne_userInfo {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .SignStep_btns {
      display: flex;
      align-items: center;
      gap: 12px;

      .SignStep_btn {
        width: 120px !important;
      }

      .SignUp_submitBtn {
        background-color: ${({ theme }) => theme.colors.gray2Color};
        color: ${({ theme }) => theme.colors.gray5Color};
        font-weight: 500;
        font-size: 13px;
        border: none;
        width: 100%;
        height: 52px;
        border-radius: 12px;

        &.active {
          background-color: ${({ theme }) => theme.colors.mainColor};
          color: white;
          cursor: pointer;
        }
      }
    }
  }
`;
