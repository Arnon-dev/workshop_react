import React, { useState, useEffect } from 'react'

export default function CreateProduct(props) {
    const getUserId = () => {
        let retrievedObject = localStorage.getItem('data_user');
        return retrievedObject ? JSON.parse(retrievedObject).user_id : null;
    }

    const [aid] = useState(getUserId);
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)

    const save = async (e) => {
        e.preventDefault();
        let product = {
            user_id: aid,
            title: title,
            detail: detail,
            stock: stock,
            price: price
        }
        props.save(product) 
    }

    const edit = async(e) => {
        e.preventDefault();
        let product = {
            title: title,
            detail: detail,
            stock: stock,
            price: price
        }
        props.edit(product) 
    }
    
    useEffect(() => {
        if(props.check === "Edit"){
            setTitle(props.product.title)
            setDetail(props.product.detail)
            setStock(props.product.stock)
            setPrice(props.product.price)
        }
    }, [])

    return (
        <div>
            <form onSubmit={ props.check === "Edit" ? edit : save  }>
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="detail">Detail</label>
                    <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)}  className="form-control" id="detail" />
                </div>
                <div className="form-group">
                    <label for="stock">Stock</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="form-control" id="stock" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="price" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success btn-block">OK</button>
            </form>
        </div>
    )
}
