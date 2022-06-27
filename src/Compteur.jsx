import React, { useState, useEffect } from 'react'
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

function useAutoIncrement (initializer =0, step= 1)
{
    const [count, increment] = useIncrement(initializer)
    useEffect(function () {
        const timer = window.setInterval(function() {
            increment()
        }, 1000)
        return function () {
            clearInterval(timer)
        }
    })
    return count
}

export function TodoList() {

    return <div>
        <h3> Taches à faire </h3>
        <ul>
            <li> Tache i</li>
        </ul>
    </div>
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

    const count = useAutoIncrement(10)
   
    return <button className="cmp">
        Nombre : {count}
    </button>
    
}