/*

Challenges (finally!)

Try the following challenges to test your knowledge of the JS concepts covered above.

*/

// Create a function that takes a name and title and returns an object containing these two properties
// The object should look something like: {name: "Rudolf", title: "leader of the pack"}
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

// Write a function that returns an array containing strings made from the names and titles.
// Each string should look like: "Name Title" or "Diana the duchess of york" or something similar.
// Use array.map().
var job_cat = function(){
	return nameTitle.map(function( person ){
		return person.name + " " + person.title
	})
}
//console.log(job_cat())

// Create an array of random numbers. Bonus: Use a loop and add 100 random numbers or write a function to return an array of any number of random numbers.
var random_array = function( size ){
	rand_ary = []

	for( i = 0; i < size; i++){
		rand_ary.push(Math.random())
	}
	return rand_ary
}
//console.log(random_array(50))

// Write a function that returns an aray of all numbers 0.5 and above. use filter, map, or reduce.
var num_search = function(){
	let num_arry = random_array(100)
	return num_arry.filter(function( number ){
		if( number >= 0.5 ){
			return number
		}
	})
}

//console.log(num_search())

// Write a function that returns an array of all numbers below 0.5. Use filter, map, or reduce.
var num_below = function(){
	let num_arry = random_array(100)
	return num_arry.filter(function( number ){
		if( number < 0.5){
			return number
		}
	})
}

//console.log(num_below())

// Write a function that returns the total of all random numbers. Use filter, map, or reduce.
var sum_random = function(){
	let num_ary = random_array(3)

	return num_ary.reduce(function(acc, curr){
		return acc + curr
	})
}

console.log(sum_random())
