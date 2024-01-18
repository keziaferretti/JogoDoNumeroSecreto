let listaNumeroSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    console.log(numeroSecreto);

    if (chute == numeroSecreto) {

        exibirTextoNaTela('h1', 'Você acertou!!!');
        let palavraTentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativa = `Voce descobriu o número secreto em ${tentativas} ${palavraTentativas}!`

        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor ' + chute);

    } else {
        exibirTextoNaTela('p', 'O número secreto é maior ' + chute);
    }

    tentativas++;
    limparCampo();

}

//gera um número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumeroSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}