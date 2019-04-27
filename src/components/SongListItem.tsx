import * as React from "react"
import { ListItemText } from "@material-ui/core"
import { ListItemLink } from "./GatsbyLinkWrappers"
import { Song } from "../types/song"
import generateSongDescription from "../utils/generateSongDescription"

interface SongListItemProps {
  bookId: string
  bookTitle: string
  song: Song
  style: React.CSSProperties
}

const SongListItem: React.FunctionComponent<SongListItemProps> = React.memo(
  ({ bookId, bookTitle, song, style }) => {
    const { title, type, page, id } = song

    return (
      <ListItemLink button to={`/${bookId}/${id}`} style={style}>
        <ListItemText
          primary={title}
          secondary={generateSongDescription(type, bookTitle, page)}
        />
      </ListItemLink>
    )
  }
)

export default SongListItem
