/**
 * GameView
 */
class GameView extends ui.GameUI {
    private moles:Array<Mole>;
    private moleNum:number =9;
    private score:number;
    private hammer:Hammer;
    constructor() {
        super();
        this.moles = new Array<Mole>();
        this.timeBar.value = 1;
        this.score = 0;
        var hitCallBackHd:Laya.Handler = Laya.Handler.create(this,this.setScore,null,false);
        for(var i:number=0;i<this.moleNum;i++){
            var box:Laya.Box = this.getChildByName("item"+i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image,
                box.getChildByName("hit") as Laya.Image ,
                box.getChildByName("scoreImg") as Laya.Image,21,hitCallBackHd);
            this.moles.push(mole);
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.start();
        Laya.timer.loop(1000,this,this.onLoop);
    }
    onLoop():void{
        this.timeBar.value -= (1/90);
        if(this.timeBar.value<=0){
            this.gameOver();
            return;
        }
        var index:number = Math.floor(Math.random()*this.moleNum);
        this.moles[index].show();
    }
    gameOver():void{
        Laya.timer.clear(this,this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        console.log("游戏结束！");
    }
    setScore(type:number):void{
        this.score += (type==1?-100:100);
        if(this.score<0)this.score=0;
        this.updateScoreUI();
    }
    updateScoreUI():void{
        var data:any ={};
        var temp:number = this.score;
        for(var i:number=9;i>=0;i--){
            data["item"+i]={index:Math.floor(temp%10)};
            temp/=10;
        }
        this.scoreNums.dataSource = data;
    }
}