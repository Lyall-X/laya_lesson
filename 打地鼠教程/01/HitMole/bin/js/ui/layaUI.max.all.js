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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "child": [{ "props": { "x": 25, "y": 25, "skin": "ui/back.png" }, "type": "Image" }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "var": "normal", "y": 3 }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "var": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-01.png" }, "type": "Image" }], "props": { "x": 158, "y": 193 } }], "props": { "width": 800, "height": 600 } };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map