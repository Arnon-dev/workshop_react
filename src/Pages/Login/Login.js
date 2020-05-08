import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { loginUser } from '../../api/api'
import Swal from 'sweetalert2'

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login_user = async (user) => {
        let login = await loginUser(user)
        console.log(login)
        if(login.status === "success"){
            let data_user = {
                'user_id': login.data._id,
                'user_name': login.data.name
            }
            localStorage.setItem('data_user', JSON.stringify(data_user));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: true
              }).then((result) => {
                  if(result.value){
                    props.history.push('/Home')
                  }
              })            
        }else{
            alert(login.message)
        }
    }

   const login = async (e) => {
        e.preventDefault();
        let user = {
            username: username,
            password: password
        }
       
        login_user(user) 
   }

    return (
        <div>
            <div className="card login">
                <form className="text-center border border-light p-5" onSubmit={login}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={ process.env.PUBLIC_URL + 'assets/images/Login_logo.png'} className="imgsize"></img>
                    </div>
                    <p class="h4 mb-4">
                        Sign in
                    </p>
                    <div className="form-group">
                        <label for="username" className="LabelText">Username: </label>
                        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} className="form-control mb-4" placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="LabelText">Password: </label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control mb-4" placeholder="Password" required/>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                    <p>Not a member?
                        <Link to='/Register'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
