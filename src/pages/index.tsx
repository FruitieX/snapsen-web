import * as React from "react"
import SEO from "../components/SEO"
import BookList from "../components/BookList"
import Search from "../components/Search"

const IndexPage: React.FunctionComponent = () => (
  <>
    <SEO title="Snapsen" keywords={[`snapsen`, ``, `react`]} />
    <Search>
      <BookList />
    </Search>
  </>
)

export default IndexPage
