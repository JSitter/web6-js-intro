var fun_object = function( name, title ){
	return_obj = {
		name: name,
		title: title
	}
	 return return_obj
}

// Define an array (nameTitle) then push 5 name/title objects from your function.
var nameTitle = []

nameTitle.push(fun_object("Mister Wizard", "Wizard"))
nameTitle.push(fun_object("Edgar Poe", "Author"))
nameTitle.push(fun_object("Santa Claus", "Gift Giver"))
nameTitle.push(fun_object("Vicente Fox", "El Presidente"))
nameTitle.push(fun_object("Georgette Deveroux", "Nuclear Physicist"))
nameTitle.push(fun_object("Joan Dideon", "Author"))


// Write a function that takes a letter (a, b, c, etc) and returns an array containg all of the
// names from nameTitle that begin with that letter. Use array.filter.
var letter_function = function( letter ){

	return nameTitle.filter(function(person){
		if(person.name[0] == letter){
			return person
		}

	})
}
// Write a function takes a title, and returns an array of all objects that have a matching title.
// Use filter again.
var title_search = function( title ){
	return nameTitle.filter( function( person ){
		if( person.title == title ){
			return person
		}
	})
}

var job_cat = function(){
	return nameTitle.map(function( person ){
		return person.name + " " + person.title
	})
}
console.log(job_cat())
