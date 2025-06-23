import { useEffect, useState } from "react";
import { NoticeStyled } from "./styled";
import { message } from "antd";
import axiosInstance from "@/lib/axios";
interface NoticeItem {
  key: string;
  title: string;
  content: string;
}
const Notice = () => {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axiosInstance.get("/allnotices");
      const data = res.data.map((item: any) => ({
        key: item.id.toString(),
        title: item.title,
        content: item.content,
      }));
      setNotices(data);
    } catch (error) {
      message.error("공지사항을 불러오는데 실패했습니다.");
    }
  };
  return (
    <NoticeStyled>
      <div>dsad</div>
    </NoticeStyled>
  );
};

export default Notice;
