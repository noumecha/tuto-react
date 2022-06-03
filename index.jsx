import React from 'react'
import { render } from 'react-dom'

function Compteur () 
{
    const state = useState(0)
    console.log(state)
    return <button></button>
}

render (
    <div>
        <Compteur />
    </div>,
    document.getElementById('app')
)