import React from 'react'
import CreateTodo from './CreateTodo/CreateTodo'

export default function Header() {
    return (
        <div className="navbar__container p-4 px-5">
            <div className="row">
                <div className="col-6 text-left">
                    <h2 className="text-primary">DASHBOARD</h2>
                </div>
                <div className="col-6 text-right">
                    <CreateTodo />
                </div>
            </div>
        </div>
    )
}
