import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
`;

export const Sidebar = styled.aside`
  width: 500px;
  background: #f7f7f7;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #eee;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #e0e0e0;
    margin-bottom: 12px;
  }
  .profile-name {
    font-weight: bold;
    font-size: 20px;
    color: #2d3a4a;
  }
  .profile-email {
    font-size: 14px;
    color: #888;
    margin-bottom: 16px;
  }
`;

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 18px 40px;
  margin: 0;
  li {
    font-size: 16px;
    padding: 18px 10px;
    color: #222;
    cursor: pointer;
    transition: background 0.2s;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    &:hover {
      background: #f0f0f0;
    }
    &.red {
      color: #ff4d4f;
    }
  }
`;

export const MainSection = styled.section`
  flex: 1;
  background: #fff;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 32px;
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #222;
    gap: 10px;
    font-weight: 500;
    input {
      margin-top: 0;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 15px;
      background: #fff;
    }
  }
`;

export const PasswordInputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    padding-right: 60px;
  }
  button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    padding: 6px 14px;
    border: none;
    border-radius: 6px;
    background: #fff;
    color: #222;
    font-size: 14px;
    cursor: pointer;
    height: 32px;
  }
`;

export const InputWithButton = styled.div`
  display: flex;
  align-items: center;
  input {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button {
    border-radius: 8px;
    margin-left: 5px;
    padding: 10px 12px;
    border: 1px solid #ddd;
    background: #eee;
    color: #222;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const ToggleRow = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > div:first-child {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }
  > div:last-child {
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      font-size: 15px;
    }
    input[type="checkbox"] {
      width: 36px;
      height: 20px;
      accent-color: #2d3a4a;
    }
  }
`;

export const StoreCardList = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 744px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const StoreCard = styled.div`
  width: 320px;
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 20px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .thumbnail {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 12px;
    background: #f7f7f7;
  }
  .store-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
  }
  .store-location {
    font-size: 14px;
    color: #888;
  }
  .store-price {
    font-size: 15px;
    color: #222;
    margin-bottom: 4px;
  }
  .store-desc {
    font-size: 14px;
    color: #444;
    margin-bottom: 8px;
    height: 40px;
  }
  .button-row {
    display: flex;
    gap: 8px;
    margin-top: 8px;
    button {
      flex: 1;
      padding: 8px 0;
      border-radius: 8px;
      border: none;
      font-size: 15px;
      cursor: pointer;
      &.delete {
        background: #fff;
        color: #ff4d4f;
        border: 1px solid #ff4d4f;
      }
      &.edit {
        background: #2563eb;
        color: #fff;
        border: none;
      }
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoreEditModalWrap = styled.div`
  width: 80%;
  height: 95%;
  overflow-y: scroll;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;

  @media (max-width: 744px) {
    width: 95vw;
    padding: 18px 8px;
  }

  .modal-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .modal-close {
    position: absolute;
    right: 18px;
    top: 18px;
    font-size: 22px;
    color: #888;
    cursor: pointer;
  }
  .modal-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
    label {
      font-weight: 500;
      font-size: 15px;
    }
    input,
    textarea {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 15px;
      background: #fafafa;
    }
    textarea {
      min-height: 80px;
      resize: vertical;
    }
  }
  .modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 18px;
    button {
      flex: 1;
      padding: 12px 0;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      &.cancel {
        background: #eee;
        color: #222;
      }
      &.save {
        background: #2563eb;
        color: #fff;
      }
    }
  }
`;
