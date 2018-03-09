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
 * GameOver
 */
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.restartBtn.on(Laya.Event.CLICK, _this, _this.restartGame);
        return _this;
    }
    GameOver.prototype.restartGame = function () {
        this.removeSelf();
        GameMain.gameView.removeSelf();
        Laya.stage.addChild(GameMain.gameStart);
    };
    GameOver.prototype.setScoreUI = function (score) {
        var data = {};
        var temp = score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameOver;
}(ui.GameOverUI));
//# sourceMappingURL=GameOver.js.map