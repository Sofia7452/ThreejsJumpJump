import gameView from './view'
import gameModel from './model'
//事件需要和相应的回调函数绑定
class GameController {
  constructor() {
    this.gameView = gameView
    this.gameModel = gameModel
    this.gameModel.stageChanged.attach((sender, args) => {
      const { stage: stageName } = args
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
      }
    })
  }


  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        // modal通过controller层改变view
        this.gameModel.setStage('game-over')
      }
    }
    const gameOverPageCallbacks = () => {
      this.gameView.setStage('game')
    }
    this.gameView.initGamePage(gamePageCallbacks)
    this.gameView.initGameOverpage(gameOverPageCallbacks)
  }

}
export default new GameController()