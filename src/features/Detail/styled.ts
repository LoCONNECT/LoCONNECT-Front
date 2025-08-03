import styled from "styled-components";

export const DetailStyled = styled.div`
  &.Detail_wrap {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    gap: 32px;
    padding: 0 40px;

    .Detail_head {
      width: 100%;
      max-width: 1092px;
      display: flex;
      margin: 0 auto;

      .Detail_headBtn {
        width: 25px;
        height: 30px;
        cursor: pointer;
      }
    }

    .Detail_Body {
      width: 100%;
      max-width: 1092px;
      display: flex;
      margin: 0 auto;
      gap: 32px;

      .Detail_image {
        position: relative;
        width: 335px;
        height: 280px;

        .MainCard_type {
          display: flex;
          align-items: center;
          position: absolute;
          height: 32px;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.61);
          bottom: 10px;
          left: 10px;
          font-weight: 500;
          font-size: 13px;
        }

        .MainCard_icon {
          position: relative;
          width: 16px;
          height: 16px;
        }
      }

      .Detail_content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .Detail_subTitle {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.gray5Color};
          font-weight: 550;
        }

        .Detail_title {
          font-size: 24px;
          color: ${({ theme }) => theme.colors.mainDarkColor};
          font-weight: bold;
        }

        .Detail_texts {
          display: flex;
          flex-direction: column;
          font-weight: 550;
          gap: 4px;

          .Detail_price {
            font-size: 15px;
            color: ${({ theme }) => theme.colors.blackColor};
          }

          .Detail_description {
            display: flex;
            flex-direction: column;
            gap: 4px;

            .Detail_label {
              font-size: 15px;
              color: ${({ theme }) => theme.colors.blackColor};
            }

            .Detail_value {
              font-size: 15px;
              color: ${({ theme }) => theme.colors.blackColor};
            }
          }

          .Detail_link {
            font-size: 15px;
            color: ${({ theme }) => theme.colors.gray5Color};
            margin-top: 10px;
          }
        }
      }
    }

    .Detail_btnContainer {
      width: 100%;
      max-width: 1092px;
      display: flex;
      justify-content: end;
      margin: 0 auto;

      .Detail_btn {
        width: 335px;
        height: 52px;
        border-radius: 12px;
        padding: 16px 12px;
        border: none;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.mainColor};
        color: white;
        font-size: 13px;
        font-weight: 500;

        &:disabled {
          background-color: ${({ theme }) => theme.colors.gray2Color};
          color: ${({ theme }) => theme.colors.gray5Color};
        }
      }
    }
  }
`;
