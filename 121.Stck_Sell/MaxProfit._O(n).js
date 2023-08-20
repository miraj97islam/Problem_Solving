arr = [7,2,4,1,2];

let maxProfit = function(prices){
   
    let minVal = prices[0];

    let maxSellVal = 0;

    for(let i=0 ; i<prices.length; i++){
        prices[i+1] - minVal > maxSellVal 
                                        ? maxSellVal = prices[i+1]-minVal 
                                        : null;

        prices[i+1] < minVal 
                            ? minVal = prices[i+1] 
                            : null;
    }

    return maxSellVal;

}


console.log(maxProfit(arr));
