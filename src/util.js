export const keyGenerator = (length) => {
  const characters = "0123456789";
  const result = Array.from({ length })
    .map(
      (e, i) =>
        characters[Math.floor(Math.random() * characters.length)] +
        (!((i + 1) % 4) ? "-" : "")
    )
    .join("")
    .slice(0, -1);
  return result;
};

export const validateText = (text) => {
  if (typeof text === "string" && text.trim().length) {
    return text;
  }else
  {return false}
  
};

export const longText = (text, n) => {
  if (typeof text === "string" && text.trim().length) {
    if (text.length > 20) {
      return text.slice(0, n) + "...";
    } else {
      return text;
    }
  }
};

export const asic = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
    "Bearer BQCasuri0riuQXxgWBDWfSGXNaC1oyy05ABq8cVglkqShFLf9UEMmsjkSqCobcHcCbagvcoAkLjp0E6jyguizHVcFMgJ6jzo-c7GtI0DJ73fgKD5tDFk33-R68kc97pbcX5-PBs_78JqQ4fxpie8XlvbmRQQshBYC2D8LnYzQfmIkXhk7MPO-EHjejxdtwzrdfhKXcj0ndU"
  },

}

export const checkToken = (token) => {

  let asic = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        {token},
    },
  };

  return asic;
};
