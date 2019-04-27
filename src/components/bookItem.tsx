import * as React from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  ListSubheader,
} from "@material-ui/core"
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link"
import { ListItemProps } from "@material-ui/core/ListItem"

interface BookItemProps {
  title: string
  description: string
  id: string
}

// workaround for component prop typings: https://material-ui.com/guides/typescript/#usage-of-component-property
const ListItemLink = <T extends {}>(
  props: GatsbyLinkProps<T> & ListItemProps
) => <ListItem {...props} component={GatsbyLink as any} />

const BookItem: React.FunctionComponent<BookItemProps> = ({
  title,
  description,
  id,
}) => (
  <ListItemLink button to={`/${id}`}>
    <ListItemText primary={title} secondary={description} />
  </ListItemLink>
)

export default BookItem
