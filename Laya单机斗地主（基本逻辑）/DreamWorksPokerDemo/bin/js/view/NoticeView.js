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
var NoticeView = /** @class */ (function (_super) {
    __extends(NoticeView, _super);
    function NoticeView() {
        var _this = _super.call(this) || this;
        _this.notice.text = "斗地主！";
        _this.visible = false;
        return _this;
    }
    NoticeView.prototype.showNoticeView = function () {
        this.visible = true;
    };
    NoticeView.prototype.setLableText = function (text) {
        this.text = text;
        this.notice.text = text;
    };
    return NoticeView;
}(ui.NoticeUI));
//# sourceMappingURL=NoticeView.js.map