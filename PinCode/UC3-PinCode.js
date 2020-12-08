//UC 3 Check for 400088B – this should fail
//to take input from command line
const prompt = require('prompt-sync')();
let pin = prompt('Enter pin: ');
validatePin(pin);
function validatePin(pin)
{
    //regex for pincode validation
    let pinRegExp = RegExp("^[0-9]{1}[a-zA-Z0-9]{5}$");
    if (pinRegExp.test(pin))
        console.log("Valid pincode")
    else
        console.log("Invalid pincode!")
}