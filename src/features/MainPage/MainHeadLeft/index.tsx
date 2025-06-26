import clsx from "clsx";
import { MainHeadLeftStyle } from "./styled";
import { useState } from "react";

interface MainHeadLeftProps {
  type: string | string[] | undefined;
}

const MainHeadLeft = ({ type }: MainHeadLeftProps) => {
  const [menu, setMenu] = useState("all");

  return (
    <MainHeadLeftStyle className="MainHeadLeft_wrap">
      {type === "media" ? (
        <div
          className={clsx("MainHeadLeft_menu", { active: menu === "all" })}
        ></div>
      ) : (
        <div></div>
      )}
    </MainHeadLeftStyle>
  );
};

export default MainHeadLeft;
