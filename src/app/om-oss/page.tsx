import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - Elsykkel Stavanger",
  description:
    "Opplev naturens skjønnhet med Kajakk & Fritid Stavanger! Fra el-sykler til kajakker, vårt lidenskapelige team tilbyr førsteklasses utstyr og ekspertveiledning. Utforsk vårt utvalg og skap uforglemmelige friluftsopplevelser med oss. Velkommen til ditt neste eventyr!",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Hvem er vi?</h1>
      </div>
      <OmOss />
    </main>
  );
};
export default Page;
