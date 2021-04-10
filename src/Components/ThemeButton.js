import React,{useContext} from 'react'
import{DesignContext} from '../Context/Context'

const ThemeButton = () => {
    const[theme,dispatch] = useContext(DesignContext)
    const changeTheme = (e) => {
        e.preventDefault();
        dispatch({type:'CHANGE_THEME'})
      }
    return (
        <div>
             <button onClick={changeTheme}>{theme.isLight?<span class="material-icons">
toggle_on
</span>:<span class="material-icons">
toggle_off
</span>}</button>
             {/* <button onClick={changeTheme}>{theme.isLight?'Dark':'Light'}</button> */}
        </div>
    )
}

export default ThemeButton
