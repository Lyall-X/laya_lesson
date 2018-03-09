/**
 * 抢地主提示类
 */
class LandLordView extends ui.LandlordPageUI {

    private num:number;

    constructor() {
        super();
        this.num = 60;
        this.lab_num.text = this.num +"";
        this.visible = false;

        
        //按钮按下事件监听
		this.btn_buqiang.on(Laya.Event.MOUSE_DOWN,this,this.buqiang);
        this.btn_qiang.on(Laya.Event.MOUSE_DOWN,this,this.qiang);
    }

    /**
     * 不抢地主
     */
    private buqiang(e:Laya.Event):void{
        console.log("不抢地主");
        
        this.visible = false;
         // 去除计时器
        Laya.timer.clear(this,this.onLoop);

        
		this.event("click_landlord",e.target.name);
    }

    /**
     * 抢地主
     */
    private qiang(e:Laya.Event):void{
       console.log("抢地主");
       
        this.visible = false;
         // 去除计时器
        Laya.timer.clear(this,this.onLoop);

        
		this.event("click_landlord",e.target.name);
    }

    public showCountDonw():void{
        this.visible = true;
        //进度增加的帧循环
		Laya.timer.loop(1000,this,this.onLoop);
    }

    public goneCountDown():void{
       this.visible = false;
    }

    private onLoop():void
    {
        
        this.num--;
        this.lab_num.text = this.num +"";
    
        if(this.num <= 0)
        {
            // 倒计时结束 不抢地主操作 

            this.visible = false;
            // 去除计时器
             Laya.timer.clear(this,this.onLoop);
     		
        }else
        {
          
        }

    }
}