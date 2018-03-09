
/**
 * 牌型 枚举
 */
 enum PokerCardType{
    SINGLE_CARD = 1,        //单牌-          1
    DOUBLE_CARD,            //对子-          2
    THREE_CARD,             //3不带-         3
    BOMB_CARD,              //炸弹           4
    THREE_ONE_CARD,         //3带1-         5
    THREE_TWO_CARD,         //3带2-          6
    BOMB_TWO_CARD,          //四个带2张单牌   7
    BOMB_TWOOO_CARD,        //四个带2对      8
    CONNECT_CARD,           //连牌-           9
    COMPANY_CARD,           //连队-          10
    AIRCRAFT_CARD,          //飞机不带-       11
    AIRCRAFT_SINGLE_CARD,   //飞机带单牌-      12
    AIRCRAFT_DOBULE_CARD,   //飞机带对子-     13
    ERROR_CARD              //错误的牌型      14
 }