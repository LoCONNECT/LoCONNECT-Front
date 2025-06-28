import styled from "styled-components";

export const MainHeadRightStyle = styled.div`
  &.MainHeadRight_wrap {
    width: 100%;
    max-width: 335px;
    height: 44px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray3Color};
    border-radius: 12px;

    .MainHeadRight_searchIcon {
      position: relative;
      width: 20px;
      height: 18px;
      cursor: pointer;
    }

    input {
      width: 100%;
      border: none;
      color: ${({ theme }) => theme.colors.gray5Color};
    }
  }
`;
