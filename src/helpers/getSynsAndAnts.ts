export default function getSynsAndAnts(words: any) {
  const synsList: any[] = []
  const antsList: any[] = []

  for (const word of words) {
    for (const meaning of word.meanings) {
      if (!synsList.includes(meaning.synonyms)) {
        synsList.push(...meaning.synonyms)
      }

      if (!antsList.includes(meaning.antonyms)) {
        antsList.push(...meaning.antonyms)
      }
    }
  }

  return { synonyms: synsList, antonyms: antsList }
}
