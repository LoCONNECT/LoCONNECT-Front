import { SettleCardStyled } from "./styled";

interface Settle {
  id: number;
  settleStatus: string;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
}

interface SettleCardProps {
  settle: Settle;
}

// 정산 내역 카드
const SettleCard = ({ settle }: SettleCardProps) => {
  // 입금 완료일 때 파란색 스타일
  const statusClassName =
    settle.settleStatus === "입금 완료" ? "status-completed" : "";

  // 결제 취소일 때 금액 앞에 '-'
  const displayPrice =
    settle.settleStatus === "결제 취소"
      ? `-${settle.price.toLocaleString()}`
      : settle.price.toLocaleString();

  return (
    <SettleCardStyled>
      <div className="settle-status">{settle.settleStatus}</div>
      <div className="settle-card">
        {/* 이미지 */}
        <img
          className="settle-img"
          src={settle.thumbnail}
          alt="settlementImg"
        />
        {/* 정산 내용 */}
        <div className="settle-content">
          <div className={`settle-price ${statusClassName}`}>
            {displayPrice} 원
          </div>
          <div className="settle-title">
            <div>"{settle.desc}"</div>
            <div>채널명: {settle.name}</div>
          </div>
        </div>
      </div>
    </SettleCardStyled>
  );
};

export default SettleCard;
