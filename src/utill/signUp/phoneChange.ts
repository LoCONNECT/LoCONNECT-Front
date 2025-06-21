export const handlePhoneChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (field: string, value: any) => void
) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");

  if (value.length <= 3) {
    value = value;
  } else if (value.length <= 7) {
    value = value.replace(/(\d{3})(\d+)/, "$1-$2");
  } else {
    value = value.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
  }

  setFieldValue("phone", value);
};
