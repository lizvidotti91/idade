function calcular(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var nascimento = window.document.getElementById('nascimento').value;
    var resultado = window.document.getElementById('res');

    if(nascimento.length == 0 || nascimento > anoAtual){
        resultado.innerHTML = `Valor inválido. Por favor, verifique os dados digitados.`;
    } else{
        var idade = anoAtual - Number(nascimento);

        var formSexo = window.document.getElementsByName('sexo');
        var sexo = " ";

        var foto = window.document.getElementById('foto');

        if(formSexo[0].checked){
            sexo = "Mulher";
            if(idade < 10){
                //criança
                foto.src = "./img/menina.png";
            } else if(idade >= 10 && idade < 21 ){
                //adolescente
                foto.src = "./img/adolescente mulher.png";
            } else if(idade >=21 && idade < 30){
                //adulto
                foto.src = "./img/jovem mulher.png";
            } else if(idade >=30 && idade < 50){
                foto.src = "./img/adulto mulher.png";
            }else {
                //idoso
                foto.src = "./img/idoso mulher.png";
            }
        } else {
            sexo = "Homem";
            if(idade >= 0 && idade < 10){
                //criança
                foto.src = "./img/menino.png";
            } else if(idade >= 10 && idade < 21 ){
                //adolescente
                foto.src = "./img/adolescente homem.png";
            } else if(idade >=21 && idade < 30){
                //adulto
                foto.src = "./img/jovem homem.png";
            } else if(idade >=30 && idade < 50){
                foto.src = "./img/adulto homem.png";
            }else {
                //idoso
                foto.src = "./img/idoso homem.png";
            }
        }
        
        //formSexo[0].checked ? sexo = "Mulher" : sexo = "Homem"; // Valor Ternário

        resultado.innerHTML = `Detectamos ${sexo} com ${idade} anos`;
    }
}

function limpar(){
    var resultado = window.document.getElementById('resultado');
    resultado.innerHTML = ``;
}