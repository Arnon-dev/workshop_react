import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTables(props) {

    const tableList = () =>{
        if(props.product.data !== undefined){
            var data = []
            for (let i = 0; i < props.product.data.length; i++) {
                let item = props.product.data[i]
                data.push(
                    <tr>
                        <th scope="row">{ i + 1 }</th>
                        <td>{ item.title }</td>
                        <td>{ item.detail }</td>
                        <td>{ item.stock }</td>
                        <td>{ item.price }</td>
                        <td>{ item.createdAt }</td>
                        <td>{ item.updatedAt }</td>
                        <td>
                            <Link to={`/View/${item._id}`}><span style={{color: 'blue'}}> View</span></Link> |
                            <Link to={`/Edit/${item._id}`}><span style={{color: 'green'}}> Edit</span></Link> | 
                            <span onClick={ () => props.delete(item._id) } style={{ color: 'red', cursor: 'pointer'}}> Delete</span>
                        </td>
                    </tr>
                )
            }
            return data;
        }
    }

    return (
        <div>
            <div>
                <div class="form-group has-search">
                    <input type="text" class="form-control" placeholder="Search Product..." />
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Update Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       tableList()
                   }
                </tbody>
            </table>
        </div>
    )
}
