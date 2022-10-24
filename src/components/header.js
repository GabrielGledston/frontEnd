import React from "react"

import './header.css'

import logo from '../images/logo.png'

function Header() {
    return (
        <header className="header">
        <img src={logo} alt="logo" width="150px" />

            <div class="title">
                Feira de Profissões
            </div>
      </header>
    )
}

export default Header