class NoticeView extends ui.NoticeUI
{	
    /****保存捡到的立体****/
    public text: string;
	
    constructor() {
        super();
        this.notice.text = "斗地主！";
        this.visible = false;
    }

    public showNoticeView():void{
        this.visible = true;
    }

    public setLableText(text:string):void
    {
        this.text = text;
        this.notice.text = text;
    }
		
}
