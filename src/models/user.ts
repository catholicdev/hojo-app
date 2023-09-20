export interface DailyBibleResp {
  id: number
  sentence: string
  sequence: string
  chapterSequence: number
  bookAbbreviation: string
  isFavorite: boolean
}

export interface FavoriteDailyBibleReq {
  dailyBibleSentenceId: number
  isFavorite: boolean
}
