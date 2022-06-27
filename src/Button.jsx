import React, { useState, useCallback} from 'react'

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
