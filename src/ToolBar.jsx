import React, { useContext } from 'react'
import './index.css'

const theme = 
{
    dark: {
        background: '#000',
        color: '#fff',
        border: 'solid 1px #fff'
    },
    light: {
        background: '#fff',
        color: '#000',
        border: 'solid 1px #000'
    }
}

const ThemeContext = React.createContext(theme.dark) 

function SearchForm()
{
    return <div className="btn">
        <input/>
        <ThemeButton> Sign Up </ThemeButton>
    </div>
}

function Toolbar() {
    return <div className="btn">
        <SearchForm></SearchForm>
        <ThemeButton>Sign In</ThemeButton>
    </div>
}

function ThemeButton ({children})
{
    const value = useContext(ThemeContext)
    return <button style={value}>{children}</button>
}

export function ToolBar()
{

    return <ThemeContext.Provider value={theme.dark}>
        <Toolbar/>
    </ThemeContext.Provider>
}