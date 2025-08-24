import { useState } from "react";
import { ProposalCardStyled, StatusButton } from "./styled";
import { Modal, Input, message } from "antd";
import axiosInstance from "@/lib/axios";

const { TextArea } = Input;

interface Proposal {
  id: number;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
  channel: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}

interface ProposalCardProps {
  proposal: Proposal;
  onStatusChange: (updatedProposal: Proposal) => void;
}

// 홍보 제안 카드
const ProposalCard = ({ proposal, onStatusChange }: ProposalCardProps) => {
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");

  const handleAccept = async () => {
    try {
      // TODO: 제안 수락하는 요청
      await axiosInstance.post(`/proposal/${proposal.id}/accept`);
      message.success("해당 제안의 연락처가 귀하의 메일로 전달되었습니다.");
      onStatusChange({ ...proposal, status: "ACCEPTED" });
      setIsAcceptModalOpen(false);
    } catch (error) {
      console.error("제안 수락에 실패했습니다.", error);
      message.error("제안 수락에 실패했습니다.");
    }
  };

  const handleReject = async () => {
    if (!rejectReason.trim()) {
      message.error("거절 이유를 작성해주세요.");
      return;
    }

    try {
      console.log(rejectReason, "거절 이유");
      // TODO: 제안 거절 요청
      await axiosInstance.post(`/proposal/${proposal.id}/reject`, {
        rejectReason,
      });
      message.success("거절되었습니다.");
      onStatusChange({ ...proposal, status: "REJECTED" });
      setIsRejectModalOpen(false);
    } catch (error) {
      console.error("제안 거절에 실패했습니다.", error);
      message.error("제안 거절에 실패했습니다.");
    }
  };

  return (
    <ProposalCardStyled>
      <div className="proposal-card">
        {/* 이미지 */}
        <img
          className="proposal-img"
          src={proposal.thumbnail}
          alt="proposaltImg"
        />
        <div className="proposal-box">
          {/* 홍보 제안 내용 */}
          <div className="proposal-content">
            <div className="proposal-desc">"{proposal.desc}"</div>
            <div>
              채널명: {proposal.name} 이름: {proposal.channel}
            </div>
            <div>희망가격: {proposal.price}원</div>
          </div>

          {/* 수락/거절 버튼 */}
          <div className="proposal-button">
            {(() => {
              switch (proposal.status) {
                case "ACCEPTED":
                  return <StatusButton>수락되었습니다</StatusButton>;
                case "REJECTED":
                  return <StatusButton>거절되었습니다</StatusButton>;
                default:
                  return (
                    <>
                      <button
                        className="proposal-btn refuse"
                        onClick={() => setIsRejectModalOpen(true)}
                      >
                        거절
                      </button>
                      <button
                        className="proposal-btn accept"
                        onClick={() => setIsAcceptModalOpen(true)}
                      >
                        수락
                      </button>
                    </>
                  );
              }
            })()}
          </div>
        </div>
      </div>
      {/* 수락 모달 */}
      <Modal
        title="제안 수락"
        open={isAcceptModalOpen}
        onOk={handleAccept}
        onCancel={() => setIsAcceptModalOpen(false)}
        okText="확인"
        cancelText="취소"
        centered
      >
        <p>수락하시겠습니까?</p>
      </Modal>

      {/* 거절 모달 */}
      <Modal
        title="제안 거절"
        open={isRejectModalOpen}
        onOk={handleReject}
        onCancel={() => setIsRejectModalOpen(false)}
        okText="확인"
        cancelText="취소"
        centered
      >
        <p>거절하시겠습니까?</p>
        <TextArea
          rows={4}
          placeholder="거절 이유를 작성해주세요."
          value={rejectReason}
          onChange={(e) => setRejectReason(e.target.value)}
        />
      </Modal>
    </ProposalCardStyled>
  );
};

export default ProposalCard;
