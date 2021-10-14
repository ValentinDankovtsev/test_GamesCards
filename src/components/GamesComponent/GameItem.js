import React from "react"
import style from './gameItem.module.css'
const GameItem=(props)=> {
    

    const removeGame = () => {
        
        props.deleteGame(props.name)
    }

    const onUpGame = () => {
        debugger;
        props.upGame(props.id)
    }

    const onDownGame = () => {
        debugger;
        props.downGame(props.id)
    }
    
    return (
        <div className={style.game}>
            <span>Game: {props.name}</span>
            <div className={style.gameImage}>
            <img src={props.icon_url}/>
            </div>
            <button onClick={removeGame}>Удалить</button>
            <button onClick={onUpGame}>Up Game</button>
            <button onClick={onDownGame}>Down Game</button>
        </div>
        
    )
}

export default GameItem