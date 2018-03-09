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
var UserView = /** @class */ (function (_super) {
    __extends(UserView, _super);
    function UserView() {
        var _this = _super.call(this) || this;
        _this.img_landlord.visible = false;
        _this.visible = false;
        return _this;
    }
    UserView.prototype.showUserView = function () {
        this.visible = true;
    };
    UserView.prototype.showLandlord = function () {
        this.img_landlord.visible = true;
    };
    UserView.prototype.goneLandlord = function () {
        this.img_landlord.visible = false;
    };
    return UserView;
}(ui.UserInfoUI));
//# sourceMappingURL=UserView.js.map