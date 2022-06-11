import { IconButton } from "@mui/material";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";

const ContainerAlbums = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function AlbumType(props) {
  return (
    <ContainerAlbums>
      <h3>All {props.type}:</h3>
      <IconButton onClick={props.onClick} color="primary">
        <CloseIcon />
      </IconButton>
    </ContainerAlbums>
  );
}
