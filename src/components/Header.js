import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Evergreen Tech</h1>
        <p>Technology and programming services built for the future</p>
    </header>
)

export default Header
