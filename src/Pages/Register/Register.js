import React, { useState } from 'react'
import './Register.css'
import { registerUser } from '../../api/api'
import Swal from 'sweetalert2'

export default function Register(props) {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register_user = async (user) => {
        let regis = await registerUser(user)
        if(regis.status === "sucecss"){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Create User Successful',
                showConfirmButton: true
              }).then((result) => {
                  if(result.value){
                    props.history.push('/Login')
                  }
              })            
        }else{
            alert(regis.message)
        }
    }

    const register = async (e) => {
        e.preventDefault();
        let user = {
            name: name,
            age: age,
            salary: salary,
            username: username,
            password: password
        }
        console.log(user)
        register_user(user)
    }

    return (
        <div>
            <dev className="card register">
                <form className="text-center border border-light p-5" onSubmit={ register }>
                    <div style={{ textAlign: 'center' }}>
                        <img src={ process.env.PUBLIC_URL + 'assets/images/Register_logo.png'} className="imgsize" ></img>
                    </div>
                    <p class="h4 mb-4">
                        Sign Up
                    </p>
                    <div className="form-group">
                        <label for="name" className="LabelText">Name: </label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="form-control mb-4" placeholder="Please Enter your name" required/>
                    </div>
                    <div className="form-group">
                        <label for="age" className="LabelText">Age: </label>
                        <input type="number" id="age" onChange={(e) => setAge(e.target.value)} className="form-control mb-4" placeholder="Please Enter your age" />
                    </div>
                    <div className="form-group">
                        <label for="salary" className="LabelText">Salary: </label>
                        <input type="number" id="salary" onChange={(e) => setSalary(e.target.value)} className="form-control mb-4" placeholder="Please Enter your salary" />
                    </div>
                    <div className="form-group">
                        <label for="username" className="LabelText">Username: </label>
                            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} className="form-control mb-4" placeholder="Please Enter your username" required/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="LabelText">Password: </label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-4" placeholder="Please Enter your password" required/>
                    </div>
                    <button className="btn btn-success btn-block" type="submit">Sign Up</button>
                </form>
            </dev>
        </div>
    )
}
