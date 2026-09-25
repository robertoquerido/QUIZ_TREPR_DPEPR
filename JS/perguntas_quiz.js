const perguntas = [
  {
    /*pergunta: "Na prática, o que é cidadania?",
    explicacao: "Cidadania é uma ideia grandiosa: é o que nos garante educação, saúde e segurança, mas também exige respeito às regras e às necessidades das outras pessoas.\n\u00a0\u00a0\u00a0\u00a0Votar também faz parte da vida de um cidadão. Mas você pode ir muito além.\nParticipar das decisões do nosso bairro e do nosso país não acaba no dia da eleição. É a cidadania que permite viver isso todo dia.",
    respostas: [
      { texto: "Ter carteira de identidade, passaporte e outros documentos oficiais que identificam um cidadão ou cidadã.", correta: false },
      { texto: "Votar em todas as eleições depois da idade permitida.", correta: false },
      { texto: "Exercer direitos e deveres que nos permitem participar ativamente da sociedade.", correta: true },
      { texto: "Comprovar a cidade onde mora por meio de documentação.", correta: false }
    ]
  },
  {*/
    pergunta: "A Democracia pode ser comparada a um jogo em equipe. Por quê?",
    explicacao: "Democracia significa 'governo do povo'. Assim como em um jogo coletivo organizado, todos têm o direito de opinar, escolher seus representantes e ajudar a decidir o rumo da equipe.\n\u00a0\u00a0\u00a0\u00a0    Sua voz é importante e ajuda a decidir o futuro de toda a população!",
    respostas: [
      { texto: "Porque as pessoas que participam podem escolher as regras e os líderes da eleição.", correta: true },
      { texto: "Porque existe um técnico que toma as decisões e comanda os eleitores e eleitoras.", correta: false },
      { texto: "Porque depois de escolher um time, você precisa fazer parte até o final da eleição.", correta: false },
      { texto: "Porque o jogo acaba assim que a eleição termina.", correta: false }
    ]
  },
  {
    pergunta: "Com qual idade um jovem brasileiro pode começar a votar, caso queira?",
    explicacao: "Se você tem 16 ou 17 anos, votar é opcional. \n\u00a0\u00a0\u00a0\u00a0    Ninguém é obrigado, e quem não vota não leva nenhuma punição. \n\u00a0\u00a0\u00a0\u00a0    Mas fica a dica: é uma baita oportunidade de participar e ajudar a decidir o futuro da sua cidade, do seu estado e do país. \n\u00a0\u00a0\u00a0\u00a0    E isso pede responsabilidade e consciência na hora de escolher. A partir dos 18 anos, aí sim o voto passa a ser obrigatório. \n\u00a0\u00a0\u00a0\u00a0    Pra votar antes disso, é só tirar o título de eleitor dentro do prazo da Justiça Eleitoral.",
    respostas: [
      { texto: "A partir dos 12 anos, mas apenas em eleições para deputado, desde que tenha autorização dos pais.", correta: false },
      { texto: "A partir dos 14 anos, mas apenas em eleições para prefeito.", correta: false },
      { texto: "A partir dos 16 anos, mas apenas em eleições para presidente.", correta: false },
      { texto: "A partir dos 16 anos, para todos os cargos.", correta: true }
    ]
  },
  {
    pergunta: "Por que o seu voto é secreto na urna eletrônica?",
    explicacao: "O segredo do voto protege a sua liberdade e a sua opinião! \n\u00a0\u00a0\u00a0\u00a0 Ninguém pode obrigar, ameaçar ou pressionar você a votar em algum candidato ou candidata.\n\u00a0\u00a0\u00a0\u00a0    Vale lembrar: na hora da votação, nada de tirar foto da urna ou tentar outra forma de registrar o voto.",
    respostas: [
      { texto: "Para que os candidatos que você votou tenham essa informação e possam agradecer depois.", correta: false },
      { texto: "Porque, no Brasil, é proibido publicar nas redes sociais em quem você vai votar.", correta: false },
      { texto: "Para impedir que seus amigos e familiares saibam se você foi votar ou não.", correta: false },
      { texto: "Para garantir que você possa escolher sem pressão ou cobrança de outras pessoas.", correta: true }
    ]
  },
  {
    pergunta: "Por que o voto de jovens é importante no resultado final?",
    explicacao: "Jovens podem levar para a política muitos assuntos que fazem parte da vida deles!\n\u00a0\u00a0\u00a0\u00a0 Escola pública de qualidade, primeiro emprego, tecnologia, meio ambiente e cultura, por exemplo. \n\u00a0\u00a0\u00a0\u00a0 Essa contribuição é importante para que mais problemas sejam ouvidos e possam ser debatidos.",
    respostas: [
      { texto: "Porque o voto de um jovem vale o dobro do voto de um adulto.", correta: false },
      { texto: "Porque jovens podem trazer ideias diferentes de outras gerações.", correta: true },
      { texto: "Porque só jovens podem votar em juízes.", correta: false },
      { texto: "Porque jovens são os únicos que podem ajudar na criação de novas leis.", correta: false }
    ]
  },
  {
    pergunta: "Na eleição, você vota em pessoas que vão trabalhar no Poder Executivo e no Poder Legislativo. Qual é a principal diferença entre esses dois Poderes?",
    explicacao: "No Poder Executivo ficam as pessoas eleitas pra fazer a máquina rodar e levar os serviços até a população, como obras, escolas e postos de saúde. É o caso de presidente, governador e prefeito, e das presidentas, governadoras e prefeitas.  \n\u00a0\u00a0\u00a0\u00a0 Já no Poder Legislativo ficam as pessoas que criam as leis e fiscalizam como o dinheiro público está sendo gasto. Aqui entram senadores, deputados e vereadores, e também as senadoras, deputadas e vereadoras.  \n\u00a0\u00a0\u00a0\u00a0 Se liga: saber quem faz o quê ajuda muito na hora de escolher o seu voto!",
    respostas: [
      { texto: "O Executivo julga crimes e o Legislativo comanda a polícia.", correta: false },
      { texto: "O Executivo administra o governo e o Legislativo cria e aprova leis.", correta: true },
      { texto: "O Executivo cria os exercícios sobre impostos e o Legislativo define a lógica de funcionamento das eleições.", correta: false },
      { texto: "O Executivo cuida dos mais jovens e o Legislativo cuida dos mais velhos.", correta: false }
    ]
  },
  /*{
    pergunta: "Pensando na estrutura do país, a quem podemos comparar a função de Presidente ou Presidenta da República?",
    explicacao: "O presidente ou presidenta é quem comanda o Poder Executivo Federal.\nEle ou ela coordena os rumos e metas do país, cuida da relação com outros países e lidera ministérios, que são equipes que atuam com alguns temas como\nSaúde e Educação.\n\u00a0\u00a0\u00a0\u00a0\nPor isso essa pessoa precisa liderar. Ela não toma decisões sozinha. O presidente ou presidenta tem que buscar apresentar suas ideias e convencer as outras pessoas.\n\u00a0\u00a0\u00a0\u00a0\nÉ parte fundamental da democracia!",
    respostas: [
      { texto: "Ao gerente de uma loja.", correta: false },
      { texto: "Ao diretor de uma escola.", correta: false },
      { texto: "Ao capitão de um time.", correta: true },
      { texto: "Ao juiz de uma partida de futebol.", correta: false }
    ]
  },*/
  {
    pergunta: "O que faz o prefeito ou prefeita de um município no dia a dia?",
    explicacao: "Se liga: o prefeito ou a prefeita é o chefe do Poder Executivo municipal. \n\u00a0\u00a0\u00a0\u00a0 É essa pessoa que tem que fazer o rolê do dia a dia funcionar: coleta de lixo, creche, escola, posto de saúde, rua limpa e iluminada. \n\u00a0\u00a0\u00a0\u00a0 Mas, papo reto, vai muito além disso. \n\u00a0\u00a0\u00a0\u00a0 Quem vota as leis são os vereadores e vereadoras. Só que o prefeito ou a prefeita pode propor leis novas e decidir se aprova ou veta o que a Câmara Municipal aprovar. \n\u00a0\u00a0\u00a0\u00a0 Ou seja, é peça-chave pra cidade ficar top de verdade pra quem vive nela. É sobre isso!",
    respostas: [
      { texto: "Cuida de postos de saúde, ônibus, praças e serviços públicos na cidade.", correta: true },
      { texto: "Decide quando será votada uma nova lei.", correta: false },
      { texto: "Comanda tropas do exército na cidade.", correta: false },
      { texto: "Define quem serão os vereadores e as vereadoras.", correta: false }
    ]
  },
  {
    pergunta: "Qual é uma das funções mais importantes de vereadores e vereadoras em uma cidade?",
    explicacao: "Os vereadores e as vereadoras são os fiscais do povo na cidade.\n\u00a0\u00a0\u00a0\u00a0Eles e elas criam leis para a cidade e devem acompanhar de perto para garantir que a prefeitura use o dinheiro de forma correta e voltada para as pessoas.",
    respostas: [
      { texto: "Asfaltar ruas e construir pontes.", correta: false },
      { texto: "Nomear diretores das escolas e médicos dos hospitais.", correta: false },
      { texto: "Propor e votar leis, além de fiscalizar o trabalho da prefeitura.", correta: true },
      { texto: "Organizar eventos do município.", correta: false }
    ]
  },
  {
    pergunta: "Quem são os representantes eleitos para criar as leis que valem para o país inteiro?",
    explicacao: "O Congresso Nacional fica em Brasília e é onde são criadas as leis que valem para todo o país. Ele é formado por duas casas: a Câmara dos Deputados, que representa o povo, e o Senado Federal, que representa os estados e o Distrito Federal. \n\u00a0\u00a0\u00a0\u00a0Nas cidades e nos estados também se fazem leis, pelas mãos de vereadores e deputados estaduais, mas elas valem só naquele lugar. \n\u00a0\u00a0\u00a0\u00a0 As leis nacionais passam pelo Congresso: é lá que as propostas chegam, são debatidas, votadas e podem virar lei. \n\u00a0\u00a0\u00a0\u00a0 E o que se discute ali mexe diretamente com a sua vida: saúde, internet, vagas nas escolas e universidades e tudo mais que envolve direitos",
    respostas: [
      { texto: "Vereadores e vereadoras que tiveram mais votos.", correta: false },
      { texto: "Deputados, deputadas, senadores e senadoras.", correta: true },
      { texto: "Governadores e governadoras.", correta: false },
      { texto: "Juízes e juízas do Supremo Tribunal Federal.", correta: false }
    ]
  },
  {
    pergunta: "Como funciona o sistema de voto majoritário nas eleições?",
    explicacao: "“Majoritário” é uma palavra relacionada à maioria de algo.\n\u00a0\u00a0\u00a0\u00a0 Ou seja, no sistema de voto majoritário, a regra é simples e direta: quem tem mais votos ganha a vaga!\n\u00a0\u00a0\u00a0\u00a0Essa regra é aplicada, no Brasil, para escolher quem vai ocupar a Presidência, o Governo, as prefeituras e o Senado.\n\u00a0\u00a0\u00a0\u00a0 Isso nos ajuda a entender como o sistema eleitoral funciona e impacta o resultado final!",
    respostas: [
      { texto: "Ganha o candidato ou candidata que tiver o partido com maior número de votos.", correta: false },
      { texto: "Ganha o candidato ou candidata que obtiver a maioria dos votos válidos.", correta: true },
      { texto: "Ganha o candidato ou candidata que obtiver a maioria dos votos em branco.", correta: false },
      { texto: "Ganha o candidato ou candidata que obtiver o maior número de votos em cidades diferentes.", correta: false }
    ]
  },
  {
    pergunta: "Para quais cargos no Brasil é utilizado o sistema eleitoral de voto proporcional?",
    explicacao: "Quando votamos para vereador, deputado estadual ou deputado federal, a eleição segue o sistema proporcional. Só os senadores ficam de fora dessa regra: no Senado, quem tem mais votos leva a vaga. \n\u00a0\u00a0\u00a0\u00a0 No sistema proporcional, ser muito votado não basta. Primeiro, conta-se quantos votos cada partido somou, juntando os votos de todos os seus candidatos e os dados na legenda. Quanto mais votos o partido tiver, mais cadeiras ele conquista, e essas cadeiras ficam com os candidatos mais votados dentro dele. \n\u00a0\u00a0\u00a0\u00a0 É como um campeonato por equipes: a turma que soma mais pontos ganha mais vagas na final, e elas vão para quem mais se destacou em cada turma. Por isso, às vezes alguém com muitos votos fica de fora, enquanto outra pessoa, com menos votos, é eleita porque o partido dela foi melhor no conjunto.",
    respostas: [
      { texto: "Presidência da República e Governo de Estado.", correta: false },
      { texto: "Prefeitos e prefeitas de capitais.", correta: false },
      { texto: "Deputados, deputadas, vereadores e vereadoras.", correta: true },
      { texto: "Juízes e juízas.", correta: false }
    ]
  },
  {
    pergunta: "No sistema de voto proporcional, em quem você pode votar na urna eletrônica?",
    explicacao: "Você tem duas opções no voto proporcional: digitar o número do seu candidato ou sua candidata de preferência ou digitar apenas o número do partido.\n\u00a0\u00a0\u00a0\u00a0 O que vai ajudar a definir sua escolha é a preferência por uma pessoa específica ou pelo grupo que ela representa, suas ideias e projetos.",
    respostas: [
      { texto: "Apenas em um candidato ou candidata, sem poder votar no partido.", correta: false },
      { texto: "Em três candidatos ou candidatas do mesmo partido.", correta: false },
      { texto: "Em um candidato ou candidata ou apenas na legenda (número) do partido.", correta: true },
      { texto: "Na ordem de preferência de todos os candidatos e candidatas da região.", correta: false }
    ]
  },
  {
    pergunta: "O que são considerados 'votos válidos' em uma eleição?",
    explicacao: "Para calcular o vencedor da eleição, a Justiça Eleitoral não conta votos brancos e nulos.\n\u00a0\u00a0\u00a0\u00a0 Significa que você não pode fazer essas escolhas? Não!\nVocê é livre para votar como quiser, inclusive para demonstrar que não quis escolher nenhum dos candidatos ou candidatas disponíveis.",
    respostas: [
      { texto: "Apenas os votos dados diretamente a candidatos, candidatas ou partidos (excluindo brancos e nulos).", correta: true },
      { texto: "Todos os votos registrados na urna, incluindo brancos e nulos.", correta: false },
      { texto: "Apenas os votos dados diretamente a candidatos, candidatas ou partidos e votos brancos.", correta: false },
      { texto: "Apenas os votos de quem apresenta título de eleitor físico, e não no celular.", correta: false }
    ]
  },
  {
    pergunta: "O que significa haver 'segundo turno' em uma eleição?",
    explicacao: "Na eleição para presidente, governador e prefeito de cidades com mais de 200 mil eleitores, pode rolar um segundo turno.\n\u00a0\u00a0\u00a0\u00a0 Para ganhar logo de primeira, o candidato ou a candidata precisa ter mais da metade dos votos válidos. Votos brancos e nulos não entram nessa conta. \n\u00a0\u00a0\u00a0\u00a0 Se ninguém conseguir, os dois mais votados voltam para uma nova disputa, e aí quem tiver mais votos vence.",
    respostas: [
      { texto: "Uma nova disputa entre as duas pessoas mais votadas, quando uma teve mais de 50% dos votos válidos no 1º turno.", correta: false },
      { texto: "Uma votação feita apenas para quem faltou no primeiro turno.", correta: false },
      { texto: "Uma votação entre os três candidatos e candidatas com mais votos.", correta: false },
      { texto: "Uma nova disputa entre as duas pessoas mais votadas, quando nenhum teve mais de 50% dos votos válidos no 1º turno.", correta: true }
    ]
  },
  {
    pergunta: "O que é fundamental fazer antes de escolher seu candidato ou candidata nas eleições?",
    explicacao: "O voto consciente é um voto informado!\n\u00a0\u00a0\u00a0\u00a0 Conhecer os projetos e o passado dos candidatos e candidatas ajuda a saber quem a pessoa é e o que ela pode oferecer, se eleita.\nVale ressaltar: a decisão final precisa ser sua, sem que alguém decida por você.\n\u00a0\u00a0\u00a0\u00a0 E na hora de pesquisar, não escolha a opção mais fácil. Cheque informações em mais de um lugar, sempre em locais, sites e jornais de confiança!",
    respostas: [
      { texto: "Pedir promessas de favores pessoais ao candidato ou candidata.", correta: false },
      { texto: "Comparar histórico, propostas e ideias de candidatos e candidatas.", correta: true },
      { texto: "Pedir que uma pessoa mais velha escolha por você o candidato ou candidata.", correta: false },
      { texto: "Pedir opiniões para a Inteligência Artificial, que tem mais informações sobre todas as pessoas que se candidataram.", correta: false }
    ]
  },
  {
    pergunta: "Como se proteger das notícias falsas (fake news) durante o período das eleições?",
    explicacao: "Fake news atrapalham as eleições, a cidadania e a vida de todo mundo. \n\u00a0\u00a0\u00a0\u00a0 Então, antes de repassar aquele conteúdo polêmico no grupo, dá uma checada: veja se a notícia aparece em portais de jornalismo confiáveis ou em agências de checagem. \n\u00a0\u00a0\u00a0\u00a0 Não vai na onda! \n\u00a0\u00a0\u00a0\u00a0 A Justiça Eleitoral também é uma ótima fonte, com a página Fato ou Boato, que desmente boatos sobre as eleições. \n\u00a0\u00a0\u00a0\u00a0 Na dúvida, não compartilha.",
    respostas: [
      { texto: "Repassando as mensagens estranhas em grupos de conversa da família.", correta: false },
      { texto: "Checando a informação na rede social que você mais utiliza.", correta: false },
      { texto: "Checando a informação em serviços confiáveis, como a Justiça Eleitoral.", correta: true },
      { texto: "Checando a informação com Inteligência Artificial.", correta: false }
    ]
  },
 /* {
    pergunta: "O que é a 'colinha' e como ela ajuda no dia da votação?",
    explicacao: "A colinha de papel é permitida e incentivada!\nComo são vários candidatos e candidatas no mesmo dia, anotações de papel tornam a votação muito mais rápida na cabine.\nAlém do que você pode se esquecer do número na hora. E não é permitido consultar o celular!\nPrepare a colinha com suas preferências e deixe a votação mais tranquila e organizada.",
    respostas: [
      { texto: "É um papel de lembrete com os números dos candidatos e candidatas de sua escolha para agilizar na hora de digitar na urna.", correta: true },
      { texto: "É um papel de lembrete com os números dos candidatos e candidatas de outro eleitor para agilizar na hora de digitar na urna.", correta: false },
      { texto: "É um papel de lembrete com o horário de encerramento da votação.", correta: false },
      { texto: "É um papel de lembrete com o local de votação e horário de divulgação dos resultados.", correta: false }
    ]
  },
  {
    pergunta: "Como jovens podem exercer a cidadania na escola?",
    explicacao: "O Grêmio Estudantil é a primeira escola de democracia!\nNele, estudantes podem aprender a dialogar, votar em propostas, organizar eventos e defender os direitos dos colegas.\nSe sua escola ou colégio não tem, que tal propor a professores e professoras que ele seja criado?",
    respostas: [
      { texto: "Participando da Coordenação Pedagógica.", correta: false },
      { texto: "Participando do Grêmio Estudantil.", correta: true },
      { texto: "Participando do Conselho de Classe.", correta: false },
      { texto: "Participando da Diretoria.", correta: false }
    ]
  },*/
  {
    pergunta: "O que são cotas para mulheres nas eleições?",
    explicacao: "As cotas foram criadas para reduzir a desigualdade de gênero na política. \n\u00a0\u00a0\u00a0\u00a0 Elas garantem um espaço mínimo para candidatas, além de recursos e visibilidade proporcional com propaganda. \nEsse mecanismo é importante para que todos e todas tenham espaço na política!",
    respostas: [
      { texto: "Uma regra que reserva 30% das cadeiras do Legislativo para mulheres eleitas.", correta: false },
      { texto: "Uma regra que obriga os partidos a lançar pelo menos 30% de candidaturas de mulheres, para garantir que elas possam concorrer e ser votadas.", correta: true },
      { texto: "Um sistema que faz o voto das mulheres valer mais na contagem final.", correta: false },
      { texto: "Uma regra que dá prioridade na votação a projetos de lei sobre os direitos das mulheres.", correta: false }
    ]
  }
];
