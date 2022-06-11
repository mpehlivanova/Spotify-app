import * as React from "react";
import { Button } from "@mui/material";

export default function ButtonComponents(props) {
  return (
    <Button
      onClick={props.onClick}
      variant="outlined"
      sx={{ textTransform: "none" }}
    >
      {props.icon}
      {props.text}
    </Button>
  );
}
