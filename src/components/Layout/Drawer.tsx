import * as React from "react"
import {
  SwipeableDrawer,
  List,
  ListItemText,
  Divider,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  CardHeader,
  Avatar,
} from "@material-ui/core"
import { version } from "../../../package.json"
import { observable, action } from "mobx"
import { observer } from "mobx-react-lite"
import { ListItemLink } from "../../utils/GatsbyLinkWrappers"
import Logo from "../../images/snapsen-icon.png"

const iOS =
  (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

class DrawerState {
  @observable opened = false

  @action
  open = () => (this.opened = true)

  @action
  close = () => (this.opened = false)
}

export const drawerState = new DrawerState()

const drawerWidth = 240

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 64,
    },
    drawer: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  })

interface DrawerProps extends WithStyles<typeof styles> {}

const Drawer: React.FunctionComponent<DrawerProps> = observer(({ classes }) => (
  <SwipeableDrawer
    disableDiscovery={iOS}
    open={drawerState.opened}
    onOpen={drawerState.open}
    onClose={drawerState.close}
    classes={{
      modal: classes.root,
      paper: classes.drawer,
    }}
  >
    <CardHeader
      title="Snapsen"
      subheader={`Version ${version}`}
      avatar={<Avatar aria-label="Songbook image" src={Logo} />}
    />
    <Divider />
    <List>
      <ListItemLink button to={`/`} onClick={drawerState.close}>
        <ListItemText primary="Songbooks" />
      </ListItemLink>
    </List>
    <Divider />
  </SwipeableDrawer>
))

export default withStyles(styles)(Drawer)
