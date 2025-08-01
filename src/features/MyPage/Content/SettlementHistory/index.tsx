import React from "react";
import { UserType } from "../../types";
import { DateBox } from "./styled";
import DataGroup from "./DataGroup";

interface SettlementListProps {
  userType: UserType;
}

const dummyStores = [
  {
    date: "25.07.09",
    totalAmount: 30000,
    payments: [
      {
        id: 1,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        paymentStatus: "입금 완료",
      },
      {
        id: 2,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        paymentStatus: "입금 대기중",
      },
      {
        id: 3,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        paymentStatus: "결제 취소",
      },
    ],
  },
  {
    date: "25.07.08",
    totalAmount: 60000,
    payments: [
      {
        id: 4,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        paymentStatus: "입금 완료",
      },
      {
        id: 5,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        paymentStatus: "입금 완료",
      },
    ],
  },
];

const SettlementList = ({ userType }: SettlementListProps) => {
  return (
    <div>
      <h2>정산 내역 ({userType})</h2>
      {/* 정산 내역 날짜 범위 */}
      <DateBox>
        <div className="settlement-wrap">
          <div className="settlement-box">
            <div className="settlement-date">2025.07.01 ~ 07.31</div>
            <div className="settlement-month">7월</div>
          </div>
          <div className="settlement-money">90,000원</div>
        </div>
      </DateBox>

      {/* 정산 내역 */}
      <div>
        {dummyStores.map((group) => (
          <DataGroup
            key={group.date}
            date={group.date}
            totalAmount={group.totalAmount}
            payments={group.payments}
          />
        ))}
      </div>
    </div>
  );
};

export default SettlementList;
