// get string from page
// controller function
function getUserString(){
    document.getElementById("alert").classList.add("invisible");
    let uString = document.getElementById("userString").value;
    let revString = reverseString(uString);
    displayString(revString);
}

// Reverse string
// logic function
function reverseString(uString){
    let revString = [];
    
    // reverse string using for loop
    for (let i = uString.length - 1; i >= 0; i--){
        revString += uString[i];
    }

    return revString;
}

// display reversed string
// view function
function displayString(revString){
    // write to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // turn on alert
    document.getElementById("alert").classList.remove("invisible");
}