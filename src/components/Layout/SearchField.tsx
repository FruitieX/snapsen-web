import * as React from "react"
import { navigate } from "gatsby"
import { observable, action } from "mobx"
import { observer } from "mobx-react-lite"
import {
  InputBase,
  InputAdornment,
  IconButton,
  WithStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core"
import { fade } from "@material-ui/core/styles/colorManipulator"
import SearchIcon from "@material-ui/icons/Search"
import CrossIcon from "@material-ui/icons/Close"

const songDetailsRegex = new RegExp("/.+/.+")

// Stores current search field value, with actions for setting / clearing the value
class SearchFieldState {
  @observable value?: string

  @action
  setValue = (value: string) => {
    this.value = value

    // If we're on song details page and search field changes, navigate to root
    if (songDetailsRegex.test(window.location.pathname)) {
      navigate("/")
    }
  }

  @action
  activateSearch = () => {
    if (this.value === undefined) {
      this.value = ""

      // If we're on song details page when search field activates, navigate to root
      if (songDetailsRegex.test(window.location.pathname)) {
        navigate("/")
      }
    }
  }

  @action
  closeSearch = () => (this.value = undefined)
}

export const searchFieldState = new SearchFieldState()

// Mostly from: https://material-ui.com/demos/app-bar/#app-bar-with-a-primary-search-field
const styles = (theme: Theme) =>
  createStyles({
    search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      overflow: "hidden",
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit * 10,
        width: "auto",
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 6,
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 200,
      },
    },
  })

interface SearchFieldProps extends WithStyles<typeof styles> {}

const SearchField: React.FunctionComponent<SearchFieldProps> = observer(
  ({ classes }) => {
    // Unwraps value from a ChangeEvent
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        searchFieldState.setValue(event.currentTarget.value)
      },
      [searchFieldState]
    )

    // Exits search mode if search field is empty when it's being unfocused
    const handleBlur = React.useCallback(() => {
      if (searchFieldState.value === "") searchFieldState.closeSearch()
    }, [searchFieldState])

    return (
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchFieldState.value || ""}
          onChange={handleChange}
          onFocus={searchFieldState.activateSearch}
          onBlur={handleBlur}
          startAdornment={
            <InputAdornment position="start" disablePointerEvents>
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color="inherit"
                onClick={searchFieldState.closeSearch}
              >
                <CrossIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    )
  }
)

export default withStyles(styles)(SearchField)
