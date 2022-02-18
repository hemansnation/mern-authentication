const Validator = require('validator');
const isEmpty = require('is-empty');


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
   
    
    //email check
    if(Validator.isEmpty(data.email)){
        errors.email = "Email Field is Required";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    //password check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is Required";
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    };   
};