function solution(cell1: string, cell2: string): boolean {
  interface Coordinates {
    rowIndex: number
    columnIndex: number
  }

  class ChessBoard {
    private board: string[][]
    private rowTurn = false

    constructor() {
      const chessBoard = new Array(8)
      for (let index = 0; index < chessBoard.length; index++) chessBoard[index] = new Array(8)

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (this.rowTurn) chessBoard[i][j] = "B"
          else chessBoard[i][j] = "W"
          this.alternate()
        }
        this.alternate()
      }
      this.board = chessBoard
    }

    private getCoordinates(cell: string) {
      class LetterToNumber { A = 0; B = 1; C = 2; D = 3; E = 4; F = 5; G = 6; H = 7 }
      const conversor = new LetterToNumber()
      const rowIndex = Number(cell[1]) - 1
      const columnIndex = conversor[cell[0] as keyof LetterToNumber]

      return { rowIndex, columnIndex } as Coordinates
    }

    private alternate(){
      this.rowTurn = !this.rowTurn
    }

    private getColor(coordinates: Coordinates): string {
      return this.board[coordinates.rowIndex][coordinates.columnIndex]
    }

    public compareCellCollors(cell1: string, cell2: string): boolean {
      const cell1Coordinates = this.getCoordinates(cell1)
      const cell2Coordinates = this.getCoordinates(cell2)
      return this.getColor(cell1Coordinates) === this.getColor(cell2Coordinates)
    }
  }
  
  return new ChessBoard().compareCellCollors(cell1, cell2)
}

console.log(solution("B3", "H8"))