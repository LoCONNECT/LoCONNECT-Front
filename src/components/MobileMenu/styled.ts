import styled from "styled-components";

export const MoblieMenuStyled = styled.div`
  &.mobile_menu {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;

    display: flex;
    flex-direction: column;

    transform: translateX(100%);
    transition: transform 0.3s ease;

    &.open {
      border-top: 1px solid ${({ theme }) => theme.colors.gray2Color};
      transform: translateX(0%);
    }

    .mobile_item {
      font-size: 16px;
      padding: 0 16px;
      cursor: pointer;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray2Color};
      &.gray {
        color: ${({ theme }) => theme.colors.gray5Color};
      }
      &.red {
        color: #ff5f4a;
      }
    }
  }
`;
