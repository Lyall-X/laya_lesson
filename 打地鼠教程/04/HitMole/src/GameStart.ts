/**
 * GameStart
 */
class GameStart extends ui.GameStartUI{
    constructor() {
        super();
        this.startBtn.on(Laya.Event.CLICK,this,this.startGame);
    }
    //开始游戏
    startGame():void{
        this.removeSelf();
        if(!GameMain.gameView){
            GameMain.gameView = new GameView();
        }
        GameMain.gameView.startGame();
        Laya.stage.addChild(GameMain.gameView);
    }
}