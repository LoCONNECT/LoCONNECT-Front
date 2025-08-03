import React from "react";
import { MediaDetailStyle } from "./styled";

const MediaDetail = ({ item }: { item: MediaType | null }) => {
  console.log("d", item);

  return (
    <MediaDetailStyle className="MediaDetail_wrap">
      <div className="MediaDetail_line" />

      <div className="MediaDetail_info">
        <p> 채널 PR </p>
      </div>
    </MediaDetailStyle>
  );
};

export default React.memo(MediaDetail);
