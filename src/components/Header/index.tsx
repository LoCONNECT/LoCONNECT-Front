import Image from "next/image";
import { HeaderStyled } from "./styled";
import Logo from "@/assets/images/Logo.svg";
import MyPageIcon from "@/assets/images/MyPage.svg";
import AlarmIcon from "@/assets/images/Alarm.svg";
import MenuIcon from "@/assets/images/Menu.svg";
import MobileLogo from "@/assets/images/MobileLogo.svg";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useUserStore } from "@/store/useUserStore";

const Header = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  console.log("지금 로그인한 사람", user?.name);

  // 로그아웃 클릭시
  const handleLogout = () => {
    logout(); // user 상태 null로 초기화
    router.push("/login"); // 로그인 페이지로 이동
  };

  return (
    <HeaderStyled className={clsx("header_wrap")}>
      <div className="header_box">
        {/* PC 로고 */}
        <Image
          className="header_logo"
          src={Logo}
          alt="로고"
          onClick={() => {
            router.push("/");
          }}
        />
        {/* 모바일 로고 */}
        <Image
          className="header_mobile_logo"
          src={MobileLogo}
          alt="모바일 로고"
          onClick={() => {
            router.push("/");
          }}
        />

        {/* PC 메뉴 */}
        {user ? (
          // 로그인 한 경우
          <div className="header_menu_box">
            <div className="header_icon_box">
              {/* 내정보 icon */}
              <Image className="header_icon" src={MyPageIcon} alt="내정보" />

              {/* 알림 icon */}
              <Image className="header_icon" src={AlarmIcon} alt="알림" />
            </div>
            {/* 로그아웃 */}
            <div className="header_logout" onClick={handleLogout}>
              로그아웃
            </div>
          </div>
        ) : (
          // 로그인 안 한 경우
          <div className="header_login_container">
            <span
              className="header_join"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              회원가입
            </span>
            <div className="header_line" />
            <span
              className="header_login"
              onClick={() => {
                router.push("/login");
              }}
            >
              로그인
            </span>
          </div>
        )}

        {/* 모바일 메뉴 */}
        <Image
          className="header_mobile_menu"
          src={MenuIcon}
          alt="모바일 메뉴"
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
