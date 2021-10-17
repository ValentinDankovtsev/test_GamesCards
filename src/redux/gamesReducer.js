import {pathReference} from '../firebase/firebaseConfig'
const ADD_GAME = "ADD_GAME";
const DEL_GAME = "DEL_GAME";
const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
const SORT_BY_NAME_DES = "SORT_BY_NAME_DES";
const UP_GAME = "UP_GAME";
const DOWN_GAME = "DOWN_GAME";
const url =
  "https://firebasestorage.googleapis.com/v0/b/costsapp.appspot.com/o/codebeautify.json?alt=media&token=e5dc52bb-034a-4211-a0da-f1174fbda773";
const FETCH_ALL_ITEMS_SUCCESS = "FETCH_ALL_ITEMS_SUCCESS";
const FETCH_GAMES_FAILURE = "FETCH_GAMES_FAILURE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";


export function fetchAllDataFromServer() {
  return (dispatch) => {
    dispatch(toggleIsLoading());
    
    // fetch(
    //   'https://storage.googleapis.com/storage/v1/b/costsapp.appspot.com/o/codebeautify.json',{cors:'no-cors'}
    // ).then(Response=>Response.json()).then((data) => {
        

    //   const dataWithId = data.data.map((e, index) => {
    //     return {
    //       ...e,
    //       id: index,
    //     };
    //   });
      
    //   dispatch(gamesSuccesLoadAc(dataWithId));
    // })
    // .catch(() => dispatch(gamesErrorAc()));
    
    // pathReference.then((url) => fetch(url,{mode:'no-cors'}).then(res=>res.json()).then((data)=>{
      
    //   const dataWithId = data.data.map((e, index) => {
    //     return {
    //       ...e,
    //       id: index,
    //     };
    //   });
      
    //   dispatch(gamesSuccesLoadAc(dataWithId));
    // }))
    
       pathReference.then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
       
        xhr.onload = function() {
          if (xhr.status !== 200) {
            return
          }
    
          let responseObj = xhr.response;
            const dataWithId = responseObj.data.map((e, index) => {
        return {
          ...e,
          id: index,
        };
      });
          dispatch(gamesSuccesLoadAc(dataWithId));
        };

      }).catch((error) => 
      
      dispatch(gamesErrorAc() )
      );
  };
}

const inititalState = {
  data: [
    // {
    //   name: "A Girl Adrift",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/nAu8v5gmXjzgVdgwih6z95GYsQad8RwRH0_28rYNC5fV8Jf2O3GDo1cOpcMhpDcEEQ",
    //   id: 1,
    // },
    // {
    //   name: "2 For 2: Connect the Numbers Puzzle",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4",
    //   id: 2,
    // },
    // {
    //   name: "Archery Master 3D",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/z5bQsrP0vYpb2aMb5oIHGPNreMpcVTZ8tyN1C-oo4_S9GXoXKH0CE4bQh1iKNwtsds04",
    //   id: 3,
    // },
    // {
    //   name: "Balance",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/tbLf7NjRFBhgFR8j5urV20LaIuZaTIqOlNG0zKedmzg3hDFk11dRTTZbGSUSuGuP-Do",
    // },
    // {
    //   name: "Ball Blast",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/b-oVK7D5koI4ie5HMKi4D2w_t7dtl5L_bjxIfFqdKVp-ymRRIZtMPUws_unjOIPsQ10",
    //   id: 4,
    // },
    // {
    //   name: "Banana Kong",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/00MfZ5jenY_XH8v8LCOyNM3jf6B8klFZT-a3xEuEiZZUiGZc2Ah_XJqXR6lzKVZ_RF0",
    //   id: 5,
    // },
    // {
    //   name: "Battlelands Royale",
    //   icon_url:
    //     "https://lh3.googleusercontent.com/_q5ZefC-Wd2I8HmfysXkuuKo_PKxO-bqCcDAxJqxmpBPKX1CJxeJLaaugo8l_U3pzQ",
    //   id: 6,
    // },
  ],
  error: false,
  isLoading: false,
};

const gamesSuccesLoadAc = (data) => {
  return {
    type: FETCH_ALL_ITEMS_SUCCESS,
    payload: data,
  };
};

const toggleIsLoading = () => {
  return {
    type: TOGGLE_IS_LOADING,
    
  };
};
const gamesErrorAc = () => {
  return {
    type: FETCH_GAMES_FAILURE,
  };
};

export const addGameAc = (name, url) => {
  return {
    type: ADD_GAME,
    payload: {
      name,
      url,
    },
  };
};

export const deleteGameAc = (name) => {
  return {
    type: DEL_GAME,
    name,
  };
};

export const sortByAscendingOrderAc = () => {
  return {
    type: SORT_BY_NAME_ASC,
  };
};

export const sortByDescendingOrderAc = () => {
  return {
    type: SORT_BY_NAME_DES,
  };
};

export const upGameAc = (id) => {
  return {
    type: UP_GAME,
    id,
  };
};

export const downGameAc = (id) => {
  return {
    type: DOWN_GAME,
    id,
  };
};
const gamesReducer = (state = inititalState, action) => {
  let newArray = state.data.map((e) => e);
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        data: [
          {
            name: action.payload.name,
            icon_url: action.payload.url,
          },
          ...state.data,
        ],
      };
    case DEL_GAME:
      const name = action.name;
      return {
        ...state,
        data: state.data.filter((el) => el.name !== name),
      };
    case SORT_BY_NAME_ASC:
      return {
        data: newArray.sort((a, b) => (a.name > b.name ? 1 : -1)),
      };
    case SORT_BY_NAME_DES:
      return {
        data: newArray.sort((a, b) => (a.name < b.name ? 1 : -1)),
      };
    case UP_GAME:
      let indexActionIdByUp = newArray.findIndex((e) => e.id === action.id);
      function swapItemsUp(pos1, pos2, nextArray) {
        if (pos1 >= 0) {
          const temp = nextArray[pos1]; // Temp variable
          nextArray[pos1] = nextArray[pos2]; // Swap the items
          nextArray[pos2] = temp;
          return nextArray;
        } else {
          return null;
        }
      }

      const swappedArrayUp = swapItemsUp(
        indexActionIdByUp - 1,
        indexActionIdByUp,
        newArray
      );
      if (swappedArrayUp !== null) {
        return {
          ...state,
          data: swappedArrayUp,
        };
      } else return state;

    case DOWN_GAME:
      const indexActionIdDown = newArray.findIndex((e) => e.id === action.id);
      function swapItemsDown(pos1, pos2, nextArray) {
        if (pos1 < newArray.length) {
          const temp = nextArray[pos1]; // Temp variable
          nextArray[pos1] = nextArray[pos2]; // Swap the items
          nextArray[pos2] = temp;
          return nextArray;
        } else {
          return null;
        }
      }

      const swappedArrayDown = swapItemsDown(
        indexActionIdDown + 1,
        indexActionIdDown,
        newArray
      );
      if (swappedArrayDown !== null) {
        return {
          ...state,
          data: swappedArrayDown,
        };
      } else return state;
      case TOGGLE_IS_LOADING:
      return {
        ...state,
        data:[],
        isLoading: true,
      };
    case FETCH_ALL_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isLoading: false,
      });
    case FETCH_GAMES_FAILURE:
      return {
        data: [],
        error: true,
      };
    
    default:
      return state;
  }
};

export default gamesReducer;
