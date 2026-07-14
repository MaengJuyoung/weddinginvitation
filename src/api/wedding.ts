const WEDDING_DATA_URL =
  'https://raw.githubusercontent.com/dbfla6302/Wedding-Invitation/main/db.json'

export async function getWedding(): Promise<Response> {
  return fetch(WEDDING_DATA_URL)
}
