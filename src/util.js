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

export const longText = (text, n) => {
  
  if (typeof text === "string" && text.trim().length) {
    if(text.length > 20){
      return text.slice(0,n)+"..."
    }else{
      return text 
    }
}
}

export const asic = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
     "Bearer BQDx28iBpHWRBS7sW7Ki521_Pd8QJit590I_4hfFNmVBTM6puGg1PVhroIdPk8lVSAWL2Cg1W0dFWvxrRUq1KH_wQBeEU5T9JFoOiho1kQxyblmtH7uPtTiWsuV_CPI-tnkuinynHTLNwCOf8S5RfnrnflFu6DoA0uDlqG4L5NeiZgkglOojnJ7OeHgjEpKSPigHYTNBZsrD"},
};
