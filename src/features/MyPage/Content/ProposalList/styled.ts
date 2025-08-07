import styled from "styled-components";

export const ProposalCardStyled = styled.div`
  width: 100%;
  height: 184px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.gray2Color};
  padding: 20px;
  margin-bottom: 10px;

  .proposal-card {
    display: flex;
    width: 100%;
    .proposal-img {
      width: 160px;
      height: 144px;
      object-fit: cover;
      margin-right: 15px;
      border-radius: 20px;
    }

    .proposal-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .proposal-content {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray5Color};
        .proposal-desc {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 600;
          color: black;
        }
      }
      .proposal-button {
        display: flex;
        justify-content: flex-end;
        .proposal-btn {
          width: 163.5px;
          height: 44px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
        }

        .refuse {
          background-color: ${({ theme }) => theme.colors.gray2Color};
          color: ${({ theme }) => theme.colors.gray5Color};
          margin-right: 8px;
        }
        .accept {
          background-color: ${({ theme }) => theme.colors.mainColor};
          color: white;
        }
      }
    }
  }
`;
