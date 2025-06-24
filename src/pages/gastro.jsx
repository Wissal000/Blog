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
          <br /><br />  
          Et un jour, j’ai voulu goûter un peu de ce Japon-là. Depuis chez moi.
          <br />
          J’étais super motivé, j’avais trouvé un petit paquet au supermarché
          asiatique du coin : “Natto haricots de soja fermentés”. Sur
          l’emballage, ça avait l’air mignon. Mais quand j’ai ouvert la boîte…
          catastrophe. L’odeur m’a attaqué en premier. Ensuite, les fils gluants
          se sont accrochés à mes baguettes comme une toile d’araignée. Et moi,
          brave comme je suis, j’ai quand même goûté. Résultat ? Une grimace que
          même mon miroir n’a pas supportée.
          <br /><br />
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
    </div>
  );
};
