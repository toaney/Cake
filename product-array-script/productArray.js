//multiply all numbers except the current one

//function get_products_of_all_except_at_index()

//no using division


var dataset = [1, 7, 3, 4];


var get_products_of_all_except_at_index = function(input) {
		//initialize result array
	var resultArray = [];

		//loop through dataset array
	for (var i=0; i<input.length; i++){

		//initialize current product value for index
		var currentProduct = 1

		//calculate current product
				//create an array of index keys that omit the current key
			for (var y = 0; y < input.length; y++){
				if (y !== i){
					currentProduct = currentProduct * input[y];				};

				console.log(currentProduct);

				//loop over the the index array and input values into a product result


				//multiply all values in the result array


				//set equal to the current product

			}


		//add current product to result array
		resultArray.push(currentProduct);

	}
	console.log(resultArray);
}


get_products_of_all_except_at_index(dataset);