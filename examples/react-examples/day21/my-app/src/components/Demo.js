import React, {Component} from 'react';

function Hello(props) {
    let counter = props.counter;
    if(counter == 0) {
        return (<div>Hello Component</div>)
    }
    else if(counter == 1) {
        return (<div><UserList /></div>)
    } 
    else if(counter == 2) {
        return (<div><EventDemo /></div>)
    } 
    else {
        return (<div>
            <StateDemo />
        </div>)
    }
}
export class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter : 0}
    }
    handleClick = (e) => {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (<div>
            <h2>This renders multiple components</h2>
            <p>Counter: {this.state.counter}</p>
            <button onClick = {this.handleClick} className = "btn btn-primary">Click</button>
            <Hello counter = {this.state.counter} />
        </div>)   
    }

}

export class StateDemo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {name: 'Sachin', phone: 9988993344, counter: 0}
    }
    handleClick = (e) => {
        this.setState({name: 'Sachin Tendulkar', phone: 8880003334, counter: this.state.counter + 1});
    }
    render() {
        return (<div>
            <h2>State Demo</h2>
            <p>Hello {this.state.name}, your phone no is {this.state.phone}</p>
            <p>Number of click(s): {this.state.counter}</p>
            <button className = "btn btn-primary" onClick = {this.handleClick}>Click Here</button>
        </div>)
    }
}
export class EventDemo extends React.Component {
    handleClick = (e) => {
        console.log(e);
    }
    handleInput = (e) => {
        console.log(e);
    }
    render() {
        return (<div>
            <h2>Event Demo</h2>
            Enter Input <input name = "n1" onChange = {this.handleInput} autoComplete = "off"></input>
            <button onClick = {this.handleClick}>Button1</button>
            <button onClick = {this.handleClick}>Button2</button>
        </div>)
    }
}

export class UserList extends React.Component {
    render() {
        // show the state and city in the table as well
        let users = [
            {id: 100, name: "Sachin", phone: 9930239393, address: {state: 'KA', city: 'BLR'}},
            {id: 200, name: "Zaheer", phone: 8930239393},
            {id: 300, name: "Virat", phone: 7930239393, address: {state: 'MH', city: 'MBI'}}, 
            {id: 400, name: "Vijay", phone: 8830239393},
            {id: 500, name: "Ravi", phone: 8830239393}, 
            {id: 600, name: "Amar", phone: 7730239393}
        ]
        return <div className = "container">
            <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th><th>NAME</th><th>PHONE</th><th>STATE</th><th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => <tr key = {index}>
                        <td>{item.id}</td><td>{item.name}</td><td>{item.phone}</td>
                        <td>{item.address?.state ? item.address?.state : '***'}</td>
                        <td>{item.address?.city ? item.address?.city : '***'}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    }

}