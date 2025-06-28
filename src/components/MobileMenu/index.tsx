import { User } from "@/store/useUserStore";
import { MoblieMenuStyled } from "./styled";
import clsx from "clsx";

interface MobileMenuProps {
  isOpen: boolean;
  user: User | null;
  onLogout: () => void;
  onNavigate: (path: string) => void;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  user,
  onLogout,
  onNavigate,
  onClose,
}: MobileMenuProps) => {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <MoblieMenuStyled className={clsx("mobile_menu", { open: isOpen })}>
      {user ? (
        <>
          <div
            className="mobile_item gray"
            onClick={() => handleNavigate("/alarm")}
          >
            알림
          </div>
          <div
            className="mobile_item gray"
            onClick={() => handleNavigate("/mypage")}
          >
            내 정보
          </div>
          <div className="mobile_item red" onClick={handleLogout}>
            로그아웃
          </div>
        </>
      ) : (
        <>
          <div
            className="mobile_item gray"
            onClick={() => handleNavigate("/login")}
          >
            로그인
          </div>
          <div
            className="mobile_item gray"
            onClick={() => handleNavigate("/signUp")}
          >
            회원가입
          </div>
        </>
      )}
    </MoblieMenuStyled>
  );
};

export default MobileMenu;
