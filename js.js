function inserir(numero){
        var exis = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = exis + numero;   
}
function limpar(){
    document.getElementById("result").innerHTML="";
}
function apagar(){
    var result=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length-1)
}
function calcular(){
    var resultado= document.getElementById("result").innerHTML;
    if (resultado){
        document.getElementById("result").innerHTML = eval(resultado);
    }
    else{
        document.getElementById("result").innerHTML = "#ERROR404";
    }
}