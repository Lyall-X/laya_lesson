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
        _this.mole = new Mole(_this.normal, _this.hit, 21);
        Laya.timer.loop(2000, _this, _this.onLoop);
        return _this;
    }
    GameView.prototype.onLoop = function () {
        this.mole.show();
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map