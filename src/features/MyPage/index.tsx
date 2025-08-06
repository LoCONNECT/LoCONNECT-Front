import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import Sidebar from "./Sidebar";
import { Container, MainSection } from "./styled";
import InfoForm from "./Content/InfoForm";
import StoreList from "./Content/StoreList";
import PaymentList from "./Content/PaymentList";
import SettlementList from "./Content/SettlementList";
import RequestList from "./Content/RequestList";
import ProposalList from "./Content/ProposalList";
import Withdraw from "./Content/Withdraw";
import { MyPageMenu } from "./types";
import { typeMapping } from "@/utill/mypage/mapping";
const DEFAULT_MENU: MyPageMenu = "회원정보";

const MyPage = () => {
  const { user, userState, loadUserProfile } = useUserStore();
  const [selectedMenu, setSelectedMenu] = useState<MyPageMenu>(DEFAULT_MENU);

  useEffect(() => {
    loadUserProfile();
  }, []);

  if (!user) return <div>로그인이 필요합니다.</div>;

  const renderContent = () => {
    switch (selectedMenu) {
      case "회원정보":
        return <InfoForm userType={user.role} userData={userState} />;

      case "가게 관리":
        return <StoreList userType={user.role} />;
      case "결제 내역":
        return <PaymentList userType={user.role} />;
      case "정산 내역":
        return <SettlementList userType={user.role} />;
      case "신청 관리":
        return <RequestList userType={user.role} />;
      case "홍보 제안 관리":
        return <ProposalList userType={user.role} />;
      case "회원탈퇴":
        return <Withdraw userType={user.role} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar
        userType={typeMapping(userState?.type ?? "biz")}
        selectedMenu={selectedMenu}
        onMenuSelect={setSelectedMenu}
        profile={{
          name: user.name,
          email: userState?.email ?? "", // ✅ userState에서 이메일 보완
          imgUrl: undefined, // 필요시 userState?.imgUrl 추가 가능
        }}
      />
      <MainSection>{renderContent()}</MainSection>
    </Container>
  );
};

export default MyPage;
