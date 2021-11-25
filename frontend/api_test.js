import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.IP);

const fn_hashing = (pw) => {
  const missing = process.env.HASH_LENGTH - pw.length; // 36-pw개수 = 빈 부분 채우기
  let temp = pw + process.env.SALT.substr(0, missing); // process.env.NEXT_PUBLIC_SALT.substr(0)
  temp = temp
    .split("")
    .map((t, idx) => {
      const something = (t.charCodeAt() * (idx + 3)) % 127;
      return something > 33 ? something : something + 33;
    })
    .map((t) => (t = String.fromCharCode(t)))
    .join("");

  return temp;
};

const fn_REST__singup = async (id, pw, nickname, email) => {
  const url = process.env.IP + process.env.URL__SIGNUP;

  try {
    const res = await axios.post(url, {
      id,
      hashed_pw: fn_hashing(pw),
      nickname,
      email,
    });
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

const fn_REST_GET__checkid = async (id) => {
  const url = process.env.IP + process.env.URL__CHECKID;
  try {
    const res = await axios.get(url, { params: { id } });
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
};

const fn_REST_POST__ = async () => {
  const url = process.env.IP_2 + process.env.URL__;
  try {
    const res = await axios.post(url, {});
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};
// fn_REST__singup("testest", "alsrudgh1.", "testetst", "1736s@naver.com");

// fn_REST_GET__checkid("test");
