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


// Write a function that takes a letter (a, b, c, etc) and returns an array containg all of the
// names from nameTitle that begin with that letter. Use array.filter.
var letter_function = function( letter ){
	let person_arry = []
	return nameTitle.filter(function(person){
		if(person.name[0] == letter){
			return person
		}

	})
}

console.log(letter_function("S"))
