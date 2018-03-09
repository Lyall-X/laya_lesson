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
        GameUI.uiView = { "type": "View", "child": [{ "props": { "x": 25, "y": 25, "skin": "ui/back.png" }, "type": "Image" }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-01.png" }, "type": "Image" }], "props": { "x": 158, "y": 193, "name": "item0" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-02.png" }, "type": "Image" }], "props": { "x": 345, "y": 191, "name": "item1" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-03.png" }, "type": "Image" }], "props": { "x": 540, "y": 196, "name": "item2" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-04.png" }, "type": "Image" }], "props": { "x": 126, "y": 282, "name": "item3" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-05.png" }, "type": "Image" }], "props": { "x": 344, "y": 285, "name": "item4" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-06.png" }, "type": "Image" }], "props": { "x": 546, "y": 284, "name": "item5" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-07.png" }, "type": "Image" }], "props": { "x": 122, "y": 382, "name": "item6" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-08.png" }, "type": "Image" }], "props": { "x": 346, "y": 388, "name": "item7" } }, { "type": "Box", "child": [{ "props": { "x": 7, "skin": "ui/mouse_normal_1.png", "y": 3, "name": "normal" }, "type": "Image" }, { "props": { "x": 6, "y": 17, "skin": "ui/mouse_hit_1.png", "name": "hit" }, "type": "Image" }, { "props": { "y": 84, "skin": "ui/mask-09.png" }, "type": "Image" }], "props": { "x": 566, "y": 388, "name": "item8" } }], "props": { "width": 800, "height": 600 } };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map