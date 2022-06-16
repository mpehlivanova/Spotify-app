import "./App.css";
import { useEffect, useState } from "react";
import { validateText, asic, getFechData } from "./util";
import ContainerCard from "./components/ConatinerCard";
import styled from "@emotion/styled";
import Header from "./components/Header";

function App() {
  const [artistsData, setArtistsData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [valueSearchInput, setValueSearchInput] = useState("");
  const [openTrack, setOpenTrack] = useState(false);
  const [view, setView] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [album, setAlbum] = useState([]);
  const [errSearch, setErrSearch] = useState(false);

  const Home = styled("div")`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
  `;

  const handleOnCange = (ev) => {
    setValueSearchInput(ev.target.value);
    setErrSearch(false);
  };

  const searchGetData = (search, type) => {
    const currentSearch = validateText(search);
    if (validateText(search)) {
      fetch(
        "https://api.spotify.com/v1/search?q=" +
          currentSearch +
          "&type=" +
          type,
        asic
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("data");
          console.log(data);

          if (data.artists) {
            setArtistsData(data.artists.items);
          }
          if (data.albums) {
            setAlbumData(data.albums.items);
          }
        });
    } else {
      setErrSearch(true);
    }

    setValueSearchInput("");
    setView(true);
  };
  // const handleGetArtistsAlbums = (id) => {
  //   if (id) {
  //     let dataAlbum = getFechData("artists", id, "albums");
  //     setAlbum(dataAlbum);
  //     console.log("album    " + dataAlbum);
  //   }
  // };

  const getArtistsAlbums = (idArtist) => {
    fetch("https://api.spotify.com/v1/artists/" + idArtist + "/albums", asic)
      .then((response) => response.json())
      .then((data) => {
        console.log("artist");
        console.log(data.items);
        console.log(Array.isArray(data.items));
        setAlbum(data.items);
      });
  };

  const getTracks = (idAlbums) => {
    fetch("https://api.spotify.com/v1/albums/" + idAlbums + "/tracks", asic)
      .then((response) => response.json())
      .then((data) => {
        console.log("track");
        console.log(data.items);
        console.log(Array.isArray(data.items));
        setTracks(data.items);
      });
  };

  useEffect(() => {
    searchGetData("a", "album");
    searchGetData("a", "artist");
    // console.log(albumData[0].artists[0].name);
  }, []);
  return (
    <>
      <Home>
        <Header
          value={valueSearchInput}
          onChange={(ev) => handleOnCange(ev)}
          searchGetDataArtist={() => searchGetData(valueSearchInput, "artist")}
          searchGetDataAlbum={() => searchGetData(valueSearchInput, "album")}
          err={errSearch}
        />
        <>
          {view && (
            <ContainerCard
              data={artistsData}
              onClick={() => {}}
              getData={(id) => {
                // handleGetArtistsAlbums(id);
                getArtistsAlbums(id);
              }}
              setOpen={() => setOpenAlbum(true)}
              dataDialog={album}
              open={openAlbum}
              onClose={() => setOpenAlbum(false)}
              textButton="view albums"
              typeAlbum="albums"
            />
          )}
        </>
        {view && (
          <ContainerCard
            data={albumData}
            onClick={() => {}}
            getData={(id) => getTracks(id)}
            setOpen={() => setOpenTrack(true)}
            dataDialog={tracks}
            open={openTrack}
            onClose={() => setOpenTrack(false)}
            textButton="view tracks"
            typeAlbum="tracks"
          />
        )}
      </Home>
    </>
  );
}

export default App;
