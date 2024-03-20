import React from "react";
import Products from "@/components/vare-sykler/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Våre sykler - Elsykkel Stavanger",
  description:
    "Kajakk & Fritid har noe for en hver. Sjekk ut vårt enorme sortement og finn din neste elsykkel i dag.",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre sykler</h1>
        <h2>
          Kajakk & Fritid har noe for en hver. Sjekk ut vårt enorme sortement og
          finn din neste elsykkel i dag.
        </h2>
      </div>
      <Products />
    </main>
  );
};

export default Page;
