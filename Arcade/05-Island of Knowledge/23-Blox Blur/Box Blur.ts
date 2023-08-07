function solution(image: number[][]): number[][] {
  class Block3x3 {
    private grid: number[][]
    
    constructor(grid: number[][], rowIndex: number, columnIndex: number){
      this.grid = [
        grid[rowIndex].slice(columnIndex, columnIndex + 3),
        grid[rowIndex + 1].slice(columnIndex, columnIndex + 3),
        grid[rowIndex + 2].slice(columnIndex, columnIndex + 3)
      ]
    }

    calculateBlurPixel() {
      let sum = 0
      this.grid.forEach(row => row.forEach(number => sum += number))
      return Math.floor(sum / 9)
    }
  }

  class Splitter3x3 {
    private blocks: Block3x3[]
    private rows: number
    private columns : number
    
    constructor(image: number[][]){
      this.blocks = []
      this.rows = image.length
      this.columns = image[0].length    
    
      for (let rowIndex = 0; rowIndex < image.length - 2; rowIndex++) {
        for (let columnIndex = 0; columnIndex < image[0].length - 2; columnIndex++) {
          const newBlock = new Block3x3(image, rowIndex, columnIndex)
          this.blocks.push(newBlock)
        }
      }
    }

    getBluredPixel() {
      const bluredPixels: number[][] = []
      let index = 0
      for (let rowIndex = 0; rowIndex < this.rows - 2; rowIndex++) {
        const row: number[] = []
        for (let columnIndex = 0; columnIndex < this.columns - 2; columnIndex++) {
          row.push(this.blocks[index].calculateBlurPixel())
          index++
        }
        bluredPixels.push(row)
      }

      return bluredPixels
    }
  }
  
  return new Splitter3x3(image).getBluredPixel()
}

const image = [
  [7, 4, 0, 1], 
  [5, 6, 2, 2], 
  [6, 10, 7, 8], 
  [1, 4, 2, 0]
  ]

console.log(solution(image))

