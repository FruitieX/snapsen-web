const generateSongDescription = (
  type: string,
  bookTitle: string,
  page: string
) => `${type}, ${bookTitle} (p. ${page})`

export default generateSongDescription
