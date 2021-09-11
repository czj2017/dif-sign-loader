class  DifSignLoaderError {
  constructor (error) {
    const { title, detail} = error
    this.name = 'DifSignLoaderError'
    this.message = `${this.name}:\n${title}:${detail}`
  }
}

module.exports = DifSignLoaderError
