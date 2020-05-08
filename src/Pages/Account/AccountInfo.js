import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import Back from '../../Components/Back'
import { getUserById, editUser } from '../../api/api'
import AccountForm from '../../Components/AccountForm'
import Swal from 'sweetalert2'

export default function AccountInfo(props) {
    const [user, setUser] = useState()

    const getValueId = () => {
        let retrievedObject = localStorage.getItem('data_user');
        return retrievedObject ? JSON.parse(retrievedObject).user_id : null;
    }
    const [aid] = useState(getValueId);

    useEffect(() => {
    const fetchApi = async () =>{
        let result = await getUserById(aid);
        console.log(result.data)
        setUser(result.data);
    }
        fetchApi()
    }, [])

    const edit = async (user) => {
        let edit = await editUser(aid, user)
        if(edit.status === "success"){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Update Successful',
                showConfirmButton: true
              }).then((result) => {
                  if(result.value){
                    props.history.push('/Home')
                  }
              })            
        }else{
            alert(edit.message)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ margin: 5 }}>
                    <div className="col-auto mr-auto">
                        <Back url="/Home" history={props.history}/>
                    </div>
                </div>
                <h2 style={{ textAlign: "center" }}>Account Infomation</h2>
                <hr/>
                { user !== undefined && <AccountForm user={ user } edit={edit} /> }
            </div>
        </div>
    )
}
