import React, { useEffect, useState } from "react";
import { UserType } from "../../types";
import ProposalCard from "./ProposalCard";
import axiosInstance from "@/lib/axios";

interface ProposalListProps {
  userType: UserType;
}

// 백엔드에서 받을 데이터
interface Proposal {
  id: number;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
  channel: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}

const dummyStores = [
  {
    id: 1,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
    status: "PENDING",
  },
  {
    id: 2,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
    status: "ACCEPTED",
  },
  {
    id: 3,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
    status: "REJECTED",
  },

  {
    id: 4,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
    status: "ACCEPTED",
  },
  {
    id: 5,
    channel: "충북충북",
    name: "홍길동",
    price: 30000,
    desc: "홍길동과 함께하는 청주 다시보기",
    thumbnail: "/dummyImg/mainDummyImg1.png",
    status: "PENDING",
  },
];

const ProposalList = ({ userType }: ProposalListProps) => {
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await axiosInstance.get("/proposal/proposals");
        setProposals(response.data);
      } catch (e) {
        console.error("제안 불러오기 실패", e);
      }
    };

    fetchProposals();
  }, []);

  const handleStatusChange = (updatedProposal: Proposal) => {
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === updatedProposal.id ? updatedProposal : proposal
      )
    );
  };

  return (
    <div>
      <h2>홍보 제안 관리 ({userType})</h2>

      {/* 홍보 제안 리스트 */}
      <div className="proposal-container">
        {proposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            proposal={proposal}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ProposalList;
