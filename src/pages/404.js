import React from "react"

import SEO from "../components/seo"
import Layout from "../components/__layout"
import negro from "../images/zeb.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src={negro} />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
