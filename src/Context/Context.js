import React, { createContext, useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_THEME': return({...state, isLight:!state.isLight})
        default: return state;
    }
}

export const DesignContext = createContext();

export const DesignProvider = ({children}) => {
    const InitialState = {
        isLight: true,
        light:{color:'black', bg:'white'},
        dark:{color:'white', bg:'black'},
       
    }
    

    const [theme, dispatch] = useReducer(reducer, InitialState)
    return (
       <DesignContext.Provider value={[theme,dispatch]}>
           {children}
       </DesignContext.Provider>
    )
}


