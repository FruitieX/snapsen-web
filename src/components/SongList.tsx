import * as React from "react"
import { List, Card, ListSubheader } from "@material-ui/core"
import { Song } from "../types/song"
import SongListItem from "./SongListItem"

import { FixedSizeList, areEqual } from "react-window"
import { WindowScroller } from "react-virtualized"

interface SongListProps {
  songs: Song[]
  bookId: string
  bookTitle: string
}

const songListItemHeight = 60 // react-window wants this upfront, measured through browser dev tools
const ssrWindowHeight = 2160 // assume 4K :-)

const SongList: React.FunctionComponent<SongListProps> = ({
  songs,
  bookId,
  bookTitle,
}) => {
  const [height, setHeight] = React.useState(
    // don't break server-side rendering
    typeof window === "undefined" ? ssrWindowHeight : window.innerHeight
  )

  const listRef = React.useRef<FixedSizeList>(null)

  const handleScroll = React.useCallback(
    ({ scrollTop }: { scrollTop: number }) => {
      if (listRef.current) {
        listRef.current.scrollTo(scrollTop)
      }
    },
    []
  )

  const handleResize = React.useCallback(
    () => setHeight(window.innerHeight),
    []
  )

  // Handle browser resize
  React.useEffect(() => {
    // Skip this effect while server-side rendering
    if (typeof window === "undefined") return

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Beware of hacks below, to get WindowScroller working with react-window:
  // https://github.com/bvaughn/react-window/issues/30#issuecomment-428868071
  return (
    <Card>
      <List subheader={<ListSubheader>Songs</ListSubheader>} component="nav">
        <WindowScroller onScroll={handleScroll}>{() => <div />}</WindowScroller>
        <FixedSizeList
          height={height}
          width="100%"
          ref={listRef}
          itemCount={songs.length}
          itemSize={songListItemHeight}
          overscanCount={10}
          style={{ height: "100%" }}
        >
          {React.memo(
            ({ style, index }) => (
              <SongListItem
                song={songs[index]}
                bookId={bookId}
                bookTitle={bookTitle}
                style={style}
              />
            ),
            areEqual
          )}
        </FixedSizeList>
      </List>
    </Card>
  )
}

export default SongList
