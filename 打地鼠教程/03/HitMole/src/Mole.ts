/**
 * Mole
 */
class Mole {
    private normalState: Laya.Image;    //正常状态的图片
    private hitState: Laya.Image;       //受击状态的图片
    private upY: number;                //地鼠显示状态的最高坐标Y值。
    private downY: number;              //地鼠隐藏前的最低坐标Y值。
    private scoreImg: Laya.Image;        //分数图片
    private scoreY: number;              //分数图片的最高点y值。
    private hitCallBackHd:Laya.Handler;  //受击回调函数处理器

    private isActive: boolean;          //当前地鼠是否已被激活
    private isShow: boolean;            //地鼠是否处于显示状态
    private isHit: boolean;             //地鼠是否处于受击状态
    private type:number;                //地鼠类型

    constructor(normalState:Laya.Image,hitState:Laya.Image,scoreImg:Laya.Image,downY:number,hitCallBackHd:Laya.Handler) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.hitCallBackHd = hitCallBackHd;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.reset();
        this.normalState.on(Laya.Event.MOUSE_DOWN,this,this.hit);
    }
    //重置
    reset():void{
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.scoreImg.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    }

    //显示
    show():void{
        if(this.isActive)return;
        this.isActive = true;
        this.isShow = true;
        this.type = Math.random()<0.3?1:2;
        this.normalState.skin ="ui/mouse_normal_"+this.type+".png";
        this.hitState.skin ="ui/mouse_hit_"+this.type+".png";
        this.scoreImg.skin ="ui/score_"+this.type+".png";
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState,{y:this.upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete));
    }

    //停留
    showComplete():void{
        if(this.isShow && !this.isHit){
            Laya.timer.once(2000,this,this.hide);
        }
    }
    //消失
    hide():void{
        if(this.isShow && !this.isHit){
            this.isShow = false;
            Laya.Tween.to(this.normalState,{y:this.downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset));
        }
    }
    //受击
    hit():void{
        if(this.isShow && !this.isHit){
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this,this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.once(500,this,this.reset);
            this.showScore();
        }
    }
    //显示得分飘字
    showScore():void{
        this.scoreImg.y = this.scoreY+30;
        this.scoreImg.scale(0,0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg,{y:this.scoreY,scaleX:1,scaleY:1},300,Laya.Ease.backOut);
    }
}