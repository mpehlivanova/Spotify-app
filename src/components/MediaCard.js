import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import ButtonComponents from "./ButtonComponents";
import { Dialog } from "@mui/material";
import styled from "@emotion/styled";
import AlbumType from "./AlbumType";
import { keyGenerator } from "../util";

const Card = styled("div")`
  min-width: 200px;
  min-height: 250px;
  min-width: 180px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 2px;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
`;
const ConatinerAlbum = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
const AlbumListStyl = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: rgb(196, 230, 243);
`;

export default function MediaCard(props) {
  return (
    <>
      <Card
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
          text={props.textButton}
        />
      </Card>

      <Dialog fullScreen open={props.open} onClose={props.onClose}>
        <ConatinerAlbum>
          <AlbumType onClick={props.onClose} type={props.type} />
          {props.data &&
            props.data?.map((e) => {
              return (
                <AlbumListStyl 
                key={keyGenerator(6)}
                >
                  <p>{e.name}</p>
                </AlbumListStyl>
              );
            })}
        </ConatinerAlbum>
      </Dialog>
    </>
  );
}
