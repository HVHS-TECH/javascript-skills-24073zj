console.log("Task 4 - Debugging");

// Set up the size of the page
var windowlength = 8;
var windowwidth = 10;

// calculate the perimeter
var perimeter = (2 * windowlength) + (2 * windowwidth); 

// calculate the area
var area = windowlength * windowwidth;

// Display the results
console.log("A area of a piece of paper with a length of "+windowlength+", and a width of "+windowwidth+" is "+ area);
console.log("The same piece of paper has a perimeter of "+perimeter);

// Check, does this result look sensible
if (perimeter < area){
    console.log("Yay, your area is larger, this is right for this example");
}else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}
