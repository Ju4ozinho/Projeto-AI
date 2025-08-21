const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A dieta dos brasileiros piorou: menos consumo de alimentos naturais, como frutas e vegetais, e mais de ultraprocessados. O consumo de sal e açúcar está acima do recomendado, apesar do arroz e feijão ainda serem a base da alimentação.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso não me preocupa!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Uma alimentação saudável fortalece o corpo, a mente e o sistema imunológico, prevenindo doenças e garantindo mais energia e longevidade.",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet para que você fique infortamado do assundo é muito imporante.",
                afirmacao: "afirmação"
            },Escreve
            {
                texto: " Escreva na guia de pesquisa do seu dispositivo é fiquem atentos as preocausões",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Para ter uma alimentação saudável, priorize alimentos naturais como frutas, legumes e carnes magras, enquanto reduz o consumo de ultraprocessados. Beba bastante água, cozinhe mais em casa para controlar os ingredientes e não pule refeições. Comer devagar e buscar a orientação de um nutricionista também são hábitos importantes.",
        alternativas: [
            {
                texto: "Praticar exercicio também é bem importante, fazer algum esporte ou até mesmo uma caminhada na rua.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que perderão sua qualidade de vida por conta da sua saúde",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você pode mudar a sua realiade agora, o seu futuro e o tanto que vocẽ vai evoluir so depende de você",
        alternativas: [
            {
                texto: "criar um cronograma com a sua nova rotinha pode te ajudar",
                afirmacao: "afirmação"
            },
            {
                texto: "crie uma rotina de acordo com a sua realidade, começando de forma facil e evoluindo aos poucos ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em 2049, João... João, aos 35 anos, sentia-se cansado e com problemas de saúde devido à sua alimentação desregrada, baseada em fast-food. Após um alerta médico, ele decidiu mudar, substituindo refrigerantes por água e preparando suas próprias refeições saudáveis. Em três meses, perdeu peso, recuperou a energia e a concentração, descobrindo que a alimentação saudável não só melhorou sua saúde física, mas também seu bem-estar geral.",
        alternativas: [
            {
                texto: "mudar de vida agora.",
                afirmacao: "afirmação"
            },
            {
                texto: "deixar para depois.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();