import styled from "@emotion/styled";
import * as React from "react";
import ButtonComponents from "./ButtonComponents";

const Search = styled("div")`
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;
const InputField = styled("input")`
  padding: 8px;
  margin-right: 10px;
  width: 200px;
`;
const Err = styled("p")`
  background-color: rgb(248, 185, 185);
`;

export default function Header(props) {
  const handleSearchGetDataArtist = () => {
    props.searchGetDataArtist();
  };
  const handleSearchGetDataAlbum = () => {
    props.searchGetDataAlbum();
  };

  return (
    <>
      <Search>
        <InputField
          type="text"
          placeholder="search by artists or albums"
          value={props.value}
          onChange={props.onChange}
        ></InputField>

        <ButtonComponents
          text="Search"
          onClick={() => {
            handleSearchGetDataAlbum();
            handleSearchGetDataArtist();
          }}
        >
          Search
        </ButtonComponents>
      </Search>
      {props.err && (
        <Search>
          <Err>
           Place, write title
          </Err>
        </Search>
      )}
    </>
  );
}
