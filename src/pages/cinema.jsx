// cinema.jsx
import React from "react";
import "./cinema.css";
import cinemaImg from "../assets/cinema.jpg";
import manga from "../assets/manga.png";
import chrono from "../assets/chronologie.png";

export const Cinema = () => {
  return (
    <div className="cinema-page">
      <img src={cinemaImg} alt="Cinema" className="cinema-banner" />

      <section className="sait-tu-que">
        <div className="cinema-fact">
          <h2 className="section-title">Sais-tu que ?</h2>
          <p className="section-text">
            Sais-tu que <em>hōga</em> est un trésor culturel qui brille depuis
            plus d’un siècle ? Il est né au début du 20ᵉ siècle, avec des films
            muets accompagnés d’un narrateur appelé <strong>benshi</strong>, une
            tradition unique au monde.
          </p>
          <p className="section-text">
            Le cinéma japonais regorge de classiques comme les films de
            samouraïs, les animes adaptés de mangas. Et ce n’est pas tout : son
            style lent, poétique et rempli d’émotions lui donne une signature
            inimitable. Installe-toi bien... et ne perds pas une miette !
          </p>
        </div>

        <billet className="cinema-opinion">
          <h2 className="section-title">Le billet d'humeur</h2>
          <h4 className="opinion-subtitle">
            Quand le silence devient le personnage principal
          </h4>

          <div className="billet">
            <p className="section-text">
              Tu penses avoir déjà vu un film lent ? Attends. Non, vraiment. Car
              tant que tu n’as pas regardé un film japonais contemplatif, tu ne
              sais pas ce qu’est le vrai concept de prendre son temps. Là-bas,
              on filme une tasse de thé pendant trois minutes et ce n’est pas un
              bug, c’est une déclaration artistique.
            </p>
            <p className="section-text">
              Moi, formatée à la marocaine, impatiente de naissance. Le rythme
              est différent : on aime que les choses aillent vite, que les
              paroles s’enchaînent et que les actions suivent sans tarder. Le
              silence paraît souvent étrange, comme s’il manquait quelque chose.
              Et quand ça traîne, on pense vite que c’est une perte de temps. Un
              soir, j’ai eu l’idée étrange de lancer un film japonais. Je ne
              savais pas que j’entrais dans un monde parallèle, un monde où tout
              prend son temps.
            </p>
            <p className="section-text">
              Je me souviens d’une scène : une femme, assise, fixant la fenêtre.
              Aucun mot. Aucun fond sonore. Aucune action visible. Juste le
              rideau qui ondule sous une brise discrète. Elle cligne lentement
              des yeux. Et la caméra reste là. Longtemps. Deux, peut-être trois
              minutes… rien ne se passe.
            </p>
            <p className="section-text">
              Chez nous, si une scène dure trois minutes sans un mot, c’est
              qu’il y a un problème technique ou que le film est fini{" "}
              <span className="emoji-sticker">🤯</span>
            </p>

            <strong className="section-subtitle">
              Mais pourquoi cette lenteur si marquée ?
            </strong>
            <p className="section-text">
              Probablement parce qu’au Japon, le silence n’est pas vide : il
              fait partie de l’histoire. Là-bas, prendre son temps, ce n’est pas
              perdre du temps, c’est raconter autrement. Le silence est un
              langage. Il permet à l’histoire de respirer, laisse l’émotion
              flotter doucement, comme une bruine sur les épaules. Il ouvre un
              espace, propice à l’interprétation, à l’introspection. Ce n’est
              pas de l’ennui, c’est un terrain fertile où germent les sentiments
              les plus profonds.
            </p>
            <p className="section-text">
              Pas besoin de dialogues à chaque minute, ni de musique dramatique.
              Un plan fixe, un geste simple, un regard qui dure un peu… tout est
              dit, sans dire. Le cinéma japonais ne te bombarde pas de choses.
              Il te laisse respirer, observer, parfois même t’ennuyer un peu et
              étrangement, c’est dans ces moments qu’on ressent le plus.
            </p>

            <p className="section-text">
              Alors oui, je reste marocaine. J’aime quand ça va vite, quand ça
              déborde un peu, quand ça fait du bruit. Mais maintenant, je sais
              aussi apprécier la lenteur. Parfois, je laisse les choses
              s’étirer, je laisse le silence s’installer. Parce que j’ai compris
              qu’il peut dire beaucoup. Que même le calme, parfois, fait du
              bruit. Et que le silence, s’il est bien écouté, peut devenir le
              plus beau des langages.
            </p>
          </div>
        </billet>
        <blog>
          <h2 className="section-title">Blog</h2>
          <p className="section-text">
            Entre tradition et modernité, il tisse un langage visuel singulier,
            fait de gestes subtils et de regards chargés de sens. Il ne cherche
            pas à impressionner par l’éclat, mais à émouvoir en profondeur. Des
            films intimistes aux animés mondialement célèbres, des épopées de
            samouraïs aux thrillers psychologiques, il embrasse une diversité
            impressionnante de genres. Ce qui les relie tous ? Une capacité
            unique à explorer l’humain ses doutes, ses choix, ses relations avec
            pudeur et intensité. Parler du cinéma japonais, c’est accepter de
            regarder autrement, de découvrir un rythme différent, un autre
            regard sur le monde.
          </p>

          <strong className="titles-paragraphs">
            🎬 Moments forts du cinéma japonais
          </strong>
          <p className="section-text">
            Tout commence en 1899 avec Geisha no teodori, le tout premier film
            japonais. Une simple danse de geisha… mais un grand pas pour
            l’histoire du cinéma au Japon ! En 1950, le monde entier découvre le
            génie d’Akira Kurosawa grâce à Rashomon, qui décroche un Oscar et
            ouvre les portes du cinéma japonais à l’international. Puis vient
            1954, une année inoubliable : Seven Samurai révolutionne le genre du
            film de samouraï, tandis que Godzilla surgit de la mer pour devenir
            une légende mondiale. En 1984, Hayao Miyazaki fait sensation avec
            Nausicaä, un bijou d’animation qui pose les bases de l’âge d’or de
            l’anime. Et en 2001, il revient en force avec Spirited Away, un
            chef-d’œuvre magique qui bat tous les records au box-office japonais
            et remporte l’Oscar du Meilleur Film d’Animation. Une consécration
            planétaire !
          </p>
          <img src={chrono} alt="chrono" className="chrono-img" />

          <p className="section-text">
            Le cinéma japonais est célèbre pour sa diversité de genres, chacun
            ancré dans la culture et l’imaginaire du pays. L’anime (animation
            japonaise) est sans doute le plus reconnu à l’international, avec
            des œuvres variées mêlant aventure, science-fiction, drame ou
            romance, souvent issues de mangas. Le genre jidaigeki (drame
            historique) transporte les spectateurs dans le Japon féodal, avec
            ses samouraïs, ses duels de sabre et ses dilemmes moraux. Les films
            kaijū, centrés sur des monstres géants comme Godzilla, symbolisent
            souvent des peurs collectives comme la guerre ou les catastrophes
            nucléaires. Le J-Horror, quant à lui, se distingue du cinéma
            d’horreur occidental par son ambiance lente et oppressante,
            explorant les esprits vengeurs et les légendes populaires. Les films
            de yakuza plongent dans l’univers des mafias japonaises, entre codes
            d’honneur, violence et trahisons. Enfin, les pink films sont des
            films érotiques qui ont marqué l’histoire du cinéma japonais par
            leur audace et leur capacité à intégrer des éléments sociaux ou
            artistiques. Ensemble, ces genres révèlent la richesse, la
            créativité et l’évolution constante du cinéma au Japon.
          </p>
          <strong className="titles-paragraphs">
            Manga & Anime : Deux arts, une même âme
          </strong>
          <img src={manga} alt="manga" className="manga-img" />
          <p className="section-text">
            Le manga est une bande dessinée japonaise, généralement en noir et
            blanc, avec un style de dessin particulier où les personnages ont
            souvent de grands yeux expressifs. Lorsqu’une histoire de manga est
            adaptée en dessin animé, on parle alors d’anime. L’anime est donc un
            film ou une série animée japonaise qui reprend les mêmes thèmes et
            styles que le manga. On reconnaît facilement un anime par son style
            graphique unique, ses personnages et ses histoires très variées,
            allant du fantastique à la vie quotidienne. Le manga se lit sur
            papier ou en version numérique, tandis que l’anime se regarde à la
            télévision, au cinéma ou sur internet.
          </p>
        </blog>
      </section>
    </div>
  );
};
