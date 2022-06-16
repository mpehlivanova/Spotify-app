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
      "Bearer BQBaXkDI_03n4TpEP-F_BGpYGl98Am-1rvX3KVMGFhR-fNi4lZGxfxUpLLoNgxeXc3L-BHL8q2Wk6Nj7xRiJokxUdV00KFMxtV280i1N31u98MoPZqheVrKCrLvaKKR7HnJFIpumeCsVYRZ2dKLVPyRTfHF75uYMDE1Mj88NBDpUoNSvbpuqVGId2hcf68M9cavT2PnYybGU",
  },

}

export const getFechData = (artists, idArtist, albums) => {
  fetch(
    "https://api.spotify.com/v1/" + artists + "/" + idArtist + "/" + albums,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:"Bearer BQBaXkDI_03n4TpEP-F_BGpYGl98Am-1rvX3KVMGFhR-fNi4lZGxfxUpLLoNgxeXc3L-BHL8q2Wk6Nj7xRiJokxUdV00KFMxtV280i1N31u98MoPZqheVrKCrLvaKKR7HnJFIpumeCsVYRZ2dKLVPyRTfHF75uYMDE1Mj88NBDpUoNSvbpuqVGId2hcf68M9cavT2PnYybGU",
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("artist");
      console.log(data.items);
      console.log(Array.isArray(data.items));
      if (data) {
        if (Array.isArray(data.items)) {
          return data.items;
        }
      }
    });
};

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
