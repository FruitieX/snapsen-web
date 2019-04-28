import * as React from "react"
import SEO from "../components/SEO"
import BookList from "../components/BookList"
import SearchResults from "../components/SearchResults"

const IndexPage: React.FunctionComponent = () => (
  <>
    <SEO
      title="Snapsen"
      keywords={[`snapsen`, `snapsvisa`, `snapsvisor`, `sångbok`]}
    />
    <SearchResults>
      <BookList />
    </SearchResults>
  </>
)

export default IndexPage
