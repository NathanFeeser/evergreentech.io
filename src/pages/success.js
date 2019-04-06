import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/Header'

const Success = (props) => (
    <Layout>
        <Helmet title="Contact Form Success" />
        <Header />
        <div id="main">
          <section id="content" className="main">
            <h2>Thank You</h2>
            <p>Form submitted successfully. Thanks for contacting us. We'll be in touch very soon.</p>
          </section>
        </div>
      </Layout>
)

export default Success