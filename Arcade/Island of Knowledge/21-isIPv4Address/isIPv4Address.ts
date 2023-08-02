function _solution(inputString: string): boolean {
    const regexForNumbers = /^[0-9]+$/
    const numbersInString = inputString.split(".")

    if (numbersInString.length !== 4) return false
    if (numbersInString.some(number => 
        (number.startsWith("0") && number.length > 1) || (!number.match(regexForNumbers)))) 
        return false
    const numbersInInt = numbersInString.map(element => parseFloat(element))
    if (numbersInInt.some(isNaN)) return false
    return !numbersInInt.some(number => number < 0 || number > 255)
}
