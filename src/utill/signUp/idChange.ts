export const handleIdChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: any) => void
) => {
  const value = e.target.value;

  // 한글 입력 방지 및 공백 제거
  const filtered = value.replace(/\s/g, "");

  setFieldValue("id", filtered);
};
