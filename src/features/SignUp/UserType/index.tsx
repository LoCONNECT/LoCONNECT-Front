import clsx from "clsx";
import { UserTypeStyle } from "./styled";

interface UserTypeProps {
  type: "biz" | "media" | "influ";
  setType: React.Dispatch<React.SetStateAction<"biz" | "media" | "influ">>;
}

const UserType = ({ type, setType }: UserTypeProps) => {
  return (
    <UserTypeStyle className="UserType_wrap">
      <button
        className={clsx("UserType_btn", { active: type === "biz" })}
        onClick={() => setType("biz")}
      >
        소상공인
      </button>
      <button
        className={clsx("UserType_btn", { active: type === "media" })}
        onClick={() => setType("media")}
      >
        방송국
      </button>
      <button
        className={clsx("UserType_btn", { active: type === "influ" })}
        onClick={() => setType("influ")}
      >
        인플루언서
      </button>
    </UserTypeStyle>
  );
};

export default UserType;
