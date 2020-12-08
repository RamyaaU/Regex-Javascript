//UC 4 Check for 400088 400 088 is also valid 
//to take input from command line
const prompt = require('prompt-sync')();
let pin = prompt('Enter pin: ');
validatePin(pin);
function validatePin(pin)
{
    //regex for pincode validation
    let pinRegExp = RegExp('^[0-9]{1}[a-zA-Z0-9]{2}[ ]*[a-zA-Z0-9]{2}[0-9]{1}$');
    if (pinRegExp.test(pin))
        console.log("Valid pincode")
    else
        console.log("Invalid pincode!")
}