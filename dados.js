/* =====================================================
   DADOS.JS — Banco de dados das cartas dos alunos
   =====================================================

   Este arquivo funciona como nosso "banco de dados" simples.
   Aqui ficam todas as cartas escritas pelos alunos da turma.
   Adicionamos a propriedade "sala" para separar as subcategorias.

   Salas disponíveis: "3º B", "3º C", "2º A", "2º B", "1º A", "1º B"
===================================================== */

const cartas = [
    {
        nomeDoAluno: "Eloize Eliot",
        sala: "2º B",
        textoDaCarta: `Professor,\n\nMuito obrigada pelos momentos marcantes que o senhor deixou na nossa sala ano passado.\n\nPor mais que fôssemos insuportáveis às vezes, o senhor continuou firme até o fim.\n\nNunca vou esquecer que em praticamente toda aula o senhor precisava pegar pelo menos 2 celulares.\n\nE também quando o senhor passou aquele texto enorme sobre a história dos computadores e achou que eu não tinha copiado tudo só porque minha letra é pequena.\n\nMesmo diante de uma sala insuportável, o senhor sempre foi forte.\n\nObrigada por permanecer firme conosco por um ano inteiro.\n\nAtenciosamente,\nEloize Eliot.`
    },
    {
        nomeDoAluno: "Sarah Lemes Fagundes",
        sala: "2º B",
        textoDaCarta: `Olá professor,\n\nQueria agradecer por ter passado um ano ensinando a gente sobre novas coisas, mesmo na maioria das vezes quando o senhor só desistia e catava o celular de geral ou só ficava ali tendo uma crise existencial pela sala que pegou.\n\nMas de qualquer forma, marcou a vida de cada aluno dentro daquela sala, só tenho a agradecer pela grande paciência e que continue sendo essa ótima pessoa, sendo forte e enfrentando os momentos difíceis, desejo apenas sucesso para o senhor 😊`
    },
    {
        nomeDoAluno: "DG Cabuloso",
        sala: "3º B",
        textoDaCarta: `Ooii glatz...\n\nent queria te falar q vc foi disparado o professor mais foda q eu ja tive na minha vida, vc vez coisas por mim q nenhum professor faria eu sei q as vezes eu encho muito o seu saco mais vc sabe q eu gosto muito de vc, e eu quero q vc saiba q tudo q vc precisar pode contar comigo pq pra mim vc é mais q um professor vc é um irmão pra mim\n\nq vc continue sendo esse cara incrível e maravilhoso como professor e amigo.\n\nMelhora minha dupla do TDAH`
    },
    {
        nomeDoAluno: "Mari da favela",
        sala: "3º B",
        foto: 6,
        textoDaCarta: `Professor,\n\nqueria te desejar uma ótima recuperação e dizer o quanto você é importante para todos nós. Aprendi muita coisa nas suas aulas e gosto bastante do jeito que você ensina, de um jeito leve, brincando com a gente, apoiando nossas ideias e explicando com paciência até a gente entender.\n\nVocê é um dos melhores professores que eu já tive e nós temos muita admiração por você.`
    },
    {
        nomeDoAluno: "Miles Morales de Sarandi",
        sala: "3º B",
        textoDaCarta: `Professor,\n\nantes de falar qualquer coisa, vou falar bem a vdd pra vc, são 2 e 20 da manhã. Eu terminei seu cartaz agora pouco, tô dando os últimos ajustes no site e tô me segurando o máximo pra n jogar a Jacomine da escada, tá dando mt trabalho fazer isso. Ent, se vc n tiver uma lágrima no olho, eu vô tacar pimenta nele.\n\nProfessor, eu acho que falo por todos quando digo que temos um carinho mt grande por vc. Você tenta ao máximo nos ajudar a entender a matéria, sempre com o máximo de paciência (mesmo ela sendo pouca às vezes kkkkk), e sempre se enturma com a gente, conversando sobre coisas aleatórias. Acredito que se pudesse, faria o mesmo que fizemos por você. Então esse é o mínimo que poderíamos fazer pelo professor que está e estará sempre lá por nois.`
    },
    {
        nomeDoAluno: "Mayra",
        sala: "2º A",
        foto: 4,
        textoDaCarta: `Professor,\n\nQueria deixar registrado o quanto somos gratos por tudo que você fez por nós. Ser professor já não é fácil, e ser nosso professor então... merecia até um bônus de insalubridade kkkkk.\n\nMesmo nos dias mais difíceis, você sempre esteve ali tentando ensinar, aconselhar e até entrando nas nossas brincadeiras, o que fez toda diferença pra gente. Isso mostrou que, além de professor, você realmente se importava com cada aluno e com tudo que estávamos vivendo.\n\nObrigado por toda paciência, dedicação e por nunca desistir da gente. Esperamos que essa surpresa consiga mostrar pelo menos um pouco do carinho e da admiração que temos por você.`
    },
    {
        nomeDoAluno: "Michel",
        sala: "2º A",
        textoDaCarta: `Professor,\n\nNem sempre a gente fala essas coisas, mas queria que você soubesse que fez diferença de verdade na nossa vida. Muitas vezes a aula começava normal e terminava com alguma história aleatória, alguém levando bronca ou você tentando entender como nossa sala conseguia ser tão bagunceira.\n\nMesmo assim, nunca faltou vontade de ensinar e de ajudar cada um da melhor forma possível, mesmo quando parecia impossível fazer a gente prestar atenção. Obrigado por acreditar no nosso potencial até quando nem a gente acreditava muito.\n\nVocê é aquele tipo de professor que a gente leva pra vida, não só pelas broncas, mas pela pessoa que é.`
    },
    {
        nomeDoAluno: "Mano do 2A q n lembro o nome",
        sala: "2º A",
        textoDaCarta: `Glatz,\n\nA verdade é que nem sempre a gente valoriza as pessoas no momento certo, mas hoje eu queria deixar claro o quanto você foi importante pra nós. Você não ensinou só sobre a materia, ensinou também sobre persistência, dedicação e sobre continuar tentando mesmo quando a vontade era desistir (igual você fazia quando a sala inteira resolvia conversar ao mesmo tempo kkkkk).\n\nMesmo nas broncas e nos momentos mais difíceis, sempre dava pra perceber que tudo vinha de alguém que realmente se importava com seus alunos. Obrigado por ter sido mais do que um professor pra gente.\n\nQue você continue sendo essa pessoa incrível que marcou tanta gente de um jeito tão positivo.`
    }
];
