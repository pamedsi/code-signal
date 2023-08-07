function solution(cell1: string, cell2: string): boolean {
  const chessBoard = [
    ["W", "B"],
    ["B", "W"]
  ]

  const color1 = chessBoard[(Number(cell1[1]) - 1) % 2][(cell1[0].charCodeAt(0) - 65) % 2]
  const color2 = chessBoard[(Number(cell2[1]) - 1) % 2][(cell2[0].charCodeAt(0) - 65) % 2]
  
  return color1 === color2
}