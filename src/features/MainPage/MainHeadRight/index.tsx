import { useState } from "react";
import { MainHeadRightStyle } from "./styled";
import Image from "next/image";

interface MainHeadRightProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeadRight = ({ setSearch }: MainHeadRightProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearch(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <MainHeadRightStyle className="MainHeadRight_wrap">
      <div className="MainHeadRight_searchIcon" onClick={handleSearch}>
        <Image src="/icon/searchIcon.png" alt="search icon" fill />
      </div>

      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </MainHeadRightStyle>
  );
};

export default MainHeadRight;
