var prices_yesterday = [10, 7, 5, 8, 11, 9];



var bestProfit = function(list) {
	function Price(){
		this.value = list[0];
		this.index = list[0];
	}
	
	var high = new Price; 
	var low = new Price
	var profit = high.value - low.value
	console.log(high);
	console.log(low);
	console.log(profit);
	
	
	for (var i = 0; i < list.length; i++){
		if (list[i] >= high.value && (high.value - low.value) >= profit){
			high.value = list[i];
			profit = high.value - low.value;
		}
		
		if (list[i] <= low.value && (high.value - low.value) >= profit){
			low.value = list[i];
			profit = high.value - low.value;
		}
	console.log(high);
	console.log(low);
	console.log(profit);
	}
}

bestProfit(prices_yesterday);