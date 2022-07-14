function ValidaCPF(){   

    var ao_cpf=document.forms.caixa.ao_cpf.value; 
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;     
    if (cpfValido.test(ao_cpf) == false)    { 
         
       ao_cpf = ao_cpf.replace( /\D/g , ""); //Remove tudo o que não é dígito
                
       if (ao_cpf.length==11){
          ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
          ao_cpf = ao_cpf.replace( /(\d{3})(\d)/ , "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
          //de novo (para o segundo bloco de números)
          ao_cpf = ao_cpf.replace( /(\d{3})(\d{1,2})$/ , "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
                    
          var valorValido = document.getElementById("ao_cpf").value = ao_cpf;
        }else{
          console.log("CPF invalido");
        }
            
    }
    }