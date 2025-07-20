import { useMainStore } from "@/store/mainCardStore";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IntroPage = () => {
  const router = useRouter();
  const setType = useMainStore((state) => state.setType);
  const user = useUserStore((state) => state.user);

  const handleStart = (type: string) => {
    if (!user?.role) {
      router.push("/login");
      return;
    }

    if (user?.role === "admin") {
      setType(type);
      router.push({
        pathname: "/main",
        query: { adminType: type },
      });
    } else if (user?.role === "biz") {
      setType("media");
      router.push("/main");
    } else {
      setType("restaurant");
      router.push("/main");
    }
  };

  return (
    <div>
      {user?.role === "admin" ? (
        <>
          <button
            className="SignUp_checkBtn"
            onClick={() => handleStart("media")}
          >
            홍보매체 시작하기
          </button>
          <button
            className="SignUp_checkBtn"
            onClick={() => handleStart("restaurant")}
          >
            식당 시작하기
          </button>
        </>
      ) : (
        <button className="SignUp_checkBtn" onClick={() => handleStart("")}>
          시작하기
        </button>
      )}
    </div>
  );
};

export default IntroPage;
