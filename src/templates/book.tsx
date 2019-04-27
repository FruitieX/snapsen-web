import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import Layout from "../components/Layout"
import BookDetails from "../components/BookDetails"

interface BookProps {
  data: {
    booksJson: Book
  }
}

const BookTemplate: React.FunctionComponent<BookProps> = props => {
  const book = props.data.booksJson

  return (
    <Layout>
      <BookDetails {...book} />
    </Layout>
  )
}

export default BookTemplate

export const pageQuery = graphql`
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
        description
        page
        pre
        lyrics
        melody
        type
        musicalKey
      }
    }
  }
`
