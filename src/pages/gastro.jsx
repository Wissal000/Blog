import React from "react";
import gastroImage from "../assets/gastronomie.jpg";
import "./gastro.css";

export const Gastro = () => {
  return (
    <div className="gastro-container">
      <img src={gastroImage} alt="gastro" className="gastro-image" />
      <div className="sait-tu-que-gastro">
        <span style={{ color: "#d9534f", fontWeight: "bold" }}>
          Sais-tu que{" "}
        </span>
        au Japon, on ne laisse jamais ses baguettes plantées dans le riz ? C’est
        un geste à éviter absolument, car il est très mal vu. Dans la culture
        japonaise, planter ses baguettes verticalement dans un bol de riz
        rappelle un rituel funéraire : c’est ainsi que l’on présente le riz lors
        des cérémonies pour les défunts dans les temples bouddhistes. Faire cela
        à table est donc perçu comme un signe de malheur ou de mort, et peut
        choquer ceux qui mangent avec toi. À la place, il faut toujours poser
        les baguettes à plat sur un repose-baguettes (appelé hashioki) (箸置き)
        ou sur le bord de son assiette.
      </div>

      <section className="billet-gastro">
        <h3>Japon, tu me fais saliver… de loin</h3>
        <p>
          Je vais être honnête avec vous, je n’ai jamais voyagé au Japon. Pas
          encore. Mais il y a une chose qui me donne l’impression d’y être un
          peu, parfois, même sans prendre l’avion : sa cuisine.
          <br />
          Il suffit que je voie une vidéo de ramen ( une recette de cuisine
          japonaise) qui fume, ou un sushi préparé avec soin, pour que mon
          imagination parte là-bas. C’est fou comme un simple plat peut faire
          voyager l’esprit. La cuisine japonaise n’est pas juste belle à
          regarder, elle est aussi pleine de calme, de respect, de gestes
          précis. Chaque ingrédient a l’air d’avoir une importance, comme si on
          racontait une histoire dans chaque assiette.
          <br />
          <br />
          Et un jour, j’ai voulu goûter un peu de ce Japon-là. Depuis chez moi.
          <br />
          J’étais super motivé, j’avais trouvé un petit paquet au supermarché
          asiatique du coin : “Natto haricots de soja fermentés”. Sur
          l’emballage, ça avait l’air mignon. Mais quand j’ai ouvert la boîte…
          catastrophe. L’odeur m’a attaqué en premier. Ensuite, les fils gluants
          se sont accrochés à mes baguettes comme une toile d’araignée. Et moi,
          brave comme je suis, j’ai quand même goûté. Résultat ? Une grimace que
          même mon miroir n’a pas supportée.
          <br />
          <br />
          Mais malgré ça, j’ai adoré le moment. Parce que j’ai appris quelque
          chose. La cuisine japonaise, ce n’est pas toujours facile à
          comprendre… mais elle ne laisse jamais indifférent. Elle touche le
          cœur. Elle est différente, calme, pleine de poésie, même dans sa
          simplicité. C’est une cuisine qui ne crie pas. Elle chuchote. Elle
          invite. Elle émeut. <br />
          Un jour, je veux m’asseoir au Japon, dans un petit resto où le chef
          prépare les plats devant moi. Je veux goûter un vrai bol de ramen,
          dire ‘itadakimasu’ (expression japonaise prononcée avant de manger)
          pour de vrai, et vivre un moment simple mais précieux. <br />
          En attendant, je rêve, je regarde des vidéos, je rate des recettes à
          la maison, je ris de mes erreurs… et je continue d’aimer cette cuisine
          qui me parle sans mots.
        </p>
      </section>

      <div className="blog-gastro">
        <h3>
          À table au Japon : un voyage des sens que vous n’oublierez jamais
        </h3>
        <h4>Une gastronomie qui raconte une histoire</h4>
        <p>
          Dès les premières bouchées, on comprend que la cuisine japonaise ne se
          contente pas de nourrir : elle parle. Elle parle du passé, des
          traditions, du lien profond entre les Japonais et la nature. Chaque
          plat est conçu avec minutie, avec un profond respect pour les
          ingrédients. Le Japon ne cuisine pas par automatisme : il cuisine pour
          honorer la saison, la terre et l’océan. Ce n’est pas une gastronomie
          tape-à-l’œil : c’est une cuisine de l’attention, de l’élégance et du
          silence. Un plat bien présenté, équilibré en goût, couleur et texture,
          est une forme de politesse envers celui qui va le manger.
        </p>
        <h4>L’élégance dans la simplicité</h4>
        <p>
          Au Japon, même un déjeuner rapide devient un moment sacré. Un bento
          fait maison, bien compartimenté, soigneusement décoré, n’est pas juste
          mignon : il traduit l’importance du soin et du détail. Dans un petit
          restaurant de rue, un bol de ramen chaud peut vous émouvoir plus qu’un
          dîner étoilé. Les Japonais ne cherchent pas à impressionner par la
          quantité ou la complexité. Au contraire, ils séduisent par la maîtrise
          du geste, la justesse des saveurs, et une présentation toujours
          harmonieuse. C’est une esthétique du minimalisme, qui parle à tous nos
          sens.
        </p>
        <h4>Bien plus que des sushis :</h4>
        <p>
          Réduire la cuisine japonaise aux seuls sushis serait une erreur. Bien
          sûr, ces derniers sont emblématiques et mondialement connus, mais ils
          ne représentent qu’un fragment de l’immense richesse culinaire du
          pays. Il suffit de découvrir des plats comme le gyudon, un bol de riz
          au bœuf tendre, ou encore le tonkatsu, un porc pané croustillant à
          souhait. D’autres spécialités comme l’okonomiyaki, une crêpe salée
          garnie selon les envies, ou le nabe, une fondue japonaise souvent
          partagée entre amis ou en famille, révèlent une tout autre facette du
          Japon : celle de la générosité, de la convivialité et de la chaleur
          humaine. Goûter ces plats, c’est s’immerger dans l’intimité du
          quotidien japonais, bien au-delà des clichés touristiques.
        </p>
        <h4>Manger avec les yeux, vivre avec le cœur</h4>
        <p>
          Au Japon, l’acte de manger va bien au-delà du goût : c’est une
          expérience culturelle complète. Avant même de porter un aliment à la
          bouche, on le contemple. La présentation est essentielle — les
          couleurs doivent s’harmoniser, les formes dialoguer. Prendre une photo
          de son plat n’est pas un geste futile, mais un rituel esthétique,
          presque sacré. Manger, c’est aussi apprendre à s’adapter : retirer ses
          chaussures, savourer le silence, saluer le chef avec respect. La
          gastronomie japonaise reflète alors toute une philosophie de vie
          discrète, raffinée, et profondément humaine.
        </p>
        <p>
          Si vous voyagez au Japon, ne vous limitez pas aux itinéraires
          classiques. Les vraies émotions culinaires se nichent souvent dans les
          petites échoppes de quartier, là où les parfums flottent dans l’air et
          où quelques habitués patientent en silence. Osez suivre votre
          instinct, un conseil local, ou même une file d’attente discrète :
          c’est là que la magie opère. Car au fond, la gastronomie japonaise est
          une invitation à ralentir, à écouter ses sens, à redécouvrir le
          plaisir simple de manger. Elle ne cherche pas à impressionner, mais à
          toucher profondément, sincèrement, avec une délicatesse qui laisse
          une empreinte durable, plat après plat.
        </p>
      </div>
    </div>
  );
};
