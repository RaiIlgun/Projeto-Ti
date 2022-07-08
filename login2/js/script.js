class Validator {

    constructor() {
        this.validations = [
            
        ]
    }

    validate(form) {

        let inputs = form.getElementsByTagName('input');
        console.log(inputs);
        let inputsArray = [...inputs];
        console.log(inputsArray);

    }

}

let form = document.getElementById("regform");
let submit = document.getElementById("btn-reg");
let validator = new Validator();

submit.addEventListener('click', function(e) {

    e.preventDefault();
    validator.validate(form);

    console.log("test");

})
