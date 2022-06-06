import * as React from "react";

export default function AlbumList(props) {
  return (
    <div className="album" >
      <img 
      width={80} 
      src={props.src} 
      alt="photoAlbum"></img>
      <p>
      {props.name}
      </p>
    </div>
  );
}
