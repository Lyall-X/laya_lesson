/**
 * 时钟倒计时
 */
class TimeView extends ui.CountDownUI {
    private num:number;
    constructor() {
        super();
        this.num = 60;
        this.lab_time.text = this.num +"";
        this.visible = false;
    }

    public showCountDonw():void{
        this.visible = true;
        //进度增加的帧循环
		Laya.timer.loop(1000,this,this.onLoop);
    }

    public goneCountDown():void{
       this.visible = false;
    }

      /**
     * 资源加载进度模拟（假进度）
     */		
    private onLoop():void
    {
        
        this.num--;
        this.lab_time.text = this.num +"";
    
        if(this.num <= 0)
        {
            // 倒计时结束 置灰按钮

            // 去除计时器
             Laya.timer.clear(this,this.onLoop);
     		
        }else
        {
          
        }

    }
}