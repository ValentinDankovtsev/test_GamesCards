import React from "react"
import style from './gameItem.module.css'
const GameItem=(props)=> {
    

    const removeGame = () => {
        debugger;
        props.deleteGame(props.name)
    }
    return (
        <div className={style.game}>
            <span>Game: {props.name}</span>
            <div className={style.gameImage}>
            <img src={props.icon_url}/>
            </div>
            <button onClick={removeGame}>Удалить</button>
        </div>
        
    )
}

export default GameItem