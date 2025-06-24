import React from "react";
import architecture from "../assets/architecture.png";
import "./arch.css";

export const Arch = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">
          Le Japon entre tradition et modernité architecturale
        </h1>
        <img
          src={architecture}
          alt="Architecture japonaise"
          className="blog-image"
        />
      </header>

      <article className="blog-content">
        <p className="intro">
          <span style={{ color: "#d9534f", fontWeight: "bold" }}>
            Sais-tu que
          </span>{" "}
          l'architecture au Japon mélange l'ancien et le moderne ? Les temples
          et les sanctuaires montrent l'importance de la religion. Les châteaux
          japonais étaient faits pour se défendre. Les vieilles maisons sont
          pratiques, spacieuses et faites avec des matériaux naturels. Regarde
          ces bâtiments de plus près, tu verras comment le passé et le futur s'y
          rencontrent. Le mouvement métabolite a apporté de nouvelles idées
          après la guerre, qui met en rapport les mégastructures avec des
          principes biologiques de la croissance. Aujourd'hui, les bâtiments
          sont faits pour résister aux tremblements de terre : ils bougent sans
          tomber, comme des roseaux face au vent. Je trouve que l'architecture
          japonaise est vraiment inspirante et pleine de surprises.
        </p>

        <section className="blog-section">
          <h2>Ma maison prend l’eau, et j’adore ça !</h2>
          <p className="billet">
            Les maisons flottantes japonaises... C’est un peu comme si les
            Japonais avaient décidé que la terre, c’était trop banal, et que la
            vraie vie, c’est sur l’eau ! Franchement, qui n’a jamais rêvé de
            pouvoir bouger sa maison juste en changeant de rivière ?
            <br />
            Vivre dans une maison flottante, c’est un peu comme habiter dans un
            bateau qui a décidé de poser l’ancre pour de bon. Sauf que,
            surprise, ce n’est pas un bateau ! Pas de mat ni de voile, mais une
            vraie maison, avec ses murs, son toit et sa déco. Pas besoin de
            savoir naviguer, juste de savoir apprécier le doux clapotis de l’eau
            sous ses pieds.
            <br />
            On dirait que les Japonais ont trouvé la meilleure excuse pour ne
            jamais sortir la poubelle : « Désolé, je ne peux pas aujourd’hui, ma
            maison est en balade sur la rivière. » Fini le stress du voisinage,
            fini les embouteillages… ta maison, elle, fait du tourisme aquatique
            ! C’est le seul endroit au monde où tu peux dire « Je me casse », et
            que ce soit littéral. T’as envie de changer de quartier ? Pas besoin
            de déménager, tu fais juste un petit tour de rivière. Mieux que
            Uber, ta baraque se déplace toute seule. Pourquoi rester fixé au
            sol, alors qu’on peut vivre sur l’eau ? Une maison flottante, c’est
            un peu comme un bateau, mais sans l’angoisse du mal de mer. C’est la
            liberté version zen : “Aujourd’hui, je vis ici. Demain ? J’irai me
            garer à Kyoto.” <br />
            Vivre sur l’eau, ça a quelque chose de magique, mais aussi de
            profondément pragmatique. Pas de jardin à tondre ni de trottoir à
            balayer, juste le clapotis de l’eau, le chant des oiseaux et parfois
            la visite discrète d’un héron curieux. La maison flotte, oui, mais
            elle reste un refuge solide, conçu pour résister aux caprices de la
            nature. C’est une belle leçon d’ingéniosité et d’adaptation.
            D’ailleurs, ces maisons ne sont pas juste posées là au hasard :
            elles sont pensées pour s’insérer harmonieusement dans le paysage,
            pour vivre en dialogue avec l’eau, pas contre elle.
            <br />
            Le plus drôle avec ces maisons flottantes, c’est que tu n’as même
            pas besoin de déménager : c’est la rivière qui fait bouger ta maison
            toute seule ! Un matin, tu te réveilles, et hop, ta vue a changé
            sans que tu bouges le petit doigt. Parfois, ça tangue un peu c’est
            un peu comme un manège gratuit, mais dans ta chambre. Fini les
            voisins bruyants, place aux mouvements d’eau ! Une maison qui danse
            avec la rivière, voilà un concept qui ferait rêver tous les amateurs
            de changement sans effort.
          </p>
        </section>

        <section className="blog-section">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#8B0000",
              marginTop: "30px",
              marginBottom: "15px",
              fontFamily: "Noto Serif JP, serif",
              textAlign: "left",
            }}
          >
            🌸 L’harmonie entre tradition et modernité
          </div>
          <p className="blog1">
            L’architecture japonaise incarne un équilibre rare entre la mémoire
            du passé et l’élan vers le futur. Elle ne rejette pas les
            traditions, mais elle ne craint pas l’innovation. Ce contraste est
            visible partout : dans les temples qui côtoient les gratte ciel,
            dans les ruelles paisibles au milieu des écrans géants. Ce qui me
            touche, c’est cette capacité à faire coexister deux mondes sans
            heurt. Le Japon n’a pas choisi entre l’ancien et le moderne il a
            trouvé une manière de les faire dialoguer. C’est une véritable leçon
            d’harmonie, d’intelligence collective et de respect des racines.
            Chaque bâtiment raconte cette histoire d’équilibre, chaque ligne
            reflète cette double identité.
          </p>
        </section>

        <section className="blog-section">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#8B0000",
              marginTop: "30px",
              marginBottom: "15px",
              fontFamily: "Noto Serif JP, serif",
              textAlign: "left",
            }}
          >
            🌿 Un lien profond avec la nature
          </div>
          <p className="blog2">
            Ce qui rend l’architecture japonaise unique, c’est aussi son lien
            intime avec la nature. Les maisons traditionnelles s’ouvrent sur des
            jardins zen, où chaque pierre, chaque plante, chaque vide a du sens.
            On y perçoit l’esprit du wabi-sabi, cette philosophie qui célèbre la
            beauté dans la simplicité, l’imperfection et l’éphémère. Même dans
            les grandes villes comme Tokyo ou Osaka, on retrouve cette attention
            à l’environnement : temples cachés, parcs silencieux, ruelles où le
            calme règne. Les matériaux utilisés bois, bambou, papier sont en
            harmonie avec les saisons et la lumière. Même les bâtiments modernes
            semblent vouloir respirer avec leur environnement. Cette
            architecture ne domine pas, elle s’adapte, elle écoute, elle
            accompagne.
          </p>
        </section>
        <section className="blog-section">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#8B0000",
              marginTop: "30px",
              marginBottom: "15px",
              fontFamily: "Noto Serif JP, serif",
              textAlign: "left",
            }}
          >
            🌏 Une inspiration personnelle et universelle
          </div>
          <p className="blog3">
            Plus j’en apprends sur l’architecture japonaise, plus elle
            m’inspire. Ce n’est pas seulement une question d’esthétique ou de
            technique, mais une manière de penser l’espace comme un lieu de
            bien-être, de réflexion et d’émotion. Chaque objet a sa place,
            chaque mètre carré est respecté. Dans les cafés, les gares, les
            appartements minuscules, tout est pensé pour que l’on s’y sente
            bien. Un jour, j’aimerais vraiment découvrir ce pays par moi-même :
            marcher pieds nus sur des tatamis, sentir l’odeur du bois ancien,
            puis, quelques heures plus tard, monter dans un train à grande
            vitesse au cœur de Tokyo. Ce serait comme voyager dans le temps,
            entre le calme du passé et l’énergie du futur. Pour moi, le Japon
            est plus qu’un pays c’est une source d’inspiration profonde, un rêve
            vivant, une poésie construite pierre par pierre.
          </p>
        </section>
      </article>
    </div>
  );
};
