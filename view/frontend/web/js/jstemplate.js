define([
	"jquery",
	"mage/template"
], function ($, template) {
	"use strict";
	return function (config) {
		var product;
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
            $('#product').append(product);

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

