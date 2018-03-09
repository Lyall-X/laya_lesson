class UserView extends ui.UserInfoUI {
    constructor() {
        super();
        this.img_landlord.visible = false;
        this.visible = false;
    }

    public showUserView():void{
        this.visible = true;
    }

    public showLandlord():void{
            this.img_landlord.visible = true; 
    }

    public goneLandlord():void{
          this.img_landlord.visible = false; 
    }
} 