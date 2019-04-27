/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core"
import { brown } from "@material-ui/core/colors"
import Helmet from "react-helmet"

import "typeface-roboto"

const theme = createMuiTheme({
  palette: {
    primary: brown,
  },
})

const Layout: React.FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet
          title="Snapsen"
          meta={[
            { name: "description", content: "A digital songbook web-app" },
            { name: "keywords", content: "songbook, snapsen" },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </MuiThemeProvider>
    )}
  />
)

export default Layout
