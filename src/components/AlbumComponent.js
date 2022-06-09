import { IconButton } from "@mui/material";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function AlbumComponent(props) {
  
  return (

    <div className="close">
      <h3>All {props.type}:</h3>
      <IconButton
        onClick={props.onClick}
        color="primary"
      >
        <CloseIcon />
      </IconButton>
    </div>

    
  
  );
}
