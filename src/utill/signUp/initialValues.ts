export const initialValues = {
  // 공통 필드
  name: "",
  id: "",
  password: "",
  confirmPassword: "",
  phone: "",
  email: "",
  agreeRequired: false,
  agreeOptional: false,
  idCheckMessage: "",
  isIdDuplicate: false,
  phoneCheckMessage: "",
  isPhoneDuplicate: false,
  isEmailVerified: false,

  // 소상공인 (biz)
  bizName: "",
  bizLicense: null, // 파일
  bizCategory: "",
  bizPostcode: "",
  bizAddress: "",
  bizAddressDetail: "",
  bizPhone: "",

  // 방송국 (media)
  companyName: "",
  programName: "",
  proofFile: null,
  department: "",
  purpose: "",

  // 인플루언서 (influ)
  representativeName: "",
  influLicense: null,
  influDepartment: "",
  influType: "individual", // 개인 or 단체
  influPurpose: "",
  promoUrl: "",
};
