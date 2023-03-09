const quizData = [
    {
        questao: 'Qual é a cidade conhecida como a "cidade do amor"?',
        a: 'Londres',
        b: 'Paris',
        c: 'Nova York',
        d: 'Roma',    
        correto: 'b'
    }, {
        questao: 'Qual é a estátua mais famosa do mundo?',
        a: 'Estátua da Liberdade',
        b: 'Cristo Redentor',
        c: 'Colosso de Rodes',
        d: 'Estátua de Zeus em Olímpia',    
        correto: 'a'
    }, {
        questao: 'Qual é a famosa atração turística no Egito?',
        a: 'A Grande Muralha da China',
        b: 'A Torre Eiffel',
        c: 'A Esfinge e as Pirâmides de Gizé',
        d: 'O Cristo Redentor',    
        correto: 'c'
    }, {
        questao: 'Qual é a cidade onde se encontra a famosa Ópera de Sydney?',
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Brisbane',
        d: 'Adelaide',
        correto: 'a'
    },     {
        questao: 'Qual é a cidade italiana famosa pela Torre inclinada?',
        a: 'Veneza',
        b: 'Florença',
        c: 'Pisa',
        d: 'Roma',    
        correto: 'c'
    }
];
const questaoEl = document.getElementById('questao');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const respostaEls = document.querySelectorAll(".resposta");
const quiz = document.getElementById("quiz");
let resposta = undefined;
let questaoAtual = 0;
let pontuacao = 0;

loadQuiz();


function loadQuiz() {
    tiraMarca();
        const infoAtual = quizData[questaoAtual];
        questaoEl.innerHTML = infoAtual.questao;
        a_text.innerHTML = infoAtual.a;
        b_text.innerHTML = infoAtual.b;
        c_text.innerHTML = infoAtual.c;
        d_text.innerHTML = infoAtual.d;
}

function selecao(){
    respostaEls.forEach((respostaEls) => {
        if(respostaEls.checked){
            resposta = respostaEls.id;
        }
    });
    return resposta;
}

function tiraMarca(){
    respostaEls.forEach((respostaEls) =>{
        respostaEls.checked = false;
        resposta = undefined;
    });
}

submitBtn.addEventListener('click', () => {
    const resposta = selecao();
    if (resposta){
        if (resposta === quizData[questaoAtual].correto){
            pontuacao++;
        }
        questaoAtual++;
        if (questaoAtual < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = '<h2>Você respondeu corretamente a ' + pontuacao + '/' + quizData.length + ' das questões!</h2>';
        } 
    }
});