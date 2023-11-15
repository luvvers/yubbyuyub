import { creatorLinkType } from "../../public/config/data.json";

export const CreatorFooter = () => {
  if (creatorLinkType === "telegram" || creatorLinkType === "snapchat") {
    return null;
  }
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-5 lg:pt-16">
        <div className="text-center mt-8 text-sm">
          © Copyright 2023 Powered by OnlyFans
        </div>
      </div>
    </div>
  );
};
