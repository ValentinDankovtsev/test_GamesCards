import GamesComponent from "./GamesComponent";
import { connect } from "react-redux";
import { addGameAc } from "../../redux/gamesReducer";
import {
  deleteGameAc,
  sortByAscendingOrderAc,
  sortByDescendingOrderAc,
  upGameAc,
  downGameAc,
  fetchAllDataFromServer,
} from "../../redux/gamesReducer";
const mapStateToProps = (state) => {
  return {
    gamesPage: state.gamesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGame: (name, url) => {
      dispatch(addGameAc(name, url));
    },
    deleteGame: (name) => {
      dispatch(deleteGameAc(name));
    },

    sortByAscendingOrder: () => {
      dispatch(sortByAscendingOrderAc());
    },

    sortByDescendingOrder: () => {
      dispatch(sortByDescendingOrderAc());
    },
    upGame: (id) => {
      dispatch(upGameAc(id));
    },
    downGame: (id) => {
      dispatch(downGameAc(id));
    },
    loadGames: () => {
      dispatch(fetchAllDataFromServer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesComponent);
