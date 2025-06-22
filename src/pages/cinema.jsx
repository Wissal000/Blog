// cinema.jsx
import React from "react";
import "./cinema.css";
import cinemaImg from "../assets/patt.jpg";
import manga from "../assets/manga.png";
import cinemapict from "../assets/cinemapict.jpg";
import kabuki from "../assets/kabuki.png";

export const Cinema = () => {
  return (
    <div className="cinema-page">
      <img src={cinemaImg} alt="Cinema" className="cinema-banner" />

      <section className="sait-tu-que">
        <div className="cinema-fact">
          <p className="section-text" style={{ marginTop: "70px" , lineHeight:"35px"}}>
            <span style={{ color: "#d9534f", fontWeight: "bold" }}>
              Sais-tu que{" "}
            </span>
            le cinéma japonais a débuté avec des films muets, mais qu’à cette
            époque, un benshi, narrateur en direct, racontait l’histoire et
            expliquait les scènes dans la salle ? Cette tradition unique rendait
            les projections très vivantes et captivantes. Depuis, le cinéma
            japonais s’est enrichi de nombreux genres, des films de samouraïs
            aux animes célèbres dans le monde entier, toujours marqué par un
            style poétique et profond.
            <em style={{ color: "#a87373" }}>
              {" "}
              Installe-toi bien... et ne perds pas une miette !
            </em>
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
            <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#666" }}>
              Trailer de <em>The Art of the Benshi</em> – explorez la tradition
              des benshi au Japon.
            </p>
          </div>
        </div>

        <billet className="cinema-opinion">
          <h4 className="opinion-subtitle" style={{ marginTop: "65px" }}>
            Quand le silence devient le personnage principal
          </h4>

          <div className="billet" style={{lineHeight: "35px"}}>
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
          <p
            className="section-text"
            style={{ marginTop: "70px", lineHeight: "35px", textIndent:"40px"}}
          >
            Depuis ses origines, la culture cinématographique japonaise, riche
            d’une histoire séculaire et d’une diversité artistique remarquable,
            se distingue par ses multiples traditions qui ont marqué l’évolution
            de ce septième art au pays du Soleil Levant. De la période muette
            aux réalisateurs contemporains, en passant par les chefs-d’œuvre du
            cinéma classique, chaque époque a contribué à forger un héritage
            cinématographique unique et singulier. Découvrons ensemble les
            multiples facettes des traditions du cinéma japonais qui ont
            influencé tant de cinéastes à travers le monde.
          </p>
          <img src={cinemapict} alt="cinemapict" className="manga-img" />

          <p className="section-text" style={{lineHeight: "35px"}}>
            L’histoire du cinéma japonais commence à la fin du XIXᵉ siècle avec
            l’arrivée du cinématographe et les premières projections inspirées
            du théâtre kabuki. Très vite, le cinéma s’enracine dans la culture
            traditionnelle japonaise, adaptant des pièces célèbres et utilisant
            des codes scéniques propres au théâtre. Une particularité marquante
            de cette époque est la présence des benshi, narrateurs en direct qui
            commentaient les films muets. Leur talent d’improvisation, leur voix
            et leur interprétation donnaient vie aux images et attiraient
            parfois plus que le film lui-même. Cette tradition unique a façonné
            une relation particulière entre le public japonais et le cinéma,
            mêlant récit oral et image animée.
          </p>
          <p className="section-text" style={{lineHeight: "35px"}}>
            La période muette du cinéma japonais, débutant au début du XXᵉ
            siècle, a jeté les bases d’un art cinématographique profondément
            ancré dans la culture japonaise, influencé par le théâtre
            traditionnel comme le Kabuki et le Noh. Cette époque se distingue
            par la présence unique du benshi, narrateur en direct qui
            accompagnait les projections, ajoutant émotion et contexte aux films
            muets.
          </p>
          <img src={kabuki} alt="kabuki" className="manga-img" />
          <em style={{ display: "block", marginBottom: "10px" }}>
            * Le kabuki est une forme de théâtre japonais traditionnel,
            caractérisé par un style dramatique combinant musique, danse et jeu
            d'acteur spectaculaire
          </em>
          <strong className="titles-paragraphs">Genres</strong>

          <section className="genres"
            style={{
              padding: "20px",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Jidaigeki</strong>: genre historique situé à l’époque
                féodale, explore l’honneur, la loyauté et les tensions sociales.
                Le film le plus célèbre est sans doute « Les Sept Samouraïs »
                (1954) d’Akira Kurosawa, une œuvre fondatrice qui a influencé le
                cinéma mondial.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Chanbara</strong>: sous-genre centré sur les combats au
                sabre, le Chanbara mise sur l’action stylisée et les duels. Le
                film emblématique est « Zatoichi », une longue série culte
                autour d’un samouraï aveugle maître du sabre.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Kaiju eiga</strong>: met en scène des monstres géants.
                Le plus célèbre reste « Godzilla » (1954) d’Ishirō Honda, né des
                angoisses post-nucléaires et devenu une icône du cinéma
                japonais.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Yakuza eiga</strong>: ce genre explore le monde des
                mafias japonaises, entre violence et codes d’honneur. Un film
                marquant est « Branded to Kill » (1967) de Seijun Suzuki, à la
                fois culte, chaotique et influent.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Gendaigeki</strong>: s’intéresse à la vie contemporaine
                et aux tensions sociales modernes. Un film emblématique est «
                Nobody Knows » (2004) de Hirokazu Kore-eda, une œuvre poignante
                sur l’abandon familial.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Shomingeki</strong>: ce genre, intimiste et réaliste,
                suit la vie des gens ordinaires. Le film le plus célèbre est «
                Voyage à Tokyo » (1953) de Yasujirō Ozu, un chef-d’œuvre sur la
                famille, le temps qui passe et l’incompréhension entre
                générations.
              </li>
              <li style={{ marginBottom: "12px", lineHeight: "1.8" }}>
                <strong>Anime</strong>: est un style d’animation reconnu dans le
                monde entier pour son esthétique unique et ses récits profonds.
                Il débute en 1917 avec Namakura Gatana de Jun’ichi Kōuchi, un
                court-métrage comique sur un samouraï maladroit, considéré comme
                le premier anime. Depuis, ce genre n’a cessé d’évoluer, jusqu’à
                des chefs-d’œuvre comme « Le Voyage de Chihiro » (2001), qui a
                marqué l’histoire en remportant un Oscar. L’anime est
                aujourd’hui un pilier culturel du Japon et un phénomène global.
              </li>
            </ul>
          </section>

          <strong className="titles-paragraphs" style={{fontSize:"22px"}}>
            Manga & Anime : Deux arts, une même âme
          </strong>
          <img src={manga} alt="manga" className="manga-img" />
          <p className="section-text" style={{lineHeight: "35px"}}>
            Le manga et l’anime sont deux formes d’expression profondément
            liées, véritables piliers de la culture populaire japonaise. Le
            manga, version papier, pose les bases visuelles et narratives,
            tandis que l’anime leur donne mouvement, son et couleur. Souvent,
            les plus grands succès animés sont adaptés de mangas à succès, comme
            Naruto, Attack on Titan ou Demon Slayer. Bien qu’ils diffèrent par
            le support, ces deux arts partagent une même âme : celle de raconter
            des histoires intenses, émotionnelles et souvent universelles, avec
            un style graphique unique et une sensibilité propre au Japon.
          </p>
        </blog>
      </section>
    </div>
  );
};
