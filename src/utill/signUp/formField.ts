import { useField, useFormikContext } from "formik";

export function useFormField(fieldName: string) {
  const [field, meta] = useField(fieldName);
  const formik = useFormikContext();
  const showError = (meta.touched || formik.submitCount > 0) && meta.error;

  return { field, meta, showError };
}
