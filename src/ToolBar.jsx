import React from 'react'

const theme = 
{
    dark: {
        backgroun: '#000',
        color: '#fff'
    },
    light: {
        background: '#fff',
        color: '#000'
    }
}

function Toolbar({theme}) {
    return <div>
        <button style={theme}>Sign In</button>
    </div>
}

export function ToolBar()
{

    return <div>
        <Toolbar theme={theme.dark}></Toolbar>
    </div>
}