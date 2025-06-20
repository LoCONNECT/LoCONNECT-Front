import Image from "next/image";
import { HeaderStyled } from "./styled";
import Logo from "@/assets/images/Logo.svg";
import MyPageIcon from "@/assets/images/MyPage.svg";
import AlarmIcon from "@/assets/images/Alarm.svg";
import MenuIcon from "@/assets/images/Menu.svg";
import MobileLogo from "@/assets/images/MobileLogo.svg";
import clsx from "clsx";

const Header = () => {
  return (
    <HeaderStyled className={clsx("header_wrap")}>
      <div className="header_box">
        {/* PC 로고 */}
        <Image className="header_logo" src={Logo} alt="로고" />
        {/* 모바일 로고 */}
        <Image
          className="header_mobile_logo"
          src={MobileLogo}
          alt="모바일 로고"
        />

        {/* PC 메뉴 */}
        <div className="header_menu_box">
          <div className="header_icon_box">
            {/* 내정보 icon */}
            <Image className="header_icon" src={MyPageIcon} alt="내정보" />

            {/* 알림 icon */}
            <Image className="header_icon" src={AlarmIcon} alt="알림" />
          </div>
          {/* 로그아웃 */}
          <div className="header_logout">로그아웃</div>
        </div>

        {/* 모바일 메뉴 아이콘 */}
        <div className="header_mobile_menu">
          <Image src={MenuIcon} alt="모바일 메뉴" width={24} height={24} />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
