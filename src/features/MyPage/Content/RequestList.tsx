import React from "react";
import { UserType } from "../types";

interface RequestListProps {
  userType: UserType;
}

const RequestList = ({ userType }: RequestListProps) => {
  return (
    <div>
      <h2>신청 관리 ({userType})</h2>
      {/* 신청 내역 리스트 */}
    </div>
  );
};

export default RequestList;
