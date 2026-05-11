/* =====================================================
   DADOS.JS — Banco de dados das cartas dos alunos
   =====================================================

   Este arquivo funciona como nosso "banco de dados" simples.
   Aqui ficam todas as cartas escritas pelos alunos da turma.
   Adicionamos a propriedade "sala" para separar as subcategorias.

   Salas disponíveis: "3º B", "3º C", "2º A", "2º B", "1º A"
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
        nomeDoAluno: "Gabriel Souza",
        sala: "2º B",
        textoDaCarta: `Professor,\n\nSempre fui o aluno que ficava no fundo da sala tentando passar despercebido. O senhor foi o único que não deixou. Sempre me chamou, sempre acreditou que eu tinha mais a dar — e tinha razão.\n\nEspero um dia ser metade do profissional que o senhor é. Obrigado por não desistir de mim.\n\nAbraço, Gabriel.`
    },
    {
        nomeDoAluno: "Isabela Martins",
        sala: "1º A",
        textoDaCarta: `Professor,\n\nTinha muita coisa que eu queria dizer pessoalmente, mas a palavra trava quando a gente se importa de verdade. Então resolvi escrever.\n\nO senhor nos ensinou que errar faz parte. Que tentar de novo é o que diferencia quem chega de quem desiste no meio do caminho. Guarde esse ensinamento para si agora. Tente de novo. A gente vai estar aqui quando o senhor voltar.\n\nCom amor, Isabela.`
    },
    {
        nomeDoAluno: "Lucas Ferreira",
        sala: "3º B",
        textoDaCarta: `Oi Professor!\n\nNão sou muito de escrever coisas assim, mas quando eu soube que a turma estava fazendo esse site, eu quis participar.\n\nO senhor tem uma energia que contagia a sala inteira. Quando o senhor entra animado, a gente fica animado junto. Quando o senhor explica algo com brilho no olho, a gente aprende de verdade.\n\nFaça como o senhor sempre nos pediu: cuide de você primeiro. Estamos aqui. Lucas.`
    },
    {
        nomeDoAluno: "Mariana Costa",
        sala: "3º C",
        textoDaCarta: `Professor querido,\n\nDentro de muitos anos, quando eu olhar para trás e pensar em quem me moldou como profissional e como pessoa, o seu nome vai estar lá. Com certeza.\n\nObrigada pela paciência infinita. Pela didática que parece mágica. Pelo respeito genuíno com que o senhor trata cada aluno.\n\nDescanse, se cuide, e saiba que este lugar tem saudade de você. Com carinho enorme, Mariana.`
    },
    {
        nomeDoAluno: "Pedro Alves",
        sala: "2º A",
        textoDaCarta: `Professor,\n\nEu aprendi com o senhor que código limpo importa, que comentar o que você faz é respeito pelo próximo, e que nenhum problema é grande demais se você quebra ele em partes menores.\n\nAgora quero devolver esse ensinamento: divida esse momento difícil em partes menores. Um dia de cada vez. A gente vai estar aqui em cada um desses dias.\n\nForça! Pedro.`
    }
];
