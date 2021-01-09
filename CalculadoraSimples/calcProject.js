
function botao(num){
  salvo = document.calc.visor.value += num;
}
function dele(result){
 var result = document.calc.visor.value 
  result = result.toString().slice(0,-1);
   document.calc.visor.value = result;
    
}

function equalTo(){
    resultado = eval(salvo).toFixed(4);
    document.calc.visor.value = resultado;
}



