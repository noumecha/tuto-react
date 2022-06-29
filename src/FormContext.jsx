import React, { useCallback, useState, useContext, useMemo, createContext } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import './bootstrap/css/bootstrap-grid.css'
import './bootstrap/css/bootstrap-reboot.css'
import './bootstrap/css/bootstrap-utilities.css'
import './bootstrap/css/bootstrap.css'

const FormContextContext = createContext({})

function Formcontext ({defaultValue, onSubmit, children}) {

    const [data, setData] = useState(defaultValue)
    const change = useCallback(function (name, value){
        setData(d => Object.assign({}, d, {[name]: value}))
    }, [])
    const value = useMemo(function (){
        return Object.assign({}, data, {change: change})
    }, [data, change]) 

    const handleSubmit = useCallback(function (e){
        e.preventDefault()
        onSubmit(value)  
    }, [onSubmit, value])

    return <FormContextContext.Provider value={value}>
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    </FormContextContext.Provider>
}

function FormField ({name, children}) 
{
    const data = useContext(FormContextContext)
    const handleChange = useCallback(function (e){
        data.change(e.target.name, e.target.value)
    }, [data.change])
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" name={name} id={name} onChange={handleChange} className="form-control" value={data[name] || ''} />
    </div>
}

PrimaryButton.defaultProps = {
    children: 'envoyer'
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired
}

function PrimaryButton({children})
{
    return <button className="btn btn-primary">{children}</button>
}

export function FormContext () {

    const handleSubmit = useCallback(function (value) {
        console.log(value)
    }, [])

    return <Formcontext defaultValue={{name:'noumel' , surname: 'spaker'}} onsubmit={handleSubmit()}>
        <FormField name="name">Name</FormField>
        <FormField name="surname">Surname</FormField>
        <PrimaryButton></PrimaryButton>
    </Formcontext>
}