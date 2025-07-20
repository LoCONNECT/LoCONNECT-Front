import React from "react";
import { UserType } from "../types";

interface WithdrawProps {
  userType: UserType;
}

const Withdraw = ({ userType }: WithdrawProps) => {
  return (
    <div>
      <h2>회원탈퇴 ({userType})</h2>
      {/* 탈퇴 안내 및 버튼 */}
    </div>
  );
};

export default Withdraw;
