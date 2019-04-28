import * as React from "react"
import { Card, CardHeader, Avatar } from "@material-ui/core"
import { Song } from "../types/song"

import SongList from "./SongList"
import { searchFieldState } from "./SearchField"
import { useStaticQuery, graphql } from "gatsby"
import { BookListData } from "./BookList"
import { observer } from "mobx-react-lite"

const filterSongs = (filterRegex: RegExp, filter: string, songs: Song[]) =>
  songs.filter(
    song =>
      song.page.toString() === filter ||
      filterRegex.test(song.title) ||
      filterRegex.test(song.pre) ||
      filterRegex.test(song.lyrics) ||
      filterRegex.test(song.type)
  )

const Search: React.FunctionComponent = observer(({ children }) => {
  const data: BookListData = useStaticQuery(
    graphql`
      query {
        allBooksJson {
          edges {
            node {
              title
              description
              image
              id
              songs {
                title
                id
                pre
                lyrics
                page
                type
              }
            }
          }
        }
      }
    `
  )

  const value = searchFieldState.value

  // If search field value is undefined, render child components instead
  if (value === undefined) return <>{children}</>

  const isEmpty = value === ""

  const books = data.allBooksJson.edges.map(bookNode => bookNode.node)
  const filterRegex = new RegExp(value, "i")

  const searchResults = isEmpty
    ? []
    : books
        .map(book => {
          const filteredSongs = filterSongs(filterRegex, value, book.songs)

          // Only show songbook if there were any search hits in it
          if (filteredSongs.length === 0) return null

          return (
            <Card key={book.id}>
              <CardHeader
                avatar={<Avatar aria-label="Songbook image" src={book.image} />}
                title={book.title}
                subheader={book.description}
              />
              <SongList
                songs={filteredSongs}
                bookId={book.id}
                bookTitle={book.title}
              />
            </Card>
          )
        })
        // Filter out null entries from above
        .filter(book => book !== null)

  const subheader =
    searchResults.length === 0
      ? isEmpty
        ? "Try searching for song title, page number, lyrics or type."
        : "No results. Try widening your search terms."
      : undefined

  return (
    <>
      <CardHeader title="Search results" subheader={subheader} />
      {searchResults}
    </>
  )
})

export default Search
