import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Login from '../Pages/Login/Login'
import { Link } from 'react-router-dom'
 
export default function Header(props) {
    const getValueName = () =>{
        let retrievedObject = localStorage.getItem('data_user');
        return retrievedObject ? JSON.parse(retrievedObject).user_name : null;
    }
    const [aname] = useState(getValueName);

    const getValueId = () => {
        let retrievedObject = localStorage.getItem('data_user');
        return retrievedObject ? JSON.parse(retrievedObject).user_id : null;
    }
    const [aid] = useState(getValueId);


    const logout = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Logout',
                'success',
              )
              props.history.push('/Login');
              localStorage.clear();
            }
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">E-Commerce</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Hello <span>{ aname }</span>
                        </a>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to={`/Account/${ aid }`}>Account</Link>
                        <a className="dropdown-item" onClick={logout} href='#'>Log out</a>
                    </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
