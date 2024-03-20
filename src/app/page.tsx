import styles from "./page.module.scss";

import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import Articles from "@/components/home/Articles";
import FeaturedBike from "@/components/home/FeaturedBike";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elsykkel Stavanger",
  description:
    "Er du ute etter elsykkel i Stavanger? Da har Kajakk & Fritid sykkelen for deg. Fulldempet elsykkel, lastesykkel elsykkel til barn er noe av det vi kan friste med. Sjekk ut vårt enorme utvalg av elsykler i dag.",
};

export const revalidate = 10;

const Page = () => {
  return (
    <main className={styles.wrapper}>
      <Hero />
      <Bestsellers />
      <Articles />
      <FeaturedBike />
    </main>
  );
};

export default Page;
