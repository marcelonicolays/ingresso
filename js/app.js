//Exercicio Alura Ingresso.
let pista = 100;
let superior = 200;
let inferior = 400;

function comprar(){
//Receber Variáveis.
let ingressoEscolhido = document.getElementById('tipo-ingresso').value;
let qtd = document.getElementById('qtd').value;

//Verificar preenchimento de Quantidade.
if (qtd <= 0){
    alert('Favor preeencher quantidade com valor válido.');
    return;
}

//Calcular quantidade de ingressos restantes.
reduzirIngressos(ingressoEscolhido, qtd);

//Alterar campos informativos da quantidade de ingressos.
document.getElementById('qtd-pista').innerText = pista;
document.getElementById('qtd-inferior').innerText = inferior;
document.getElementById('qtd-superior').innerText = superior;

//Limpar Campos;
limparCampos();
}

function reduzirIngressos(ingresso, qtde) {
    if (ingresso === 'pista') { 
	if (pista - qtde <= 0) { //verificar disponibilidade.
	  alert('Quantidade escolhida acima do limite. Escolha ingressos existentes.');
	  limparCampos();
	  return;
	} else{
        pista -= qtde; 
	}
    } else if (ingresso === 'superior') { 
	if (superior - qtde <= 0) {
	  alert('Quantidade escolhida acima do limite. Escolha ingressos existentes.');
	  limparCampos();
	  return;
	} else{
          superior -= qtde; 
	}
    } else if (ingresso === 'inferior') {
	if (superior - qtde <= 0) {
	  alert('Quantidade escolhida acima do limite. Escolha ingressos existentes.');
	  limparCampos();
	  return;
	} else{
          inferior -= qtde; 
	}
    } 
}

function limparCampos(){
     document.getElementById('qtd').value = ''; 
     document.getElementById('tipo-ingresso').selectedIndex = 0;
}