import React from "react";
import { UserType, MyPageMenu } from "./types";
import { Sidebar, ProfileSection, MenuList } from "./styled";

const menuByType: Record<UserType, MyPageMenu[]> = {
  소상공인: [
    "회원정보",
    "가게 관리",
    "결제 내역",
    "정산 내역",
    "홍보 제안 관리",
    "회원탈퇴",
  ],
  방송매체: ["회원정보", "결제 내역", "정산 내역", "신청 관리", "회원탈퇴"],
  인플루언서: ["회원정보", "결제 내역", "정산 내역", "신청 관리", "회원탈퇴"],
};

interface SidebarProps {
  userType: UserType;
  selectedMenu: MyPageMenu;
  onMenuSelect: (menu: MyPageMenu) => void;
  profile: { name: string; email: string; imgUrl?: string };
}

const SidebarComponent = ({
  userType,
  selectedMenu,
  onMenuSelect,
  profile,
}: SidebarProps) => {
  return (
    <Sidebar>
      <ProfileSection>
        <div className="profile-img">
          {/* imgUrl 있으면 이미지, 없으면 기본 배경 */}
          {profile.imgUrl && (
            <img
              src={profile.imgUrl}
              alt="profile"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          )}
        </div>
        <div className="profile-name">{profile.name}</div>
        <div className="profile-email">{profile.email}</div>
      </ProfileSection>
      <MenuList>
        {menuByType[userType].map((menu) => (
          <li
            key={menu}
            className={
              menu === "회원탈퇴"
                ? "red"
                : menu === selectedMenu
                ? "active"
                : ""
            }
            onClick={() => onMenuSelect(menu)}
          >
            {menu}
          </li>
        ))}
      </MenuList>
    </Sidebar>
  );
};

export default SidebarComponent;
