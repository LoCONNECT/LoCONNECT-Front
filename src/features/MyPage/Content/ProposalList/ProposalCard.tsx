import { ProposalCardStyled } from "./styled";

interface Proposal {
  id: number;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
  channel: string;
}

interface ProposalCardProps {
  proposal: Proposal;
}

// 홍보 제안 카드
const ProposalCard = ({ proposal }: ProposalCardProps) => {
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
            <button className="proposal-btn refuse">거절</button>
            <button className="proposal-btn accept">수락</button>
          </div>
        </div>
      </div>
    </ProposalCardStyled>
  );
};

export default ProposalCard;
