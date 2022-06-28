const INITIAL_STATE = {
    foundAlbums:[],
    foundArtists:[],
    artistAlbums:[],
    albumTracks:[],
    
  };
  
  const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "FOUNDALBUMS":
        return{
          ...state,
          foundAlbums: [...state.foundAlbums, action.payload]
        }
        case "FOUNDARTISTS":
          return{
            ...state,
            foundArtists: [...state.foundArtists, action.payload]
          }
        case "ARTISTALBUMS":
          return{
            ...state,
            artistAlbums: [...state.artistAlbums, action.payload]
          }
          case "ALBUMSTRAKCKS":
            return{
              ...state,
              albumTracks: [...state.albumTracks, action.payload]
            }
      default:
        return state;
    }
  };
  export default dataReducer;