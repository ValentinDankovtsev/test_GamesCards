const ADD_GAME = 'ADD_GAME'
const DEL_GAME = 'DEL_GAME'

const inititalState = {
    data: [
        {
            "name": "2 For 2: Connect the Numbers Puzzle",
            "icon_url": "https://lh3.googleusercontent.com/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4"
        }, {
            "name": "A Girl Adrift",
            "icon_url": "https://lh3.googleusercontent.com/nAu8v5gmXjzgVdgwih6z95GYsQad8RwRH0_28rYNC5fV8Jf2O3GDo1cOpcMhpDcEEQ"
        },
    ]
}

export const addGameAc = (name,url) => {
    return {
        type: ADD_GAME,
        payload:{name,url}
    }
}

export const deleteGameAc = (name) => {
    return {
        type:DEL_GAME,
        name
    }
}

const gamesReducer = (state = inititalState,action) => {
    switch (action.type) {
        case ADD_GAME:
            return {
                ...state,
                data:[...state.data,{name:action.payload.name,icon_url:action.payload.url}]
            }
            case DEL_GAME:
                const name = action.name
            return {
                ...state,
                data: state.data.filter((el) => el.name !== name)
            }

        default:
            return state
    }
}

export default gamesReducer