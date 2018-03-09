
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class CardPageUI extends View {
		public btn_determine:Laya.Image;
		public btn_cancel:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1350,"right":0,"height":300,"bottom":25},"child":[{"type":"Image","props":{"width":1350,"sizeGrid":"5,5,5,5","height":300}},{"type":"Image","props":{"y":74,"x":1118,"var":"btn_determine","skin":"myAssets/btnconfirm.png","name":"determine"}},{"type":"Image","props":{"y":168,"x":1120,"var":"btn_cancel","skin":"myAssets/btncancel.png","name":"cancel"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CardPageUI.uiView);

        }

    }
}

module ui {
    export class CountDownUI extends View {
		public lab_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":100,"top":100,"right":100,"height":100},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"myAssets/time.png"}},{"type":"Label","props":{"var":"lab_time","text":"60","fontSize":30,"font":"Arial","color":"#7fde61","centerY":8.5,"centerX":2.6845703125,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CountDownUI.uiView);

        }

    }
}

module ui {
    export class LandlordPageUI extends View {
		public btn_qiang:Laya.Button;
		public btn_buqiang:Laya.Button;
		public lab_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":500,"top":250,"height":100,"centerX":0},"child":[{"type":"Button","props":{"y":27,"x":359,"width":100,"var":"btn_qiang","stateNum":1,"skin":"myAssets/qiangzhuang.png","name":"qiang","height":50}},{"type":"Button","props":{"y":25,"x":42,"width":100,"var":"btn_buqiang","stateNum":1,"skin":"myAssets/buqiang.png","name":"buqiang","height":50}},{"type":"Image","props":{"y":0,"x":206,"skin":"myAssets/time.png"}},{"type":"Label","props":{"y":42,"x":232,"var":"lab_num","text":"60","fontSize":30,"font":"Arial","color":"#b1e582","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LandlordPageUI.uiView);

        }

    }
}

module ui {
    export class NoticeUI extends View {
		public notice:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":500,"top":15,"height":100,"centerX":0},"child":[{"type":"Label","props":{"var":"notice","text":"捡到了球体","name":"gonggao","fontSize":25,"font":"Arial","color":"#def153","centerY":0,"centerX":0,"bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.NoticeUI.uiView);

        }

    }
}

module ui {
    export class ProgressUI extends View {
		public pro:Laya.ProgressBar;
		public tips:Laya.Label;
		public btn_enter:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"top":0,"right":0,"left":0,"height":750,"bottom":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"top":0,"skin":"myAssets/img_blank.png","sizeGrid":"6,7,6,6","right":0,"left":0,"height":750,"bottom":0}},{"type":"ProgressBar","props":{"width":640,"var":"pro","skin":"myAssets/progress.png","sizeGrid":"0,9,0,5","height":14,"centerY":0.5,"centerX":0.5}},{"type":"Label","props":{"width":512,"var":"tips","text":"资源正在加载中...","height":28,"fontSize":28,"font":"SimHei","color":"#ffffff","centerY":90,"centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"width":464,"text":"梦工厂LayaPokerDemo","height":62,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":-90,"centerX":0,"bold":true,"align":"center"}},{"type":"Image","props":{"var":"btn_enter","skin":"myAssets/join.png","name":"enter","centerY":87.5,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ProgressUI.uiView);

        }

    }
}

module ui {
    export class UserInfoUI extends View {
		public img_landlord:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":150},"child":[{"type":"Image","props":{"y":12,"x":17,"skin":"myAssets/bg_head_zhuang.png"}},{"type":"Image","props":{"y":47,"x":48,"skin":"myAssets/bg_head_nor.png"}},{"type":"Image","props":{"y":26,"x":29,"width":97,"var":"img_landlord","skin":"myAssets/bg_head_zhuang2.png","height":96}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UserInfoUI.uiView);

        }

    }
}
