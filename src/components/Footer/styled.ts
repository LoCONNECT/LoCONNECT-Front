import styled from "styled-components";

export const FooterStyled = styled.div`
  &.footer_wrap {
    height: 120px;
    background-color: ${({ theme }) => theme.colors.gray1Color};
    display: flex;
    align-items: center;
    justify-content: center;
    .footer_box {
      margin: 0 10px;
      display: flex;
      align-items: center;
      .footer_div {
        background-color: ${({ theme }) => theme.colors.gray3Color};
        width: 1px;
        height: 60px;
        margin: 0 30px;
      }
      .footer_left {
        max-width: 619px;
        width: 100%;
        min-height: 64px;
        @media (max-width: 744px) {
          max-width: 348px;
          min-height: 86px;
        }
        .footer_company {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 18px;
        }
        .footer_menu_box {
          font-size: 10px;
          .footer_menu {
            text-decoration: underline;
            text-underline-position: under;
          }
          .footer_stick {
            margin: 0px 3px;
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
