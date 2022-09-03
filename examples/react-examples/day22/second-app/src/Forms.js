import { useState } from 'react';
export function SimpleForm(props) {
    let [name, setName] = useState('');
    let [phone, setPhone] = useState(undefined);
    let handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(name, phone);
    }
    return (<div>
        <h2>Simple Form!</h2>
        <form onSubmit = { handleSubmit }>
            <div>
                <label>
                    Enter Name <input type = "text" autoComplete='off' onChange = { ( e ) => setName(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>
                    Enter Phone <input type = "text" autoComplete='off' onChange = { ( e ) => setPhone(e.target.value)}></input>
                </label>
            </div>
            <input type = "submit" value = "Submit"></input>
        </form>
        <div>
            <p>Hello {name}, your phone {phone}</p>
        </div>
    </div>);
}