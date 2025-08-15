import React, { useEffect } from "react";
import { Image } from "antd";
import { RestaurantDetailStyle } from "./styled";
import { useRouter } from "next/router";

const RestaurantDetail = ({ item }: { item: RestaurantType | null }) => {
  const router = useRouter();

  return (
    <RestaurantDetailStyle className="RestaurantDetail_wrap">
      <div className="RestaurantDetail_line" />

      {/* TODO : 반응형 */}
      <div className="RestaurantDetail_infos">
        <div className="RestaurantDetail_menu">
          <p> 메뉴판 </p>
          <div className="RestaurantDetail_image">
            <Image
              className="custom-ant-image"
              src={!item?.menuImg ? "/mainImg/emptyImg.jpg" : item?.menuImg}
              alt="menu image"
            />
          </div>
        </div>

        {item?.scraping && item.scraping.length > 0 && (
          <div className="RestaurantDetail_scrap">
            <p> 관련자료 </p>
            <div className="RestaurantDetail_scrapImg">
              {item.scraping.map((i) => (
                <div className="RestaurantDetail_scrapInfo">
                  <Image
                    className="custom-ant-scrapImg"
                    src={!i.scrapImg ? "/mainImg/emptyImg.jpg" : i.scrapImg}
                    alt="menu image"
                    style={{
                      objectFit: "cover",
                      width: 200,
                      height: 64,
                    }}
                  />

                  <div className="RestaurantDetail_texts">
                    <p className="RestaurantDetail_title">
                      {i.scrapTitle.length > 12
                        ? i.scrapTitle.slice(0, 12) + "..."
                        : i.scrapTitle}
                    </p>
                    <p className="RestaurantDetail_subTitle">
                      {i.scrapSubTitle.length > 12
                        ? i.scrapSubTitle.slice(0, 12) + "..."
                        : i.scrapSubTitle}
                    </p>

                    <p
                      className="RestaurantDetail_link"
                      onClick={() => router.push(i.scrapLink)}
                    >
                      👉 영상 보러 가기
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </RestaurantDetailStyle>
  );
};

export default React.memo(RestaurantDetail);
