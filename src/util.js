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
  } else {
    return "no title";
  }
};
