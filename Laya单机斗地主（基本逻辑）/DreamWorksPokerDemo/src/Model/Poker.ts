/**
 *  扑克牌类
 */
class Poker {
    public pokerType:number; //花色 + 大王小王(1234.56)
    public pokerValue:number; // 12345...JQKA
    public pokerPic:string; //图片地址
    public isSelect:boolean; // 是否已经被选中（出头）

    public isDelete:boolean; //是否删除该牌

    public img:Laya.Image = new Laya.Image();             //创建Image实例
    
    public getStringValue():string{
        return this.pokerValue+"";
    }

    constructor(pokerPic:string, pokerType:number, pokerValue:number) {
        this.pokerPic = pokerPic;
        this.pokerValue = pokerValue;
        this.pokerType = pokerType;
        this.img.skin = pokerPic;
        this.isSelect = false;

        //按钮按下事件监听
		this.img.on(Laya.Event.MOUSE_DOWN,this,this.onSelect);
    }

    private onSelect(e:Laya.Event):void{
        // 选择扑克牌 (出头)
        if(this.isSelect){
            // 已选中，需要进行缩头动画
            Laya.Tween.to(this.img,{y:500},300,Laya.Ease.backOut,null); // Laya.Handler.create(this,this.showComplete)
             this.isSelect = false;
        }else{
            // 未选中，进行出头动画
             Laya.Tween.to(this.img,{y:465},500,Laya.Ease.backIn,null); // Laya.Handler.create(this,this.reset)
            this.isSelect = true;
        }
    }

    public suotouAnim():void{
        Laya.Tween.to(this.img,{y:500},300,Laya.Ease.backOut,null); // Laya.Handler.create(this,this.showComplete)
        this.isSelect = false;
    }

}

