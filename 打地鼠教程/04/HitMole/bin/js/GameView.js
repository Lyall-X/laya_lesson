var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * GameView
 */
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.moleNum = 9;
        _this.moles = new Array();
        var hitCallBackHd = Laya.Handler.create(_this, _this.setScore, null, false);
        for (var i = 0; i < _this.moleNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), box.getChildByName("scoreImg"), 21, hitCallBackHd);
            _this.moles.push(mole);
        }
        _this.hammer = new Hammer();
        _this.addChild(_this.hammer);
        _this.hammer.visible = false;
        return _this;
    }
    GameView.prototype.onLoop = function () {
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    GameView.prototype.startGame = function () {
        this.timeBar.value = 1;
        this.score = 0;
        this.updateScoreUI();
        this.hammer.start();
        this.hammer.visible = true;
        Laya.timer.loop(1000, this, this.onLoop);
    };
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        if (!GameMain.gameOver) {
            GameMain.gameOver = new GameOver();
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 40;
        GameMain.gameOver.setScoreUI(this.score);
        Laya.stage.addChild(GameMain.gameOver);
        console.log("游戏结束！");
    };
    GameView.prototype.setScore = function (type) {
        this.score += (type == 1 ? -100 : 100);
        if (this.score < 0)
            this.score = 0;
        this.updateScoreUI();
    };
    GameView.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map