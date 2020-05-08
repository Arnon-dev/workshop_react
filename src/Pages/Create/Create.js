import React from 'react'
import CreateProduct from '../../Components/CreateProduct'
import { createProduct } from '../../api/api'
import Back from '../../Components/Back'

export default function Create(props) {
    const save = async(product) => {
        let result = await createProduct(product)
        props.history.push('/Home')
    }

    return (
        <div>
            <div className="container" >
                <div style={{ margin: 5 }}>
                    <Back url="/Home" history={props.history}/>
                </div>
                <h1>Create Product</h1>
                <hr></hr>
                <CreateProduct save={save}/> 
            </div>
        </div>
    )
}
