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

  const Home = styled("div")`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
  `;

  const handleOnCange = (ev) => {
    setValueSearchInput(ev.target.value);
  };

  const searchGetData = (search, type) => {
    const currentSearch = validateText(search);

    fetch(
      "https://api.spotify.com/v1/search?q=" + currentSearch + "&type=" + type,
      asic
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.artists) {
          setArtistsData(data.artists.items);
        }
        if (data.albums) {
          setAlbumData(data.albums.items);
        }
      });
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
    // getFechAlbums("artists", "4yvcSjfu4PC0CYQyLy4wSq", "albums")
    // handleGetArtistsAlbums("4yvcSjfu4PC0CYQyLy4wSq")
    getTracks("4aawyAB9vmqN3uQ7FjRGTy")
  }, []);
  return (
    <>
      <Home>
        <Header
          value={valueSearchInput}
          onChange={(ev) => handleOnCange(ev)}
          searchGetDataArtist={() => searchGetData(valueSearchInput, "artist")}
          searchGetDataAlbum={() => searchGetData(valueSearchInput, "album")}
        />
        <>
          {view && (
            <ContainerCard
              artistsData={artistsData}
              onClick={() => {}}
              getData={(id) => {
                // handleGetArtistsAlbums(id);
                getArtistsAlbums(id);
              }}
              setOpen={() => setOpenAlbum(true)}
              album={album}
              open={openAlbum}
              onClose={() => setOpenAlbum(false)}
              textButton="view albums"
              typeAlbum = "albums"
            />
          )}
        </>
        {view && (
          <ContainerCard
            artistsData={albumData}
            onClick={() => {}}
            getData={(id) => getTracks(id)}
            setOpen={() => setOpenTrack(true)}
            album={tracks}
            open={openTrack}
            onClose={() => setOpenTrack(false)}
            textButton="view tracks"
            typeAlbum = "tracks"
          />
        )}
      </Home>
    </>
  );
}

export default App;
