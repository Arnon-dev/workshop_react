import React from 'react'

export default function HomeCreateButton(props) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => { props.nextCreate() }}>Create Product</button>
        </div>
    )
}