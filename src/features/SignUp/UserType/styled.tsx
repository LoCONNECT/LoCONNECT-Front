import styled from "styled-components";

export const UserTypeStyle = styled.div`
  &.UserType_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    gap: 8px;

    .UserType_btn {
      flex: 1;
      text-align: center;
      padding: 15px 12px;
      border: 1px solid ${({ theme }) => theme.colors.gray2Color};
      border-radius: 12px;
      color: ${({ theme }) => theme.colors.gray5Color};
      font-size: 13px;
      font-weight: bold;
      background-color: white;
      cursor: pointer;

      transition: background-color 0.3s ease, color 0.3s ease,
        border-color 0.1s ease;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.mainLightColor};
      border-color: ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
