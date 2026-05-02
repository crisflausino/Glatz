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
const modalNome = document.getElementById('modal-nome');
const modalTexto = document.getElementById('modal-texto');
const modalSala = document.getElementById('modal-sala');
const modalImagem = document.getElementById('modal-imagem');
const modalSubtitulo = document.querySelector('.subtitulo-na-janela');
const btnFechar = document.getElementById('btn-fechar-modal');

// Botões de filtro
const botoesFiltro = document.querySelectorAll('.botao-sala');

/* --------------------------------------------------
   PARTE 2: LISTA DE ÍCONES DECORATIVOS E FRASES
-------------------------------------------------- */
const icones = ["🔥", "🚀", "💻", "⚡", "🎯", "👾", "🧠", "🌌", "💡", "🕶️"];

const frasesZoeiras = [
    "você deu liberdade demais… olha o resultado 👀",
    "não vem se fazer de inocente agora não 👀",
    "você plantou… agora aguenta 👀",
    "isso aqui é consequência direta das suas ideias",
    "isso aqui tá suspeito… e você tá envolvido 👀",
    "você mexeu onde não devia 👀",
    "a gente era normal antes de você",
    "olha o que você fez com a gente… lá ele 👀",
    "não adianta negar… você sabe o que fez 👀"
];

let frasesDisponiveis = [...frasesZoeiras];

function obterFraseAleatoria() {
    if (frasesDisponiveis.length === 0) {
        frasesDisponiveis = [...frasesZoeiras]; // Reinicia a lista quando acaba
    }
    const randomIndex = Math.floor(Math.random() * frasesDisponiveis.length);
    const frase = frasesDisponiveis.splice(randomIndex, 1)[0];
    return frase;
}


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

    // Se a carta ainda não tiver uma frase sorteada, ela recebe uma
    if (!carta.fraseAleatoria) {
        carta.fraseAleatoria = obterFraseAleatoria();
    }

    // Adicionamos um pequeno badge no cartao para mostrar a sala
    cartao.innerHTML = `
        <span class="icone-do-cartao">${icone}</span>
        <h3 class="nome-no-cartao">${carta.nomeDoAluno}</h3>
        <p class="frase-do-cartao">${carta.fraseAleatoria}</p>
        <p class="resumo-do-cartao">${trecho}</p>
        <span class="link-ver-mais">Ler carta completa →</span>
    `;

    cartao.addEventListener('click', function () {
        abrirModal(carta, indice);
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
        cartasFiltradas = cartas.filter(function (carta) {
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

function abrirModal(carta, indice) {
    // Preenche o modal com os dados da carta
    modalNome.textContent = carta.nomeDoAluno;
    modalSubtitulo.textContent = carta.fraseAleatoria;
    modalTexto.textContent = carta.textoDaCarta;
    modalSala.textContent = `Turma: ${carta.sala}`;

    // Adiciona uma foto com base no índice
    const numeroFoto = (indice % 10) + 1;
    modalImagem.src = `fotos-fodaskkk/foto${numeroFoto}.jpg`;

    modalImagem.classList.remove('oculto');

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

/* --------------------------------------------------
   PARTE 8: MODAL DA GALERIA (LIGHTBOX)
-------------------------------------------------- */
const galeriaImagens = document.querySelectorAll('.galeria-grid img');
const modalGaleria = document.getElementById('modal-galeria');
const imagemExpandida = document.getElementById('imagem-expandida');
const btnFecharGaleria = document.getElementById('btn-fechar-galeria');

// Adiciona evento de clique em cada imagem da galeria
galeriaImagens.forEach(function (imagem) {
    imagem.addEventListener('click', function () {
        imagemExpandida.src = this.src;
        modalGaleria.classList.remove('oculto');
        document.body.style.overflow = 'hidden'; // Evita scroll do fundo
    });
});

// Fecha a galeria
function fecharGaleria() {
    modalGaleria.classList.add('oculto');
    document.body.style.overflow = '';
}

if (btnFecharGaleria) {
    btnFecharGaleria.addEventListener('click', fecharGaleria);
}

if (modalGaleria) {
    modalGaleria.addEventListener('click', function (evento) {
        // Fecha se clicar fora da imagem
        if (evento.target === modalGaleria) {
            fecharGaleria();
        }
    });
}

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && modalGaleria && !modalGaleria.classList.contains('oculto')) {
        fecharGaleria();
    }
});
