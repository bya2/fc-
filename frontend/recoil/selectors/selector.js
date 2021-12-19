import { selector } from "recoil";
import { language, language_state } from "../atoms/atoms";

const korea = [
  {
    href: "/guide",
    span: "가이드",
  },
  {
    href: "/wallet",
    span: "내 지갑",
  },
  {
    href: "/info",
    span: "투자정보",
  },
  {
    href: "/exchange",
    span: "거래소",
  },
  {
    href: "/interest",
    span: "관심종목",
  },
  {
    href: "/help",
    span: "고객센터",
  },
];

const english = [
  {
    href: "/guide",
    span: "Guide",
  },
  {
    href: "/wallet",
    span: "Wallet",
  },
  {
    href: "/info",
    span: "Info",
  },
  {
    href: "/exchange",
    span: "Exchange",
  },
  {
    href: "/interest",
    span: "Interest",
  },
  {
    href: "/help",
    span: "Customer",
  },
];

const gnb = {
  korea,
  english,
};

export const curr_language = selector({
  key: "curr_language",
  get: ({ get }) => {
    const language = get(language_state);

    switch (language) {
      case "한국어":
        return gnb.korea;
      case "English":
        return gnb.english;
    }
  },
});
