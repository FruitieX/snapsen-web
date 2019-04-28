const generateSongDescription = (
  type: string,
  bookTitle: string,
  page: number
) => `${type}, ${bookTitle} (p. ${page})`

export default generateSongDescription
