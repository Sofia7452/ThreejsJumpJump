//class有继承/多态但缺少私有化功能
import gameController from './controller'
class Game {
  constructor() {
    this.gameController = gameController
  }
  init() {
    this.gameController.initPages()
  }
}

export default new Game()