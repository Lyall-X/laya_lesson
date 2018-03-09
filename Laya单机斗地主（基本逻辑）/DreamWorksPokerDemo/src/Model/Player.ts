/**
 *  玩家类
 */
class Player {

    public isLandlord:boolean; // 是否是地主
    private isPlayPoker:boolean; // 是否能出牌
    public isOutPoker:boolean; // 是否正在出牌

    public mOutArray:Array<Poker>; // 玩家出的牌
    /*自己的手牌使用的扑克牌集合*/
    public mHandPokerList:Array<Poker>;

    /*手牌的牌型的扑克牌集合*/
    public pokerHandTypeList :Array<PokerHandType>;

    public name:string;

    constructor(name:string) {
             this.name = name;
             this.isLandlord = false;
           this.mHandPokerList = new Array<Poker>();
           this.isOutPoker = false;
           this.pokerHandTypeList = new Array<PokerHandType>();
           this.mOutArray = new Array<Poker>();
    }
}