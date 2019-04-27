import * as React from "react"
import { List, Card, ListSubheader } from "@material-ui/core"
import { Song } from "../types/song"
import SongListItem from "./SongListItem"

import { FixedSizeList } from "react-window"
import { WindowScroller } from "react-virtualized"

interface SongListProps {
  songs: Song[]
  bookId: string
  bookTitle: string
}

const songListItemHeight = 60

const SongList: React.FunctionComponent<SongListProps> = ({
  songs,
  bookId,
  bookTitle,
}) => {
  const listRef = React.useRef<FixedSizeList>(null)
  const handleScroll = React.useCallback(
    ({ scrollTop }: { scrollTop: number }) => {
      if (listRef.current) {
        listRef.current.scrollTo(scrollTop)
      }
    },
    []
  )

  // Beware of hacks below to get WindowScroller working with react-window:
  // https://github.com/bvaughn/react-window/issues/30#issuecomment-428868071
  return (
    <Card>
      <List subheader={<ListSubheader>Songs</ListSubheader>} component="nav">
        <WindowScroller onScroll={handleScroll}>{() => <div />}</WindowScroller>
        <FixedSizeList
          ref={listRef}
          height={window.innerHeight}
          width="100%"
          itemCount={songs.length}
          itemSize={songListItemHeight}
          style={{ height: "100%" }}
        >
          {({ style, index }) => (
            <SongListItem
              song={songs[index]}
              bookId={bookId}
              bookTitle={bookTitle}
              style={style}
            />
          )}
        </FixedSizeList>
      </List>
    </Card>
  )
}

export default SongList
