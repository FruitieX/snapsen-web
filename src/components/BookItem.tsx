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

interface BookItemProps {
  title: string
  description: string
  image: string
  id: string
}

// workaround for component prop typings: https://material-ui.com/guides/typescript/#usage-of-component-property
const ListItemLink = <T extends {}>(
  props: GatsbyLinkProps<T> & ListItemProps
) => <ListItem {...props} component={GatsbyLink as any} />

const BookItem: React.FunctionComponent<BookItemProps> = ({
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

export default BookItem
