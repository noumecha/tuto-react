import React, { useState } from 'react'

// eg personnalize hook 

function useIncrement () 
{
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(c => c + 1)
    }
    return [count, increment]
}

export function Compteur () {

    const [count, increment] = useIncrement()
   
    return <button onClick={increment}>
        Nombre : {count}
    </button>

}