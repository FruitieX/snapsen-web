/**
 * Generates a short song description
 *
 * @param type Song type (e.g. "Snapsvisa")
 * @param bookTitle Title of containing book
 * @param page Page number of song
 */
const generateSongDescription = (
  type: string,
  bookTitle: string,
  page: number
) => `${type}, ${bookTitle} (p. ${page})`

export default generateSongDescription
