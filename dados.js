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
        nomeDoAluno: "Ana Beatriz",
        sala: "3º B",
        textoDaCarta: `Professor,\n\nEscrever essa carta foi mais difícil do que qualquer redação que o senhor já corrigiu — e o senhor corrigiu muitas ruins minhas, então isso já diz muito.\n\nO senhor é uma daquelas pessoas raras que faz a gente querer entrar em sala de aula. Nos dias em que eu acordava sem vontade de nada, só de saber que teria sua aula já era motivo suficiente.\n\nGuarde forças. A gente está aqui torcendo muito por você.\n\nCom carinho, Ana Beatriz.`
    },
    {
        nomeDoAluno: "Carlos Eduardo",
        sala: "3º C",
        textoDaCarta: `Oi Professor,\n\nSempre fui péssimo em escrever cartas, então vou ser direto: o senhor é o melhor professor que já tive. E não estou falando só da matéria — estou falando de como o senhor trata a gente, de como explica até a gente entender de verdade, de como nunca deixou ninguém pra trás.\n\nO senhor nos ensinou que dificuldade não é sinal de fraqueza. Espero que o senhor lembre disso agora também.\n\nEstamos com você. Carlos Eduardo.`
    },
    {
        nomeDoAluno: "Fernanda Lima",
        sala: "2º A",
        textoDaCarta: `Querido Professor,\n\nTem dias que a gente só precisa saber que as pessoas se importam. Por isso escrevi essa carta — para que o senhor saiba, com certeza, que eu me importo. Que toda a turma se importa.\n\nO senhor plantou sementes aqui que vão durar muito tempo. A curiosidade que o senhor despertou em mim não vai embora. Obrigada por isso.\n\nCom muito afeto, Fernanda.`
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
