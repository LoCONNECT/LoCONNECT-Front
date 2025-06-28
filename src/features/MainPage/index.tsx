import { useRouter } from "next/router";
import MainHeadLeft from "./MainHeadLeft";
import MainHeadRight from "./MainHeadRight";
import { MainStyle } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const router = useRouter();
  const { type } = router.query;

  const [menu, setMenu] = useState<"all" | "youtube" | "insta" | "blog">("all");
  const [option, setOption] = useState<OptionType[]>([]);
  const [search, setSearch] = useState("");

  const [media, setMedia] = useState<MediaType[]>([]);
  const [restaurant, setRestaurant] = useState<RestaurantType[]>([]);

  useEffect(() => {
    const getRegion = async () => {
      try {
        if (type === "restaurant") {
          // const res = await axios.get("/main/getMedia");

          // res.data.restaurant : 식당 데이터 모두. 더미 데이터 참고!
          // res.data.region : 지역 데이터만. 더미 데이터 참고!

          // console.log("식당 데이터 : ", res.data);

          const region = [
            { value: "Chungbuk", label: "충북" },
            { value: "Chungju", label: "충주" },
            { value: "Cheongju", label: "청주" },
          ];

          const restaurant = [
            {
              id: 1,
              bizName: "충주떡볶이하우스",
              bizAddress: "충청북도 충주시 중앙로 123",
              price: 15000,
              intro: "충주의 숨은 맛집, 매콤달콤 떡볶이로 사랑받는 곳입니다.",
              menuImg: "/dummyImg/mainScrapImg1.png",
              img: "/dummyImg/mainDummyImg2.png",
              scraping: [
                {
                  id: 1,
                  scrapImg: "/dummyImg/mainScrapImg2.png",
                  scrapTitle: "충주 떡볶이 맛집 소개 영상",
                  scrapSubTitle: "충주에서 떡볶이 덕후라면 꼭 가야 할 곳!",
                  scrapLink: "https://example.com/video/1",
                },
                {
                  id: 2,
                  scrapImg: "/dummyImg/mainScrapImg2.png",
                  scrapTitle: "충주 길거리 음식 투어",
                  scrapSubTitle: "충주의 다양한 길거리 음식 탐방기",
                  scrapLink: "https://example.com/video/2",
                },
              ],
            },
            {
              id: 2,
              bizName: "청주고기명가",
              bizAddress: "충청북도 청주시 상당구 상당로 456",
              price: 40000,
              intro:
                "신선한 고기와 넓은 공간으로 가족 모임에 안성맞춤인 청주의 고깃집입니다.",
              menuImg: "/dummyImg/mainScrapImg1.png",
              img: "/dummyImg/mainDummyImg3.png",
              scraping: [
                {
                  id: 3,
                  scrapImg: "/dummyImg/mainScrapImg2.png",
                  scrapTitle: "청주 고깃집 탐방 브이로그",
                  scrapSubTitle: "청주에서 유명한 고깃집 리뷰",
                  scrapLink: "https://example.com/video/3",
                },
              ],
            },
            {
              id: 3,
              bizName: "청주 국밥집 진국",
              bizAddress: "충청북도 청주시 흥덕구 흥덕로 56",
              price: 8000,
              intro: "든든한 한 끼를 책임지는 청주 대표 국밥 맛집입니다.",
              menuImg: "/dummyImg/mainScrapImg1.png",
              img: "/dummyImg/mainDummyImg4.png",
              scraping: [
                {
                  id: 4,
                  scrapImg: "/dummyImg/mainScrapImg2.png",
                  scrapTitle: "청주 국밥 맛집 소개",
                  scrapSubTitle: "뜨끈한 국밥 한 그릇으로 든든하게",
                  scrapLink: "https://example.com/video/4",
                },
              ],
            },
          ];

          setOption(region);
          setRestaurant(restaurant);

          // setOption(res.data.region);
          // setRestaurant(res.data.restaurant);
        } else {
          // const res = await axios.get("/main/getRestaurant");

          // res.data.media : 홍보매체 데이터 모두. 더미 데이터 참고!

          // console.log("홍보 매체 데이터 : ", res.data);

          const media = [
            {
              id: 1,
              userId: 101,
              userName: "김지은",
              userProfile: "/dummyImg/mainDummyImg1.png",
              programName: "지은의 맛집로드",
              title: "충북 숨은 맛집 투어",
              price: 500000,
              type: "youtube",
              image: "/dummyImg/mainDummyImg1.png",
              programIntro:
                "충북 지역 맛집을 발굴해 지역 경제를 살리는 맛집 채널입니다.",
              subTitle: "충북의 맛을 찾아서",
              channelPR:
                "소상공인과 함께 성장하는 채널, 구독하고 다양한 맛집 소식을 받아보세요!",
            },
            {
              id: 2,
              userId: 102,
              userName: "이민호",
              userProfile: "/dummyImg/mainDummyImg1.png",
              programName: "민호의 충주 먹방",
              title: "충주 떡볶이 맛집 베스트 5",
              price: 300000,
              type: "insta",
              image: "/dummyImg/mainDummyImg1.png",
              programIntro:
                "충주 곳곳의 떡볶이 맛집을 소개하며 지역 맛을 널리 알립니다.",
              subTitle: "충주의 매운맛을 찾아서",
              channelPR: "충주의 다양한 맛집 소식을 실시간으로 전합니다.",
            },
            {
              id: 3,
              userId: 103,
              userName: "박수진",
              userProfile: "/dummyImg/mainDummyImg1.png",
              programName: "수진의 청주 맛기행",
              title: "청주 고깃집 솔직 리뷰",
              price: 200000,
              type: "blog",
              image: "/dummyImg/mainDummyImg1.png",
              programIntro:
                "청주 곳곳의 숨은 고깃집들을 다니며 생생한 후기를 전달합니다.",
              subTitle: "청주 고기의 진짜 맛",
              channelPR:
                "지역 소상공인을 응원하며 청주 맛집을 알리는 블로그입니다.",
            },
          ];

          setMedia(media);

          // setMedia(res.data.media);
        }
      } catch (e) {
        console.log("메인 데이터 불러오기 에러 : ", e);
      }
    };

    getRegion();
  }, [type]);

  return (
    <MainStyle className="Main_wrap">
      <div className="Main_header">
        <MainHeadLeft
          type={type}
          menu={menu}
          setMenu={setMenu}
          option={option}
        />
        <MainHeadRight setSearch={setSearch} />
      </div>

      <div className="Main_body">{type}</div>
    </MainStyle>
  );
};

export default MainPage;
