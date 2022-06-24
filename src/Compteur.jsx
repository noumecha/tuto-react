import React, { useState } from 'react'
import './index.css'

// eg personnalize hook 
function useIncrement (intializer = 0, step = 1) 
{
    const [count, setCount] = useState(intializer)
    const increment = () => {
        setCount(c => c + 1)
    }
    return [count, increment]
}
// other personalize hook 
function useToggle(initializer = true) 
{
    const [value, setValue] = useState(initializer)
    const toggle = function() {
        setValue (v => !v)
    }
    return [value, toggle]
}


export function AppCompteur () {

    const [CompteurVisible, toggleCompteur] = useToggle(true)

    return <div>
        Show counter <input onChange={toggleCompteur} checked={CompteurVisible} type="checkbox" />
        <br />
        {CompteurVisible && <Compteur/>}
    </div>
}

export function Compteur () {

    const [count, increment] = useIncrement(10)
   
    return <button className="cmp" onClick={increment}>
        Nombre : {count}
    </button>
    
}