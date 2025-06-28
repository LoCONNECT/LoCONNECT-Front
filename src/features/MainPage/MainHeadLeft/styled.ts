import styled from "styled-components";

export const MainHeadLeftStyle = styled.div`
  &.MainHeadLeft_wrap {
    display: flex;
    gap: 12px;
    align-items: center;

    .MainHeadLeft_menu {
      display: flex;
      height: 36px;
      padding: 12px;
      border: 1px solid ${({ theme }) => theme.colors.gray3Color};
      border-radius: 12px;
      color: ${({ theme }) => theme.colors.gray5Color};
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;

      .MainHeadLeft_Icon {
        position: relative;
        width: 16px;
        height: 16px;
      }

      @media (max-width: 850px) {
        .MainHeadLeft_text {
          display: none;
        }
      }
    }

    .active {
      border-color: ${({ theme }) => theme.colors.mainColor};
      background-color: ${({ theme }) => theme.colors.mainLightColor};
      color: ${({ theme }) => theme.colors.mainColor};
    }

    .allMenu {
      width: 60px;
    }

    .youtubeMenu {
      width: 90px;

      @media (max-width: 850px) {
        & {
          width: 48px;
        }
      }
    }

    .instaMenu {
      width: 112px;

      @media (max-width: 850px) {
        & {
          width: 48px;
        }
      }
    }

    .blogMenu {
      width: 126px;

      @media (max-width: 850px) {
        & {
          width: 48px;
        }
      }
    }
  }
`;
