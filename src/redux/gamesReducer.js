const ADD_GAME = "ADD_GAME";
const DEL_GAME = "DEL_GAME";
const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC";
const SORT_BY_NAME_DES = "SORT_BY_NAME_DES";
const UP_GAME = "UP_GAME";
const DOWN_GAME = "DOWN_GAME";
const FETCH_ALL_ITEMS_SUCCESS = "FETCH_ALL_ITEMS_SUCCESS";
const FETCH_GAMES_FAILURE = "FETCH_GAMES_FAILURE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

export function fetchAllDataFromServer() {
  return (dispatch) => {
    dispatch(toggleIsLoading());
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/costsapp.appspot.com/o/codebeautify.json?alt=media&token=e5dc52bb-034a-4211-a0da-f1174fbda773",
      { cors: "no-cors" }
    )
      .then((Response) => Response.json())
      .then((data) => {
        const dataWithId = data.data.map((e, index) => {
          return {
            ...e,
            id: index,
          };
        });

        dispatch(gamesSuccesLoadAc(dataWithId));
      })
      .catch(() => dispatch(gamesErrorAc()));
  };
}

const inititalState = {
  data: [],
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
          const temp = nextArray[pos1];
          nextArray[pos1] = nextArray[pos2];
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
          const temp = nextArray[pos1];
          nextArray[pos1] = nextArray[pos2];
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
        data: [],
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
