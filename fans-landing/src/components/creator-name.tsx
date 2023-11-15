import { creatorName, creatorLinkType } from "../../public/config/data.json";

export const CreatorName = () => {
  return (
    <h2 className="text-2xl lg:text-4xl text-gray-900 pb-2 lg:pb-6 font-bold">
      {creatorLinkType === "telegram" ? (
        <div className="flex flex-col justify-center">{creatorName} ꨄ</div>
      ) : (
        <span>(🎁75% OFF SALE🎁 {creatorName})</span>
      )}
    </h2>
  );
};
