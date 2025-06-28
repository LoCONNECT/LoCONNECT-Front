import clsx from "clsx";
import { MainHeadLeftStyle } from "./styled";
import { useState } from "react";
import Image from "next/image";
import { Select, Space } from "antd";

interface MainHeadLeftProps {
  type: string | string[] | undefined;
}

const MainHeadLeft = ({ type }: MainHeadLeftProps) => {
  const [menu, setMenu] = useState("all");

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
            <p>유튜브</p>
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
            <p>인스타그램</p>
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
            <p>네이버 블로그</p>
          </div>
        </>
      ) : (
        <Select
          defaultValue="Chungbuk"
          onChange={(value) => handleChange(value)}
          options={[
            { value: "Chungbuk", label: "충북" },
            { value: "Chungju", label: "충주" },
            { value: "Cheongju", label: "청주" },
          ]}
        />
      )}
    </MainHeadLeftStyle>
  );
};

export default MainHeadLeft;
