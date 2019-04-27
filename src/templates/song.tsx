import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import Layout from "../components/Layout"
import SongDetails from "../components/SongDetails"
import NotFoundPage from "../pages/404"

interface SongTemplateProps {
  data: {
    booksJson: Book
  }

  pageContext: {
    songId: string
  }
}

const SongTemplate: React.FunctionComponent<SongTemplateProps> = props => {
  const book = props.data.booksJson
  const song = book.songs.find(song => song.id === props.pageContext.songId)

  return song ? (
    <Layout>
      <SongDetails bookId={book.id} bookTitle={book.title} {...song} />
    </Layout>
  ) : (
    <NotFoundPage />
  )
}

export default SongTemplate

export const pageQuery = graphql`
  query($bookId: String!) {
    booksJson(id: { eq: $bookId }) {
      title
      id
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
