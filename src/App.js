import "./App.css";
import { useEffect, useState } from "react";
import MediaCard from "./components/MediaCard";
import { validateText, keyGenerator, longText, asic } from "./util";

import ButtonComponents from "./components/ButtonComponents";
import ContainerCard from "./components/ConatinerCard";

function App() {
  const [artistsData, setArtistsData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [valueSearchInput, setValueSearchInput] = useState("");
  const [openTrack, setOpenTrack] = useState(false);
  const [view, setView] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [album, setAlbum] = useState([]);

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
  };

  const getAlbums = (idArtist) => {
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
    // getAlbums("1atjqOZTCdrjxjMyCPZc2g")
  }, []);
  return (
    <>
      <div className="home">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="search by artists or albums"
            value={valueSearchInput}
            onChange={(ev) => setValueSearchInput(ev.target.value)}
          ></input>

          <ButtonComponents
            text="Search"
            onClick={() => {
              searchGetData(valueSearchInput, "artist");
              searchGetData(valueSearchInput, "album");
              setValueSearchInput("");
              setView(true);
            }}
          >
            Search
          </ButtonComponents>
        </div>
        <>
          {view && (
            <ContainerCard
              artistsData={artistsData}
              onClick={() => {}}
              getData={(id) => getAlbums(id)}
              setOpen={() => setOpenAlbum(true)}
              album={album}
              open={openAlbum}
              onClose={() => setOpenAlbum(false)}
              textButton="view albums"
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
            />
          )}
  
      </div>
    </>
  );
}

export default App;
