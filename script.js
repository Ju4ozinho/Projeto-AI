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
                afirmacao: "Uma das maiores preocupações sobre a alimentação atual é a grande quantidade de alimentos ultraprocessados que consumimos. Eles são pobres em nutrientes e ricos em gorduras, açúcares e sódio, o que pode trazer sérios riscos à saúde a longo prazo. "
            },
            {
                texto: "Isso não me preocupa!",
                afirmacao: "A falta de preocupação com a alimentação pode levar a problemas de saúde no futuro. É importante refletir sobre os nossos hábitos alimentares e entender como eles afetam nosso corpo."
            }
        ]
    },
    {
        enunciado: "Uma alimentação saudável fortalece o corpo, a mente e o sistema imunológico, prevenindo doenças e garantindo mais energia e longevidade.",
        alternativas: [
            {
                texto: "Utilize uma ferramenta de busca na internet para que você fique informado sobre o assunto. É muito importante.",
                afirmacao: "Buscar informações de fontes confiáveis é o primeiro passo para ter uma vida mais saudável."
            },
            {
                texto: "Escreva na guia de pesquisa do seu dispositivo e fique atento às precauções.",
                afirmacao: "O conhecimento é a chave para a mudança. Se informar sobre a alimentação saudável pode ser o que te falta para dar o primeiro passo. "
            }
        ]
    },
    {
        enunciado: "Para ter uma alimentação saudável, priorize alimentos naturais como frutas, legumes e carnes magras, enquanto reduz o consumo de ultraprocessados. Beba bastante água, cozinhe mais em casa para controlar os ingredientes e não pule refeições. Comer devagar e buscar a orientação de um nutricionista também são hábitos importantes.",
        alternativas: [
            {
                texto: "Praticar exercício também é bem importante, fazer algum esporte ou até mesmo uma caminhada na rua.",
                afirmacao: "A atividade física complementa uma boa alimentação. Ambas são essenciais para manter o corpo e a mente em equilíbrio."
            },
            {
                texto: "Me preocupo com as pessoas que perderão sua qualidade de vida por conta da sua saúde.",
                afirmacao: "É importante cuidar da nossa saúde e da saúde dos que amamos. Compartilhe o que você aprendeu e inspire outras pessoas a terem hábitos mais saudáveis. "
            }
        ]
    },
    {
        enunciado: "Você pode mudar a sua realidade agora. O seu futuro e o tanto que você vai evoluir só dependem de você.",
        alternativas: [
            {
                texto: "Criar um cronograma com a sua nova rotina pode te ajudar.",
                afirmacao: "O planejamento é fundamental para alcançar qualquer objetivo. Ao criar um cronograma, você visualiza suas metas e se mantém mais motivado para segui-las."
            },
            {
                texto: "Crie uma rotina de acordo com a sua realidade, começando de forma fácil e evoluindo aos poucos.",
                afirmacao: "Começar com pequenas mudanças é mais sustentável a longo prazo. Gradualmente, os novos hábitos se tornam parte da sua vida e você não se sente sobrecarregado."
            }
        ]
    },
    {
        enunciado: "Em 2049, João... João, aos 35 anos, sentia-se cansado e com problemas de saúde devido à sua alimentação desregrada, baseada em fast-food. Após um alerta médico, ele decidiu mudar, substituindo refrigerantes por água e preparando suas próprias refeições saudáveis. Em três meses, perdeu peso, recuperou a energia e a concentração, descobrindo que a alimentação saudável não só melhorou sua saúde física, mas também seu bem-estar geral.",
        alternativas: [
            {
                texto: "Mudar de vida agora.",
                afirmacao: "A história de João nos mostra que nunca é tarde para começar a cuidar de nós mesmos. O tempo é o nosso bem mais precioso e o momento de agir é agora. O futuro é reflexo das escolhas que fazemos hoje."
            },
            {
                texto: "Deixar para depois.",
                afirmacao: "Deixar para depois pode ser arriscado. A saúde é o nosso bem mais precioso, e a história de João nos mostra que não devemos negligenciá-la. Comece hoje a dar o primeiro passo em direção a um futuro mais saudável. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa as alternativas anteriores
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
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "; // Adiciona a afirmação ao texto final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPrincipal.textContent = " ";
    textoResultado.textContent = historiaFinal;
}

mostraPergunta();