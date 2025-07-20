import styled from "styled-components";

export const DetailStyled = styled.div`
  &.Detail_wrap {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    gap: 32px;

    .Detail_head {
      width: 100%;
      max-width: 1060px;
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
      }
    }
  }
`;
