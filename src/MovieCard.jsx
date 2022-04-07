import React from "react";

const MovieCard = ({ todo }) => {
    return (
        <div className='movie'>
            <div>
                <p>{todo.id}</p>
            </div>
            <div>
                <img src='https://via.placeholder.com/640x300' alt={todo.title} />
            </div>
            <div>
                <b>{todo.title}</b>
                <h3>{todo.description}</h3>
                <h5>{todo.createdAt}</h5>
                <h5>{todo.updatedAt}</h5>
            </div>
        </div>
    )
}

export default MovieCard