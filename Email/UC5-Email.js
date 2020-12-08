//UC 5 To validate email abc.xyz@bridgelabz.co
//to take input from command line
const prompt = require('prompt-sync')();
let email = prompt('Enter email: ');
validateEmail(email);
function validateEmail(email)
{
    //regex for email validation
    let emailRegExp = RegExp("^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$");
    if (emailRegExp.test(email))
        console.log("Valid email!")
    else
        console.log("Invalid email!")
}