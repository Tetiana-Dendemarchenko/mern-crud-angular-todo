import React from 'react';

export default function Header () {
    return(
        <div className="card bg-info text-center text-light rounded-0">
            <h1 className="display-4">
                <i className="fas fa-clipboard-list mr-3"/> <span className="text-dark mr-3">MERN CRUD</span> Todo list
            </h1>
        </div>
    )
}

