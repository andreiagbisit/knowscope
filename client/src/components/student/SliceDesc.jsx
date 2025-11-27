function SliceDesc(text, limit = 200) {
  if (!text) return ''

  if (text.length <= limit) return text

  const sliced = text.slice(0, limit)

  const lastPunctuationIndex = Math.max(
    sliced.lastIndexOf('.'),
    sliced.lastIndexOf('?'),
    sliced.lastIndexOf('!')
  )

  if (lastPunctuationIndex !== -1) {
    return sliced.slice(0, lastPunctuationIndex + 1)
  }

  const lastSpaceIndex = sliced.lastIndexOf(' ')
  if (lastSpaceIndex !== -1) {
    return sliced.slice(0, lastSpaceIndex)
  }

  return sliced
}

export default SliceDesc
