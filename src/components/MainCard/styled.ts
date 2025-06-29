import styled from "styled-components";

export const MainCardStyle = styled.div`
  &.MainCard_container {
    display: flex;
    width: 100%;
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 750px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }

      .MainCard_img {
        height: 160px !important;
      }
    }

    @media (max-width: 372px) {
      & {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    .MainCard_wrap {
      width: 100%;
      max-width: 335px;
      height: 300px;
      padding: 20px;
      border: 1.6px solid ${({ theme }) => theme.colors.gray2Color};
      border-radius: 32px;

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.mainColor};
      }

      .MainCard_card {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .MainCard_img {
          position: relative;
          width: 100%;
          height: 160px;
          cursor: pointer;

          @media (max-width: 950px) {
            & {
              height: 140px;
            }
          }

          @media (max-width: 560px) {
            & {
              height: 130px !important;
            }
          }

          @media (max-width: 372px) {
            & {
              height: 160px !important;
            }
          }

          @media (max-width: 300px) {
            & {
              height: 140px !important;
            }
          }

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

        .MainCard_text {
          display: flex;
          flex-direction: column;
          gap: 9px;

          @media (max-width: 1000px) {
            & {
              gap: 5px;
            }
          }

          .MainCard_title {
            color: ${({ theme }) => theme.colors.mainDarkColor};
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;

            @media (max-width: 950px) {
              & {
                font-size: 16px;
              }
            }
          }

          .MainCard_infoBox {
            display: flex;
            flex-direction: column;
            gap: 4px;

            .MainCard_infos {
              cursor: pointer;
              display: flex;
              gap: 8px;
              font-size: 12px;
              font-weight: 500;

              @media (max-width: 1000px) {
                & {
                  flex-direction: column;
                  gap: 4px;
                }
              }
            }

            .MainCard_price {
              cursor: pointer;
              font-size: 12px;
              color: ${({ theme }) => theme.colors.gray5Color};
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;
