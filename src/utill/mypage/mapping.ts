export const typeMapping = (rawType: "biz" | "media" | "influ") => {
  switch (rawType) {
    case "biz":
      return "소상공인";
    case "media":
      return "방송매체";
    case "influ":
      return "인플루언서";
    default:
      return "소상공인";
  }
};
