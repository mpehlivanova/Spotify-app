import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonComponents from "./ButtonComponents";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 200, minHeight: 250, minWidth: 150, maxHeight: 350 }}>
      <CardMedia
        component="img"
        width={120}
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <h4 className="text"> {props.name}</h4>
        {props.artist && (
          <p className="text">
            Artist: <strong>{props.artist}</strong>
          </p>
        )}

        <ButtonComponents
          onClick={() => {
            props.onClick();
          }}
          variant="outlined"
          text="View more"
        />
      </CardContent>
    </Card>
  );
}
