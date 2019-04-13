import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import NavHome from '../components/NavHome'

import battleblocks from '../assets/images/battleblocks.png';

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
                <div className="col-md-7">
                  <span className="image main"><img src={battleblocks} alt="" /></span>
                  {/* <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""> */}
                </div>
                <div className="col-md-4">
                  <h3>Battle Blocks</h3>
                  <p>This was a particularly fun and challenging project. Battle Blocks is a blockchain-based card game, not unlike <a href="https://www.cryptokitties.co/" target="_blank">Crypto Kitties</a>, with the added ability to battle opponents and cooler artwork. 
                    Instead of the traditional relational database such as MySQL or Postgres, we used a blockchain as a backend.
                    We started building on the Ethereum network, but the congestion slowed speeds to a halt so we migrated to the Nebulas blockchain which proved
                    to be a much better decision, speed-wise. This project uses <a href="https://vuejs.org/" target="_blank">Vue</a> and VueX for the frontend.
                  </p>
                  <footer className="major">
                    <ul className="actions">
                      <li><Link to="https://www.battleblocks.io" className="button">View BattleBlocks</Link></li>
                    </ul>
                  </footer>
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
