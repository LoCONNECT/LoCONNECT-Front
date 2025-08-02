import React, { useEffect, useState } from "react";
import {
  FormSection,
  InputWithButton,
  PasswordInputWrap,
  ToggleRow,
} from "../styled";
import { UserState } from "@/store/useUserStore"; // 타입 불러오기

interface InfoFormProps {
  userType: string;
  userData: UserState | null;
}

const InfoForm = ({ userType, userData }: InfoFormProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    loginId: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setForm({
        name: userData.name ?? "",
        phone: userData.phone ?? "",
        email: userData.email ?? "",
        loginId: (userData as any).loginId ?? "default", // 타입 분기 필요 시 분기 처리
        password: "********", // 비밀번호는 보여주지 않도록 마스킹
      });
    }
  }, [userData]);

  return (
    <div>
      <h2>회원정보</h2>
      <FormSection>
        <label>
          이름
          <input
            placeholder="이름을 작성해주세요."
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </label>
        <label>
          아이디
          <input value={form.loginId} disabled />
        </label>
        <label>
          비밀번호 변경
          <PasswordInputWrap>
            <input value={form.password} disabled />
            <button type="button">표시</button>
          </PasswordInputWrap>
        </label>
        <label>
          전화번호
          <input
            placeholder="예) 01012345678"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </label>
        <label>
          이메일
          <InputWithButton>
            <input
              placeholder="이메일을 입력해주세요."
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
            />
            <button type="button">이메일 인증</button>
          </InputWithButton>
        </label>
      </FormSection>

      <ToggleRow>
        <div>로그인 차단 설정</div>
        <div>
          <span>로그인 차단</span>
          <input
            type="checkbox"
            checked={false /* userData?.blockLogin ?? false */}
            readOnly
          />
        </div>
      </ToggleRow>
    </div>
  );
};

export default InfoForm;
