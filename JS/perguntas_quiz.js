const perguntas = [
  {
    pergunta: "Na prática, o que é cidadania?",
    explicacao: "Cidadania é uma ideia grandiosa: é o que nos garante educação, saúde e segurança, mas também exige respeito às regras e às necessidades das outras pessoas.\n\nVotar também faz parte da vida de um cidadão. Mas você pode ir muito além.\n\nParticipar das decisões do nosso bairro e do nosso país não acaba no dia da eleição. É a cidadania que permite viver isso todo dia.",
    respostas: [
      { texto: "Ter carteira de identidade, passaporte e outros documentos oficiais que identificam um cidadão ou cidadã.", correta: false },
      { texto: "Votar em todas as eleições depois da idade permitida.", correta: false },
      { texto: "Exercer direitos e deveres que nos permitem participar ativamente da sociedade.", correta: true },
      { texto: "Comprovar a cidade onde mora por meio de documentação.", correta: false }
    ]
  },
  {
    pergunta: "A Democracia pode ser comparada a um jogo em equipe. Por quê?",
    explicacao: "Democracia significa 'governo do povo'. Assim como em um jogo coletivo organizado, todos têm o direito de opinar, escolher seus representantes e ajudar a decidir o rumo da equipe.\n\nSua voz é importante e ajuda a decidir o futuro de toda a população!",
    respostas: [
      { texto: "Porque as pessoas que participam podem escolher as regras e os líderes da eleição.", correta: true },
      { texto: "Porque existe um técnico que toma as decisões e comanda os eleitores e eleitoras.", correta: false },
      { texto: "Porque depois de escolher um time, você precisa fazer parte até o final da eleição.", correta: false },
      { texto: "Porque o jogo acaba assim que a eleição termina.", correta: false }
    ]
  },
  {
    pergunta: "Com qual idade um jovem brasileiro pode começar a votar, caso queira?",
    explicacao: "No Brasil, o voto é opcional (facultativo) para jovens de 16 e 17 anos.\n\nÉ uma grande oportunidade de participação! Exige responsabilidade e consciência.\n\nMas, ainda não é uma obrigação votar, ou seja, não há nenhuma punição.\n\nSó passa a ser obrigatório com 18 anos.",
    respostas: [
      { texto: "A partir dos 12 anos, mas apenas em eleições para deputado, desde que tenha autorização dos pais.", correta: false },
      { texto: "A partir dos 14 anos, mas apenas em eleições para prefeito.", correta: false },
      { texto: "A partir dos 16 anos, mas apenas em eleições para presidente.", correta: false },
      { texto: "A partir dos 16 anos, para todos os cargos.", correta: true }
    ]
  },
  {
    pergunta: "Por que o seu voto é secreto na urna eletrônica?",
    explicacao: "O segredo do voto protege a sua liberdade e a sua opinião!\n\nNinguém pode obrigar, ameaçar ou pressionar você a votar em algum candidato ou candidata.\n\nVale lembrar: na hora da votação, nada de tirar foto da urna ou tentar outra forma de registrar o voto.",
    respostas: [
      { texto: "Para que os candidatos que você votou tenham essa informação e possam agradecer depois.", correta: false },
      { texto: "Porque, no Brasil, é proibido publicar nas redes sociais em quem você vai votar.", correta: false },
      { texto: "Para impedir que seus amigos e familiares saibam se você foi votar ou não.", correta: false },
      { texto: "Para garantir que você possa escolher sem pressão ou cobrança de outras pessoas.", correta: true }
    ]
  },
  {
    pergunta: "Por que o voto de jovens é importante no resultado final?",
    explicacao: "Jovens podem levar para a política muitos assuntos que fazem parte da vida deles!\n\nEscola pública de qualidade, primeiro emprego, tecnologia, meio ambiente e cultura, por exemplo.\n\nEssa contribuição é importante para que mais problemas sejam ouvidos e possam ser debatidos.",
    respostas: [
      { texto: "Porque o voto de um jovem vale o dobro do voto de um adulto.", correta: false },
      { texto: "Porque jovens podem trazer ideias diferentes de outras gerações.", correta: true },
      { texto: "Porque só jovens podem votar em juízes.", correta: false },
      { texto: "Porque jovens são os únicos que podem ajudar na criação de novas leis.", correta: false }
    ]
  },
  {
    pergunta: "Na eleição, você vota em pessoas que vão trabalhar no Poder Executivo e no Poder Legislativo. Qual é a principal diferença entre esses dois Poderes?",
    explicacao: "Quem fica no Poder Executivo são aquelas pessoas que foram eleitas para realizar, executar os serviços para a população. Por exemplo, obras.\n\nÉ o caso de presidente, presidenta, governador, governadora, prefeito e prefeita.\n\nJá o Poder Legislativo são as pessoas que vão elaborar leis e devem cuidar do dinheiro gasto.\n\nSenadores, senadoras, deputados, deputadas, vereadores e vereadoras fazem parte do Poder Legislativo.\n\nSaber o que cada um faz ajuda na hora de decidir o voto!",
    respostas: [
      { texto: "O Executivo julga crimes e o Legislativo comanda a polícia.", correta: false },
      { texto: "O Executivo administra o governo e o Legislativo cria e aprova leis.", correta: true },
      { texto: "O Executivo cria os exercícios sobre impostos e o Legislativo define a lógica de funcionamento das eleições.", correta: false },
      { texto: "O Executivo cuida dos mais jovens e o Legislativo cuida dos mais velhos.", correta: false }
    ]
  },
  {
    pergunta: "Pensando na estrutura do país, a quem podemos comparar a função de Presidente ou Presidenta da República?",
    explicacao: "O presidente ou presidenta é quem comanda o Poder Executivo Federal.\n\nEle ou ela coordena os rumos e metas do país, cuida da relação com outros países e lidera ministérios, que são equipes que atuam com alguns temas como\nSaúde e Educação.\n\nPor isso essa pessoa precisa liderar. Ela não toma decisões sozinha. O presidente ou presidenta tem que buscar apresentar suas ideias e convencer as outras pessoas.\n\nÉ parte fundamental da democracia!",
    respostas: [
      { texto: "Ao gerente de uma loja.", correta: false },
      { texto: "Ao diretor de uma escola.", correta: false },
      { texto: "Ao capitão de um time.", correta: true },
      { texto: "Ao juiz de uma partida de futebol.", correta: false }
    ]
  },
  {
    pergunta: "O que faz o prefeito ou prefeita de um município no dia a dia?",
    explicacao: "O prefeito ou prefeita é chefe do Poder Executivo Municipal.\n\nÉ sua responsabilidade garantir que a coleta de lixo funcione, que as creches e postos de saúde atendam quem precisa e que as ruas fiquem limpas e iluminadas.\n\nMas vai muito além.\n\nPara que a cidade melhore para as pessoas, o prefeito ou prefeita é fundamental. Apesar de não votar, essa pessoa pode também sugerir novas leis.",
    respostas: [
      { texto: "Cuida de postos de saúde, ônibus, praças e serviços públicos na cidade.", correta: true },
      { texto: "Decide quando será votada uma nova lei.", correta: false },
      { texto: "Comanda tropas do exército na cidade.", correta: false },
      { texto: "Define quem serão os vereadores e as vereadoras.", correta: false }
    ]
  },
  {
    pergunta: "Qual é uma das funções mais importantes de vereadores e vereadoras em uma cidade?",
    explicacao: "Os vereadores e as vereadoras são os fiscais do povo na cidade.\n\nEles e elas criam leis para a cidade e devem acompanhar de perto para garantir que a prefeitura use o dinheiro de forma correta e voltada para as pessoas.",
    respostas: [
      { texto: "Asfaltar ruas e construir pontes.", correta: false },
      { texto: "Nomear diretores das escolas e médicos dos hospitais.", correta: false },
      { texto: "Propor e votar leis, além de fiscalizar o trabalho da prefeitura.", correta: true },
      { texto: "Organizar eventos do município.", correta: false }
    ]
  },
  {
    pergunta: "Quem são os representantes eleitos para criar as leis que valem para o país inteiro?",
    explicacao: "Deputados, deputadas, senadores e senadoras fazem parte do Congresso Nacional, que fica em Brasília e é o principal local de criação das leis brasileiras.\n\nA Câmara Federal, onde ficam deputados e deputadas, representa o povo. Já o Senado Federal representa os estados, com todos os senadores e senadoras.\n\nAssim como nas cidades e nos estados, outros políticos também participam da aprovação das leis. Mas é no Congresso que as ideias são recebidas e se tornam leis.\n\nE se discute tudo: atendimento médico, internet, vagas na educação e tudo mais que envolve direitos!",
    respostas: [
      { texto: "Vereadores e vereadoras que tiveram mais votos.", correta: false },
      { texto: "Deputados, deputadas, senadores e senadoras.", correta: true },
      { texto: "Governadores e governadoras.", correta: false },
      { texto: "Juízes e juízas do Supremo Tribunal Federal.", correta: false }
    ]
  },
  {
    pergunta: "Como funciona o sistema de voto majoritário nas eleições?",
    explicacao: "“Majoritário” é uma palavra relacionada à maioria de algo.\n\nOu seja, no sistema de voto majoritário, a regra é simples e direta: quem tem mais votos ganha a vaga!\n\nEssa regra é aplicada, no Brasil, para escolher quem vai ocupar a Presidência, o Governo, as prefeituras e o Senado.\n\nIsso nos ajuda a entender como o sistema eleitoral funciona e impacta o resultado final!",
    respostas: [
      { texto: "Ganha o candidato ou candidata que tiver o partido com maior número de votos.", correta: false },
      { texto: "Ganha o candidato ou candidata que obtiver a maioria dos votos válidos.", correta: true },
      { texto: "Ganha o candidato ou candidata que obtiver a maioria dos votos em branco.", correta: false },
      { texto: "Ganha o candidato ou candidata que obtiver o maior número de votos em cidades diferentes.", correta: false }
    ]
  },
  {
    pergunta: "Para quais cargos no Brasil é utilizado o sistema eleitoral de voto proporcional?",
    explicacao: "O sistema proporcional é usado para escolher quais pessoas vão trabalhar no Poder Legislativo nas cidades, nos estados e em Brasília, com exceção dos senadores e senadores.\n\nNesse caso, não é apenas o número de votos que o candidato ou candidata recebeu que importa!\n\nDepende do número de votos válidos na eleição, do número de vagas disponíveis e do número de votos que o partido do candidato ou candidata recebeu.",
    respostas: [
      { texto: "Presidência da República e Governo de Estado.", correta: false },
      { texto: "Prefeitos e prefeitas de capitais.", correta: false },
      { texto: "Deputados, deputadas, vereadores e vereadoras.", correta: true },
      { texto: "Juízes e juízas.", correta: false }
    ]
  },
  {
    pergunta: "No sistema de voto proporcional, em quem você pode votar na urna eletrônica?",
    explicacao: "Você tem duas opções no voto proporcional: digitar o número do seu candidato ou sua candidata de preferência ou digitar apenas o número do partido.\n\nO que vai ajudar a definir sua escolha é a preferência por uma pessoa específica ou pelo grupo que ela representa, suas ideias e projetos.",
    respostas: [
      { texto: "Apenas em um candidato ou candidata, sem poder votar no partido.", correta: false },
      { texto: "Em três candidatos ou candidatas do mesmo partido.", correta: false },
      { texto: "Em um candidato ou candidata ou apenas na legenda (número) do partido.", correta: true },
      { texto: "Na ordem de preferência de todos os candidatos e candidatas da região.", correta: false }
    ]
  },
  {
    pergunta: "O que são considerados 'votos válidos' em uma eleição?",
    explicacao: "Para calcular o vencedor da eleição, a Justiça Eleitoral não conta votos\nbrancos e nulos.\n\nSignifica que você não pode fazer essas escolhas? Não!\n\nVocê é livre para votar como quiser, inclusive para demonstrar que não quis escolher nenhum dos candidatos ou candidatas disponíveis.",
    respostas: [
      { texto: "Apenas os votos dados diretamente a candidatos, candidatas ou partidos (excluindo brancos e nulos).", correta: true },
      { texto: "Todos os votos registrados na urna, incluindo brancos e nulos.", correta: false },
      { texto: "Apenas os votos dados diretamente a candidatos, candidatas ou partidos e votos brancos.", correta: false },
      { texto: "Apenas os votos de quem apresenta título de eleitor físico, e não no celular.", correta: false }
    ]
  },
  {
    pergunta: "O que significa haver 'segundo turno' em uma eleição?",
    explicacao: "Nas eleições para Governo, Presidência e nas prefeituras de cidades com mais de 200 mil eleitores e eleitoras, é possível existir um segundo turno.\n\nPara acabar a eleição já no primeiro turno, a pessoa vencedora precisa de mais da metade dos votos.\n\nSe ninguém alcançar no 1º turno, as duas pessoas que mais tiveram votos avançam para o 2º turno.",
    respostas: [
      { texto: "Uma nova disputa entre as duas pessoas mais votadas, quando uma teve mais de 50% dos votos válidos no 1º turno.", correta: false },
      { texto: "Uma votação feita apenas para quem faltou no primeiro turno.", correta: false },
      { texto: "Uma votação entre os três candidatos e candidatas com mais votos.", correta: false },
      { texto: "Uma nova disputa entre as duas pessoas mais votadas, quando nenhum teve mais de 50% dos votos válidos no 1º turno.", correta: true }
    ]
  },
  {
    pergunta: "O que é fundamental fazer antes de escolher seu candidato ou candidata nas eleições?",
    explicacao: "O voto consciente é um voto informado!\n\nConhecer os projetos e o passado dos candidatos e candidatas ajuda a saber quem a pessoa é e o que ela pode oferecer, se eleita.\n\nVale ressaltar: a decisão final precisa ser sua, sem que alguém decida por você.\n\nE na hora de pesquisar, não escolha a opção mais fácil. Cheque informações em mais de um lugar, sempre em locais, sites e jornais de confiança!",
    respostas: [
      { texto: "Pedir promessas de favores pessoais ao candidato ou candidata.", correta: false },
      { texto: "Comparar histórico, propostas e ideias de candidatos e candidatas.", correta: true },
      { texto: "Pedir que uma pessoa mais velha escolha por você o candidato ou candidata.", correta: false },
      { texto: "Pedir opiniões para a Inteligência Artificial, que tem mais informações sobre todas as pessoas que se candidataram.", correta: false }
    ]
  },
  {
    pergunta: "Como se proteger das notícias falsas (fake news) durante o período das eleições?",
    explicacao: "As fake news atrapalham as eleições, a cidadania e nossa vida em geral.\n\nAntes de compartilhar qualquer conteúdo polêmico, verifique se a notícia é verdadeira em portais jornalísticos ou instituições oficiais de checagem.\n\nA Justiça Eleitoral é uma ótima opção!",
    respostas: [
      { texto: "Repassando as mensagens estranhas em grupos de conversa da família.", correta: false },
      { texto: "Checando a informação na rede social que você mais utiliza.", correta: false },
      { texto: "Checando a informação em serviços confiáveis, como a Justiça Eleitoral.", correta: true },
      { texto: "Checando a informação com Inteligência Artificial.", correta: false }
    ]
  },
  {
    pergunta: "O que é a 'colinha' e como ela ajuda no dia da votação?",
    explicacao: "A colinha de papel é permitida e incentivada!\n\nComo são vários candidatos e candidatas no mesmo dia, anotações de papel tornam a votação muito mais rápida na cabine.\n\nAlém do que você pode se esquecer do número na hora. E não é permitido consultar o celular!\n\nPrepare a colinha com suas preferências e deixe a votação mais tranquila e organizada.",
    respostas: [
      { texto: "É um papel de lembrete com os números dos candidatos e candidatas de sua escolha para agilizar na hora de digitar na urna.", correta: true },
      { texto: "É um papel de lembrete com os números dos candidatos e candidatas de outro eleitor para agilizar na hora de digitar na urna.", correta: false },
      { texto: "É um papel de lembrete com o horário de encerramento da votação.", correta: false },
      { texto: "É um papel de lembrete com o local de votação e horário de divulgação dos resultados.", correta: false }
    ]
  },
  {
    pergunta: "Como jovens podem exercer a cidadania na escola?",
    explicacao: "O Grêmio Estudantil é a primeira escola de democracia!\n\nNele, estudantes podem aprender a dialogar, votar em propostas, organizar eventos e defender os direitos dos colegas.\n\nSe sua escola ou colégio não tem, que tal propor a professores e professoras que ele seja criado?",
    respostas: [
      { texto: "Participando da Coordenação Pedagógica.", correta: false },
      { texto: "Participando do Grêmio Estudantil.", correta: true },
      { texto: "Participando do Conselho de Classe.", correta: false },
      { texto: "Participando da Diretoria.", correta: false }
    ]
  },
  {
    pergunta: "O que são cotas para mulheres nas eleições?",
    explicacao: "As cotas ações afirmativas criadas para reduzir a desigualdade de gênero na política.\n\nElas garantem um espaço mínimo para candidatas, além de recursos e visibilidade proporcional com propaganda.\n\nEsse mecanismo é importante para que todos e todas tenham espaço na política!",
    respostas: [
      { texto: "Um sistema que faz o voto de mulheres ser mais importante no resultado final.", correta: false },
      { texto: "Uma estratégia para que leis sobre mulheres sejam votadas antes.", correta: false },
      { texto: "Um sistema para garantir que as mulheres possam concorrer e serem votadas.", correta: true },
      { texto: "Uma estratégia para que homens tenham menos propaganda na TV em comparação a mulheres.", correta: false }
    ]
  }
];
