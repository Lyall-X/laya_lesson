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
var ProgressView = /** @class */ (function (_super) {
    __extends(ProgressView, _super);
    function ProgressView() {
        var _this = _super.call(this) || this;
        _this.progress = 0;
        _this.btn_enter.visible = false;
        //进度增加的帧循环
        Laya.timer.loop(30, _this, _this.onLoop);
        _this.btn_enter.on(Laya.Event.MOUSE_DOWN, _this, _this.click);
        return _this;
    }
    /**
     * 资源加载进度模拟（假进度）
     */
    ProgressView.prototype.onLoop = function () {
        // // TODO_WPP 测试代码记得删除
        // this.progress = 100;
        //进度增加
        this.progress++;
        //最高100%进度
        if (this.progress > 100) {
            this.progress = 100;
            this.tips.text = "游戏加载完毕，即将进入游戏...";
            Laya.timer.clearAll(this);
            //进度增加的帧循环
            Laya.timer.loop(500, this, this.enter);
        }
        else {
            this.pro.value = this.progress / 100;
            this.tips.text = "游戏正在加载中，当前进度为：" + this.progress + "%!";
        }
    };
    ProgressView.prototype.enter = function () {
        this.btn_enter.visible = true;
    };
    ProgressView.prototype.click = function (e) {
        Laya.timer.clearAll(this);
        this.removeSelf();
        //发送点击的组件名称（需在IDE中设置组件的名字）
        this.event("btn_enter", e.target.name);
    };
    return ProgressView;
}(ui.ProgressUI));
//# sourceMappingURL=ProgressView.js.map