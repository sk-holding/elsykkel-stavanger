"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";

const Hero = () => {
  const screenSize = useScreenSize();

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <h1>Er du på utkikk etter elsykkel?</h1>
          <h2>
            Vi i Kajakk & Fritid Stavanger har det du trenger for å komme deg ut
            på veien. Kom innom oss i dag for en trivelig elsykkelprat.
          </h2>
        </div>
        <div className={styles.buttons}>
          <Link href="/vare-sykler" className="button button_tertiary">
            Se våre Elsykler
          </Link>
          <Link href="/butikk" className="button button_secondary">
            Se butikk
          </Link>
        </div>
      </div>
      {screenSize.width >= 770 ? (
        <Image
          src="/images/hero-image.webp"
          alt="Innsiden av Kajakk & Fritids butikk i Fredrikstad"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      ) : (
        <Image
          src="/images/hero-image_mobile.webp"
          alt="Innsiden av Kajakk & Fritids butikk i Fredrikstad"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      )}
    </section>
  );
};

export default Hero;
