interface OptionType {
  value: string;
  label: string;
}

interface MediaType {
  id: number;
  userId: number;
  userName: string;
  userProfile: string; // 유저 프로필 사진 ( 내 계정에서 관리 )
  programName: string; // 채널명
  title: string;
  price: number;
  type: string; // 유튜브, 인스타, 블로그
  image: string; // 썸네일
  programIntro: string; // 프로그램 소개글
  subTitle: string; // 프로그램 소개글 subtitle
  channelPR: string; // 채널 PR ( 내 계정에서 관리 )
}

// 관련자료
interface ScrapingData {
  id: number;
  scrapImg: string; // 대표 이미지
  scrapTitle: string; // 제목
  scrapSubTitle: string; // 간결한 소개, 서브 제목
  scrapLink: string; // 영상 링크
}

interface RestaurantType {
  id: number;
  bizName: string; // 가게 이름
  bizAddress: string; // 가게 위치
  price: number;
  intro: string; // ai 소개글
  img: string;
  menuImg: string; // 메뉴판 사진
  scraping: ScrapingData[]; // 관련자료
}
