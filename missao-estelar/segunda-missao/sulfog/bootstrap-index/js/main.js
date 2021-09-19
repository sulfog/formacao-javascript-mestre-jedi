// Segunda Missao Estelar JS
/*
"Apertem os cintos
para adentrar-mos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/

//Item 8
var missão = "Segunda Missão Estelar JS";
console.log("Tipo " + typeof missão, " - var missão:= "+ missão);

//Item 9
var hiperespaco = new String("Apertem os cintos para adentrar-mos ao hiper-espaço rumo a uma nova Missão Estelar JS!");
console.log("Tipo " + typeof hiperespaco, " - var hiperespaco = "+ hiperespaco);

// Item 10
var nomeCliente = "Paulo Roberto";
var renda = 2600;
var dataNascimento = new Date("1955-09-16");
var ativo = true;
// Operador ternario: ativo== true ? "SIM" : "NAO";
function exibirDadosClienteVariaveis() {
    console.log("Nome cliente:", nomeCliente );
    console.log("Renda: R$", renda );
    console.log("Data Nascimento cliente:", dataNascimento );
    console.log("Status cliente:", ativo == true ? "SIM" : "NAO");
}

exibirDadosClienteVariaveis();

//Item 11
var clienteArray = [['Nome cliente','Roberto'], ['Renda: R$', 2800], 
['Data nascimento',new Date("1989-03-16")], ['Ativo:',true]];

function exibirDadosClienteArray() {

    for( var array of clienteArray){
        if (array[0]== 'Ativo:') {
            console.log(array[0], array[1] == true ? "SIM" : "NAO");
        } else {
            console.log(array[0], array[1]);
        }
        
    }
}

exibirDadosClienteArray();

//Item 12
/*
var nomeCliente = "Paulo Roberto";
var renda = 2600;
var dataNascimento = new Date("1955-09-16");
var ativo = true;
*/
var clienteObjeto = {nomeCliente: "João", renda: 3200.70, dataNascimento:new Date(1985,12,18), ativo: false};
// for in, switch e if..else

function exibirDadosClienteObjeto(){

for (var item in clienteObjeto){
    switch (item) {
        case "nomeCliente:":
            console.log("Nome cliente:", clienteObjeto[item]);
            break;
        case "renda":
            console.log("Renda :R$:", clienteObjeto[item].toString().replace(".",","));
            break;
        case "dataNascimento":
            console.log("Data de nascimento:", clienteObjeto[item]);
            break;
        case "ativo":
            console.log("Ativo:", clienteObjeto[item]== true ? "SIM" : "NAO");
            break;    
        default:
            console.log(item + ":", clienteObjeto[item]);
            break;
    }
}}

exibirDadosClienteObjeto();

//Item 13

function retornaDataAtualFormatada(){
    var dataAtual = new Date();//sem parâmetro é pega a data atual
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth()+ 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";//para completar dois digitos nos campos dia , mes.

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada += dia.toString();
    }

    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    return dataFormatada;
}

console.log("Data Atual:", retornaDataAtualFormatada());

//Item 14
var hiperespacoRegExp =  new RegExp(/Estelar/);
var textoMissao =  "Apertem os cintos para adentrar-mos ao hiper-espaço rumo a uma nova Missão Estelar JS!";
console.log("Teste:",hiperespacoRegExp.test(textoMissao));


console.log("Pesquisa:",hiperespacoRegExp.exec(textoMissao));

//Item 15
try {
    for (var i = 30, c = 0; i >= 0; i --, c++) { 
    console.log(i , " - " + c);
    if (c == 29){
        throw new Error("Ocorreu um erro na iteração " + c);
    }
}
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("Chegou ao bloco finally, sempre será executado");
}

//Item 16
function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo de objeto: ", Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();

    console.log("nomeBoot", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("emailBoot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
    var formHtml = document.querySelector("#formHtml");
    console.log(formHtml);

    // preenchendo o formulário Html
    formHtml.nomeHtml.value = objDados.nomeBoot;
    formHtml.emailHtml.value = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;


}
