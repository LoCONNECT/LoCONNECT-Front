import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Container, MainSection } from "./styled";
import { UserType, MyPageMenu } from "./types";
import InfoForm from "./Content/InfoForm";
import StoreList from "./Content/StoreList";
import PaymentList from "./Content/PaymentList";
import SettlementList from "./Content/SettlementHistory";
import RequestList from "./Content/RequestList";
import ProposalList from "./Content/ProposalList";
import Withdraw from "./Content/Withdraw";

const DEFAULT_USER_TYPE: UserType = "소상공인"; // 임시 하드코딩
const DEFAULT_PROFILE = {
  name: "홍길동",
  email: "gildong@gmail.com",
  imgUrl: undefined,
};
const DEFAULT_MENU: MyPageMenu = "회원정보";

const MyPage = () => {
  const [userType] = useState<UserType>(DEFAULT_USER_TYPE);
  const [selectedMenu, setSelectedMenu] = useState<MyPageMenu>(DEFAULT_MENU);

  const renderContent = () => {
    switch (selectedMenu) {
      case "회원정보":
        return <InfoForm userType={userType} />;
      case "가게 관리":
        return <StoreList userType={userType} />;
      case "결제 내역":
        return <PaymentList userType={userType} />;
      case "정산 내역":
        return <SettlementList userType={userType} />;
      case "신청 관리":
        return <RequestList userType={userType} />;
      case "홍보 제안 관리":
        return <ProposalList userType={userType} />;
      case "회원탈퇴":
        return <Withdraw userType={userType} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar
        userType={userType}
        selectedMenu={selectedMenu}
        onMenuSelect={setSelectedMenu}
        profile={DEFAULT_PROFILE}
      />
      <MainSection>{renderContent()}</MainSection>
    </Container>
  );
};

export default MyPage;
