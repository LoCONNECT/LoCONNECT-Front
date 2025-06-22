export function postCode(setFieldValue: (field: string, value: any) => void) {
  new window.daum.Postcode({
    oncomplete: function (data: any) {
      let addr = "";
      let extraAddr = "";

      if (data.userSelectedType === "R") {
        addr = data.roadAddress;
      } else {
        addr = data.jibunAddress;
      }

      if (data.userSelectedType === "R") {
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        if (extraAddr !== "") {
          extraAddr = ` (${extraAddr})`;
        }
      }

      setFieldValue("bizPostcode", data.zonecode); // 우편번호
      setFieldValue("bizAddress", addr); // 기본주소

      // 상세주소 입력창 포커스
      const detailInput = document.getElementById(
        "detailAddress"
      ) as HTMLInputElement;
      if (detailInput) detailInput.focus();
    },
  }).open();
}
