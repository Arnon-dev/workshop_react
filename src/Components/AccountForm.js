import React, { useState, useEffect } from 'react'

export default function AccountForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const edit = (e) => {
        e.preventDefault();
        let user = {
            username: username,
            password: password,
            name: name,
            age: age,
            salary: salary
        }
        props.edit(user)
    }

    useEffect(() => {
        setUsername(props.user.username)
        setPassword(props.user.password)
        setName(props.user.name)
        setAge(props.user.age)
        setSalary(props.user.salary)
    }, [])

    

    return (
        <div>
            <form onSubmit={ edit }>
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="age">Age: </label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}  className="form-control" id="age" />
                </div>
                <div className="form-group">
                    <label for="salary">Salary: </label>
                    <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" id="salary" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="username">Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="password">Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success btn-block">OK</button>
            </form>
        </div>
    )
}
