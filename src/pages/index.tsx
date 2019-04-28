import * as React from "react"
import SEO from "../components/Layout/SEO"
import BookList from "../components/Book/BookList"
import SearchResults from "../components/Search/SearchResults"

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
