import React from "react";
import style from "./gameItem.module.css";
import { Image, Button } from "react-bootstrap";
const GameItem = (props) => {
  const removeGame = () => {
    props.deleteGame(props.name);
  };

  const onUpGame = () => {
    debugger;
    props.upGame(props.id);
  };

  const onDownGame = () => {
    debugger;
    props.downGame(props.id);
  };

  return (
    <div className="w-25 p-2">
      <div className={style.game}>
        <h6 className={style.nameGame}>{props.name}</h6>
        <Image src={props.icon_url} thumbnail />
        <div className={style.Buttons}>
          <Button onClick={onUpGame} className={style.blueButton}>
            Up Game
          </Button>

          <Button
            variant="primary"
            onClick={onDownGame}
            className={style.blueButton}
          >
            Down Game
          </Button>
          <Button
            variant="danger"
            onClick={removeGame}
            className={style.blueButton}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
