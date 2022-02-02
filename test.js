function addSum(first,last){
	total = first+last;
	return total;
}

firstName = prompt("Enter a First name");
lastName = prompt("Enter a last name");
response = addSum(firstName,lastName);
// Send an alert with the result
alert(response);