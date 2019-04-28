/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"

import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
  Theme,
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core"
import { brown } from "@material-ui/core/colors"
import Helmet from "react-helmet"

import "typeface-roboto"

import Drawer from "./Drawer"
import Header from "./Header"
import UpdateNotification from "./UpdateNotification"

const theme = createMuiTheme({
  palette: {
    primary: brown,
  },
  typography: {
    useNextVariants: true,
  },
})

const styles = (theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar, // pushes down content by height of Header
    content: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
    },
  })

interface LayoutProps extends WithStyles<typeof styles> {}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  classes,
}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Helmet
      title="Snapsen"
      meta={[
        { name: "description", content: "A digital songbook web-app" },
        { name: "keywords", content: "songbook, snapsen" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
      ]}
    />
    <Drawer />
    <Header />
    <div className={classes.toolbar} />
    <div className={classes.content}>
      <main>{children}</main>
    </div>
    <UpdateNotification />
  </MuiThemeProvider>
)

export default withStyles(styles)(Layout)
