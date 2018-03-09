/**
 *  扑克牌类
 */
var Poker = /** @class */ (function () {
    function Poker(pokerPic, pokerType, pokerValue) {
        this.img = new Laya.Image(); //创建Image实例
        this.pokerPic = pokerPic;
        this.pokerValue = pokerValue;
        this.pokerType = pokerType;
        this.img.skin = pokerPic;
        this.isSelect = false;
        //按钮按下事件监听
        this.img.on(Laya.Event.MOUSE_DOWN, this, this.onSelect);
    }
    Poker.prototype.onSelect = function (e) {
        // 选择扑克牌 (出头)
        if (this.isSelect) {
            // 已选中，需要进行缩头动画
            Laya.Tween.to(this.img, { y: 500 }, 300, Laya.Ease.backOut, null); // Laya.Handler.create(this,this.showComplete)
            this.isSelect = false;
        }
        else {
            // 未选中，进行出头动画
            Laya.Tween.to(this.img, { y: 465 }, 500, Laya.Ease.backIn, null); // Laya.Handler.create(this,this.reset)
            this.isSelect = true;
        }
    };
    return Poker;
}());
//# sourceMappingURL=Poker.js.map