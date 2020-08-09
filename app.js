(function(){
	'use strict';
	angular.module('appmodule',[]).
	controller('buyinglistctrl',buyinglistctrl).
	controller('boughtlistctrl',boughtlistctrl).
	service('sharerservice',sharerservice);


	buyinglistctrl.$inject=['sharerservice'];

	function buyinglistctrl(sharerservice){
		var control=this;
		control.list=[{name:"Cookies",quantity:10},{name:"Cake",quantity:1},
		{name:"Flour",quantity:2},{name:"pencil",quantity:3},
		{name:"RuledBook",quantity:5},{name:"Eggs",quantity:10},
		{name:"Shampoo",quantity:1}];
		control.mark=function(index,item){
			sharerservice.additem(item);
			control.list.splice(index,1);
		};

	}

	boughtlistctrl.$inject=['sharerservice'];

	function boughtlistctrl(sharerservice){
		var control2=this;
		control2.listb=sharerservice.returnlisterlist();


	}


	function sharerservice(){
		var service=this;
		var list=[];
		service.returnlisterlist = function(){
			return list;
		};
		service.additem = function(item){
			list.push(item);
		};

	}

})();
