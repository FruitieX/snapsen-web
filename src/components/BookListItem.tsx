import * as React from "react"
import { ListItemText, ListItemAvatar, Avatar } from "@material-ui/core"
import { ListItemLink } from "./GatsbyLinkWrappers"

interface BookItemProps {
  title: string
  description: string
  image: string
  id: string
}

const BookListItem: React.FunctionComponent<BookItemProps> = ({
  title,
  description,
  image,
  id,
}) => (
  <ListItemLink button to={`/${id}`}>
    <ListItemAvatar>
      <Avatar src={image} />
    </ListItemAvatar>
    <ListItemText primary={title} secondary={description} />
  </ListItemLink>
)

export default BookListItem
