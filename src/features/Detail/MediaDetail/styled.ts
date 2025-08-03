import styled from "styled-components";

export const MediaDetailStyle = styled.div`
  &.MediaDetail_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1092px;
    gap: 32px;

    .MediaDetail_line {
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray2Color};

      @media (max-width: 375px) {
        height: 0;
      }
    }

    .MediaDetail_info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      color: ${({ theme }) => theme.colors.gray4Color};
      font-size: 14px;
      font-weight: 450;

      p {
        margin-left: 7px;
      }
    }
  }
`;
