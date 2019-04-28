import * as React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  createStyles,
  Theme,
  WithStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { drawerState } from "./Drawer"
import SearchField from "./SearchField"
import { graphql, useStaticQuery } from "gatsby"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      margin: "0 auto",
      maxWidth: 960,
      padding: "0px 1.0875rem 1.45rem",
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })

interface HeaderProps extends WithStyles<typeof styles> {}

interface SiteTitleData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Header: React.FunctionComponent<HeaderProps> = ({
  classes,
  children,
}) => {
  const {
    site: {
      siteMetadata: { title },
    },
  }: SiteTitleData = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={drawerState.open}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            {title}
          </Typography>
          <SearchField />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default withStyles(styles)(Header)
