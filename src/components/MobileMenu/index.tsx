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
  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };
  console.log("AAAAAAAaa", user);
  return (
    <MoblieMenuStyled className={clsx("mobile_menu", { open: isOpen })}>
      {user ? (
        <>
          <div className="mobile_item" onClick={() => handleNavigate("/alarm")}>
            알림
          </div>
          <div
            className="mobile_item"
            onClick={() => handleNavigate("/mypage")}
          >
            내 정보
          </div>
          <div className="mobile_item" onClick={handleLogout}>
            로그아웃
          </div>
        </>
      ) : (
        <>
          <div className="mobile_item" onClick={() => handleNavigate("/login")}>
            로그인
          </div>
          <div
            className="mobile_item"
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
