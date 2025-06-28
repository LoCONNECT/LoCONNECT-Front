import { MainHeadRightStyle } from "./styled";
import Image from "next/image";

interface MainHeadRightProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeadRight = ({ setSearch }: MainHeadRightProps) => {
  return (
    <MainHeadRightStyle className="MainHeadRight_wrap">
      <div className="MainHeadRight_searchIcon">
        <Image src="/icon/searchIcon.png" alt="search icon" fill />
      </div>

      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        onChange={(e) => setSearch(e.target.value)}
      />
    </MainHeadRightStyle>
  );
};

export default MainHeadRight;
