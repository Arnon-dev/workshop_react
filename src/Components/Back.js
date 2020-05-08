import React from 'react'

export default function Back(props) {
    return (
        <div>
            <button className="btn btn-secondary" onClick={() => props.history.push(props.url)}>&#706;</button>
        </div>
    )
}
