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
      position: relative;

      @media (max-width: 630px) {
        flex-direction: column;
        align-items: start;
        gap: 24px;
      }

      .Main_applyBtn {
        position: absolute;
        right: 0;
        top: -50px;

        button {
          background-color: #1890ff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s;

          &:hover {
            background-color: #40a9ff;
          }

          &:active {
            background-color: #096dd9;
          }
        }

        @media (max-width: 630px) {
          position: static;
          align-self: flex-end;
        }
      }
    }

    .Main_body {
      width: 100%;
      display: flex;
    }
  }
`;
