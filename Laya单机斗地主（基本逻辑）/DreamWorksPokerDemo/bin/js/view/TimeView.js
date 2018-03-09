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
 * 时钟倒计时
 */
var TimeView = /** @class */ (function (_super) {
    __extends(TimeView, _super);
    function TimeView() {
        var _this = _super.call(this) || this;
        _this.num = 60;
        _this.lab_time.text = _this.num + "";
        _this.visible = false;
        return _this;
    }
    TimeView.prototype.showCountDonw = function () {
        this.visible = true;
        //进度增加的帧循环
        Laya.timer.loop(1000, this, this.onLoop);
    };
    TimeView.prototype.goneCountDown = function () {
        this.visible = false;
    };
    /**
   * 资源加载进度模拟（假进度）
   */
    TimeView.prototype.onLoop = function () {
        this.num--;
        this.lab_time.text = this.num + "";
        if (this.num <= 0) {
            // 倒计时结束 置灰按钮
            // 去除计时器
            Laya.timer.clear(this, this.onLoop);
        }
        else {
        }
    };
    return TimeView;
}(ui.CountDownUI));
//# sourceMappingURL=TimeView.js.map