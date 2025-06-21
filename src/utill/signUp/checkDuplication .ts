import axios from "axios";

export const checkDuplication = async (type: "id" | "phone", value: string) => {
  try {
    console.log(type, ":", value);

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/check/${type}`,
      {
        params: { [type]: value },
      }
    );

    // true, false만 보내주세요
    if (res.data?.isDuplicate) {
      return {
        isDuplicate: true,
        message: `이미 사용 중인 ${
          type === "id" ? "아이디" : "전화번호"
        }입니다.`,
      };
    } else {
      return { isDuplicate: false, message: "사용 가능합니다." };
    }
  } catch (error) {
    console.error("중복 확인 에러:", error);
    return { isDuplicate: true, message: "서버 오류가 발생했습니다." };
  }
};
