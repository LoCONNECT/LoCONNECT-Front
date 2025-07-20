import { useRouter } from "next/router";
import { DetailStyled } from "./styled";
import { useMainStore } from "@/store/mainCardStore";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";

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

  // page id, type에 따라 데이터 가져옴
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
          {type === "medai"
            ? mediaItem?.programName
            : restaurantItem?.bizAddress}
        </div>
      </div>
    </DetailStyled>
  );
};

export default Detail;
