import React, { useEffect, useState } from "react";
import {
  FormSection,
  InputWithButton,
  PasswordInputWrap,
  ToggleRow,
} from "../styled";
import { UserState } from "@/store/useUserStore"; // 타입 불러오기
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
interface InfoFormProps {
  userType?: string;
  userData?: UserState | null;
}

const dummyStores = [
  {
    id: 1,
    name: "육거리 소문난 만두",
    location: "충북 청주시 상당구",
    price: 30000,
    desc: "청주 육거리 시장 불광교에 따라 걷다 보면, 바삭한 군만두 냄새에 발길이 멈추는 곳! 30년 전통의 소문난 만두집.",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
  {
    id: 2,
    name: "청원집 소문난국수 청주점",
    location: "충북 청주시 서원구",
    price: 50000,
    desc: "청주에서 국수하면 떠오르는 명소, 소문난국수집!",
    thumbnail: "/dummyImg/mainDummyImg2.png",
  },
  {
    id: 3,
    name: "육거리 소문난 만두",
    location: "충북 청주시 상당구",
    price: 30000,
    desc: "육거리 근처 만두집에서 진짜 만두의 맛을 느껴보세요.",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
];

const StoreList = ({ userType, userData }: InfoFormProps) => {
  const [editStore, setEditStore] = useState<null | (typeof dummyStores)[0]>(
    null
  );

  const [form, setForm] = useState({
    // 공통
    loginId: "",
    password: "",
    email: "",
    phone: "",

    // 소상공인
    name: "",

    // 방송매체
    company: "",
    program: "",
    department: "",
    purpose: "",

    // 업로드 파일 저장용 (선택사항)
    file: null as File | null,
  });

  useEffect(() => {
    if (userData) {
      setForm((prev) => ({
        ...prev,
        name: userData.name ?? "",
        phone: userData.phone ?? "",
        email: userData.email ?? "",
        loginId: (userData as any).loginId ?? "",
        password: "********",
      }));
    }
  }, [userData]);

  const props = {
    name: "file",
    accept: ".pdf,.jpg,.jpeg,.png", // 필요한 확장자에 따라 수정
    multiple: false,
    beforeUpload: (file: File) => {
      // 이곳에 파일 유효성 검사 로직 추가 가능
      console.log("업로드할 파일:", file);
      return false; // 업로드를 수동으로 처리할 경우 false
    },
    onChange(info: any) {
      console.log("업로드 상태:", info);
    },
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("loginId", form.loginId);
      formData.append("password", form.password);
      formData.append("email", form.email);
      formData.append("phone", form.phone);

      if (userType === "소상공인" || !userType) {
        formData.append("name", form.name);
      }

      if (userType === "방송매체") {
        formData.append("company", form.company);
        formData.append("program", form.program);
        formData.append("department", form.department);
        formData.append("purpose", form.purpose);
        if (form.file) {
          formData.append("file", form.file);
        }
      }

      const response = await axios.post("/api/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("저장 완료되었습니다.");
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("저장 실패:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      {userType === "소상공인" ? (
        <div>
          <h2>회원정보</h2>
          <FormSection>
            <label>
              이름
              <input
                placeholder="이름을 작성해주세요."
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
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
          <div
            style={{
              marginTop: "2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              style={{ width: "40%", padding: "20px" }}
              type="primary"
              onClick={handleSubmit}
            >
              저장하기
            </Button>
          </div>
        </div>
      ) : userType === "방송매체" ? (
        <div>
          <h2>회원정보</h2>
          <FormSection>
            <label>
              회사명
              <input
                placeholder="회사명을 작성해주세요."
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.target.value }))
                }
              />
            </label>

            <label>
              담당 프로그램명
              <input
                placeholder="담당 프로그램명을 입력해주세요."
                value={form.program}
                onChange={(e) =>
                  setForm((f) => ({ ...f, program: e.target.value }))
                }
              />
            </label>

            <label>
              재직증명서 파일 업로드
              <Upload
                {...props}
                beforeUpload={(file: File) => {
                  setForm((f) => ({ ...f, file }));
                  return false; // 자동 업로드 방지
                }}
              >
                <Button icon={<UploadOutlined />}>파일 선택</Button>
              </Upload>
            </label>

            <label>
              소속 부서
              <input
                placeholder="소속부서를 작성해주세요."
                value={form.department}
                onChange={(e) =>
                  setForm((f) => ({ ...f, department: e.target.value }))
                }
              />
            </label>

            <label>
              가입 목적
              <input
                placeholder="가입목적을 작성해주세요."
                value={form.purpose}
                onChange={(e) =>
                  setForm((f) => ({ ...f, purpose: e.target.value }))
                }
              />
            </label>
          </FormSection>
          <div
            style={{
              marginTop: "2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              style={{ width: "40%", padding: "20px" }}
              type="primary"
              onClick={handleSubmit}
            >
              저장하기
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h2>회원정보</h2>
          <FormSection>
            <label>
              이름
              <input
                placeholder="이름을 작성해주세요."
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
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
          <div
            style={{
              marginTop: "2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              style={{ width: "40%", padding: "20px" }}
              type="primary"
              onClick={handleSubmit}
            >
              저장하기
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreList;
