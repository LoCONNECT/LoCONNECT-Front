"use client";

import { useRouter } from "next/router";
import { DetailStyled } from "./styled";
import { useMainStore } from "@/store/mainCardStore";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import { notification } from "antd";
import axiosInstance from "@/lib/axios";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const getType = useMainStore((state) => state.type);
  const media = useMainStore((state) => state.media);
  const restaurant = useMainStore((state) => state.restaurant);
  const user = useUserStore((state) => state.user);

  const [type, setType] = useState("");
  const [mediaItem, setMediaItem] = useState<MediaType | null>(null);
  const [restaurantItem, setRestaurantItem] = useState<RestaurantType | null>(
    null
  );
  const [image, setImage] = useState("");

  const [hasApplied, setHasApplied] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  // 관리자, 유저에 따라 type 저장
  useEffect(() => {
    if (!getType) {
      if (user?.role === "biz") {
        setType("media");
      } else {
        setType("restaurant");
      }
    } else {
      setType(getType);
    }
  }, [getType, user, router.query]);

  // page id, type에 따라 상세 데이터 가져옴
  useEffect(() => {
    if (!id || !type) {
      setImage("/mainImg/emptyImg.jpg");
      return;
    }

    if (type === "media") {
      const found = media.find((item) => item.id === Number(id));
      setMediaItem(found || null);
      setImage(found?.image!);
    } else if (type === "restaurant") {
      const found = restaurant.find((item) => item.id === Number(id));
      setRestaurantItem(found || null);
      setImage(found?.img!);
    }
  }, [id, type, media, restaurant, router.query]);

  // 유저가 해당 게시글을 신청했는지의 유무가 필요
  useEffect(() => {
    const fetchApplied = async () => {
      if (!id || !type || !user) return;

      try {
        const res = await axiosInstance.get(`/main/${type}/${id}/applied`);
        setHasApplied(res.data.applied);
      } catch (e) {
        console.error("신청 여부 확인 실패", e);
      }
    };

    fetchApplied();
  }, [id, type, user]);

  const handleApply = async (id: number, type: string) => {
    if (id === 0) {
      api.info({
        message: "신청 오류",
        description: "유효하지 않은 항목입니다.",
        placement: "top",
      });
      return;
    }

    // 신청 요청 -> id만 보냈는데 다른 것도 보내야하면 알려주십쇼
    try {
      await axiosInstance.post(`/main/${type}/apply`, { id });

      api.success({
        message: "신청 성공",
        description: "신청이 정상적으로 완료되었습니다.",
        placement: "top",
      });
    } catch (error) {
      api.error({
        message: "신청 실패",
        description: "신청 중 오류가 발생했습니다.",
        placement: "top",
      });
    }
  };

  return (
    <DetailStyled className="Detail_wrap">
      <div className="Detail_head">
        <img
          className="Detail_headBtn"
          src="/mainImg/backBtn.png"
          alt="back button"
          onClick={() => router.back()}
        />
      </div>

      <div className="Detail_Body">
        <div className="Detail_image">
          <Image
            src={!image ? "/mainImg/emptyImg.jpg" : image}
            alt={`${type}_image`}
            fill
            style={{ objectFit: "cover", borderRadius: 20 }}
          />
        </div>

        <div className="Detail_content">
          <p className="Detail_subTitle">
            {type === "media"
              ? `채널명 : ${mediaItem?.programName ?? ""}`
              : restaurantItem?.bizAddress ?? ""}
          </p>

          <p className="Detail_title">
            {type === "media"
              ? `"${mediaItem?.title ?? ""}"`
              : restaurantItem?.bizName ?? ""}
          </p>

          <div className="Detail_texts">
            <p className="Detail_price">
              <span className="Detail_label">희망가격: </span>
              <span className="Detail_value">
                {type === "media"
                  ? mediaItem?.price.toLocaleString() ?? ""
                  : restaurantItem?.price.toLocaleString() ?? ""}
                원
              </span>
            </p>

            <div className="Detail_description">
              <p className="Detail_label">
                {type === "media" ? "프로그램 설명: " : "소개글: "}
              </p>
              <p className="Detail_value">
                {type === "media"
                  ? mediaItem?.programIntro ?? ""
                  : restaurantItem?.intro ?? ""}
              </p>
            </div>

            <p className="Detail_link">
              {(type === "media" && mediaItem?.channelPR) ?? ""}
            </p>
          </div>
        </div>
      </div>

      <div className="Detail_btnContainer">
        <button
          className="Detail_btn"
          onClick={() =>
            handleApply(
              type === "media" ? mediaItem?.id ?? 0 : restaurantItem?.id ?? 0,
              type
            )
          }
          disabled={hasApplied}
        >
          {hasApplied ? "신청 완료" : "신청하기"}
        </button>
      </div>
    </DetailStyled>
  );
};

export default Detail;
