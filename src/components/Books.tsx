import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Book } from "../types/book"
import BookItem from "./BookItem"
import { Card, List, ListSubheader } from "@material-ui/core"

interface BooksQuery {
  allBooksJson: {
    edges: {
      node: Book
    }[]
  }
}

const Books: React.FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query BooksQuery {
        allBooksJson(limit: 1000) {
          edges {
            node {
              id
              title
              description
              songs {
                id
              }
            }
          }
        }
      }
    `}
    render={(data: BooksQuery) => {
      const books = data.allBooksJson.edges

      return (
        <Card>
          <List
            subheader={<ListSubheader>Songbooks</ListSubheader>}
            component="nav"
          >
            {books.map(({ node: book }) => (
              <BookItem
                key={book.id}
                title={book.title}
                description={book.description}
                id={book.id}
              />
            ))}
          </List>
        </Card>
      )
    }}
  />
)

export default Books
