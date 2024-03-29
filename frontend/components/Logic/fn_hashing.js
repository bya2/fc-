const fn_hashing = (pw) => {
  const HASH_LENGTH = 60;
  const SALT = "angksehwjsshfausanjgksldbznlwmdhsejqmffjrdbwotjrsjanwhgdkdysosusdpeheotkd";

  const missing = HASH_LENGTH - pw.length; // 60-pw개수 = 빈 부분 채우기
  let temp = pw + SALT.substring(0, missing); // process.env.NEXT_PUBLIC_SALT.substr(0)
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

export default fn_hashing;
