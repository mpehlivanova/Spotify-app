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

export const getFechData = (artists, idArtist, albums) => {
  fetch("https://api.spotify.com/v1/" + artists + "/" + idArtist + "/"+ albums, asic)
    .then((response) => response.json())
    .then((data) => {
      console.log("artist");
      console.log(data.items);
      console.log(Array.isArray(data.items));
      if(data){
        if(Array.isArray(data.items)){
          return data.items
        }
      }
     
})
}

export const asic = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
    "Bearer BQDaZwCjPVfncjW3J7jomrwvYTgByXWxV6_SdngzX8RgxaZoMn6HtfrVJX6HZ38i5H2y5tBDlRcWzeP8sDDmIJfH1u8a-ZknQGiNOVtoLpfLCsBkkCaOzEHwpk0Wha9XLIiR3o4-m08zZ7oVSo233taqUR-0x49ms1p-TMsxMeJ8_hZ8pJ3_4G7vWX-zY8gHaZMhOn3gkLew"}
  }