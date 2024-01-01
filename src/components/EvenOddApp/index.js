// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
    state = {count: 0}

    onIncrement = () => {
        const random = Math.random()
        const randomNumber = Math.ceil(random * 100)
        this.setState({ count: randomNumber })
    }
    
    render(){
        const {count} = this.state
        const status = count % 2 === 0 ? 'Even' : 'Odd'
        return (
        <div className="container">
            <h1 className="heading">Count {count}</h1>
            <p className="oddevenstatus">Count is {status}</p>
            <button type="button" className="button" onClick={this.onIncrement}>
            Increment
            </button>
            <p className="para">*Increase By RandomNumber Between 0 to 100</p>
        </div>
        )
    }
}

export default EvenOddApp
