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

// Mostly from: https://material-ui.com/demos/app-bar/#app-bar-with-a-primary-search-field
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

const Header: React.FunctionComponent<HeaderProps> = ({
  classes,
  children,
}) => (
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
          {"Snapsen"}
        </Typography>
        <SearchField />
      </Toolbar>
    </AppBar>
    <div className={classes.content}>{children}</div>
  </div>
)

export default withStyles(styles)(Header)
