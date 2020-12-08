//UC 2 To validate email abc.xyz@bridgelabz.co
//Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
//to take input from command line
const prompt = require('prompt-sync')();
let email = prompt('Enter email: ');
validateEmail(email);
function validateEmail(email)
{
    //regex for email validation
    let emailRegExp = RegExp("^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}?$");
    if (emailRegExp.test(email))
        console.log("Valid pincode")
    else
        console.log("Invalid pincode!")
}