import React, { useState, useEffect } from "react";
import { UserType } from "../../types";
import { DateBox } from "./styled";
import DataGroup from "./DataGroup";
import axiosInstance from "@/lib/axios";
import { ConfigProvider, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

import koKR from "antd/locale/ko_KR";
import "dayjs/locale/ko";
dayjs.locale("ko");
interface SettlementListProps {
  userType: UserType;
}

const dummyStores = [
  {
    date: "25.07.09",
    totalAmount: 30000,
    settles: [
      {
        id: 1,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        settleStatus: "입금 완료",
      },
      {
        id: 2,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        settleStatus: "입금 대기중",
      },
      {
        id: 3,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        settleStatus: "결제 취소",
      },
    ],
  },
  {
    date: "25.07.08",
    totalAmount: 60000,
    settles: [
      {
        id: 4,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        settleStatus: "입금 완료",
      },
      {
        id: 5,
        name: "충북충북",
        price: 30000,
        desc: "홍길동과 함께하는 청주 다시보기",
        thumbnail: "/dummyImg/mainDummyImg1.png",
        settleStatus: "입금 완료",
      },
    ],
  },
];

const SettlementList = ({ userType }: SettlementListProps) => {
  const today = dayjs();
  const [settlementData, setSettlementData] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [totalMonthlyAmount, setTotalMonthlyAmount] = useState(0);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // API 요청 함수
  const fetchSettlementData = async (year: number, month: number) => {
    try {
      console.log("연도", year);
      console.log("월", month);

      // TODO: 연도랑 월을 보내면 그에 해당하는 정산내역 보내주기(더미데이터에 적혀있는거)
      const response = await axiosInstance.get("/mypage/settlement", {
        params: { year, month },
      });
      const fetchedData = response.data;
      setSettlementData(fetchedData);

      // 월별 총 금액 계산
      const total = fetchedData.reduce(
        (sum: number, group: any) => sum + group.totalAmount,
        0
      );
      setTotalMonthlyAmount(total);
    } catch (error) {
      console.error("정산 내역을 불러오는 중 오류가 발생했습니다:", error);
      setSettlementData([]);
      setTotalMonthlyAmount(0);
    }
  };

  // 선택된 날짜에 따라 정산 내역을 불러옴
  useEffect(() => {
    fetchSettlementData(selectedDate.year(), selectedDate.month() + 1);
  }, [selectedDate]);

  // 날짜 범위 텍스트를 계산하는 함수
  const getDateRangeText = () => {
    const year = selectedDate.year();
    const month = selectedDate.month() + 1;
    const isCurrentMonth = year === today.year() && month === today.month() + 1;
    const lastDay = selectedDate.endOf("month").date();
    const endDay = isCurrentMonth ? today.date() : lastDay;

    const startDate = `${year}.${String(month).padStart(2, "0")}.01`;
    const endDate = `${String(month).padStart(2, "0")}.${String(
      endDay
    ).padStart(2, "0")}`;

    return `${startDate} ~ ${endDate}`;
  };

  // 미래 날짜 선택을 비활성화
  const disabledDate = (current: Dayjs) => {
    return current && current > today.endOf("day");
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <ConfigProvider locale={koKR}>
      <h2>정산 내역 ({userType})</h2>
      {/* 정산 내역 날짜 범위 */}
      <DateBox onClick={() => setIsPickerOpen(true)}>
        <div className="settlement-wrap">
          <div className="settlement-box">
            <div className="settlement-date">{getDateRangeText()}</div>
            <div className="settlement-month">{selectedDate.month() + 1}월</div>
          </div>
          <div className="settlement-money">
            {totalMonthlyAmount.toLocaleString()}원
          </div>
        </div>

        {/* 날짜 선택 팝업 */}
        <div onClick={(e) => e.stopPropagation()}>
          <DatePicker
            picker="month"
            open={isPickerOpen}
            onOpenChange={(open) => setIsPickerOpen(open)}
            onChange={handleDateChange}
            value={selectedDate}
            disabledDate={disabledDate}
            allowClear={false}
            // DatePicker의 입력 필드를 숨기고 팝업만 사용하도록 설정
            style={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
              zIndex: -1,
            }}
          />
        </div>
      </DateBox>

      {/* 정산 내역 */}
      <div>
        {settlementData.map((group) => (
          <DataGroup
            key={group.date}
            date={group.date}
            totalAmount={group.totalAmount}
            settles={group.settles}
          />
        ))}
      </div>
    </ConfigProvider>
  );
};

export default SettlementList;
