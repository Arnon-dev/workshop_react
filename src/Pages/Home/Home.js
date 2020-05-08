import React, { useState, useEffect } from 'react'
import HomeTables from '../../Components/HomeTables'
import { getAllProduct } from '../../api/api'
import HomeCreateButton from '../../Components/HomeCreateButton'
import { deleteProduct } from '../../api/api'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Home(props) {
    const getUserId = () => {
        let retrievedObject = localStorage.getItem('data_user');
        return retrievedObject ? JSON.parse(retrievedObject).user_id : null;
    }
    const [aid] = useState(getUserId);

    const [product, setProduct] = useState({})

    const fetchUser = async () =>{
        let result = await getAllProduct()
        setProduct(result)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const nextCreate = () =>{
        props.history.push('/Create')
    }

    const Homepage = () => {
        props.history.push('/Home')
    }

    const removeProduct = async (id) => {
        let result = await deleteProduct(id)
        if(result.status === "success"){    
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                  )
                }
                fetchUser()
            })
        }
    }       
    return (
        <div>
            <div className="container"> 
                <h2 style={{ textAlign: "center", marginTop: 10}}>Product List</h2>
                <hr/>
                <div className="row">
                    <div className="col-auto mr-auto">
                        <HomeCreateButton nextCreate={ nextCreate }/>
                    </div>
                    <div className="ml-auto">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Menu
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link class="dropdown-item" to="/Home" onClick={ Homepage }>All Products</Link>
                                <a class="dropdown-item" href="#" >Your Products</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <HomeTables product={product} delete={removeProduct}/>
            </div>
        </div>
    )
}
