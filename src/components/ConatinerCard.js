import * as React from "react";
import { keyGenerator } from "../util";
import MediaCard from "./MediaCard";

export default function ContainerCard(props) {
  const handleGetAlbums = (id) => {
    props.getData(id);
  };
  const handleOpenAlbum = () => {
    props.setOpen(true);
  };

  return (
    <>
      <div className="container">
        <h3>Artist</h3>
        <div className="containerCards">
          {props.artistsData?.map((el) => {
            return (
              <div key={keyGenerator(12)}>
                <MediaCard
                  key={keyGenerator(13)}
                  image={el.images[2]?.url}
                  artist={el.name}
                  onClick={() => {
                    handleGetAlbums(el.id);
                    handleOpenAlbum();
                  }}
                  data={props.album}
                  open={props.open}
                  onClose={() => props.onClose()}
                  textButton={props.textButton}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
