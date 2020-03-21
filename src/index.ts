const world = 'World'

export const hello = (word: string = world): string => {
  return `Hello ${word}!`
}
