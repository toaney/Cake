var prices_yesterday = [10, 7, 5, 8, 11, 9];



var bestProfit = function(list) {
	function Price(){
		this.value = list[0];
		this.index = 0;
	}
	
	var high = new Price; 
	var low = new Price
	var profit = high.value - low.value
	console.log(high);
	console.log(low);
	console.log(profit);
	console.log('start');
	
	for (var i = 0; i < list.length; i++){
		if (list[i] >= high.value) {
			if ((list[i] - low.value >= profit) && i <= low.index){
				high.value = list[i];
				high.index = i;
				profit = high.value - low.value;
			}
		}
		
		if (list[i] <= low.value) {
			if ((high.value - list[i] >= profit) && high.index <= i){
				low.value = list[i];
				low.index = i;
				profit = high.value - low.value;
			}
		}
	console.log(high);
	console.log(low);
	console.log(profit);
	}
}

bestProfit(prices_yesterday);