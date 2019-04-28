import * as React from "react"
import { ListItemText, ListItemAvatar, Avatar } from "@material-ui/core"
import { ListItemLink } from "../../utils/GatsbyLinkWrappers"

interface BookListItemProps {
  title: string
  description: string
  image: string
  id: string
}

const BookListItem: React.FunctionComponent<BookListItemProps> = ({
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
