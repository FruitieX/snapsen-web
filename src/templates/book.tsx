import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import BookDetails from "../components/Book/BookDetails"
import SearchResults from "../components/Search/SearchResults"

interface BookTemplateProps {
  data: {
    booksJson: Book
  }
}

/**
 * Template used by each book details page
 */
const BookTemplate: React.FunctionComponent<BookTemplateProps> = ({
  data: { booksJson: book },
}) => {
  return (
    <SearchResults>
      <BookDetails book={book} />
    </SearchResults>
  )
}

export const bookPageQuery = graphql`
  query($bookId: String!) {
    booksJson(id: { eq: $bookId }) {
      title
      id
      description
      primaryColor
      versions {
        book
      }
      author {
        name
        email
      }
      image
      songs {
        title
        id
        page
        type
      }
    }
  }
`

export default BookTemplate
