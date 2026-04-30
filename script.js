/* =====================================================
   SCRIPT.JS — Lógica principal do site
   =====================================================
   
   O que esse arquivo faz:
   1. Pega o array "cartas" do arquivo dados.js
   2. Para cada carta, cria um cartao-aluno HTML no DOM
   3. Controla a abertura e fechamento do Modal
   4. Controla os menu-de-salas por sala

   DOM (Document Object Model) = é a representação
   do HTML como uma árvore de objetos que o JavaScript
   consegue ler e modificar.
===================================================== */


/* --------------------------------------------------
   PARTE 1: SELEÇÃO DE ELEMENTOS
-------------------------------------------------- */

// Onde os cartao-alunos serão injetados (o <div id="container-cartas">)
const containerCartas = document.getElementById('container-cartas');

// Os elementos do Modal
const modalOverlay = document.getElementById('fundo-escuro-janela');
const modalNome    = document.getElementById('modal-nome');
const modalTexto   = document.getElementById('modal-texto');
const modalSala    = document.getElementById('modal-sala');
const btnFechar    = document.getElementById('btn-fechar-modal');

// Botões de filtro
const botoesFiltro = document.querySelectorAll('.botao-sala');

/* --------------------------------------------------
   PARTE 2: LISTA DE ÍCONES DECORATIVOS
-------------------------------------------------- */
const icones = ['🌿', '☀️', '🌸', '✨', '🌱', '💛', '🌼', '🍃'];


/* --------------------------------------------------
   PARTE 3: FUNÇÃO PRINCIPAL — criarCard()
-------------------------------------------------- */
function criarCard(carta, indice) {
    const cartao = document.createElement('div');
    cartao.classList.add('cartao-aluno'); // adiciona a classe CSS "cartao-aluno"

    const icone = icones[indice % icones.length];
    const delayAnimacao = `${indice * 0.08}s`;
    cartao.style.animationDelay = delayAnimacao;

    const trecho = carta.textoDaCarta.substring(0, 120) + '...';

    // Adicionamos um pequeno badge no cartao para mostrar a sala
    cartao.innerHTML = `
        <span class="icone-do-cartao">${icone}</span>
        <h3 class="nome-no-cartao">${carta.nomeDoAluno}</h3>
        <p class="resumo-do-cartao">${trecho}</p>
        <span class="link-ver-mais">Ler carta completa →</span>
    `;

    cartao.addEventListener('click', function () {
        abrirModal(carta);
    });

    return cartao;
}


/* --------------------------------------------------
   PARTE 4: FUNÇÃO — renderizarCartas()
   
   Agora ela recebe um parâmetro opcional "salaFiltro"
   para mostrar apenas as cartas daquela sala.
-------------------------------------------------- */
function renderizarCartas(salaFiltro = 'todas') {
    // Primeiro, limpamos o container para não duplicar os cartao-alunos
    containerCartas.innerHTML = '';

    // Filtramos o array de cartas
    let cartasFiltradas = cartas;
    
    if (salaFiltro !== 'todas') {
        // filter() cria um novo array apenas com as cartas onde a sala bate com o filtro
        cartasFiltradas = cartas.filter(function(carta) {
            return carta.sala === salaFiltro;
        });
    }

    // Renderizamos apenas as cartas filtradas
    cartasFiltradas.forEach(function (carta, indice) {
        const cartaoElemento = criarCard(carta, indice);
        containerCartas.appendChild(cartaoElemento);
    });
}


/* --------------------------------------------------
   PARTE 5: FUNÇÕES DO MODAL
-------------------------------------------------- */

function abrirModal(carta) {
    // Preenche o modal com os dados da carta
    modalNome.textContent  = carta.nomeDoAluno;
    modalTexto.textContent = carta.textoDaCarta;
    modalSala.textContent  = `Turma: ${carta.sala}`;

    // Mostra o modal
    modalOverlay.classList.remove('oculto');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modalOverlay.classList.add('oculto');
    document.body.style.overflow = '';
}


/* --------------------------------------------------
   PARTE 6: EVENTOS DE CLIQUE
-------------------------------------------------- */

// Fechamento do Modal
btnFechar.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', function (evento) {
    if (evento.target === modalOverlay) {
        fecharModal();
    }
});
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
        fecharModal();
    }
});

// (Navegação agora é feita via links <a href> no HTML)


/* --------------------------------------------------
   PARTE 7: INICIALIZAÇÃO E NAVEGAÇÃO
-------------------------------------------------- */
// Descobre em qual página estamos olhando para a tag <body>
const salaAtual = document.body.getAttribute('data-sala') || 'todas';

// Se a página for 'destaques', mostra todas. Se for uma sala específica, filtra automaticamente!
if (salaAtual === 'destaques') {
    renderizarCartas('todas');
} else {
    renderizarCartas(salaAtual);
}

console.log(`✅ Site carregado na página: ${salaAtual}`);
