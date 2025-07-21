import MainContainer from "./MainContainer";
import { MainCardStyle } from "./styled";

interface MainCardProps {
  type: string;
  media: MediaType[];
  restaurant: RestaurantType[];
}

const MainCard = ({ type, media, restaurant }: MainCardProps) => {
  console.log("restaurant", restaurant);

  return (
    <MainCardStyle className="MainCard_container">
      {type === "media"
        ? media.map((m) => (
            <div className="MainCard_wrap" key={`media-${m.id}`}>
              <MainContainer v={m} type={type} />
            </div>
          ))
        : restaurant.map((r) => (
            <div className="MainCard_wrap" key={`res-${r.id}`}>
              <MainContainer v={r} type={type} />
            </div>
          ))}
    </MainCardStyle>
  );
};

export default MainCard;
