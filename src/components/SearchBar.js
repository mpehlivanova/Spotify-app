import styled from "@emotion/styled";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import User from "./User";

const Container = styled("div")`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InputField = styled("input")`
  padding: 8px;
  margin-right: 10px;
  width: 200px;
  border: none;
  outline-width: 0;
`;
const Err = styled("p")`
  background-color: rgb(248, 185, 185);
`;
const Search = styled(Box)(({ theme }) => ({
  width: "30%",
  border: "2px solid black",
  borderRadius: "20px",
  padding: "5px",
}));

export default function SearchBar(props) {
  const handleSearchGetDataArtist = () => {
    props.fechArtists();
  };
  const handleSearchGetDataAlbum = () => {
    props.fechAlbums();
  };

  return (
    <>
      <Container>
        <Box width="80%" marginLeft="30%" padding="10px" bag>
          <Search
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              onClick={() => {
                handleSearchGetDataAlbum();
                handleSearchGetDataArtist();
              }}
              variant="text"
            >
              <SearchIcon sx={{ color: grey[900] }} />
            </Button>
            <InputField
              type="text"
              placeholder="search by artists or albums"
              value={props.value}
              onChange={props.onChange}
            ></InputField>
          </Search>
          {props.err && (
            <Container>
              <Err>Place, write title</Err>
            </Container>
          )}
        </Box>
        <User/>
      </Container>
    </>
  );
}
