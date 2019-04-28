import * as React from "react"
import { graphql } from "gatsby"
import { Book } from "../types/book"
import SongDetails from "../components/SongDetails"
import NotFoundPage from "../pages/404"

interface SongTemplateProps {
  pageContext: {
    songId: string
  }

  data: {
    booksJson: Book
  }
}

const SongTemplate: React.FunctionComponent<SongTemplateProps> = ({
  pageContext: { songId },
  data: { booksJson: book },
}) => {
  const song = book.songs.find(song => song.id === songId)

  return song ? (
    <SongDetails bookId={book.id} bookTitle={book.title} {...song} />
  ) : (
    <NotFoundPage />
  )
}

// TODO: find a better way to query a single song?
export const songPageQuery = graphql`
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

export default SongTemplate
