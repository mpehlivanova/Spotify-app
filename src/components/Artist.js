// import * as React from "react";
// import { keyGenerator } from "../util";

// export default function AlbumList(props) {
//   return (
//     <>
//          <div key={keyGenerator(12)}>
                    
//                     <MediaCard
//                       key={keyGenerator(13)}
//                       image={el.images[2]?.url}
//                       artist={el.name}
//                       onClick={() => {
//                         getAlbums(el.id); //get artist's albums
//                         handleClickOpen();
//                       }}
//                     />

//                     <Dialog fullScreen open={open} onClose={handleClose}>
//                       <div className="conatinerAlbum">
//                         <AlbumComponent
//                           onClick={handleClose}
//                           type="Artist's Albums"
//                         />
//                         {album &&
//                           album?.map((e) => {
//                             return (
//                               <AlbumList
//                                 key={keyGenerator(15)}
//                                 src={e.images[0]?.url}
//                                 name={e.name}
//                               />
//                             );
//                           })}
//                       </div>
//                     </Dialog>
//                   </div>
//     </>
//   );
// }
