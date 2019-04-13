import React from 'react'

const NavHome = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
    </nav>
)

export default NavHome
