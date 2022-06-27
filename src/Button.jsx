import React, { useState, useReducer, useRef, useLayoutEffect, useCallback} from 'react'

/*function wait(duration)
{
    const t = Date.now()
    while (true) 
    {
        if (Date.now() - t > duration) 
        {
            return true
        }
    }
}*/

const Button = React.memo( function ({onClick}) {
    console.log('render')
    return <button className="cmp" onClick={onClick}>
        My Button
    </button>
})

// hook personnaliser 

function init (initializer) 
{
    return {count: initializer}
}

function reducer(state, action)
{
    switch(action.type)
    {
        case 'increment':
            return {count : state.count + 1};
        case 'decrement':
            if (state.count <= 0 )
            {
                return state;
            }
            return {count : state.count - 1};
        case 'reset':
            return init(0)
        default:
            throw new Error("the action " + action.type + " not allowed")
    }
}

export function AppButton() 
{
    const [count, setCount] = useState(0)

    const handleClick = useCallback(function () 
    {
        alert('hello')
    }, [])

    return <div>
        <Button onClick={handleClick}/>
        <button className="cmp" onClick={() => setCount(c => c + 1)}> Increment {count} </button>
    </div>
}

export function LayoutEffect() 
{
    //const [count, setCount] = useState(0)
    const button = useRef(null)
    const [count, dispatch] = useReducer(reducer, 0, init)

    /*const increment = useCallback(() => {
        setCount( c => c + 1)
    }, [])*/

    useLayoutEffect(() => {
        if (count % 2 === 0) {
            button.current.style.color = 'white'
        } else {
            button.current.style.color = 'black'
        }
        
    })

    return <div>
        Counter : {JSON.stringify(count)}
        <button className="cmp" onClick={() => dispatch({type: 'increment'})} ref={button}>Increment</button>
        <button className="cmp" onClick={() => dispatch({type: 'decrement'})} ref={button}>Decrement</button>
        <button className="cmp" onClick={() => dispatch({type: 'reset'})} ref={button}>Reset</button>
    </div>
}