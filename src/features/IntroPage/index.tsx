import { useRouter } from "next/router";

const IntroPage = () => {
  const router = useRouter();

  return (
    <div>
      <button className="SignUp_checkBtn" onClick={() => router.push("/main")}>
        시작하기
      </button>
    </div>
  );
};

export default IntroPage;
