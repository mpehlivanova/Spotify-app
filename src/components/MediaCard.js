import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonComponents from "./ButtonComponents";
import { Dialog } from "@mui/material";
import AlbumComponent from "./AlbumComponent";
import { keyGenerator } from "../util";
import AlbumList from "./AlbumList";

export default function MediaCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div
        className="card"
        sx={{ maxWidth: 200, minHeight: 300, minWidth: 180, maxHeight: 350 }}
      >
        <CardMedia
          component="img"
          width={120}
          height={120}
          image={props.image}
          alt="green iguana"
        />
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
      </div>

      <Dialog fullScreen open={props.open} onClose={props.onClose}>
        <div className="conatinerAlbum">
          <AlbumComponent onClick={props.onClose} type="Artist's Albums" />
          {props.data &&
            props.data?.map((e) => {
              return (
                <AlbumList
                  key={keyGenerator(15)}
                  // src={e.images[0]?.url} 
                  name={e.name} 
                />
              );
            })}
        </div>
      </Dialog>
    </>
  );
}
