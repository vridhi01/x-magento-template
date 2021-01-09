define([
	"jquery",
	"mage/template"
], function ($, template) {
	"use strict";
	return function (config) {
		var product;
		var table =  $('#product');
		var max_size=config.Data.length;
		var sta = 0;
		var elements_per_page = 4;
		var limit = elements_per_page;
		goFun(sta,limit);
		function goFun(sta,limit){
			$.each(config.Data, function () {
				var productTemplate = template('#product-template');
				product = productTemplate({
					data: {
						sku: this['sku'],
						name: this['name'],
						price: this['price'],
						image: this['image']
					}
				});

				for (var i =sta ; i < limit; i++) {
					var $nr = $('<tr><td>A-' + config.Data[i]['play_id'] + '</td><td>B-' + config.Data[i]['question1']  + '</td></tr>');
					table.append($nr);
				  }
				$('#product').append(product);
			});
	    }
	
		$('#nextValue').click(function(){
			console.log('next');
			var next = limit;
			if(max_size>=next) {
			limit = limit+elements_per_page;
			table.empty();
			goFun(next,limit);
			}
		});

		$('#PreeValue').click(function(){
			console.log('prev');
			var pre = limit-(2*elements_per_page);
			if(pre>=0) {
			limit = limit-elements_per_page;
			table.empty();
			goFun(pre,limit); 
			}
		});
		
		$('#searchdata').keyup(function () {
			console.log('hey');
			var searchField = $('#searchdata').val();
			var expression = new RegExp(searchField, "i");
			console.log(expression);
			$.each(config.Data, function (key, value) {
				console.log(config.Data);
				var productTemplate = template('#product-template');
				product = productTemplate({
					data: {
						sku: this['sku'],
						name: this['name'],
						price: this['price'],
						image: this['image']
					}
				});
				console.log(product , 'product');
				console.log(value.name.search(expression), 'pppp');
				if (value.name.search(expression) != -1) {
					console.log(value.name, 'searchvalue');
					$('#product').html(product);
				}
			});
		});  
	}
});

