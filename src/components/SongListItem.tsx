import * as React from "react"
import { ListItemText } from "@material-ui/core"
import { ListItemLink } from "./GatsbyLinkWrappers"
import { Song } from "../types/song"
import generateSongDescription from "../utils/generateSongDescription"

interface SongListItemProps extends Song {
  bookId: string
  bookTitle: string
}

const SongListItem: React.FunctionComponent<SongListItemProps> = ({
  title,
  type,
  page,
  id,
  bookId,
  bookTitle,
}) => (
  <ListItemLink button to={`/${bookId}/${id}`}>
    <ListItemText
      primary={title}
      secondary={generateSongDescription(type, bookTitle, page)}
    />
  </ListItemLink>
)

export default SongListItem
