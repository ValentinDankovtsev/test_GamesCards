import React from "react";
import GameItem from "./GameItem";
import style from "./gameItem.module.css";
import { Form, Field } from "react-final-form";
import { Button } from "react-bootstrap";
import {
  required,
  minLength,
  composeValidators,
} from "../../utils/formControl";
import ErrorBlock from "./ErrorBlock/ErrorBlock";
import Spinner from "./Spinner/Spinner";

const AddGameForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            className="form-control"
            name="newGame"
            validate={composeValidators(required, minLength(4))}
          >
            {({ input, meta }) => (
              <div className="form-control">
                <input
                  {...input}
                  type="text"
                  placeholder="Enter name of game"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            className="form-control"
            name="url"
            validate={composeValidators(required, minLength(8))}
          >
            {({ input, meta }) => (
              <div className="form-control">
                <input
                  {...input}
                  type="text"
                  placeholder="Enter url image of game"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div>
            <button type="submit" className="btn btn-primary">
              Add Game
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

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
      error={props.error}
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

  if (props.gamesPage.isLoading) {
    return <Spinner />;
  }

  if (props.gamesPage.error) {
    return <ErrorBlock />;
  }

  return (
    <>
      <div className={style.menu}>
        <AddGameForm onSubmit={onSubmitForm} />
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
