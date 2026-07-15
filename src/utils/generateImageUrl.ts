// filename = wedding_01
// format = jpg | webp
// option = c_fill, w_400

function generateImageUrl({
  filename,
  format,
  cnm,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  cnm: '1455' | '1116'
  option?: string
}) {
  return `https://res.cloudinary.com/y0qp0xrk/image/upload/${option}/v178366${cnm}/${filename}.${format}`
}

export default generateImageUrl
