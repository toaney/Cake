var dataset = [1, 7, 3, 4, 0];


var get_products_of_all_except_at_index = function(input) {
	var resultArray = [];

	for (var i=0; i<input.length; i++){
		var currentProduct = 1;

		for (var y = 0; y < input.length; y++){
			if (y !== i){
				currentProduct = currentProduct * input[y];				
			}
		}

		resultArray.push(currentProduct);
	}
	console.log(resultArray);
}


get_products_of_all_except_at_index(dataset);