import React from "react";
import GameItem from "./GameItem";
import style from "./gameItem.module.css";
import { Form, Field } from 'react-final-form'
import { Button} from "react-bootstrap";

// const addGameForm = (props) => {
//   const { handleSubmit } = props;
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <Field
//             className="form-control"
//             name="newGame"
//             component="input"
//             type="text"
//             placeholder="Enter name of game"
//           />
//         </div>
//         <div>
//           <Field
//             className="form-control"
//             name="url"
//             component="input"
//             placeholder="Enter url image of game"
//           />
//         </div>
//         <div>
//           <button className="btn btn-primary">Add Game</button>
//         </div>
//       </form>
//     </div>
//   );
// };



const MyForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              className="form-control"
              name="newGame"
              component="input"
              type="text"
              placeholder="Enter name of game"
            />
          </div>
          <div>
            <Field
              className="form-control"
              name="url"
              component="input"
              placeholder="Enter url image of game"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Add Game</button>
          </div>
        </form>
      )}
    </Form>
  );
};

// const AddGameFormRedux = reduxForm({ form: "addGamesFormsd" })(addGameForm);

const GamesComponent = (props) => {
  const gamesElements = props.gamesPage.data.map((e, index) => (
    <GameItem
      key={index}
      name={e.name}
      icon_url={e.icon_url}
      id={e.id}
      deleteGame={props.deleteGame}
      upGame={props.upGame}
      downGame={props.downGame}
      // data={props.state.data}
    />
  ));

  const onSubmitForm = (formData) => {
    props.addGame(formData.newGame, formData.url);
  };

  const onSortAscendingOrder = () => {
    props.sortByAscendingOrder();
  };

  const onSortDescendingOrder = () => {
    props.sortByDescendingOrder();
  };

  const onLoadGames = () => {
    props.loadGames();
  };

  return (
    <>
      <div className={style.menu}>
        <MyForm onSubmit={onSubmitForm} />
        <hr></hr>
        <Button variant="outline-info" onClick={onLoadGames}>
          Load Games
        </Button>
        <Button variant="outline-info" onClick={onSortAscendingOrder}>
          Ascending Order
        </Button>
        <Button variant="outline-info" onClick={onSortDescendingOrder}>
          Descending Order
        </Button>
      </div>

      <div className={style.content}>
        <div className="d-flex align-content-stretch flex-wrap">
          {gamesElements}
        </div>
      </div>
    </>
  );
};

export default GamesComponent;
