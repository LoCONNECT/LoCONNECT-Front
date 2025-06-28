import styled from "styled-components";

export const HeaderStyled = styled.div`
  &.header_wrap {
    .header_box {
      padding: 0 10px;
      max-width: 1280px;
      width: 100%;
      height: 80px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header_logo {
        max-width: 208.5px;
        width: 100%;
        &:hover {
          cursor: pointer;
        }
        @media (max-width: 744px) {
          display: none;
        }
      }
      .header_mobile_logo {
        max-width: 37.45px;
        width: 100%;
        display: none;
        &:hover {
          cursor: pointer;
        }
        @media (max-width: 744px) {
          display: block;
        }
      }
      .header_menu_box {
        width: 167px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 744px) {
          display: none;
        }

        .header_icon_box {
          width: 72px;
          height: 32px;
          display: flex;
          justify-content: space-between;
          .header_icon {
            &:hover {
              cursor: pointer;
            }
          }
        }
        .header_logout {
          color: ${({ theme }) => theme.colors.gray5Color};
          font-size: 16px;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .header_login_container {
        width: 150px;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header_login {
          font-size: 16px;
          cursor: pointer;
          color: ${({ theme }) => theme.colors.gray5Color};
        }

        .header_join {
          font-size: 16px;
          cursor: pointer;
          color: ${({ theme }) => theme.colors.gray5Color};
        }

        .header_line {
          display: inline-block;
          width: 1px;
          height: 15px;
          margin: 0px 14px;
          background-color: rgb(217, 217, 217);
        }

        @media (max-width: 744px) {
          display: none;
        }
      }

      .header_mobile_menu {
        display: none;
        width: 32px;
        height: 32px;
        cursor: pointer;
        @media (max-width: 744px) {
          display: block;
        }
      }
    }
  }
`;
