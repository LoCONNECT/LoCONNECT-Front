import clsx from "clsx";
import { MainHeadLeftStyle } from "./styled";
import { useState } from "react";
import Image from "next/image";
import { Select, Space } from "antd";
import { useMainStore } from "@/store/mainCardStore";

interface OptionType {
  value: string;
  label: string;
}

interface MainHeadLeftProps {
  type: string | string[] | undefined;
  menu: string;
  setMenu: React.Dispatch<
    React.SetStateAction<"all" | "youtube" | "insta" | "blog">
  >;
  option: OptionType[];
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeadLeft = ({
  type,
  menu,
  setMenu,
  option,
  setSelectedOption,
}: MainHeadLeftProps) => {
  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <MainHeadLeftStyle className="MainHeadLeft_wrap">
      {type === "media" ? (
        <>
          <div
            className={clsx("MainHeadLeft_menu allMenu", {
              active: menu === "all",
            })}
            onClick={() => setMenu("all")}
          >
            <p>전체</p>
          </div>

          <div
            className={clsx("MainHeadLeft_menu youtubeMenu", {
              active: menu === "youtube",
            })}
            onClick={() => setMenu("youtube")}
          >
            <div className="MainHeadLeft_Icon">
              <Image src="/icon/youtubeIcon.png" alt="youtube icon" fill />
            </div>
            <p className="MainHeadLeft_text">유튜브</p>
          </div>

          <div
            className={clsx("MainHeadLeft_menu instaMenu", {
              active: menu === "insta",
            })}
            onClick={() => setMenu("insta")}
          >
            <div className="MainHeadLeft_Icon">
              <Image src="/icon/instaIcon.png" alt="instagram icon" fill />
            </div>
            <p className="MainHeadLeft_text">인스타그램</p>
          </div>

          <div
            className={clsx("MainHeadLeft_menu blogMenu", {
              active: menu === "blog",
            })}
            onClick={() => setMenu("blog")}
          >
            <div className="MainHeadLeft_Icon">
              <Image src="/icon/blogIcon.png" alt="naver blog icon" fill />
            </div>
            <p className="MainHeadLeft_text">네이버 블로그</p>
          </div>
        </>
      ) : (
        <Select
          defaultValue="all"
          onChange={(value) => handleChange(value)}
          options={option}
        />
      )}
    </MainHeadLeftStyle>
  );
};

export default MainHeadLeft;
