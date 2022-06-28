import "./App.css";
import { useEffect, useState } from "react";
import { validateText, asic } from "./util";
import ContainerCard from "./components/ConatinerCard";
import styled from "@emotion/styled";
import Header from "./components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import LeftSideBar from "./components/LeftSideBar";
import { Box } from "@mui/system";

function App() {
  const [artistsData, setArtistsData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [album, setAlbum] = useState([]);
  const [valueSearchInput, setValueSearchInput] = useState("");
  const [openTrack, setOpenTrack] = useState(false);
  const [view, setView] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [errSearch, setErrSearch] = useState(false);
  const dispatch = useDispatch();
  const foundAlbums = useSelector((store) => store.data?.foundAlbums[0]);
  const albumTracks = useSelector((store) => store.data?.artistAlbums[0]);
  const foundArtists = useSelector((store) => store.data?.foundArtists[0]);
  const artistAlbums = useSelector((store) => store.data?.artistAlbums[0]);

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
          if (data.artists) {
            dispatch({
              type: "FOUNDARTISTS",
              payload: data.artists.items,
            });
            setArtistsData(data.artists.items);
          }
          if (data.albums) {
            dispatch({
              type: "FOUNDALBUMS",
              payload: data.albums.items,
            });
            setAlbumData(data.albums.items);
          }
        });
    } else {
      setErrSearch(true);
    }

    setValueSearchInput("");
    setView(true);
  };

  const getFechData = (artists, idArtist, albums) => {
    fetch(
      "https://api.spotify.com/v1/" + artists + "/" + idArtist + "/" + albums,
      asic
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("artist");
        console.log(data.items);
        console.log(Array.isArray(data.items));
        if (data.items[0].type === "album") {
          dispatch({
            type: "ARTISTALBUMS",
            payload: data.items,
          });
        }
        if (data.items[0].type === "track") {
          dispatch({
            type: "ALBUMSTRAKCKS",
            payload: data.items,
          });
        }
      });
  };

  useEffect(() => {
    // console.log(foundAlbums);
    // console.log(artistsData);
  }, []);
  return (
    <>
      <Box display="flex" justifyContent="row">
        <LeftSideBar />
        <Box width="100%" >
          <SearchBar
            value={valueSearchInput}
            onChange={(ev) => handleOnCange(ev)}
            fechArtists={() => searchGetData(valueSearchInput, "artist")}
            fechAlbums={() => searchGetData(valueSearchInput, "album")}
            err={errSearch}
          />
          <Box paddingLeft = "5%">
            {view && (
              <ContainerCard
                title="Artists"
                data={foundArtists}
                onClick={() => {}}
                getData={(id) => {
                  getFechData("artists", id, "albums");
                }}
                setOpen={() => setOpenAlbum(true)}
                dataDialog={artistAlbums}
                open={openAlbum}
                onClose={() => setOpenAlbum(false)}
                textButton="view albums"
                typeAlbum="albums"
              />
            )}

            {view && (
              <ContainerCard
                title="Albums"
                data={foundAlbums}
                onClick={() => {}}
                getData={(id) => {
                  getFechData("albums", id, "tracks");
                }}
                setOpen={() => setOpenTrack(true)}
                dataDialog={albumTracks}
                open={openTrack}
                onClose={() => setOpenTrack(false)}
                textButton="view tracks"
                typeAlbum="tracks"
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
