import GamesComponent from "./GamesComponent";
import { connect } from "react-redux";
import { addGameAc } from "../../redux/gamesReducer";
import { deleteGameAc } from "../../redux/gamesReducer";
const mapStateToProps = (state) => {
  return {
    gamesPage: state.gamesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateNewMessageChange:(text)=>{
    //   dispatch(updateMessageActionCreator(text));
    // }

    addGame: (name, url) => {
      dispatch(addGameAc(name, url));
    },
    deleteGame: (name) => {
      dispatch(deleteGameAc(name));
    },
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// dialogsContainerComponent = connect( mapStateToPropsForRedirect)(dialogsContainerComponent)

// const ContainerDialogPage = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

// export default ContainerDialogPage;

export default connect(mapStateToProps, mapDispatchToProps)(GamesComponent);
