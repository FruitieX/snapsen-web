import * as React from "react"
import {
  Card,
  CardHeader,
  Avatar,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from "@material-ui/core"
import BackIcon from "@material-ui/icons/ArrowBack"
import { ButtonLink } from "./GatsbyLinkWrappers"
import { Book } from "../types/book"
import SongList from "./SongList"
import { searchStore } from "./Header"
import { observer } from "mobx-react-lite"

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

const BookDetails: React.FunctionComponent<BookItemProps> = observer(
  ({ title, description, image, id, songs, classes }) => (
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
      <SongList
        songs={songs}
        bookId={id}
        bookTitle={title}
        filter={searchStore.value}
      />
    </>
  )
)

export default withStyles(styles)(BookDetails)
