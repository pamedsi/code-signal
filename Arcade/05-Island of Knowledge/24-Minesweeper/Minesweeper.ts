class _Minesweeper {
  private solution: number[][]

  constructor (minesweeperGrid: boolean[][]) {
    this.solution = []  

   minesweeperGrid.forEach((row, rowIndex) => {
     const currentTow: number[] = []
     row.forEach((_cell, columnIndex) => {
       let vizinhos = 0
       
       // Vizinhos horizontais e verticais:
       if (this.getCell(minesweeperGrid, rowIndex, columnIndex + 1)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex, columnIndex - 1)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex - 1, columnIndex)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex + 1, columnIndex)) vizinhos ++
 
       //  VizinhosminesweeperGrid, diagonais
       if (this.getCell(minesweeperGrid, rowIndex - 1, columnIndex - 1)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex - 1, columnIndex + 1)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex + 1, columnIndex - 1)) vizinhos ++
       if (this.getCell(minesweeperGrid, rowIndex + 1, columnIndex + 1)) vizinhos ++
 
       currentTow.push(vizinhos)
     })
 
     this.solution.push(currentTow)
  })

  }

  getCell = (array: boolean[][], rowIndex: number, columnIndex: number) => {
    try {
      return array[rowIndex][columnIndex]
    } catch (_error) {
      return false
    }
  }

  getSolution() {
    return this.solution
  }
}
