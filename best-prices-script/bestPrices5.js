var prices_yesterday = [8, 10, 7, 5, 8, 11, 9, 3, 15, 6, 50, 20];



var bestProfit = function(list) {
	var high = list[0] 
	var profit = 0;
	
	for (var i = 0; i < list.length; i++){
		
		if (high - list[i] > profit) {
			profit = high - list[i];
		}
	
		if (list[i] > high) {
			high = list[i];
		};	

	console.log(profit);
	}
}

bestProfit(prices_yesterday);