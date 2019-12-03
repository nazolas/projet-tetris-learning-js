
const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

// Calculate size of canvas from constants.
this.ctx.canvas.width = COLS * BLOCK_SIZE
this.ctx.canvas.height = ROWS * BLOCK_SIZE

// Scale blocks
this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
