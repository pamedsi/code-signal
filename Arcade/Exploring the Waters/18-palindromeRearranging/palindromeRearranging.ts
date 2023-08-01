function solution(inputString: string): boolean {
  class KeyOccurrences {
    key: string
    appearances: number

    constructor(key: string) {
      this.key = key
      this.appearances = 1
    }
    
    repeat () {
      this.appearances++
    }
  }

  const charactersCounter = (word: string) => {
    const inputRepetitions: KeyOccurrences[] = []

    word.split('').forEach(key => {
      const repeatedKey = inputRepetitions.find(occurrence => occurrence.key === key)
      if (!repeatedKey) inputRepetitions.push(new KeyOccurrences(key))
      else repeatedKey.repeat()
    })

    return inputRepetitions
  }
  
  const moreThanOneOddAppearance = (keysAppearances: KeyOccurrences[]) => {
    let oddAppearances = 0

    keysAppearances.forEach(keyAppearances => {
      if (keyAppearances.appearances % 2 === 1) oddAppearances++
      if (oddAppearances > 1) return
    })

    return oddAppearances <= 1
  }

  const timesKeyAppeared = charactersCounter(inputString)

  return moreThanOneOddAppearance(timesKeyAppeared)
}