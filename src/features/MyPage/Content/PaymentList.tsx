import React from "react";
import { UserType } from "../types";

interface PaymentListProps {
  userType: UserType;
}

const PaymentList = ({ userType }: PaymentListProps) => {
  return (
    <div>
      <h2>결제 내역 ({userType})</h2>
      {/* 결제 내역 리스트 */}
    </div>
  );
};

export default PaymentList;
