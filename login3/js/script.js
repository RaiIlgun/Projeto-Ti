var ao_cpf = document.forms.caixa.ao_cpf.value; 

function validarpD(cpf) {
  let sum = 0;
  for(let i = 0; i < 9; i++){
    sum += cpf[i] * (10 - i);
  }
  const resto = (sum * 10) % 11;
  if(resto < 10) {
    return cpf[9] == resto
  }
  return cpf[9] == 0
 return false;
}
function validarsD(cpf) {
  let sum = 0;
  for(let i = 0; i < 10; i++){
    sum += cpf[i] * (11 - i);
  }
  const resto = (sum * 10) % 11;
  if(resto < 10) {
    return cpf[10] == resto
  }
  return cpf[10] == 0
 return false;
}





function validacaoCpf(cpf) {
  /*if(!cpfrepetido(cpf)){
    return false;
  }*/
  if(cpf.length != 11) {
    return false;
  }
  if(!validarpD(cpf)) {
    return false;
  }
  if(!validarsD(cpf)) {
    return false;
  }
return true;
}

const cpf = ao_cpf.split('').map((e) => parseInt(e));
const cpfok = validacaoCpf(cpf);


    
    function AnaliseCPF(){

      var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;     
      if (cpfValido.test(ao_cpf) == false)    { 
      
        var ao_cpf = document.forms.caixa.ao_cpf.value; 
         ao_cpf = ao_cpf.replace( /\D/g , ""); //Remove tudo o que não é dígito
                  
         if (ao_cpf.length==11){
            ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
            ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
            ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
            document.getElementById("ao_cpf").style.backgroundColor = "black";
                      
            var valorValido = document.getElementById("ao_cpf").value = ao_cpf;
            console.log("CPF válido");
            console.log(valorValido);
          }else{
            console.log("CPF invalido");
            document.getElementById("ao_cpf").style.backgroundColor = "red";
          }
      }   
   }
function ValidarCPF() {

  if(AnaliseCPF()){

  }
}
console.log(ValidarCPF())