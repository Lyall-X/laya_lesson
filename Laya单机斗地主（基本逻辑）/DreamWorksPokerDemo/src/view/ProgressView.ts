class ProgressView extends ui.ProgressUI
{
	private progress: number=0;

    constructor() {
		super();
        this.btn_enter.visible = false;
	    //进度增加的帧循环
		Laya.timer.loop(30,this,this.onLoop);
        this.btn_enter.on(Laya.Event.MOUSE_DOWN,this,this.click);
    }

		
    /**
     * 资源加载进度模拟（假进度）
     */		
    private onLoop():void
    {
        // // TODO_WPP 测试代码记得删除
        // this.progress = 100;

        //进度增加
        this.progress++;
        //最高100%进度
        if(this.progress > 100)
        {
            this.progress=100;
            this.tips.text="游戏加载完毕，即将进入游戏..."

            Laya.timer.clearAll(this);
            //进度增加的帧循环
		    Laya.timer.loop(500,this,this.enter);
     			
        }else
        {
            this.pro.value=this.progress/100;
            this.tips.text="游戏正在加载中，当前进度为："+this.progress+"%!"
        }

    }

    private enter():void{
        this.btn_enter.visible = true;
 
    }

    private click(e:Laya.Event):void{
        Laya.timer.clearAll(this);
        this.removeSelf();	
        //发送点击的组件名称（需在IDE中设置组件的名字）
		this.event("btn_enter",e.target.name);
    }
	
}