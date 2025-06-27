import { useRouter } from "next/router";

const IntroPage = () => {
  const router = useRouter();

  return (
    <div>
      <button
        className="SignUp_checkBtn"
        onClick={() => router.push(`/main?type=media`)}
      >
        홍보매체 시작하기
      </button>

      <button
        className="SignUp_checkBtn"
        onClick={() => router.push(`/main?type=restaurant`)}
      >
        식당 시작하기
      </button>
    </div>
  );
};

export default IntroPage;
