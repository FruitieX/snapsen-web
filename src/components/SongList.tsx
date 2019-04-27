import * as React from "react"
import { List, Card, ListSubheader } from "@material-ui/core"
import { Song } from "../types/song"
import SongListItem from "./SongListItem"

interface SongListProps {
  songs: Song[]
  bookId: string
  bookTitle: string
}

const SongList: React.FunctionComponent<SongListProps> = ({
  songs,
  bookId,
  bookTitle,
}) => (
  <Card>
    <List subheader={<ListSubheader>Songs</ListSubheader>} component="nav">
      {songs.map(song => (
        <SongListItem bookId={bookId} bookTitle={bookTitle} {...song} />
      ))}
    </List>
  </Card>
)

export default SongList
