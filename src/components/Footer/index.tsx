import Image from "next/image";
import { FooterStyled } from "./styled";
import InstaIcon from "@/assets/images/insta.svg";
import clsx from "clsx";

const Footer = () => {
  return (
    <FooterStyled className={clsx("footer_wrap")}>
      <div className="footer_box">
        <div className="footer_left">
          <div className="footer_company">LoConnect(주)</div>
          <div className="footer_menu_box">
            <span className="footer_menu">문의하기</span>
            <span className="footer_stick">|</span>
            <span className="footer_menu">서비스 이용약관</span>
            <span className="footer_stick">|</span>
            <span>사업자등록번호:110-81-XXXXX</span>
            <span className="footer_stick">|</span>
            <span>대표:대표자이름</span>
            <span className="footer_stick">|</span>
            <span>고객센터</span>
            <span className="footer_stick">|</span>
            <span>사업자정보확인</span>
          </div>
        </div>
        <div className="footer_div"></div>
        <div className="footer_right">
          <Image src={InstaIcon} alt="인스타그램" />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
