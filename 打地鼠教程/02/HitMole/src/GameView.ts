/**
 * GameView
 */
class GameView extends ui.GameUI {
    private moles:Array<Mole>;
    private moleNum:number =9;
    constructor() {
        super();
        this.moles = new Array<Mole>();
        for(var i:number=0;i<this.moleNum;i++){
            var box:Laya.Box = this.getChildByName("item"+i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image,
                box.getChildByName("hit") as Laya.Image ,21);
            this.moles.push(mole);
        }
        Laya.timer.loop(1000,this,this.onLoop);
    }
    onLoop():void{
        var index:number = Math.floor(Math.random()*this.moleNum);
        this.moles[index].show();
    }
}