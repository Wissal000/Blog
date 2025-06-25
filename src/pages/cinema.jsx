// cinema.jsx
import React from "react";
import "./cinema.css";
import cinemaImg from "../assets/patt.jpg";
import kabuki from "../assets/kabuki.png";

export const Cinema = () => {
  return (
    <div className="cinema-container">
      <img src={cinemaImg} alt="Cinema" className="cinema-img" />

      <div className="sait-tu-que-cin">
        <p>
          <span style={{ color: "#d9534f", fontWeight: "bold" }}>
            Sais-tu que{" "}
          </span>
          Japon a été l’un des premiers pays à adopter le cinéma; a débuté avec
          des films muets, mais qu’à cette époque, un benshi, narrateur en
          direct, racontait l’histoire et expliquait les scènes dans la salle ?
          Cette tradition unique rendait les projections très vivantes et
          captivantes. Depuis, le cinéma japonais s’est enrichi de nombreux
          genres, des films de samouraïs aux animes célèbres dans le monde
          entier, toujours marqué par un style poétique et profond.
          <em style={{ color: "#a87373" }}>
            {" "}
            Installe-toi bien... et ne perds pas une miette !
          </em>
        </p>
      </div>

      <billet className="billet">
        <h4>Quand le silence devient le personnage principal</h4>
        <p>
          Tu penses avoir déjà vu un film lent ? Attends. Non, vraiment. Car
          tant que tu n’as pas regardé un film japonais contemplatif, tu ne sais
          pas ce qu’est le vrai concept de prendre son temps. Là-bas, on filme
          une tasse de thé pendant trois minutes et ce n’est pas un bug, c’est
          une déclaration artistique.
        </p>
        <p>
          Moi, formatée à la marocaine, impatiente de naissance. Le rythme est
          différent : on aime que les choses aillent vite, que les paroles
          s’enchaînent et que les actions suivent sans tarder. Le silence paraît
          souvent étrange, comme s’il manquait quelque chose. Et quand ça
          traîne, on pense vite que c’est une perte de temps. Un soir, j’ai eu
          l’idée étrange de lancer un film japonais. Je ne savais pas que
          j’entrais dans un monde parallèle, un monde où tout prend son temps.
        </p>
        <p>
          Je me souviens d’une scène : une femme, assise, fixant la fenêtre.
          Aucun mot. Aucun fond sonore. Aucune action visible. Juste le rideau
          qui ondule sous une brise discrète. Elle cligne lentement des yeux. Et
          la caméra reste là. Longtemps. Deux, peut-être trois minutes… rien ne
          se passe.
        </p>
        <p>
          Chez nous, si une scène dure trois minutes sans un mot, c’est qu’il y
          a un problème technique ou que le film est fini{" "}
          <span className="emoji-sticker">🤯</span>
        </p>

        <strong>Mais pourquoi cette lenteur si marquée ?</strong>
        <p>
          Probablement parce qu’au Japon, le silence n’est pas vide : il fait
          partie de l’histoire. Là-bas, prendre son temps, ce n’est pas perdre
          du temps, c’est raconter autrement. Le silence est un langage. Il
          permet à l’histoire de respirer, laisse l’émotion flotter doucement,
          comme une bruine sur les épaules. Il ouvre un espace, propice à
          l’interprétation, à l’introspection. Ce n’est pas de l’ennui, c’est un
          terrain fertile où germent les sentiments les plus profonds.
        </p>
        <p>
          Pas besoin de dialogues à chaque minute, ni de musique dramatique. Un
          plan fixe, un geste simple, un regard qui dure un peu… tout est dit,
          sans dire. Le cinéma japonais ne te bombarde pas de choses. Il te
          laisse respirer, observer, parfois même t’ennuyer un peu et
          étrangement, c’est dans ces moments qu’on ressent le plus.
        </p>
        <p>
          Alors oui, je reste marocaine. J’aime quand ça va vite, quand ça
          déborde un peu, quand ça fait du bruit. Mais maintenant, je sais aussi
          apprécier la lenteur. Parfois, je laisse les choses s’étirer, je
          laisse le silence s’installer. Parce que j’ai compris qu’il peut dire
          beaucoup. Que même le calme, parfois, fait du bruit. Et que le
          silence, s’il est bien écouté, peut devenir le plus beau des langages.
        </p>
      </billet>

      <section className="blog-cinema">
        <h4>Le Japon à l’écran : voyage au cœur du cinéma nippon</h4>
        <p>
          Depuis ses origines, la culture cinématographique japonaise, riche
          d’une histoire séculaire et d’une diversité artistique remarquable, se
          distingue par ses multiples traditions qui ont marqué l’évolution de
          ce septième art au pays du Soleil Levant. De la période muette aux
          réalisateurs contemporains, en passant par les chefs-d’œuvre du cinéma
          classique, chaque époque a contribué à forger un héritage
          cinématographique unique et singulier. Découvrons ensemble les
          multiples facettes des traditions du cinéma japonais qui ont influencé
          tant de cinéastes à travers le monde.
        </p>

        <p>
          L’histoire du cinéma japonais commence à la fin du XIXᵉ siècle avec
          l’arrivée du cinématographe et les premières projections inspirées du
          théâtre kabuki. Très vite, le cinéma s’enracine dans la culture
          traditionnelle japonaise, adaptant des pièces célèbres et utilisant
          des codes scéniques propres au théâtre. Une particularité marquante de
          cette époque est la présence des benshi, narrateurs en direct qui
          commentaient les films muets. Leur talent d’improvisation, leur voix
          et leur interprétation donnaient vie aux images et attiraient parfois
          plus que le film lui-même. Cette tradition unique a façonné une
          relation particulière entre le public japonais et le cinéma, mêlant
          récit oral et image animée.
        </p>

        <img src={kabuki} alt="kabuki" className="kabuki-img" />
        <em
          style={{
            display: "block",
            marginBottom: "50px",
            textAlign: "left",
          }}
        >
          * Le kabuki est une forme de théâtre japonais traditionnel,
          caractérisé par un style dramatique combinant musique, danse et jeu
          d'acteur spectaculaire
        </em>

        <p>
          La période muette du cinéma japonais, qui s’étend au début du XXᵉ
          siècle, marque une étape fondatrice dans l’histoire du septième art au
          Japon. Cette ère se distingue par une caractéristique unique : la
          présence des benshi. Ces narrateurs en direct accompagnaient chaque
          projection, insufflant aux films muets une intensité émotionnelle et
          narrative singulière, et jouant un rôle central dans l’expérience
          cinématographique de l’époque.
        </p>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Jxld6e-IieQ"
            title="The Art of the Benshi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p
            style={{
              marginTop: "8px",
              fontSize: "0.9rem",
              color: "#666",
              textAlign: "center",
            }}
          >
            Trailer de <em>The Art of the Benshi</em> – explorez la tradition
            des benshi au Japon.
          </p>
        </div>
        <span>
          Les genres du cinéma japonais : un miroir de l’histoire et de la
          société
        </span>

        <p>
          Le cinéma japonais se décline en une multitude de genres, chacun
          portant un regard singulier sur la société et l’histoire du pays. Le
          <strong> Jidaigeki</strong>, genre historique situé à l’époque
          féodale, explore l’honneur, la loyauté et les tensions sociales, avec
          comme œuvre fondatrice Les Sept Samouraïs (1954) d’Akira Kurosawa. Son
          sous-genre, le<strong> chanbara</strong> se concentre sur les duels au
          sabre et l’action stylisée, illustré par la série culte Zatoichi, qui
          met en scène un samouraï aveugle maître du sabre. Le{" "}
          <strong>Kaiju eiga</strong>, quant à lui, donne vie à des monstres
          géants comme Godzilla (1954) d’Ishirō Honda, reflet des angoisses
          nucléaires de l’après-guerre. Le Yakuza eiga explore les codes
          d’honneur et la violence du milieu mafieux, avec des films comme
          Branded to Kill (1967) de Seijun Suzuki, devenu culte pour son style
          chaotique.
          <br />
          <br />
          Plus proche de la réalité contemporaine, le{" "}
          <strong>Gendaigeki</strong> s’intéresse à la société moderne, comme
          dans Nobody Knows (2004) de Hirokazu Kore-eda, tandis que le{" "}
          <strong>Shomingeki</strong>, plus intimiste, suit le quotidien des
          gens ordinaires, avec en tête le chef-d’œuvre Voyage à Tokyo (1953) de
          Yasujirō Ozu. Enfin, le cinéma d’animation japonais, ou{" "}
          <strong>anime</strong>, né en 1917 avec Namakura Gatana de Jun’ichi
          Kōuchi, a conquis le monde grâce à des récits profonds et une
          esthétique unique, culminant avec Le Voyage de Chihiro (2001), Oscar
          du meilleur film d’animation. Ensemble, ces genres dessinent les
          multiples visages d’un cinéma aussi riche que captivant.
          <br />
        </p>
        <div style={{ lineHeight: "0px" }}>
          <em
            style={{
              display: "block",
              marginBottom: "50px",
              textAlign: "left",
            }}
          >
            * Jidaigeki: drame historique
          </em>
          <em
            style={{
              display: "block",
              marginBottom: "50px",
              textAlign: "left",
            }}
          >
            * Gendaigeki: théâtre contemporain
          </em>
          <em
            style={{
              display: "block",
              marginBottom: "50px",
              textAlign: "left",
            }}
          >
            * Shomingeki: drame populaire
          </em>
        </div>

        <span
          style={{
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            fontSize: "1.4rem",
            color: "#e16b8c",
            fontStyle: "italic",
            fontWeight: "bold",
            marginTop: "60px",
            textAlign: "left",
          }}
        >
          Manga & Anime : Deux arts, une même âme
        </span>
        <p>
          Le manga et l’anime sont deux formes d’expression profondément liées,
          véritables piliers de la culture populaire japonaise. Le manga,
          version papier, pose les bases visuelles et narratives, tandis que
          l’anime leur donne mouvement, son et couleur. Souvent, les plus grands
          succès animés sont adaptés de mangas à succès, comme Naruto, Attack on
          Titan ou Demon Slayer. Bien qu’ils diffèrent par le support, ces deux
          arts partagent une même âme : celle de raconter des histoires
          intenses, émotionnelles et souvent universelles, avec un style
          graphique unique et une sensibilité propre au Japon.
        </p>
      </section>

      <div className="conclusion">
        <strong>conclusion</strong>
        <p>
          Le cinéma japonais ne cherche pas à en mettre plein la vue. Il prend
          son temps, laisse respirer les images, comme une promenade tranquille
          au cœur d’un jardin secret. Ce n’est pas un feu d’artifice éclatant,
          mais plutôt une lanterne qu’on allume doucement, dans la douceur du
          soir. Chaque plan est posé avec soin, chaque silence pèse autant que
          les mots. On en ressort avec des émotions délicates, souvent subtiles,
          qu’on ne sait pas toujours nommer, mais qui restent là, suspendues. Ça
          ne fait pas de bruit, pas de grand fracas, mais ça laisse une trace
          profonde, un murmure intérieur. Et parfois, dans ce monde agité, c’est
          tout ce dont on a besoin : un souffle calme, une lumière douce pour
          éclairer nos pensées.
        </p>
      </div>
    </div>
  );
};
