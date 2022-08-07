import PhoneticType from '../types/PhoneticType'
import WordType from '../types/WordType'

export default function getPhonetics(words: WordType[]) {
  const phoneticsList: any[] = []

  for (const word of words) {
    const phonetics = word.phonetics
    for (const phonetic of phonetics) {
      const phoneticObject: PhoneticType = {
        text: phonetic.text,
        audio: phonetic.audio,
      }

      if (
        !phoneticsList.some(
          (phonetic) => phonetic.audio === phoneticObject.audio
        )
      ) {
        phoneticsList.push(phoneticObject)
      }
    }
  }

  return phoneticsList
}
