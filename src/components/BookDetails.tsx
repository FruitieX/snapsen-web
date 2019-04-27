import * as React from "react"
import {
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  ListSubheader,
  CardHeader,
  Avatar,
  IconButton,
  Grid,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Button,
  ListItem,
} from "@material-ui/core"
import BackIcon from "@material-ui/icons/ArrowBack"
import { Song } from "../types/song"
import SongItem from "./SongItem"
import { ButtonLink } from "./GatsbyLinkWrappers"
import { Book } from "../types/book"

const styles = (theme: Theme) =>
  createStyles({
    backButton: {
      marginBottom: theme.spacing.unit,
    },
    bookCard: {
      marginBottom: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  })

interface BookItemProps extends Book, WithStyles<typeof styles> {}

const BookDetails: React.FunctionComponent<BookItemProps> = ({
  title,
  description,
  image,
  id,
  songs,
  classes,
}) => {
  return (
    <>
      <Card className={classes.bookCard}>
        <ButtonLink
          color="primary"
          size="large"
          className={classes.backButton}
          to={`/`}
        >
          <BackIcon className={classes.leftIcon} />
          Back
        </ButtonLink>
        <CardHeader
          avatar={<Avatar aria-label="Songbook info" src={image} />}
          title={title}
          subheader={description}
        />
      </Card>
      <Card>
        <List subheader={<ListSubheader>Songs</ListSubheader>} component="nav">
          {songs.map(song => (
            <SongItem
              key={song.id}
              title={song.title}
              description={song.description}
              id={song.id}
              bookId={id}
            />
          ))}
        </List>
      </Card>
    </>
  )
}

export default withStyles(styles)(BookDetails)
