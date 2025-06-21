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
  }
`;
