import styled from "styled-components";

export const MainStyle = styled.div`
  &.Main_wrap {
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    gap: 24px;
    max-width: 1093px;
    padding: 20px;

    .Main_header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 630px) {
        flex-direction: column;
        align-items: start;
        gap: 24px;
      }
    }

    .Main_body {
      width: 100%;
      display: flex;
    }
  }
`;
