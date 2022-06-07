import "./App.css";
import { useEffect, useState } from "react";
import MediaCard from "./components/MediaCard";
import { Dialog } from "@mui/material";
import { validateText, keyGenerator, longText, checkDulex } from "./util";
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
  const [open1, setOpen1] = useState(false);
  const [view, setView] = useState(false);
  const[set, setSet] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1= () => {
    setOpen1(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const asic = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer BQCcROQbSlV-B68xEZlESbmad_x7QreP8ncvHbrH5U5jXA_TOww2xV9sY05eZ1yF-BV35RJOKq5G08aSVWbojEJpVCvoPv1BsFXYlONkzhB02TNPkgt71TGX4n77bRAak98bnfmk89FHwU8bErwkau-RqOrCcamvw_fVmCbBtcY",
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
                        image={el.images[2]?.url}
                        artist={el.name}
                        onClick={() => {
                          getAlbums(el.id); //get artist's albums
                          handleClickOpen();
                        }}
                        data={album}
                        open={open}
                        onClose={()=>handleClose()}
                      />
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
                        image={el.images[1]?.url}
                        name={longText(el.name,20)}
                        artist={longText(el.artists[0].name,5)}
                        onClick={() => {
                          getTracks(el.id); //get album tracks
                          handleClickOpen1()
                        }}
                        data={tracks}
                        open={open1}
                        onClose={()=>handleClose1()}
                      />
                     
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
