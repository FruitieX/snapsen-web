import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Book } from "../../types/book"
import BookListItem from "./BookListItem"
import { Card, List, ListSubheader } from "@material-ui/core"

interface BookNode {
  node: Book
}

interface AllBooksJson {
  edges: BookNode[]
}

export interface BookListData {
  allBooksJson: AllBooksJson
}

const BookList: React.FunctionComponent = () => {
  // Fetch all books for listing
  const {
    allBooksJson: { edges: books },
  }: BookListData = useStaticQuery(
    graphql`
      query BookListQuery {
        allBooksJson(limit: 1000) {
          edges {
            node {
              id
              title
              description
              image
              songs {
                id
              }
            }
          }
        }
      }
    `
  )

  return (
    <Card>
      <List
        subheader={<ListSubheader>Songbooks</ListSubheader>}
        component="nav"
      >
        {books.map(({ node: book }) => (
          <BookListItem
            key={book.id}
            title={book.title}
            description={book.description}
            image={book.image}
            id={book.id}
          />
        ))}
      </List>
    </Card>
  )
}

export default BookList
