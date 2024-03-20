import { Metadata } from "next";
import Butikker from "@/components/butikk/Butikker";

export const metadata: Metadata = {
  title: "Butikk - Elsykkel Stavanger",
  description:
    "Opplev bekvemmeligheten med elsykler hos Kajakk & Fritid Stavanger. Utforsk vårt utvalg og finn din perfekte turkamerat i dag!",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Våre butikker</h1>
        <h2>
          Utforsk toppmoderne elsykler hos Kajakk & Fritid Stavanger. Opplev
          enkel og miljøvennlig transport med vår ekspertveiledning.
        </h2>
      </div>
      <Butikker />
    </main>
  );
};

export default Page;
