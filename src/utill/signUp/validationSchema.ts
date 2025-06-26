import * as Yup from "yup";

export const validationSchema = (type: "biz" | "media" | "influ") =>
  Yup.object().shape({
    // 공통
    name: Yup.string().required("이름은 필수입니다."),
    id: Yup.string()
      .required("아이디는 필수입니다.")
      .matches(
        /^[a-zA-Z0-9]{4,12}$/,
        "아이디는 4~12자의 영문 또는 숫자여야 합니다."
      ),
    password: Yup.string()
      .required("비밀번호는 필수입니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{8,}$/,
        "비밀번호는 8자 이상이며, 영문자, 숫자, 특수문자를 포함해야 합니다."
      ),
    confirmPassword: Yup.string()
      .required("비밀번호 확인은 필수입니다.")
      .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    phone: Yup.string()
      .required("전화번호는 필수입니다.")
      .test(
        "len",
        "전화번호는 숫자 11자여야 합니다.",
        (val) => val?.replace(/-/g, "").length === 11
      ),
    email: Yup.string()
      .email("이메일 형식으로 작성해주세요.")
      .required("이메일은 필수입니다."),
    agreeRequired: Yup.boolean().oneOf([true], "필수 동의가 필요합니다."),

    ...(type === "biz" && {
      bizName: Yup.string().required("업체명을 입력해주세요."),
      bizLicense: Yup.mixed().required("사업자 등록증을 업로드해주세요."),
      bizCategory: Yup.string().required("업종을 입력해주세요."),
      bizPostcode: Yup.string().required("우편번호는 필수입니다."),
      bizAddress: Yup.string().required("주소는 필수입니다."),
      bizAddressDetail: Yup.string(),
      bizPhone: Yup.string().required("업체 전화번호는 필수입니다."),
    }),

    ...(type === "media" && {
      companyName: Yup.string().required("회사명을 입력해주세요."),
      programName: Yup.string().required("담당 프로그램명을 입력해주세요."),
      proofFile: Yup.mixed().required("재직증명서를 업로드해주세요."),
      department: Yup.string().required("소속 부서를 입력해주세요."),
      purpose: Yup.string().required("가입 목적을 입력해주세요."),
    }),

    ...(type === "influ" && {
      representativeName: Yup.string().required("대표이름을 입력해주세요."),
      influLicense: Yup.mixed().required("사업자 등록증을 업로드해주세요."),
      influDepartment: Yup.string().required("소속 부서를 입력해주세요."),
      influType: Yup.string().required("형태를 선택해주세요."),
      influPurpose: Yup.string().required("가입 목적을 입력해주세요."),
      promoUrl: Yup.string().url("유효한 URL 형식이어야 합니다."),
    }),
  });
