import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><a href="/"><img src={logo} alt="" /></a></span>
        <h1>Evergreen Tech</h1>
        <p>Custom programming and technology services</p>
    </header>
)

export default Header
