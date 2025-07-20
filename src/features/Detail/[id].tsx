import { useRouter } from "next/router";
import { DetailStyled } from "./styled";
import { useMainStore } from "@/store/mainCardStore";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/useUserStore";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const getType = useMainStore((state) => state.type);
  const user = useUserStore((state) => state.user);

  const [type, setType] = useState("");

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
  }, []);

  return (
    <DetailStyled className="Detail_wrap">
      {id} : {type}
    </DetailStyled>
  );
};

export default Detail;
