import styled from "styled-components";

export const SignUpStyle = styled.div`
  &.SignUp_wrap {
    width: 100%;
    max-width: 508px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px 10px;

    .SignUp_header {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .SignUp_title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        color: ${({ theme }) => theme.colors.blackColor};
      }

      .SignUp_stepContainer {
        display: flex;
        width: 100%;
        height: 4px;
        gap: 16px;
        margin-top: 50px;

        .SignUp_step {
          flex: 1;
          border-radius: 10px;
          background-color: ${({ theme }) => theme.colors.gray2Color};
        }

        .active {
          background-color: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }

    .SignUp_body {
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.blackColor};

      .SignUp_step {
        width: 100%;
      }

      .SignUp_userType {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }
`;
