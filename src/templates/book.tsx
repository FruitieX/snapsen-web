import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import BookDetails from "../components/BookDetails"
import Search from "../components/Search"

interface BookTemplateProps {
  data: {
    booksJson: Book
  }
}

const BookTemplate: React.FunctionComponent<BookTemplateProps> = ({
  data: { booksJson: book },
}) => {
  return (
    <Search>
      <BookDetails book={book} />
    </Search>
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
