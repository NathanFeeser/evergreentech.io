import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import NavHome from '../components/NavHome'

import battleblocks from '../assets/images/battleblock.png';

class Projects extends React.Component {
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
        <Helmet title="Evergreen Tech Projects" />
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <NavHome sticky={this.state.stickyNav} />

        <div id="main">
          <section id="content" className="main">
            <h2>Our Projects</h2>

            <div class="container">

              <div className="row">
                <div className="">
                  <span className="image main"><img src={battleblocks} alt="" /></span>
                  {/* <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""> */}
                </div>
                <div className="">
                  <h3>Battle Blocks</h3>
                  <p>This was a particularly fun and challenging project. Battle Blocks is a blockchain-based card game, not unlike <a href="https://www.cryptokitties.co/" target="_blank">Crypto Kitties</a>, with the added ability to battle opponents and cooler artwork. 
                    Instead of the traditional relational database such as MySQL or Postgres, we used a blockchain as a backend.
                    We started building on the Ethereum network, but the congestion slowed speeds to a halt so we migrated to the Nebulas blockchain which proved
                    to be a more efficient. This project uses <a href="https://vuejs.org/" target="_blank">Vue</a> and VueX for the frontend.
                  </p>
                  <footer className="major">
                    <ul className="actions">
                      <li><a href="https://battleblocks.io/#/" className="button" target="_blank">View BattleBlocks</a></li>
                    </ul>
                  </footer>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="">
                  <h3>Stock Tips</h3>
                  <p>Stock Tips is a proprietary reporting dashboard application we built using the IEX cloud stock data API. It has a mature algorithm used to determine the best time to enter 
                    the market, when to avoid, and which stocks look like healthy picks based on individual user settings (long term hold vs short gains).
                    We built Stock Tips using Python, Django, and PostgreSQL.
                  </p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="">
                  <h3>Recruitment Applicant Tracking System</h3>
                  <p>This was another proprietary build. This ATS is not unlike the popular <a href="https://www.bullhorn.com/" target="_blank">Bullhorn</a>, with many added features, 
                    better reporting, and integrated texting capabilities without leaving the cloud-based applicaiton.
                    This ATS was built using PHP, Node.js, MySQL, and ReactJS hosted on Amazon Web Services.
                  </p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="">
                  <h3>Your Project!</h3>
                  <p>Your dream is next. <Link to="/contact">Contact us</Link> for a free consultation and quote.
                  </p>
                </div>
              </div>

              <hr />

            </div>
            
          </section>
        </div>
      </Layout>
    )
  }
}

export default Projects
