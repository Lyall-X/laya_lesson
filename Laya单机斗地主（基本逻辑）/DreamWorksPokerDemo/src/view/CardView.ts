/**
 * 桌面类
 */
class CardView extends ui.CardPageUI {

    constructor() {
        super();
        this.visible = false;

        this.btn_cancel.on(Laya.Event.MOUSE_DOWN,this,this.cancel);
        this.btn_determine.on(Laya.Event.MOUSE_DOWN,this,this.determine);
    }

    
    private cancel(e:Laya.Event):void{

		this.event("click_card",e.target.name);
    }

    
    private determine(e:Laya.Event):void{
     
		this.event("click_card",e.target.name);
    }

    public showBackground():void{
        this.visible = true;
    }
    
}