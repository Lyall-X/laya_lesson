
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public normal:Laya.Image;
		public hit:Laya.Image;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":25,"y":25,"skin":"ui/back.png"},"type":"Image"},{"type":"Box","child":[{"props":{"x":7,"skin":"ui/mouse_normal_1.png","var":"normal","y":3},"type":"Image"},{"props":{"x":6,"y":17,"skin":"ui/mouse_hit_1.png","var":"hit"},"type":"Image"},{"props":{"y":84,"skin":"ui/mask-01.png"},"type":"Image"}],"props":{"x":158,"y":193}}],"props":{"width":800,"height":600}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);
        }
    }
}
