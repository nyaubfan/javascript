// play with the prompts method from the window class

// grab data from the prompt method
var promptResponse = prompt("What is your name", "");
var output;

// print the variable to the window if not blank or null
if(promptResponse == ""){
    output = "Nothing was entered.";
} else if(promptResponse == null){
    output = "Cancel was clicked.";
} else {
    output = promptResponse;
}

// write response to the html document
document.write(output);


