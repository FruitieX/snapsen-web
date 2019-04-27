import { Song } from "./song"

export interface Book {
  title: string
  id: string
  description: string
  primaryColor: string
  author: {
    name: string
    email: string
  }
  image: string
  songs: Song[]
}
