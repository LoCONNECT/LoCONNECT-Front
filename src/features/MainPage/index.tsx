import { useRouter } from "next/router";
import MainHeadLeft from "./MainHeadLeft";
import MainHeadRight from "./MainHeadRight";
import { MainStyle } from "./styled";

const MainPage = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <MainStyle className="Main_wrap">
      <div className="Main_header">
        <MainHeadLeft type={type} />
        <MainHeadRight />
      </div>

      <div className="Main_body">{type}</div>
    </MainStyle>
  );
};

export default MainPage;
