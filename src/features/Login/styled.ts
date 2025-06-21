import styled from "styled-components";

export const LoginStyled = styled.div`
  &.login_center {
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_wrap {
      padding: 0 10px;
      max-width: 548px;
      width: 100%;
      height: 621.5px;
      margin: 0 auto;
      .login_box {
        max-width: 508px;
        width: 100%;
        height: 541.5px;
        margin: 0 auto;

        .login_title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin: 50px 0 10px 0;
        }

        .login_form {
          display: flex;
          flex-direction: column;
          .login_label {
            font-size: 18px;
            font-weight: 500;
            margin-top: 35px;
            margin-bottom: 10px;
          }
          .login_pw_box {
            color: #999ba5;
            position: relative;
            .login_see {
              position: absolute;
              top: 15px;
              right: 15px;
              font-size: 15px;
              cursor: pointer;
            }
          }
          .login_input {
            width: 100%;
            height: 52px;
            border: 1px solid #e9ebef;
            border-radius: 12px;
            font-size: 15px;
            padding: 17px 50px 15px 15px;

            overflow: hidden;
            white-space: nowrap;
          }
          .login_find_box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            font-size: 13px;
            color: #6f717c;
            .login_find {
              cursor: pointer;
            }
            .login_line {
              display: inline-block;
              width: 1px;
              height: 13.5px;
              background-color: #c5c6cd;
              margin: 0 10px;
            }
          }

          .login_login_btn {
            height: 52px;
            border-radius: 12px;
            border: 1px solid #1253ec;
            background-color: #1253ec;
            color: white;
            &:hover {
              cursor: pointer;
            }
          }

          .login_error_message {
            font-size: 13px;
            margin: 5px 8px 0 8px;
            color: rgb(246, 35, 35);
          }
        }

        .login_division {
          display: inline-block;
          max-width: 508px;
          width: 100%;
          height: 1px;
          background-color: #e2e8f0;
          margin: 30px 0;
        }

        .login_join_box {
          height: 85px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .login_explain {
            color: #6f717c;
            font-size: 14px;
            text-align: center;
          }
          .login_join_btn {
            height: 52px;
            border-radius: 12px;
            border: 1px solid #e9ebef;
            background-color: white;
            color: #6f717c;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
