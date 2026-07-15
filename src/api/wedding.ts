const WEDDING_DATA_URL =
  'https://raw.githubusercontent.com/MaengJuyoung/weddinginvitation/main/db.json'

export function getWedding(): Promise<Response> {
  return fetch(WEDDING_DATA_URL)
}
