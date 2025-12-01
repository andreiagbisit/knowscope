function extractYoutubeId(url) {
  if (!url) return null

  try {
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split(/[?&]/)[0]
    }

    const urlObj = new URL(url)

    const id = urlObj.searchParams.get('v')
    if (id) return id

    const paths = urlObj.pathname.split('/')

    const embedIndex = paths.indexOf('embed')
    if (embedIndex !== -1) {
      return paths[embedIndex + 1] || null
    }

    const vIndex = paths.indexOf('v')
    if (vIndex !== -1) {
      return paths[vIndex + 1] || null
    }

    return null
  } catch {
    return null
  }
}

export default extractYoutubeId
