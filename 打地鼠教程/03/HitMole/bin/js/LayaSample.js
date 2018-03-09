// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(800, 600);
        Laya.stage.bgColor = "#ffcccc";
        var resArray = [
            { url: "res/atlas/ui.json", type: Laya.Loader.ATLAS },
            { url: "ui/back.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        var view = new GameView();
        Laya.stage.addChild(view);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map