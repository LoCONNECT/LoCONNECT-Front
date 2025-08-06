import SettleCard from "./SettleCard";
import { DataGroupStyled } from "./styled";

interface Settle {
  id: number;
  settleStatus: string;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
}

interface Props {
  date: string;
  totalAmount: number;
  settles: Settle[];
}

// 정산 내역 카드 리스트
const DataGroup = ({ date, totalAmount, settles }: Props) => {
  return (
    <DataGroupStyled>
      <div className="data-box">
        <div className="data-date">{date}</div>
        <div className="data-totalprice">{totalAmount.toLocaleString()}원</div>
      </div>
      <div className="data-group">
        {settles.map((p) => (
          <SettleCard key={p.id} settle={p} />
        ))}
      </div>
    </DataGroupStyled>
  );
};

export default DataGroup;
