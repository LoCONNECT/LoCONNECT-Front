import React from "react";
import { UserType } from "../types";
import {
  FormSection,
  InputWithButton,
  PasswordInputWrap,
  ToggleRow,
} from "../styled";

interface InfoFormProps {
  userType: UserType;
}

const InfoForm = ({ userType }: InfoFormProps) => {
  return (
    <div>
      <h2>회원정보</h2>
      <FormSection>
        <label>
          이름
          <input placeholder="이름을 작성해주세요." />
        </label>
        <label>
          아이디
          <input value="Default" disabled />
        </label>
        <label>
          비밀번호 변경
          <PasswordInputWrap>
            <input value="Default" disabled />
            <button type="button">표시</button>
          </PasswordInputWrap>
        </label>
        <label>
          전화번호
          <input placeholder="예) 01012345678" />
        </label>
        <label>
          이메일
          <InputWithButton>
            <input placeholder="이메일을 입력해주세요." />
            <button type="button">이메일 인증</button>
          </InputWithButton>
        </label>
      </FormSection>
      <ToggleRow>
        <div>로그인 차단 설정</div>
        <div>
          <span>로그인 차단</span>
          <input type="checkbox" checked readOnly />
        </div>
      </ToggleRow>
    </div>
  );
};

export default InfoForm;
