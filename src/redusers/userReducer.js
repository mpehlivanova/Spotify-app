const INITIAL_STATE = {
    isLogged: false,
    loggedUser:[],
    registerUsers:[
        {
            name:"mimi",
            email:"mimi@mimi.com",
        }
    ],
    
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLogged: true,
        };
        case "LOGOUT":
        return {
          ...state,
          isLogged: false,
        };
      case "REGISTER":
        return {
          ...state,
          registerUsers: [...state.registerUsers, action.payload],
        };
  
      default:
        return state;
    }
  };
  export default userReducer;