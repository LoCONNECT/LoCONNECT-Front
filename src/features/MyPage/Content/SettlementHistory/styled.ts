import styled from "styled-components";

// 정산 내역
export const DateBox = styled.div`
  width: 100%;
  height: 105px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray1Color};

  .settlement-wrap {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .settlement-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      // 선택한 날짜
      .settlement-date {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray4Color};
      }
      .settlement-month {
        font-size: 24px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }

    .settlement-money {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.mainDarkColor};
    }
  }
`;

// 정산 내역 카드
export const DataGroupStyled = styled.div`
  margin-top: 30px;
  .data-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .data-date {
      font-size: 20px;
      font-weight: 600;
    }
    .data-totalprice {
      font-size: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray4Color};
    }
  }

  .data-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
// 정산 내역 카드
export const PaymentCardStyled = styled.div`
  width: 100%;
  height: 167px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.gray2Color};
  padding: 20px;
  .payment-status {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .payment-card {
    display: flex;
    width: 100%;
    height: 84px;
    .payment-img {
      object-fit: cover;
      margin-right: 15px;
      border-radius: 20px;
    }

    .payment-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .payment-price {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.mainColor};
      }
      .payment-title {
        height: 48px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray5Color};
      }
    }
  }
`;
