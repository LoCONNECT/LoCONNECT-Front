import { PaymentCardStyled } from "./styled";

interface Payment {
  id: number;
  paymentStatus: string;
  price: number;
  thumbnail: string;
  desc: string;
  name: string;
}

interface PaymentCardProps {
  payment: Payment;
}

export default function PaymentCard({ payment }: PaymentCardProps) {
  return (
    <PaymentCardStyled>
      <div className="payment-status">{payment.paymentStatus}</div>
      <div className="payment-card">
        <img className="payment-img" src={payment.thumbnail} alt="" />
        <div className="payment-content">
          <div className="payment-price">
            {payment.price.toLocaleString()} 원
          </div>
          <div className="payment-title">
            <div>"{payment.desc}"</div>
            <div>채널명: {payment.name}</div>
          </div>
        </div>
      </div>
    </PaymentCardStyled>
  );
}
