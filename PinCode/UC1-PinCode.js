//UC 1 To validate pin 400088
//to take input from command line
const prompt = require('prompt-sync')();
let pin = prompt('Enter pin: ');
validatePin(pin);
function validatePin(pin)
{
    //regex for pincode validation
    let pinRegExp = RegExp('^[0-9]{6}$');
    if (pinRegExp.test(pin))
        console.log("Valid pincode")
    else
        console.log("Invalid pincode!")
}