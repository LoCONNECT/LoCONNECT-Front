import styled from "styled-components";

export const FooterStyled = styled.div`
  &.footer_wrap {
    height: 120px;
    background-color: ${({ theme }) => theme.colors.gray1Color};
    display: flex;
    align-items: center;
    justify-content: center;
    .footer_box {
      display: flex;
      .footer_left {
        max-width: 619px;
        width: 100%;
        min-height: 64px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .footer_company {
          font-size: 20px;
          font-weight: bold;
        }
        .footer_menu_box {
          display: flex;
          align-items: center;
          font-size: 10px;
          .footer_menu {
            text-decoration: underline;
            text-underline-position: under;
          }
          .footer_stick {
            background-color: black;
            width: 1.5px;
            height: 15px;
            display: inline-block;
            margin: 0px 5px;
          }
        }
      }

      .footer_right {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
