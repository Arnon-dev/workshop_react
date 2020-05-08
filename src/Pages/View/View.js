import React, { useState, useEffect} from 'react'
import { getAllProduct } from '../../api/api'
import Back from '../../Components/Back'

export default function View(props) {
    const [product, getProduct] = useState([])

    useEffect(() =>{
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

    return (
        <div>
            <div className="container">
                <div style={{ margin: 5 }}>
                    <Back url="/Home" history={props.history}/>
                </div>
                <h2 style={{ textAlign: "center"}}>Product Detail</h2>
                <hr></hr>
                <div className="card">
                    <h3 style={{textAlign: "center"}}>Title: {product.title}</h3>
                    <p style={{marginLeft: 10 }}>Detail: {product.detail}</p>
                    <p style={{marginLeft: 10 }}>Stock: {product.stock}</p>
                    <p style={{marginLeft: 10 }}>Price: {product.price}</p>
                </div>
            </div>
        </div>
    )
}
