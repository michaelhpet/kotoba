import MeaningType from './MeaningType'
import PhoneticType from './PhoneticType'

export default interface WordType {
  word: string
  origin?: string
  phonetics: PhoneticType[]
  meanings: MeaningType[]
}
