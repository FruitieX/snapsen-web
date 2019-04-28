const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allBooksJson(limit: 1000) {
        edges {
          node {
            id
            songs {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const bookTemplate = path.resolve("src/templates/book.tsx")
    const songTemplate = path.resolve("src/templates/song.tsx")

    result.data.allBooksJson.edges.forEach((edge, bookIndex) => {
      const book = edge.node

      // Create a book details page for each book
      createPage({
        path: `/${book.id}`,
        component: bookTemplate,
        context: {
          bookId: book.id,
          index: bookIndex,
        },
      })

      // Create a song details page for each song
      book.songs.forEach((song, songIndex) => {
        createPage({
          path: `/${book.id}/${song.id}`,
          component: songTemplate,
          context: {
            songId: song.id,
            index: songIndex,
            bookId: book.id,
          },
        })
      })
    })
  })
}
