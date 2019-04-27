import * as React from "react"
import { ListItem, Button } from "@material-ui/core"
import GatsbyLink, { GatsbyLinkProps } from "gatsby-link"
import { ListItemProps } from "@material-ui/core/ListItem"
import { ButtonProps } from "@material-ui/core/Button"

// workarounds for component prop typings: https://material-ui.com/guides/typescript/#usage-of-component-property

export const ListItemLink = <T extends {}>(
  props: GatsbyLinkProps<T> & ListItemProps
) => <ListItem {...props} component={GatsbyLink as any} />

export const ButtonLink = <T extends {}>(
  props: GatsbyLinkProps<T> & ButtonProps
) => <Button {...props} component={GatsbyLink as any} />
