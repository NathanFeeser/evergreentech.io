import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Contact from '../components/Contact'
import Header from '../components/Header'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <Header />
        <div id="main">
          <section id="content" className="main">
            <h2>Get In Touch</h2>
            <Contact />
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
