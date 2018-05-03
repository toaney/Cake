var prices_yesterday = [10, 7, 5, 8, 11, 9];



var bestProfit = function(list) {
	function Price(){
		this.value = list[0];
		this.index = list[0];
	}
	
	var high = new Price; 
	var low = new Price

	for (var i = 0; i < list.length; i++){
		if (list[i] >= high.value) {
			high.value = list[i];
			high.index = i;
		} else {
		
		};
		
		if (list[i] <= low.value) {
			low.value = list[i];
			low.index = i;
		}
	
	}
	console.log(high);
	console.log(low);
}

bestProfit(prices_yesterday);