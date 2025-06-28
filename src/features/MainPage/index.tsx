import { useRouter } from "next/router";
import MainHeadLeft from "./MainHeadLeft";
import MainHeadRight from "./MainHeadRight";
import { MainStyle } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";

interface OptionType {
  value: string;
  label: string;
}

const MainPage = () => {
  const router = useRouter();
  const { type } = router.query;

  const [menu, setMenu] = useState<"all" | "youtube" | "insta" | "blog">("all");
  const [option, setOption] = useState<OptionType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (type !== "restaurant") return;

    const getRegion = async () => {
      try {
        // const res = await axios.get("/main/getRegion");

        // console.log("지역만 더미 데이터 참고 : ", res.data);

        const res = [
          { value: "Chungbuk", label: "충북" },
          { value: "Chungju", label: "충주" },
          { value: "Cheongju", label: "청주" },
        ];

        setOption(res);
        // setOption(res.data);
      } catch (e) {
        console.log("지역 불러오기 에러 : ", e);
      }
    };

    getRegion();
  }, [type]);

  return (
    <MainStyle className="Main_wrap">
      <div className="Main_header">
        <MainHeadLeft
          type={type}
          menu={menu}
          setMenu={setMenu}
          option={option}
        />
        <MainHeadRight setSearch={setSearch} />
      </div>

      <div className="Main_body">{type}</div>
    </MainStyle>
  );
};

export default MainPage;
