import * as React from "react"
import { List, Card, ListSubheader } from "@material-ui/core"
import { Song } from "../types/song"
import SongListItem from "./SongListItem"

interface SongListProps {
  songs: Song[]
  bookId: string
}

const SongList: React.FunctionComponent<SongListProps> = ({
  songs,
  bookId,
}) => (
  <Card>
    <List subheader={<ListSubheader>Songs</ListSubheader>} component="nav">
      {songs.map(song => (
        <SongListItem
          key={song.id}
          title={song.title}
          description={song.description}
          id={song.id}
          bookId={bookId}
        />
      ))}
    </List>
  </Card>
)

export default SongList
