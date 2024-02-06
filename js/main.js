$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'});
    $('#cpf').mask('000.000.000-00', {placeholder: '123.456.789-12'});
    $('#cep').mask('00000-000', {placeholder: '12345-123'});

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true,
            },
            endereço:{
                required: true,
            },
            cep:{
                required: true,
            }
    
        },
        messages: {
            nome:'Por favor, insira o seu nome'
        },
    
        submitHandler: function(form){
            const nome = $('#nome').val();  nome
            alert(`${nome} foi cadastrado com sucesso`);
            form.reset(); 
        },
        invalidHandler: function(event, validator){
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
});
