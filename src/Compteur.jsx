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

function useFetch(url) {

    const [state, setState] = useState({
        items : [],
        loading: true
    })

    useEffect(function () {
        (async function() {
            const response = await fetch(url);
            const responseData = await response.json()
            if (response.ok) {
                setState({
                    items: responseData,
                    loading: false
                })
            } else {
                alert(JSON.stringify(responseData))
                setState(s => ({...s, loading: false}))
            }
        })() 
    })

    return [
        state.loading,
        state.items
    ]
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
    const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=20')


    if (loading) 
    {
        return 'Loading ...'
    }

    return <div>
        <h3> Taches à faire </h3>
        <ul>
            {items.map(t =><li>{t.title}</li> )}
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