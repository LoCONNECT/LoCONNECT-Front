import Image from "next/image";

interface MainContainerProps {
  type: string | string[] | undefined;
  v: MediaType | RestaurantType;
}

const MainContainer = ({ type, v }: MainContainerProps) => {
  if (type === "media") {
    const media = v as MediaType;
    return (
      <div className="MainCard_card">
        <div className="MainCard_img">
          <Image src={`${media.image}`} alt="media image" fill />
          <div className="MainCard_type">
            <div className="MainCard_icon">
              <Image
                src={`/icon/${media.type}Icon.png`}
                alt={`${media.type} image`}
                fill
              />
            </div>
            <p>
              {media.type === "youtube"
                ? "유튜브"
                : media.type === "insta"
                ? "인스타그램"
                : "네이버 블로그"}
            </p>
          </div>
        </div>

        <div className="MainCard_text">
          <p className="MainCard_title">
            "
            {media.title.length > 15
              ? media.title.slice(0, 15) + "..."
              : media.title}
            "
          </p>

          <div className="MainCard_infoBox">
            <div className="MainCard_infos">
              <p>채널명: {media.programName}</p>
              <p>이름: {media.userName}</p>
            </div>

            <p className="MainCard_price">
              희망가격: {media.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const restaurant = v as RestaurantType;
    return (
      <div className="MainCard_card">
        <div className="MainCard_img">
          <Image src={`${restaurant.img}`} alt="media image" fill />
        </div>

        <div className="MainCard_text">
          <p className="MainCard_title">
            {restaurant.bizName.length > 15
              ? restaurant.bizName.slice(0, 15) + "..."
              : restaurant.bizName}
          </p>

          <div className="MainCard_infoBox">
            <div className="MainCard_infos">
              <p>위치: {restaurant.bizAddress}</p>
            </div>

            <p className="MainCard_price">
              희망가격: {restaurant.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContainer;
