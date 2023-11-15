import { creatorLinkType } from "../../public/config/data.json";

export const CreatorPromotionMessage = () => {
  const isTelegram = creatorLinkType === "telegram";
  return (
    <p>
      {" "}
      {isTelegram
        ? "Only taking 1 content partner"
        : "Get access to my private account now! Only $3.00/m for a limited time!"}
    </p>
  );
};
