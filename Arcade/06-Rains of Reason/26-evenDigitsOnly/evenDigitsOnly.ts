function solution(n: number): boolean {
    return String(n).split('').every(digit => Number(digit) % 2 === 0)
}