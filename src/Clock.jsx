import React, { Component } from "react"
import './index.css'

export class Clock extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            date: new Date()
        }
        this.timer = null
    }

    componentDidMount() 
    {
        this.timer = window.setInterval(
            () => {
                this.setState({
                    date: new Date()
                })
            }
        )
    }

    componentWillUnmount() 
    {
        window.clearInterval(this.timer)
    }

    render() {
        return <div className="clock">
            {this.state.date.toLocaleString()}
        </div>
    }
}