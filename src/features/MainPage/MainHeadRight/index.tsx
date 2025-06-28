import { MainHeadRightStyle } from "./styled";
import Image from "next/image";

const MainHeadRight = () => {
  return (
    <MainHeadRightStyle className="MainHeadRight_wrap">
      <div className="MainHeadRight_searchIcon">
        <Image src="/icon/searchIcon.png" alt="search icon" fill />
      </div>

      <input type="text" placeholder="검색어를 입력해주세요" />
    </MainHeadRightStyle>
  );
};

export default MainHeadRight;
