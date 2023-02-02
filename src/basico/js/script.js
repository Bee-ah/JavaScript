//classe : calculo 
class calculo{
    constructor(){
        this.valores = []
    }
    preenchendo(... valordado){ //uma função que preenche o array com valores que são dados
        valordado.forEach(
            lancamento => this.valores.push(lancamento)
        )

    }
    calculamedia(){
        let soma = 0
        let index = 0
        this.valores.forEach(valor => {
            soma += valor;
            index++ ;
        })
        return soma / index;

    }
    aprovacao(resultado){
        let condicao =resultado >= 80  ? "aprovado" : "reprovado"
        return condicao
    }
}
// criação do objeto e teste com valores
const teste = new calculo()
teste.preenchendo(20,30,50,10)
console.log('O valor da media é: ' + teste.calculamedia()) 
console.log('Você foi : ' + teste.aprovacao(teste.calculamedia())) 


// Função Recursivas
const contagemRegressiva = (numero) => {
    console.log(numero)
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}




/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', evento => {
        const media = new calculo()
        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);
        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);
        media.preenchendo(notas);
        texto = media.aprovacao(media.calculamedia())

        document.getElementById('resultado').innerHTML = texto;

    });

//para verificar preenchimento de campos

function validaCampo(elemento){

    elemento.addEventListener('focusout', event => {

        event.preventDefault();
        //campo vazio:
        if(this.value == ""){
            // pega a o elemento que tem class='.mensagem'
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
        //campo preenchido 
        else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', event => {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){ //quando atende ao exigido
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else { //quando está errado
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();
        //notação literal:ideal quando é constante
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        //notação com construtor: ideal quando o padrão é mudado, ou quando não se sabe o padrão
        // const emailValido = new RegeExp('/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/', i)

        if(this.value.match(emailValido)) { //quando o email corresponde ao padrão
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else { //quando o email digitado não corresponde ao padrão emailValido
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) { //exuta um loop, aplicavel em Arrays, strings, Maps , NodeLists
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

