var prices_yesterday = [8, 10, 7, 5, 8, 11, 9, 3, 15, 6, 50, 20];



var bestProfit = function(list) {
	var low = list[0] 
	var profit = 0;
	
	for (var i = 0; i < list.length; i++){
		
		if (list[i] - low > profit) {
			profit = list[i] - low;
		}
	
		if (list[i] < low) {
			low = list[i];
		};	

	console.log(profit);
	}
}

bestProfit(prices_yesterday);