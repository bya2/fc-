import { atom } from "recoil";

export const language_state = atom({
  key: "language_state",
  default: "한국어",
});

export const user_state = atom({
  key: "user_state",
  default: null,
});

export const logged = atom({
  key: "logged",
  default: false,
});

export const price_state = atom({
  key: "price_state",
  default: 0,
});

export const dark_state = atom({
  key: "dark_state",
  default: false,
});

export const user_my_wallet = atom({
  key: "my_wallet",
  default: null,
})