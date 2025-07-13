import React from "react";
import { UserType } from "../types";

interface ProposalListProps {
  userType: UserType;
}

const ProposalList = ({ userType }: ProposalListProps) => {
  return (
    <div>
      <h2>홍보 제안 관리 ({userType})</h2>
      {/* 홍보 제안 리스트 */}
    </div>
  );
};

export default ProposalList;
