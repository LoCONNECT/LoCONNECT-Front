import styled from "styled-components";

export const RestaurantDetailStyle = styled.div`
  &.RestaurantDetail_wrap {
    width: 1092px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0 auto;

    .RestaurantDetail_line {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray2Color};

      @media (max-width: 375px) {
        height: 0;
      }
    }

    .RestaurantDetail_infos {
      display: flex;
      gap: 24px;
      width: 100%;

      @media (max-width: 375px) {
        flex-direction: column;
      }

      .RestaurantDetail_menu,
      .RestaurantDetail_scrap {
        display: flex;
        flex-direction: column;
        gap: 12px;
        color: ${({ theme }) => theme.colors.gray4Color};
        font-size: 14px;
        font-weight: 450;

        @media (max-width: 375px) {
          width: 100%;
        }

        p {
          margin-left: 7px;
        }

        .RestaurantDetail_image {
          position: relative;
          width: 200px;
          height: 160px;

          @media (max-width: 375px) {
            width: 100%;
          }
        }

        .RestaurantDetail_scrapImg {
          display: flex;
          gap: 12px;

          .RestaurantDetail_scrapInfo {
            display: flex;
            flex-direction: column;

            .RestaurantDetail_texts {
              width: 200px;
              height: 96px;
              display: flex;
              flex-direction: column;
              gap: 4px;
              padding: 12px;
              border-radius: 0 0 20px 20px;
              background-color: ${({ theme }) => theme.colors.gray1Color};

              .RestaurantDetail_title {
                color: ${({ theme }) => theme.colors.mainDarkColor};
                font-size: 15px;
                font-weight: bold;
              }

              .RestaurantDetail_subTitle {
                font-size: 13px;
                color: ${({ theme }) => theme.colors.blackColor};
              }

              .RestaurantDetail_link {
                color: ${({ theme }) => theme.colors.blackColor};
                cursor: pointer;
                font-size: 13px;
                text-decoration: underline;
                text-underline-offset: 3px;
              }
            }
          }
        }
      }
    }
  }
`;
