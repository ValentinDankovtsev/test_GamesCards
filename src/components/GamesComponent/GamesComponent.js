import React from "react";
import GameItem from "./GameItem";
import {Field, reduxForm} from 'redux-form';


const addGameForm = (props) => {
    const { handleSubmit } = props
    return (
      <div >
        <form onSubmit={handleSubmit}>
          <div>
          <Field name="newGame"  component="input"
            type="text"/>
          </div>
          <div>
          <Field name='url' component='input' />
          </div>
          <div>
            <button>add</button>
          </div>
        </form>
      </div>
    );
  };

  const AddGameFormRedux = reduxForm({form:'addGamesFormsd'})(addGameForm)


const GamesComponent = (props) => {

    
  const gamesElements = props.gamesPage.data.map((e,index) => (
    <GameItem key={index} name={e.name} icon_url={e.icon_url} deleteGame={props.deleteGame}/>
  ));


  const onSubmitForm = (formData) => {
      props.addGame(formData.newGame,formData.url)
  }

  return (
    <div>
      <div>{gamesElements}</div>

      <AddGameFormRedux onSubmit={onSubmitForm}/>
    </div>
  );
};

export default GamesComponent;


