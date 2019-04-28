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
import { ButtonLink } from "../../utils/GatsbyLinkWrappers"
import { Book } from "../../types/book"
import SongList from "../Song/SongList"
import { observer } from "mobx-react-lite"
import SEO from "../Layout/SEO"

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

interface BookItemProps extends WithStyles<typeof styles> {
  book: Book
}

const BookDetails: React.FunctionComponent<BookItemProps> = observer(
  ({ classes, book: { title, id, image, description, songs } }) => (
    <>
      <SEO
        title={`Snapsen | ${title}`}
        keywords={[title, `snapsvisa`, `sångbok`]}
      />
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
          avatar={<Avatar aria-label="Songbook image" src={image} />}
          title={title}
          subheader={description}
        />
        <SongList songs={songs} bookId={id} bookTitle={title} />
      </Card>
    </>
  )
)

export default withStyles(styles)(BookDetails)
