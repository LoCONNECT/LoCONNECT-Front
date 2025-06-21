import styled from "styled-components";

export const StepOneStyle = styled.div`
  &.StepOne_wrap {
    width: 100%;

    .StepOne_userInfo {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .SignUp_toggle {
      position: absolute;
      right: 15px;
      top: 25px;
      transform: translateY(-50%);
      cursor: pointer;
      user-select: none;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray4Color};
      font-weight: 500;
    }

    .StepOne_agree {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 24px;
      color: ${({ theme }) => theme.colors.gray5Color};
      font-size: 16px;
      font-weight: bold;

      .StepOne_agreeDiv {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .StepOne_line {
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.gray2Color};
      }

      .StepOne_icon {
        position: relative;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
  }
`;
