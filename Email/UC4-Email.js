//UC 4 To validate email abc.xyz@bridgelabz.co
//Ensure only following are valid special characters _,+_-,. preceeding to xyz
//to take input from command line
const prompt = require('prompt-sync')();
let email = prompt('Enter email: ');
validateEmail(email);
function validateEmail(email)
{
    //regex for email validation
    let emailRegExp = RegExp("^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}?$");
    if (emailRegExp.test(email))
        console.log("Valid email!")
    else
        console.log("Invalid email!")
}
