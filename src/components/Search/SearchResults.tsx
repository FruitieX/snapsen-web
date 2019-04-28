import * as React from "react"
import {
  Card,
  CardHeader,
  Avatar,
  createStyles,
  Theme,
  WithStyles,
  withStyles,
} from "@material-ui/core"
import { Song } from "../../types/song"

import SongList from "../Song/SongList"
import { searchFieldState } from "../Layout/SearchField"
import { useStaticQuery, graphql } from "gatsby"
import { BookListData } from "../Book/BookList"
import { observer } from "mobx-react-lite"
import { Book } from "../../types/book"

/**
 * Song filtering logic
 * @param filterRegex Filter by this regular expression
 * @param filter Original filter string
 * @param songs List of available songs
 */
const filterSongs = (filterRegex: RegExp, filter: string, songs: Song[]) =>
  songs.filter(
    song =>
      song.page.toString() === filter ||
      filterRegex.test(song.title) ||
      filterRegex.test(song.pre) ||
      filterRegex.test(song.lyrics) ||
      filterRegex.test(song.type)
  )

const styles = (theme: Theme) =>
  createStyles({
    resultCard: {
      marginBottom: theme.spacing.unit,
    },
  })

interface SearchProps extends WithStyles<typeof styles> {}

/**
 * If search is active, displays search results.
 * Otherwise renders child components.
 */
const SearchResults: React.FunctionComponent<SearchProps> = observer(
  ({ children, classes }) => {
    // Fetch all books data
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

    // Unwrap books from format returned by GraphQL query
    const books: Book[] = data.allBooksJson.edges.map(bookNode => bookNode.node)

    // Create a regular expression from the input, ignore case
    const filterRegex = new RegExp(value, "i")

    const searchResults = isEmpty
      ? // Don't show results while filter is empty
        []
      : // Render each resulting book as it's own Card
        books
          .map(book => {
            // Run filter on book's songs
            const filteredSongs = filterSongs(filterRegex, value, book.songs)

            // Only show this book if there were any search results in it
            if (filteredSongs.length === 0) return null

            return (
              <Card key={book.id} className={classes.resultCard}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Songbook image" src={book.image} />
                  }
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

    const title = isEmpty ? "Search" : `Search results for "${value}":`

    const subheader = isEmpty
      ? "Try searching for song title, page number, lyrics or type."
      : searchResults.length === 0
      ? "No results. Try widening your search terms."
      : undefined

    return (
      <>
        <CardHeader title={title} subheader={subheader} />
        {searchResults}
      </>
    )
  }
)

export default withStyles(styles)(SearchResults)
