import React, { useEffect, useState } from 'react'
import CreateProduct from '../../Components/CreateProduct'
import Back from '../../Components/Back'
import { getAllProduct, editProduct } from '../../api/api'

export default function Edit(props) {
    const [product, getProduct] = useState([])

    useEffect(() => {
        ferchProduct()
    }, []);

    const ferchProduct = async () => {
        var product_id = props.match.params.id;
        await getAllProduct().then((res) => {
            if (res.status === "success") {
                let data = res.data.filter((item) => {
                    return item._id === product_id; 
                })
                getProduct(data[0]);
            }
        })
    }

    console.log(product)

    const edit = async (product) => {
        let edit = await editProduct(props.match.params.id, product)
        if(edit.status === "success"){
            props.history.push('/Home')
        }else{
            alert(edit.message)
        }
    }

    return (
        <div>
            <div className="container">
                <div style={{ margin: 5 }}>
                    <Back url="/Home" history={props.history}/>
                </div>
                <h1 style={{ textAlign: "center"}}>Edit Product</h1>
                <hr></hr>
                {product !== undefined && <CreateProduct product={product} edit={edit} check="Edit" />}
            </div>
        </div>
    )
}
