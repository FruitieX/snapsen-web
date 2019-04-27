import * as React from "react"
import { ListItemText } from "@material-ui/core"
import { ListItemLink } from "./GatsbyLinkWrappers"

interface BookItemProps {
  title: string
  description: string
  id: string
  bookId: string
}

const SongListItem: React.FunctionComponent<BookItemProps> = ({
  title,
  description,
  id,
  bookId,
}) => (
  <ListItemLink button to={`/${bookId}/${id}`}>
    <ListItemText primary={title} secondary={description} />
  </ListItemLink>
)

export default SongListItem
