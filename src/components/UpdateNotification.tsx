import * as React from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react-lite"
import {
  Snackbar,
  Button,
  IconButton,
  withStyles,
  WithStyles,
  Theme,
  createStyles,
  SnackbarContent,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import InfoIcon from "@material-ui/icons/Info"
import { blue } from "@material-ui/core/colors"

class UpdateNotificationState {
  @observable updateAvailable = false

  @action
  show = () => (this.updateAvailable = true)

  @action
  hide = () => (this.updateAvailable = false)
}

export const updateNotificationState = new UpdateNotificationState()

const handleDoUpdate = () => window.location.reload()

const styles = (theme: Theme) =>
  createStyles({
    info: {
      backgroundColor: blue[600],
    },
    infoIcon: {
      opacity: 0.9,
      marginRight: theme.spacing.unit,
    },
    message: {
      display: "flex",
      alignItems: "center",
    },
  })

interface UpdateNotificationProps extends WithStyles<typeof styles> {}

export const UpdateNotification: React.FunctionComponent<
  UpdateNotificationProps
> = observer(({ classes }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    open={updateNotificationState.updateAvailable}
    onClose={updateNotificationState.hide}
  >
    <SnackbarContent
      aria-describedby={"message-id"}
      className={classes.info}
      message={
        <span id="message-id" className={classes.message}>
          <InfoIcon className={classes.infoIcon} /> An update is available to
          Snapsen
        </span>
      }
      action={[
        <Button
          key="reload"
          color="inherit"
          size="small"
          onClick={handleDoUpdate}
        >
          Reload
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={updateNotificationState.hide}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  </Snackbar>
))

export default withStyles(styles)(UpdateNotification)
