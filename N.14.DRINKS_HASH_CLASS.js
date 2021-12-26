"use strict"

class HashStorage { 
	constructor() {
		this.storage={}; 
	}
	addValue(key, value) {
		this.storage[key]=value;
	}
	getValue (key) {
		return this.storage[key];   
	}
	deleteValue (key) {
		if ( key in this.storage ) {
			delete this.storage[key];
			return true;
		}
		return false;
	}
	getKeys() {
		return Object.keys(this.storage);
	}
}

var drinkStorage = new HashStorage ();

function drinkInput() {
	var drinkInfo = prompt(`Введите название напитка`);
	var drinkRecipe = {};
	confirm(`Он алкогольный? Если да, нажмите 'Ok', если нет – 'Cancel '`) ? drinkRecipe['alco'] = `Yes` : drinkRecipe["alco"] = `No`;
	drinkRecipe["ingredients"] = prompt(`Введите через запятую ингредиенты напитка`);
	drinkStorage.addValue (drinkInfo, drinkRecipe);
	}
	
function	drinkGetInfo (){
	var drinkName = prompt(`Введите название интересующего Вас напитка:`);
	var drinkList = {};
	drinkList =	drinkStorage.getValue(drinkName) 
	if (drinkList) {
		alert (`
Название напитка: ${drinkName}.
Алкогольный ли напиток? ${drinkList.alco}.
Ингредиенты напитка: ${drinkList.ingredients}.`)
	}
	else {
		alert (`Undefined`);
	}
}

function	drinkDelete (){
	var drinkInfo = prompt(`Какой напиток нужно удалить?`);
	drinkStorage.deleteValue (drinkInfo) ? alert (`Напиток удалён`) : alert (`Такого напитка не было в списке`) ;
	
}
function	drinkList (){
	alert(drinkStorage.getKeys ());
}
