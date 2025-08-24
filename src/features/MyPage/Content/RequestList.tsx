import { UserType } from "../types";
import React, { useState } from "react";
import { StoreCardList, StoreCard } from "../styled";
import StoreEditModal from "./StoreEditModal";

const dummyStores = [
  {
    id: 1,
    name: "육거리 소문난 만두",
    location: "충북 청주시 상당구",
    price: 30000,
    desc: "청주 육거리 시장 불광교에 따라 걷다 보면, 바삭한 군만두 냄새에 발길이 멈추는 곳! 30년 전통의 소문난 만두집.",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
  {
    id: 2,
    name: "청원집 소문난국수 청주점",
    location: "충북 청주시 서원구",
    price: 50000,
    desc: "청주에서 국수하면 떠오르는 명소, 소문난국수집!",
    thumbnail: "/dummyImg/mainDummyImg2.png",
  },
  {
    id: 3,
    name: "육거리 소문난 만두",
    location: "충북 청주시 상당구",
    price: 30000,
    desc: "육거리 근처 만두집에서 진짜 만두의 맛을 느껴보세요.",
    thumbnail: "/dummyImg/mainDummyImg1.png",
  },
];
interface RequestListProps {
  userType: UserType;
}

const RequestList = ({ userType }: RequestListProps) => {
  const [editStore, setEditStore] = useState<null | (typeof dummyStores)[0]>(
    null
  );
  return (
    <div>
      <h2>가게 관리</h2>
      <StoreCardList>
        {dummyStores.map((store) => (
          <StoreCard key={store.id}>
            <img className="thumbnail" src={store.thumbnail} alt={store.name} />
            <div className="store-title">{store.name}</div>
            <div className="store-location">위치: {store.location}</div>
            <div className="store-price">
              희망가격: {store.price.toLocaleString()}원
            </div>
            <div className="store-desc">{store.desc}</div>
            <div className="button-row">
              <button className="delete">삭제</button>
              <button className="edit" onClick={() => setEditStore(store)}>
                수정
              </button>
            </div>
          </StoreCard>
        ))}
      </StoreCardList>
      <StoreEditModal
        open={!!editStore}
        onClose={() => setEditStore(null)}
        store={editStore || dummyStores[0]}
        onSave={(data) => {
          // 저장 로직 (API 연동 등)
          setEditStore(null);
        }}
      />
    </div>
  );
};

export default RequestList;
