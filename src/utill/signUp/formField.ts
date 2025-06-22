import { useField, useFormikContext } from "formik";

export function useFormField(fieldName: string) {
  const [field, meta] = useField(fieldName);
  const formik = useFormikContext();

  const showError = (meta.touched || formik.submitCount > 0) && meta.error;

  // onFocus 시 touched true로 강제 설정
  const handleFocus = () => {
    if (!meta.touched) {
      formik.setFieldTouched(fieldName, true);
    }
  };

  return {
    field: {
      ...field,
      onFocus: handleFocus, // 기존 field에 덮어쓰기
    },
    meta,
    showError,
  };
}
