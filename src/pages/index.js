import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Evergreen Tech" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Super Solid Technology</h2>
                </header>
                <p>At Evergreen Tech we pride ourselves with building secure software that lasts a lifetime.
                  We achieve this by baking updateability into every project. Never get stuck behind dated tech.
                </p>
                {/* <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul> */}
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>What We Offer</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Verbose Programming</h3>
                <p>Database-intensive web and desktop applications. Build in accordance with modern coding standards and languages.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Enhanced Security</h3>
                <p>Every server, desktop, or router we touch gets best-in-class security from the ground up.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Data Reporting</h3>
                <p>Business intelligence to help grow your operations based on data, not on a whim.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Our Data</h2>
              <p>Statistics are estimates and constantly growing.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>980</strong> Code Commits
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>1,450</strong> Shared Files
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>90</strong> Custom Reports
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>160</strong> PCs Secured
              </li>
              <li className="style5">
                <span className="icon fa-smile-o"></span>
                <strong>35</strong> Happy Customers
              </li>
            </ul>
            <p className="content">We never outsource. We have an array of full-time and contract employees based in the United States 
            that will handle your project with the professionalism and quality you should expect from a tech partner. We enjoy our jobs and love working in IT.
            This passion leads to excellent results an amazingly poductive work culture.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get In Touch</h2>
              <p>Let us know how we can help with your website, custom programming, database, data reporting, or business intelligence.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Contact Us</Link></li>
                {/* <li><Link to="/generic" className="button">Learn More</Link></li> */}
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
