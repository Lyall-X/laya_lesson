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
 * 桌面类
 */
var CardView = /** @class */ (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        var _this = _super.call(this) || this;
        _this.visible = false;
        _this.btn_cancel.on(Laya.Event.MOUSE_DOWN, _this, _this.cancel);
        _this.btn_determine.on(Laya.Event.MOUSE_DOWN, _this, _this.determine);
        return _this;
    }
    CardView.prototype.cancel = function (e) {
        this.event("click_card", e.target.name);
    };
    CardView.prototype.determine = function (e) {
        this.event("click_card", e.target.name);
    };
    CardView.prototype.showBackground = function () {
        this.visible = true;
    };
    return CardView;
}(ui.CardPageUI));
//# sourceMappingURL=CardView.js.map