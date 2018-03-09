/**
 * 工具类
 */
class Utils {

    private static POKERNUM:number = 54;

    /**
     * 洗牌
     * @param mParmPokerList 目标数组  <Poker>
     */
    public static shuffleTheCards(mParmPokerList:Array<Poker>):void{
        for (var i = 0; i < this.POKERNUM; i++) {
            var index1:number = Math.floor(Math.random() * this.POKERNUM);
            var PokerObj1:Poker = mParmPokerList[index1];

            var index2:number;
            do{
                index2  = Math.floor(Math.random() * this.POKERNUM);
            }while(index1 == index2)

            var PokerObj2:Poker = mParmPokerList[index2];
    
            mParmPokerList[index1] = PokerObj2;
            mParmPokerList[index2] = PokerObj1;
        }
    }

    /**
     * 扑克排序(从大到小) 【UI展示效果】
     * @param mParmList 目标数组  <Poker>
     *  */
    public static sortPokerList(mParmPokerList:Array<Poker>):void{
        for (var i = 0; i < mParmPokerList.length; i++) {
            for (var j = i+1; j < mParmPokerList.length; j++) {
                 if (mParmPokerList[i].pokerValue < mParmPokerList[j].pokerValue)  
                {  
                    var temp:Poker = mParmPokerList[i];  
                    mParmPokerList[i] =  mParmPokerList[j];  
                    mParmPokerList[j] =  temp;  
                }  
            }
        }     
    }

    
    /**
     * 扑克排序 (从小到大)
     * @param mParmList 目标数组 <Poker>
     * */
    public static sortPlayPokerList(mParmPokerList:Array<Poker>):void{
        for (var i = 0; i < mParmPokerList.length; i++) {
            for (var j = i+1; j < mParmPokerList.length; j++) {
                 if (mParmPokerList[i].pokerValue > mParmPokerList[j].pokerValue)  
                {  
                    var temp:Poker = mParmPokerList[i];  
                    mParmPokerList[i] =  mParmPokerList[j];  
                    mParmPokerList[j] =  temp;  
                }  
            }
        }     
    }

    /**
     * 牌型排序 (从小到大)
     * @param mParmList 目标数组 <PokerHandType>
     * */
    public static sorPokerHandTypeList(mParmList:Array<PokerHandType>):void{
        for (var i = 0; i < mParmList.length; i++) {
            for (var j = i+1; j < mParmList.length; j++) {
                 if (mParmList[i].pokerArray[0].pokerValue > mParmList[j].pokerArray[0].pokerValue)  
                {  
                    var temp:PokerHandType = mParmList[i];  
                    mParmList[i] =  mParmList[j];  
                    mParmList[j] =  temp;  
                }  
            }
        }     
    }



    /**
     * 删除数组中的某一项By Poker
     * @param parmArray 目标数组  <Poker>
     * @param parmObj 目标对象
     */
    public static removeArray(parmArray:Array<Poker>,parmObj:Poker):Array<Poker>{
        var tempArray:Array<Poker> = new Array<Poker>();
        for (var i = 0; i < parmArray.length; i++) {
            var Obj:Poker = parmArray[i];
            if(Obj.img != parmObj.img){ 
                tempArray.push(Obj);
            }
        }
        return (parmArray = tempArray);
    }

    /**
     * 删除数组中的某一项By PokerHandType
     * @param parmArray 目标数组  <PokerHandType>
     * @param PokerCardType 通过类型
     */
    public static removeArrayByPokerHandType(parmArray:Array<PokerHandType>,PokerCardType:number):Array<PokerHandType>{
        var tempArray:Array<PokerHandType> = new Array<PokerHandType>();
        for (var i = 0; i < parmArray.length; i++) {
            var Obj:PokerHandType = parmArray[i];
            if(Obj.pokerType != PokerCardType){ 
                tempArray.push(Obj);
            }
        }
        return (parmArray = tempArray);
    }

    /**
     * 删除数组中的某一项By any 【循环使用要动态减少 for 判定条件length, 且 i++】
     * @param parmArray 目标数组  <PokerHandType>
     * @param objindex 目标对象下标位置
     */
    public static removeArrayByAny(parm:Array<any>, objindex:number):number{
        var tempArray:Array<any> = new Array<any>();
        for (var i = 0; i < parm.length; i++) {
            var Obj:PokerHandType = parm[i];
            if(i != objindex){ 
                tempArray.push(Obj);
            }
        }
        parm = tempArray;
        return parm.length;
    }
}