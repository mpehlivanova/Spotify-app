import "./App.css";
import { useEffect, useState } from "react";
import MediaCard from "./components/MediaCard";
import { Dialog } from "@mui/material";
import { validateText, keyGenerator } from "./util";
import AlbumList from "./components/AlbumList";
import AlbumComponent from "./components/AlbumComponent";
import ButtonComponents from "./components/ButtonComponents";

function App() {
  const [artistsData, setArtistsData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [valueSearchInput, setValueSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const asic = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer BQCUgY3FFGW1ZtWs7ZxyMTpVGPbBAthmQnXDRBYFTJp8T3rRKRsC3Pp16EmkI6vm-S6VmJ7aW6iZw1olPsSbIxFjtpyhgXZ1IsxAONYQXjzYfvfC5d6q5RQyp501h8ih0ZVpoDciF3n_Zr9QH__ybn4C1R9cmgU_ouNo4TOdRrw",
    },
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
            <div className="container">
              <h3>Artist</h3>
              <div className="containerCards">
                {artistsData.map((el) => {
                  return (
                    <div key={keyGenerator(12)}>
                      <MediaCard
                        key={keyGenerator(13)}
                        image={el.images[2].url}
                        artist={el.name}
                        onClick={() => {
                          getAlbums(el.id); //get artist's albums
                          handleClickOpen();
                        }}
                      />

                      <Dialog fullScreen open={open} onClose={handleClose}>
                        <div className="conatinerAlbum">
                          <AlbumComponent
                            onClick={handleClose}
                            type="Artist's Albums"
                          />
                          {album &&
                            album.map((e) => {
                              return (
                                <AlbumList
                                  key={keyGenerator(15)}
                                  src={e.images[0].url}
                                  name={e.name}
                                />
                              );
                            })}
                        </div>
                      </Dialog>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>

        <div className="container">
          {view && (
            <div className="container">
              <h3>Album</h3>
              <div className="containerCards">
                {albumData.map((el) => {
                  return (
                    <div key={keyGenerator(11)}>
                      <MediaCard
                        key={keyGenerator(8)}
                        image={el.images[1].url}
                        name={el.name}
                        artist={el.artists[0].name}
                        onClick={() => {
                          getTracks(el.id); //get album tracks
                          
                        }}
                      />
                      {/* <Dialog fullScreen open={open} onClose={handleClose}>
                        <div className="conatinerAlbum">
                          <AlbumComponent onClick={handleClose} type="Album Tracks" />
                          {tracks &&
                            tracks.map((e) => {
                              return <p key={keyGenerator(6)}>{e.name}</p>;
                            })}
                        </div>
                      </Dialog> */}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
