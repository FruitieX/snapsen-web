import * as React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  ListSubheader,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core"
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link"
import { ListItemProps } from "@material-ui/core/ListItem"
import { ListItemLink } from "./GatsbyLinkWrappers"

interface BookItemProps {
  title: string
  description: string
  id: string
  bookId: string
}

const SongItem: React.FunctionComponent<BookItemProps> = ({
  title,
  description,
  id,
  bookId,
}) => (
  <ListItemLink button to={`/${bookId}/${id}`}>
    <ListItemText primary={title} secondary={description} />
  </ListItemLink>
)

export default SongItem
