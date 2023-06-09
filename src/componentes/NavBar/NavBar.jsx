import React from 'react'
import NavItem from './NavItem'
import { CardWidget } from '../CardWidget/CardWidget'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Tienda El Mirador</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavItem label="Home" src="/"/>
                            </li>
                            <li class="nav-item">
                                <NavItem label="Productos" src='/'/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CardWidget/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
