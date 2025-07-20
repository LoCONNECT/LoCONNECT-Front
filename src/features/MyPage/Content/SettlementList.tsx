import React from "react";
import { UserType } from "../types";

interface SettlementListProps {
  userType: UserType;
}

const SettlementList = ({ userType }: SettlementListProps) => {
  return (
    <div>
      <h2>정산 내역 ({userType})</h2>
      {/* 정산 내역 리스트 */}
    </div>
  );
};

export default SettlementList;
