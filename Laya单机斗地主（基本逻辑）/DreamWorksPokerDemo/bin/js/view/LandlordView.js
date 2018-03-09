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
 * 抢地主提示类
 */
var LandLordView = /** @class */ (function (_super) {
    __extends(LandLordView, _super);
    function LandLordView() {
        var _this = _super.call(this) || this;
        _this.num = 60;
        _this.lab_num.text = _this.num + "";
        _this.visible = false;
        //按钮按下事件监听
        _this.btn_buqiang.on(Laya.Event.MOUSE_DOWN, _this, _this.buqiang);
        _this.btn_qiang.on(Laya.Event.MOUSE_DOWN, _this, _this.qiang);
        return _this;
    }
    /**
     * 不抢地主
     */
    LandLordView.prototype.buqiang = function (e) {
        console.log("不抢地主");
        this.visible = false;
        // 去除计时器
        Laya.timer.clear(this, this.onLoop);
        this.event("click_landlord", e.target.name);
    };
    /**
     * 抢地主
     */
    LandLordView.prototype.qiang = function (e) {
        console.log("抢地主");
        this.visible = false;
        // 去除计时器
        Laya.timer.clear(this, this.onLoop);
        this.event("click_landlord", e.target.name);
    };
    LandLordView.prototype.showCountDonw = function () {
        this.visible = true;
        //进度增加的帧循环
        Laya.timer.loop(1000, this, this.onLoop);
    };
    LandLordView.prototype.goneCountDown = function () {
        this.visible = false;
    };
    LandLordView.prototype.onLoop = function () {
        this.num--;
        this.lab_num.text = this.num + "";
        if (this.num <= 0) {
            // 倒计时结束 不抢地主操作 
            this.visible = false;
            // 去除计时器
            Laya.timer.clear(this, this.onLoop);
        }
        else {
        }
    };
    return LandLordView;
}(ui.LandlordPageUI));
//# sourceMappingURL=LandlordView.js.map