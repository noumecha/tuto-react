import React, { useContext, useState, useMemo, useCallback } from 'react'
import './index.css'

const THEMES = 
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

const ThemeContext = React.createContext({
    theme: THEMES.dark,
    toggleTheme: () => {}
}) 

function SearchForm()
{
    return <div className="btn">
        <input/>
        <ThemeButtonClass> Find something </ThemeButtonClass>
    </div>
}

function Toolbar() {
    return <div className="btn">
        <SearchForm></SearchForm>
        <ThemeButton>Sign In</ThemeButton>
    </div>
}

class ThemeButtonClass extends React.Component
{
    render() {
        const {children} = this.props
        const {theme} = this.context
        return <button style={theme}>{children}</button>
    }
}
ThemeButtonClass.contextType = ThemeContext // pour un composant défini sous forme de classe

function ThemeButton ({children})
{
    const theme = useContext(ThemeContext)
    return <button style={theme}>{children}</button>
}

function ThemeSwitcher() {
    const {toggleTheme} = useContext(ThemeContext)
    return <button onClick={toggleTheme} className="cmp">Changer le theme</button>
}

export function ToolBar()
{
    const [theme, setTheme] = useState('light')
    const toggleTheme = useCallback(function () {
        setTheme (t=> t === 'light' ? 'dark' : 'light')
    }, [])
    const value = useMemo(function () {
        return {
            theme: theme === 'light' ? THEMES.light : THEMES.dark,
            toggleTheme
        }
    }, [toggleTheme, theme])

    return <div>
        <ThemeContext.Provider value={value}>
            <Toolbar/>
            <ThemeSwitcher/>
        </ThemeContext.Provider>
    </div>
}