class Validator {

    constructor() {
        this.validations = [
            "data-min-length",
        ]
    }

    validate(form) {

        let inputs = form.getElementsByTagName('input');
        console.log(inputs);
        let inputsArray = [...inputs];
        console.log(inputsArray);
        // loop e validação
        inputsArray.forEach(function(input){

            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) != null){

                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input, value);



                }
            }

        }, this);

    }

    minlength(input, minValue){

        console.log(input);
        console.log(minValue);

    }

}

let form = document.getElementById("regform");
let submit = document.getElementById("btn-reg");
let validator = new Validator();

submit.addEventListener('click', function(e) {

    e.preventDefault();
    validator.validate(form);


})
