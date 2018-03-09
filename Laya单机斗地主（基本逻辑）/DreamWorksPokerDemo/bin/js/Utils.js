/**
 * 工具类
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 洗牌
     * @param mParmPokerList 目标数组  <Poker>
     */
    Utils.shuffleTheCards = function (mParmPokerList) {
        for (var i = 0; i < this.POKERNUM; i++) {
            var index1 = Math.floor(Math.random() * this.POKERNUM);
            var PokerObj1 = mParmPokerList[index1];
            var index2;
            do {
                index2 = Math.floor(Math.random() * this.POKERNUM);
            } while (index1 == index2);
            var PokerObj2 = mParmPokerList[index2];
            mParmPokerList[index1] = PokerObj2;
            mParmPokerList[index2] = PokerObj1;
        }
    };
    /**
     * 扑克排序(从大到小) 【UI展示效果】
     * @param mParmList 目标数组  <Poker>
     *  */
    Utils.sortPokerList = function (mParmPokerList) {
        for (var i = 0; i < mParmPokerList.length; i++) {
            for (var j = i + 1; j < mParmPokerList.length; j++) {
                if (mParmPokerList[i].pokerValue < mParmPokerList[j].pokerValue) {
                    var temp = mParmPokerList[i];
                    mParmPokerList[i] = mParmPokerList[j];
                    mParmPokerList[j] = temp;
                }
            }
        }
    };
    /**
     * 扑克排序 (从小到大)
     * @param mParmList 目标数组 <Poker>
     * */
    Utils.sortPlayPokerList = function (mParmPokerList) {
        for (var i = 0; i < mParmPokerList.length; i++) {
            for (var j = i + 1; j < mParmPokerList.length; j++) {
                if (mParmPokerList[i].pokerValue > mParmPokerList[j].pokerValue) {
                    var temp = mParmPokerList[i];
                    mParmPokerList[i] = mParmPokerList[j];
                    mParmPokerList[j] = temp;
                }
            }
        }
    };
    /**
     * 牌型排序 (从小到大)
     * @param mParmList 目标数组 <PokerHandType>
     * */
    Utils.sorPokerHandTypeList = function (mParmList) {
        for (var i = 0; i < mParmList.length; i++) {
            for (var j = i + 1; j < mParmList.length; j++) {
                if (mParmList[i].pokerArray[0].pokerValue > mParmList[j].pokerArray[0].pokerValue) {
                    var temp = mParmList[i];
                    mParmList[i] = mParmList[j];
                    mParmList[j] = temp;
                }
            }
        }
    };
    /**
     * 删除数组中的某一项By Poker
     * @param parmArray 目标数组  <Poker>
     * @param parmObj 目标对象
     */
    Utils.removeArray = function (parmArray, parmObj) {
        var tempArray = new Array();
        for (var i = 0; i < parmArray.length; i++) {
            var Obj = parmArray[i];
            if (Obj.img != parmObj.img) {
                tempArray.push(Obj);
            }
        }
        return (parmArray = tempArray);
    };
    /**
     * 删除数组中的某一项By PokerHandType
     * @param parmArray 目标数组  <PokerHandType>
     * @param PokerCardType 通过类型
     */
    Utils.removeArrayByPokerHandType = function (parmArray, PokerCardType) {
        var tempArray = new Array();
        for (var i = 0; i < parmArray.length; i++) {
            var Obj = parmArray[i];
            if (Obj.pokerType != PokerCardType) {
                tempArray.push(Obj);
            }
        }
        return (parmArray = tempArray);
    };
    /**
     * 删除数组中的某一项By any 【循环使用要动态减少 for 判定条件length, 且 i++】
     * @param parmArray 目标数组  <PokerHandType>
     * @param objindex 目标对象下标位置
     */
    Utils.removeArrayByAny = function (parm, objindex) {
        var tempArray = new Array();
        for (var i = 0; i < parm.length; i++) {
            var Obj = parm[i];
            if (i != objindex) {
                tempArray.push(Obj);
            }
        }
        parm = tempArray;
        return parm.length;
    };
    Utils.POKERNUM = 54;
    return Utils;
}());
//# sourceMappingURL=Utils.js.map