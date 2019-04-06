import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Why Evergreen?</h2>
            <p>Evergreen Tech is a small business with a focus on quality and customer service. We have a wide skill set ready to help your team.</p>
            {/* <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul> */}
        </section>
        <section>
            <h2>Location</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Port Orange, FL 32128 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(386) 243-4338</dd>
            </dl>
            {/* <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul> */}
        </section>
        <p className="copyright">&copy;2019 Evergreen Tech</p>
    </footer>
)

export default Footer
