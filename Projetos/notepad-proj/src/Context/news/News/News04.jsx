import React from 'react';

import ParagrafoWrapper from '../../../Containers/News/NewsFile/Containers/Paragrafo/Paragrafo.Style';
import ImageContent from '../../../Containers/News/NewsFile/Containers/ImageContent';
import Divider from '../../../Containers/News/NewsFile/Containers/Divider';
import LinkContent from '../../../Containers/News/NewsFile/Containers/LinkContent';
import Highlight from '../../../Containers/News/NewsFile/Containers/Highlight';

const News04 = () => (
  <ParagrafoWrapper>
    <div className="first">
      <ImageContent
        img="https://cdn-images-1.medium.com/max/800/1*6JVtKUl4Q-uHQq19wXFeHg.jpeg"
        alt="preguiça"
        width="56"
      />
    </div>

    <ParagrafoWrapper>
      {
        'Preguiça, procrastinação, cansaço… eu também sofria com isso até aprender como identificar e resolver os problemas que me levam a ser menos produtivo, eficiente e motivado.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'Toda profissão é difícil, mesmo você amando o que faz, é claro que surgem obrigações que muitas das vezes fogem do que realmente gostaria de fazer. Nestas horas, por mais profissional que seja, um dia arrastado pode facilmente se tornar semanas e entregar aquele projeto fica cada vez mais difícil, a feature nova que você ficou responsável acaba sendo entregue cheia de bugs ou longe do padrão de qualidade que você gostaria de entregar.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">A Culpa não é sua</div>
      {
        'Biologicamente, o corpo tende a querer descanso para poupar energia quando suas necessidades básicas foram atendidas até a próxima vez em que a fome bater ou o predador aparecer.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'Nós mamíferos temos a tendência de caçar, comer e se tudo estiver bem: dormir. É natural, poupar energia é uma habilidade que nos manteve vivos para evoluir até aqui, uma habilidade que infelizmente não acompanhou as rápidas mudanças tecnológicas que nos permite conseguir um miojo no mercadinho mais próximo.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">Aceite a derrota</div>
      {
        'A preguiça sempre vai vencer, você sabe disso, a Google sabe disso, o Mark Zuckerberg sabe disso e criou um feed rodando um algoritmo do capeta para te entregar conteúdo lotado de memes, que te agrada e que só precisa deslizar a tela para receber mais enquanto você esta largado no sofá ou na mesa do trabalho.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">
        {
          'Como farei algo para me livrar da preguiça, se tenho preguiça de fazer qualquer coisa?'
        }
      </div>
      {
        'Sim, você esta certo, a preguiça pode ser um poço sem fundo se você for muito afobado. Pequenas atitudes e um pouco de autoconhecimento é que vão te tirar desse buraco negro da derrota, acompanhe a lista e me agradeça nos comentários depois.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">1) Dormir de forma inteligente</div>
      {'O sono é composto de'}
      <a href="http://www.sono.org.br/sono/sono.php" className="underline">
        {'ciclos'}
      </a>
      {
        'que duram 1h30m, durante este ciclo você passa entre o estado mais profundo do sono (REM) e o mais leve.'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/0*1JhpEmk1mjpkBnbp.jpg"
      alt="band rem"
      description="por essa você não esperava: a banda R.E.M."
      height="70"
    />

    <ParagrafoWrapper>
      {
        'A sensação de cansaço ao acordar geralmente é maior quando você é despertado durante o estágio do sono REM, sabendo disso, você pode usar apps ('
      }
      <a
        href="https://play.google.com/store/apps/details?id=com.cycle.sleepcalculator"
        className="underline"
      >
        {'Calculadora de Sono para Android'}
      </a>
      {'ou o site'}
      <a href="http://sleepyti.me/" className="underline">
        {'sleepyti.me'}
      </a>
      {
        ') que calculam o melhor horário para acordar com base na hora em que pretende dormir. Programe o alarme para te acordar no momento exato sem perder disposição, e pronto.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">2) Feito é melhor que perfeito</div>
      {
        'Poderia ser um empreendedor de palco dizendo isso, mas é um programador. Ás vezes temos planos que não se concretizam pois acabamos adicionando muita complexidade as tarefas ou no caminho para alcançar o objetivo. Algumas metodologias ágeis vivem dizendo que primeiro devemos aplicar esforço no minimo possível para validar uma ideia ou que tenha valor para nós.'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/0*yAABZ33Ns_7qXunU.png"
      alt="satisfacition"
      description="Assim como produtos que progridem mantendo satisfação do usuário, extraia valor das pequenas tarefas."
      width="62"
    />

    <Highlight text="Ao invés de se cobrar a estudar 4 horas por dia, tente criar um objetivo de ignição pequeno. Estudar 30 minutos por dia é muito mais fácil, não parece muito, mas é melhor que nada. paragraf Criar o hábito de estudar todos os dias é muito mais valioso que se sentir obrigado a passar 4 horas fazendo algo que não esta afim e acabar desistindo em poucos dias." />

    <ParagrafoWrapper>
      <div className="second-title">
        {'3) Uma boa Class é constituída de pequenos mas sólidos métodos'}
      </div>
      {
        'Imagine o mesmo para as tarefas grandes que exigem muito tempo, esforço e dedicação. Divida tudo em pequenas etapas fáceis de alcançar e concluir. Sua satisfação ao ver as coisas progredindo irão te manter motivado'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/1*kZzipFPSUMrR12ymvrxE1Q.jpeg"
      alt="timer"
      description="A cada 25 minutos de trampo, 5 minutos pra assistir YouTube."
      width="50"
    />

    <ParagrafoWrapper>
      {
        'Você pode usar a técnica Pomodoro, que divide seu tempo em ciclos de 25 minutos seguidos de pequenas pausas de 5 minutos. Essa pausa te dá espaço de respirar e fazer algo que gosta, e fica muito mais fácil organizar as tarefas que vai realizar se dividir seu tempo em blocos e reservar uma quantidade adequada para cada tarefa.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'A cada 4 ciclos de pomodoro, você pode tirar uma pausa maior de 15 minutos e as tarefas vão ficar mais leves. Eu mesmo procrastinava na hora de lavar a louça, mas usando o pomodoro ficou mais fácil pois em 25 minutos (que é bem menos tempo que eu imaginava que passava na pia) consigo lavar, secar e ainda dar um trato no resto da cozinha.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">5) Faça a preguiça dar trabalho</div>
      {
        'Todo dia no trabalho passo por uma reunião rápida de 30 minutos em que as pessoas ficam de pé. Por quê? porquê é desconfortável e nos obriga a ser mais breves nas discussões e resolver tudo mais rápido.'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/0*X_t2XtaKkTIa4JDO."
      alt="reunião"
      description="Bom pessoal, alguém esqueceu de escrever o 4º item desteartigo e o leitor nem percebeu, como evitar que isso aconteça outra vez?"
      width="60"
    />

    <ParagrafoWrapper>
      {
        'Se você costuma ter problemas em acordar, coloque o despertador longe da cama, bem alto e com um som irritante.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {'Se vive no Facebook, instale um bloqueador de sites no seu navegador ('}
      <a
        href="https://chrome.google.com/webstore/detail/block-site/eiimnmioipafcokbfikbljfdeojpcgbh?hl=en"
        className="underline"
      >
        {'Block Site'}
      </a>
      {
        'é minha opção para o Chrome) com senha configurada por um amigo seu (claro que não é pra ele te dizer a senha). paragraf No meu celular mesmo, desinstalo e bloqueio aplicativos que consomem muito do meu tempo (Instagram, Facebook…). Não existem ninguém que precise falar com você a todo momento, não existe motivos de você viver expondo sua vida pessoal ou consumindo o dia-a-dia das pessoas pela internet.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">6) Vá ao médico e tome vitaminas</div>
      {
        'Problemas como depressão, apatia ou falta de vitaminas são (mas não deveriam ser) normais. Se por acaso você sentir que o que te mantém chateado, desmotivado ou cansado é muito mais profundo do que simplesmente falta de atitude, procure um médico.'
      }
    </ParagrafoWrapper>

    <ImageContent
      img="https://cdn-images-1.medium.com/max/800/0*pzQmt5_TCm1J-IYG.jpg"
      alt="she sleeping"
      description="Vive cansado sem motivo? visite um médico."
    />

    <ParagrafoWrapper>
      {
        'Eu mesmo tomo algumas vitaminas por alguns períodos quando as coisas não estão bem (Lavitan paga nóis!), mas lembre-se: O médico é a melhor pessoa para avaliar sua situação e recomendar um tratamento.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      <div className="second-title">Conclusão</div>
      {
        'Deixar de ser preguiçoso(a) requer pequenas atitudes para criar hábitos saudáveis que respeitem também alguns limites. Não achei necessário citar um item no artigo, mas é bom lembrar que os momentos de preguiça e lazer também são importantes para sua motivação. Não somos máquinas e até mesmo entretenimento barato é muito bem vindo, sem preconceitos.'
      }
    </ParagrafoWrapper>

    <ParagrafoWrapper>
      {
        'Que você consiga sempre estar aprendendo e fazendo o que gosta sem se esgotar.'
      }
    </ParagrafoWrapper>

    <LinkContent
      link="https://medium.com/@ogilvieira/as-4-etapas-para-se-tornar-um-especialista-34be61c82e56"
      title="As 4 etapas para se tornar um especialista"
      subtitle="Como se tornar um especialista em qualquer assunto? Se você quer dominar uma habilidade e não sabe como se organizar ou…"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/1*rLKUOrkxNZ2Mjrjof0gL0w.jpeg"
      altImg="In Site Medium"
      className="variant"
    />

    <LinkContent
      link="https://medium.com/@ogilvieira/como-aprender-mais-r%C3%A1pido-ed671efdcf47"
      title="Como aprender qualquer coisa sozinho, com pouca grana e muito mais rápido"
      subtitle="Meu método pessoal, dividido em 4 etapas, para você que, assim como eu, não tem grana pra gastar e se sente frustrado…"
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/1*V7KxGt6jB4KR9mbPokAECQ.jpeg"
      altImg="In Site Medium"
      className="variant"
    />

    <LinkContent
      link="https://medium.com/trainingcenter/desenvolvendo-a-maior-skill-de-todo-programador-3bb2512a2df9"
      title="Desenvolvendo a maior skill de todo programador"
      subtitle="Se tem algo que separa juniors de seniors no nosso ramo é a capacidade de aprender. Neste artigo saiba como criar o h… "
      linkSmall="medium.com"
      img="https://cdn-images-1.medium.com/fit/c/320/320/1*dTp1dIkq_l8UBMZ79OIxWw.jpeg"
      altImg="In Site Medium"
      className="variant"
    />

    <Divider />
  </ParagrafoWrapper>
);

export default News04;
