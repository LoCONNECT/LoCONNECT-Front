import React from "react";
import { UserType } from "../../types";
import ProposalCard from "./ProposalCard";

interface ProposalListProps {
  userType: UserType;
}

const dummyStores = [
  {
    id: 1,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
  {
    id: 2,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
  {
    id: 3,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },

  {
    id: 4,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
  {
    id: 5,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
];

const ProposalList = ({ userType }: ProposalListProps) => {
  return (
    <div>
      <h2>홍보 제안 관리 ({userType})</h2>

      {/* 홍보 제안 리스트 */}
      <div className="proposal-container">
        {dummyStores.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};

export default ProposalList;
