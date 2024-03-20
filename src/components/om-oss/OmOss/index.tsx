import Link from "next/link";
import styles from "./index.module.scss";

const OmOss = () => {
  return (
    <section className={styles.wrapper}>
      <img
        src="/images/om-oss-image.jpg"
        alt="To personer står å prater med hver sin Fosna elsykkel"
      />
      <div>
        <h3>Vår historie</h3>
        <p>
          Fra våre ydmyke begynnelse i 2004 har Kajakk & Fritid vokst seg til en
          anerkjent destinasjon for friluftsentusiaster. Med et sterkt fokus på
          å tilby førsteklasses utstyr og enestående kundeservice, har vi
          forpliktet oss til å gjøre utendørsopplevelser tilgjengelige for alle.
        </p>
        <p>
          Vi er stolte av vårt varierte sortiment av utstyr, fra el-sykler til
          SUP-brett og kajakker, nøye utvalgt for å imøtekomme enhver
          friluftsentusiasts behov. Med et dedikert team av ansatte som deler
          vår lidenskap, tilbyr vi ekspertveiledning og personlig oppfølging for
          å sikre at våre kunder finner det perfekte utstyret for sine eventyr.
        </p>
        <p>
          Vårt engasjerte team er ikke bare eksperter innen utendørsutstyr, men
          også lidenskapelige friluftsentusiaster. Vi deler våre egne erfaringer
          og kunnskap for å hjelpe deg med å få mest mulig ut av dine
          utendørsopplevelser. Enten du er en erfaren eventyrer eller
          nybegynner, er vi her for å støtte deg på reisen din og gjøre hvert
          øyeblikk i naturen minneverdig.
        </p>
        <p>
          Velkommen til Kajakk & Fritid Stavanger - hvor ditt neste eventyr
          venter!
        </p>

        <Link href="/vare-sykler" className="button button_primary">
          Se våre elsykler
        </Link>
      </div>
    </section>
  );
};

export default OmOss;
