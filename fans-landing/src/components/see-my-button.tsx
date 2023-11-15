import {
  creatorUrl,
  creatorLinkType,
  creatorSnapchatUrl,
} from "../../public/config/data.json";

export const SeeMyButton = () => {
  const isTelegram = creatorLinkType === "telegram";
  return (
    <div className="flex flex-col">
      {creatorSnapchatUrl && (
        <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-3 lg:py-6 px-16 lg:px-72 rounded-3xl mb-4">
          <a
            href={creatorSnapchatUrl}
            className="text-md lg:text-2xl w-full truncate"
          >
            👻 ADD MY SNAP 👻
          </a>
        </button>
      )}

      <button className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 lg:py-6 px-16 lg:px-72 rounded-3xl">
        <a href={creatorUrl} className="text-md lg:text-2xl w-full truncate">
          {isTelegram ? "❤️ JOIN MY TELEGRAM ❤️" : "❤️ SEE MY ONLYFANS ❤️"}
        </a>
      </button>
    </div>
  );
};
