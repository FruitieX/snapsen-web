import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import Layout from "../components/Layout"

interface BookProps {
  data: {
    booksJson: Book
  }
}

const BookTemplate: React.FunctionComponent<BookProps> = props => (
  <Layout>
    <div>{JSON.stringify(props.data)}</div>
  </Layout>
)

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
