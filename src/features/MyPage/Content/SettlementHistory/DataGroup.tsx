import PaymentCard from "./PaymentCard";
import { DataGroupStyled } from "./styled";

interface Payment {
  id: number;
  paymentStatus: string;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
}

interface Props {
  date: string;
  totalAmount: number;
  payments: Payment[];
}

// 정산 내역 카드 리스트
const DataGroup = ({ date, totalAmount, payments }: Props) => {
  return (
    <DataGroupStyled>
      <div className="data-box">
        <div className="data-date">{date}</div>
        <div className="data-totalprice">{totalAmount.toLocaleString()}원</div>
      </div>
      <div className="data-group">
        {payments.map((p) => (
          <PaymentCard key={p.id} payment={p} />
        ))}
      </div>
    </DataGroupStyled>
  );
};

export default DataGroup;
