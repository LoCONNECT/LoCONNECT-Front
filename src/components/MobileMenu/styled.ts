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
      transform: translateX(0%);
    }

    .mobile_item {
      font-size: 20px;
      padding: 16px 0;
      cursor: pointer;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
