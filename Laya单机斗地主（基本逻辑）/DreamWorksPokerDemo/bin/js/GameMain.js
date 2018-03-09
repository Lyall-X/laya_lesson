// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.NPC_PLAYER_TIME = 1000; // 设置机器人跟牌 延迟时间
        this.isClickSend = false; // 是否能点击发送或者取消
        this.isFirst = false; // 是否第一次出牌
        this.successPokerNum = 0;
        //初始化引擎 
        Laya3D.init(1334, 750, true);
        //画布垂直居中对齐 
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //画布水平居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //等比缩放
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //预加载2D资源
        Laya.loader.load(["res/atlas/myAssets.atlas", "res/atlas/comp.atlas", "res/atlas/poker.atlas", "myAssets/card.png"], Laya.Handler.create(this, this.on2DComplete));
    }
    /*加载2D资源完成回调*/
    GameMain.prototype.on2DComplete = function () {
        //实例化加载进度页面
        GameMain.progress = new ProgressView();
        GameMain.progress.on("btn_enter", this, this.onBtnAction);
        Laya.stage.addChild(GameMain.progress);
        GameMain.userInfoView = new UserView();
        Laya.stage.addChild(GameMain.userInfoView);
        GameMain.noticeView = new NoticeView();
        Laya.stage.addChild(GameMain.noticeView);
        GameMain.cardView = new CardView();
        GameMain.cardView.on("click_card", this, this.onBtnAction);
        Laya.stage.addChild(GameMain.cardView);
        GameMain.landLordView = new LandLordView();
        GameMain.landLordView.on("click_landlord", this, this.onBtnAction);
        Laya.stage.addChild(GameMain.landLordView);
        // 实例化时钟
        GameMain.timeView = new TimeView();
        Laya.stage.addChild(GameMain.timeView);
        // 初始化摄像机移动值
        GameMain.cameraTranslate = new Laya.Vector3;
        // 初始化扑克牌逻辑类
        this.mPokerPresenter = new PokerPresenter();
        // 创建牌
        this.mPokerPresenter.createPokerArr();
        // 洗牌
        Utils.shuffleTheCards(this.mPokerPresenter.mUsingPokerList);
        // 发牌
        this.mPokerPresenter.licensing();
        //加载3D资源
        Laya.loader.create(["LayaScene_scene02/scene02.ls", "LayaScene_girl/girl.lh", "LayaScene_boy/boy.lh", "LayaScene_effect/effect.lh", "Monkey/LayaMonkey.lh"], Laya.Handler.create(this, this.on3DComplete));
    };
    /*加载3D资源完成回调*/
    GameMain.prototype.on3DComplete = function () {
        //创建3D场景
        this.createScene();
        //创建3D摄像机
        this.createCamera();
        //创建3D角色
        this.createRole();
        //游戏帧循环
        Laya.timer.frameLoop(1, this, this.onFrameLoop);
    };
    /*创建3D场景*/
    GameMain.prototype.createScene = function () {
        //实例化场景
        this.scene = Laya.loader.getRes("LayaScene_scene02/scene02.ls");
        Laya.stage.addChild(this.scene);
        //将场景层级调至最低（UI界面后面）
        Laya.stage.setChildIndex(this.scene, 0);
    };
    /*创建3D摄像机*/
    GameMain.prototype.createCamera = function () {
        //实例化摄像机
        GameMain.camera = new Laya.Camera();
        //移动摄像机位置
        GameMain.camera.transform.translate(new Laya.Vector3(0, 4.5, 12));
        //设置摄像机视野范围（角度）
        GameMain.camera.fieldOfView = 25;
        this.scene.addChild(GameMain.camera);
    };
    /*创建3D角色*/
    GameMain.prototype.createRole = function () {
        this.createCommonRole(this.role, "LayaScene_girl/girl.lh", new Laya.Vector3(-3, 0, 3.5), "自己");
        //摄像机对准自己角色模型附近位置
        GameMain.camera.transform.lookAt(new Laya.Vector3(0, 0.5, 1), new Laya.Vector3(0, 0, 0));
        this.createCommonRole(this.roleA, "LayaScene_boy/boy.lh", new Laya.Vector3(0, 0, 0), "玩家A");
        this.createCommonRole(this.roleB, "Monkey/LayaMonkey.lh", new Laya.Vector3(-3, 0, 0), "玩家B");
    };
    GameMain.prototype.createCommonRole = function (parmRole, res, parmVector3, name) {
        // 实例化角色A
        parmRole = Laya.loader.getRes(res);
        // 添加到舞台
        this.scene.addChild(parmRole);
        // 角色位置
        parmRole.transform.position = parmVector3;
        parmRole.name = name;
    };
    /*游戏帧循环*/
    GameMain.prototype.onFrameLoop = function () {
        //摄像机位置改变（数据为角色控制脚本修改）
        //Example_roleControl.camera.transform.translate(Example_roleControl.cameraTranslate,false);
    };
    /**
   * 控制界面动作监听回调
   * @param action 当前执行的控制名称
   */
    GameMain.prototype.onBtnAction = function (action) {
        // 点击loading 开始游戏按钮
        if (action == "enter") {
            // 显示用户信息区
            GameMain.userInfoView.showUserView();
            // 显示提示通告
            GameMain.noticeView.showNoticeView();
            // 显示桌面
            GameMain.cardView.showBackground();
            // 显示斗地主提示
            GameMain.landLordView.showCountDonw();
            // 倒计时时钟
            //GameMain.timeView.showCountDonw();
        }
        else if (action == "buqiang") {
            GameMain.userInfoView.goneLandlord();
            if (Math.random() >= 0.5) {
                this.mPokerPresenter.sendLandlordPokers(this.mPokerPresenter.mAPlayer.mHandPokerList);
                this.playPokerState = 1;
                this.mPokerPresenter.mAPlayer.isLandlord = true;
                this.mPokerPresenter.m_LastOut = this.mPokerPresenter.mAPlayer;
            }
            else {
                this.mPokerPresenter.sendLandlordPokers(this.mPokerPresenter.mBPlayer.mHandPokerList);
                this.playPokerState = 2;
                this.mPokerPresenter.mBPlayer.isLandlord = true;
                this.mPokerPresenter.m_LastOut = this.mPokerPresenter.mBPlayer;
            }
            // 排序
            this.mPokerPresenter.sortAllPlayerPoker();
            // 显示自己的牌
            this.mPokerPresenter.showPoker();
            this.startPoker();
            this.isFirst = true;
            this.isClickSend = false;
        }
        else if (action == "qiang") {
            GameMain.userInfoView.showLandlord();
            this.mPokerPresenter.sendLandlordPokers(this.mPokerPresenter.mOwnPlayer.mHandPokerList);
            this.playPokerState = 0;
            // 排序
            this.mPokerPresenter.sortAllPlayerPoker();
            // 显示自己的牌
            this.mPokerPresenter.showPoker();
            this.startPoker();
            this.mPokerPresenter.m_LastOut = this.mPokerPresenter.mOwnPlayer;
            this.mPokerPresenter.mOwnPlayer.isLandlord = true;
            this.isClickSend = true;
        }
        else if (action == "cancel") {
            if (!this.isClickSend) {
                return;
            }
            console.log("点击了取消");
            GameMain.noticeView.setLableText("玩家要不起！！！");
            Laya.timer.once(this.NPC_PLAYER_TIME, this, this.action);
        }
        else if (action == "determine") {
            if (!this.isClickSend) {
                return;
            }
            console.log("玩家出牌了");
            // 判定是出牌，还是跟牌
            if (this.mPokerPresenter.m_LastOut.name != this.mPokerPresenter.mOwnPlayer.name) {
                this.mPokerPresenter.mOwnPlayPokerList = new Array();
                for (var i = 0; i < this.mPokerPresenter.mOwnPlayer.mHandPokerList.length; i++) {
                    var temp = this.mPokerPresenter.mOwnPlayer.mHandPokerList[i];
                    if (temp.isSelect) {
                        this.mPokerPresenter.mOwnPlayPokerList.push(temp);
                    }
                }
                if (this.mPokerPresenter.mOwnPlayPokerList.length <= 0) {
                    // 说明玩家没选择牌
                    GameMain.noticeView.setLableText("请选择牌");
                    return;
                }
                var pkType = this.mPokerPresenter.paiDuanPokerType();
                var pk = this.mPokerPresenter.mPlayPokerList[0];
                var pk1 = this.mPokerPresenter.mOwnPlayPokerList[0];
                if (this.mPokerPresenter.m_type == pkType && pk.pokerValue < pk1.pokerValue || (pkType == PokerCardType.BOMB_CARD && this.mPokerPresenter.m_type != PokerCardType.BOMB_CARD)) {
                    // 可以出牌
                }
                else {
                    GameMain.noticeView.setLableText("玩家出牌错误");
                    return;
                }
            }
            // 隐藏上一次出牌
            this.mPokerPresenter.goneLastSendPoker();
            this.mPokerPresenter.mPlayPokerList = new Array();
            // 将玩家选择的牌 放入到出牌集合里面
            for (var i = 0; i < this.mPokerPresenter.mOwnPlayer.mHandPokerList.length; i++) {
                var temp = this.mPokerPresenter.mOwnPlayer.mHandPokerList[i];
                if (temp.isSelect) {
                    this.mPokerPresenter.mPlayPokerList.push(temp);
                }
            }
            if (this.mPokerPresenter.mPlayPokerList.length <= 0) {
                // 说明玩家没选择牌
                GameMain.noticeView.setLableText("请选择牌");
                return;
            }
            // 得到玩家出牌的牌型， 判定玩家的牌是否合法
            var test = this.mPokerPresenter.paiDuanPokerType();
            console.log("玩家选牌的牌型" + test);
            if (test != PokerCardType.ERROR_CARD) {
                this.mPokerPresenter.m_type = test;
                this.mPokerPresenter.m_LastOut = this.mPokerPresenter.mOwnPlayer;
                // this.mPokerPresenter.mPlayPokerTag = 0;
                Utils.sortPlayPokerList(this.mPokerPresenter.mPlayPokerList);
                this.mPokerPresenter.addPlayList(this.mPokerPresenter.mOwnPlayer.mHandPokerList);
                // 排序出牌集合
                // Utils.sortPlayPokerList(this.mPokerPresenter.mPlayPokerList);
                this.mPokerPresenter.goneLastSendPoker();
                this.mPokerPresenter.showPlayPokerByPlayerType(this.mPokerPresenter.mOwnPlayer, this.mPokerPresenter.mPlayPokerList);
                // 排序原有牌集合并且重新展示
                Utils.sortPokerList(this.mPokerPresenter.mOwnPlayer.mHandPokerList);
                this.mPokerPresenter.showPoker();
                Laya.timer.once(this.NPC_PLAYER_TIME, this, this.action);
            }
            else {
                GameMain.noticeView.setLableText("玩家出牌错误");
            }
        }
    };
    /**
     * 开始出牌方法
     */
    GameMain.prototype.startPoker = function () {
        // 默认要的起牌
        this.mPokerPresenter.isYaoDeQi = true;
        console.log("玩家手里的牌数：" + this.mPokerPresenter.mOwnPlayer.mHandPokerList.length + "NPC A手里的牌数：" + this.mPokerPresenter.mAPlayer.mHandPokerList.length
            + "NPC B手里的牌数：" + this.mPokerPresenter.mBPlayer.mHandPokerList.length);
        if (this.playPokerState == 0) {
            this.isClickSend = true;
            if (!this.victoryVerification()) {
                // 玩家自己
                GameMain.noticeView.setLableText("玩家出牌！");
            }
        }
        else if (this.playPokerState == 1) {
            this.isClickSend = false;
            if (!this.victoryVerification()) {
                // NPC A
                console.log("NPC A出牌了");
                GameMain.noticeView.setLableText("NPC A出牌！");
                if (this.mPokerPresenter.m_LastOut.name == this.mPokerPresenter.mAPlayer.name) {
                    this.mPokerPresenter.npcOutPoker(this.mPokerPresenter.mAPlayer, this.mPokerPresenter.mPlayPokerList, new Player("第一次"));
                }
                else {
                    this.mPokerPresenter.npcGenPoker(this.mPokerPresenter.mAPlayer, this.mPokerPresenter.mPlayPokerList, this.mPokerPresenter.m_LastOut);
                }
                if (this.mPokerPresenter.isYaoDeQi) {
                    this.testlog();
                    this.mPokerPresenter.sendPoker(this.mPokerPresenter.mAPlayer);
                }
                Laya.timer.once(this.NPC_PLAYER_TIME, this, this.action);
            }
        }
        else {
            this.isClickSend = false;
            if (!this.victoryVerification()) {
                // NPC B
                console.log("NPC B出牌了");
                GameMain.noticeView.setLableText("NPC B出牌！");
                if (this.mPokerPresenter.m_LastOut.name == this.mPokerPresenter.mBPlayer.name) {
                    this.mPokerPresenter.npcOutPoker(this.mPokerPresenter.mBPlayer, this.mPokerPresenter.mPlayPokerList, new Player("第一次"));
                }
                else {
                    this.mPokerPresenter.npcGenPoker(this.mPokerPresenter.mBPlayer, this.mPokerPresenter.mPlayPokerList, this.mPokerPresenter.m_LastOut);
                }
                if (this.mPokerPresenter.isYaoDeQi) {
                    this.testlog();
                    this.mPokerPresenter.sendPoker(this.mPokerPresenter.mBPlayer);
                }
                Laya.timer.once(this.NPC_PLAYER_TIME, this, this.action);
            }
        }
    };
    GameMain.prototype.action = function () {
        this.changePlayState();
        this.startPoker();
    };
    GameMain.prototype.changePlayState = function () {
        if (this.playPokerState == 0) {
            this.playPokerState = 1;
        }
        else {
            if (this.playPokerState == 1) {
                this.playPokerState = 2;
            }
            else {
                this.playPokerState = 0;
            }
        }
    };
    /**验证是否胜利 */
    GameMain.prototype.victoryVerification = function () {
        if (this.mPokerPresenter.mAPlayer.mHandPokerList.length <= this.successPokerNum || this.mPokerPresenter.mBPlayer.mHandPokerList.length <= this.successPokerNum || this.mPokerPresenter.mOwnPlayer.mHandPokerList.length <= this.successPokerNum) {
            var name = "";
            if (this.mPokerPresenter.mAPlayer.mHandPokerList.length <= this.successPokerNum) {
                name = this.mPokerPresenter.mAPlayer.name;
            }
            else if (this.mPokerPresenter.mBPlayer.mHandPokerList.length <= this.successPokerNum) {
                name = this.mPokerPresenter.mBPlayer.name;
            }
            else {
                name = this.mPokerPresenter.mOwnPlayer.name;
            }
            GameMain.noticeView.setLableText(name + "胜利！");
            this.resetStart();
            return true;
        }
        else {
            return false;
        }
    };
    /**重新开始 */
    GameMain.prototype.resetStart = function () {
        // 隐藏所有手牌
        this.mPokerPresenter.goneOwnHandPoker();
        this.mPokerPresenter.goneLastSendPoker();
        // 删除所有手牌
        this.mPokerPresenter.resetValue();
        // 洗牌
        Utils.shuffleTheCards(this.mPokerPresenter.mUsingPokerList);
        // 发牌
        this.mPokerPresenter.licensing();
        // 显示斗地主提示
        GameMain.landLordView.showCountDonw();
    };
    GameMain.prototype.testlog = function () {
        var test = this.mPokerPresenter.mPlayPokerList;
        this.testLogShow(test);
    };
    GameMain.prototype.testLogShow = function (parm) {
        var String = "";
        for (var i = 0; i < parm.length; i++) {
            String += " " + parm[i].pokerValue;
        }
        console.log("机器人出牌：" + String);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map