import React from "react";
import style from "./gameItem.module.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
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
    // <div className={style.game}>
    //     <span>Game: {props.name}</span>
    //     <div className={style.gameImage}>
    //     <img src={props.icon_url}/>
    //     </div>
    //     <button onClick={removeGame}>Удалить</button>
    //     <button onClick={onUpGame}>Up Game</button>
    //     <button onClick={onDownGame}>Down Game</button>
    // </div>
    <div className="w-25 p-2">
      {/* <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col xs={13} md={2}> */}
            <div className={style.game}>
              <h6 className={style.nameGame}>{props.name}</h6>
              <Image src={props.icon_url} thumbnail />
              <div className={style.Buttons}>
                <Button
                  onClick={onUpGame}
                  
                  className={style.blueButton}
                >
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
          {/* </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default GameItem;
