import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BookList from "../components/BookList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BookList />
  </Layout>
)

export default IndexPage
