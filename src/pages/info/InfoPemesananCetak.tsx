import Hero from "@/features/info/components/InfoHero";
import Cta from "@/features/info/components/Cta";
import InvitationSizeGrid from "@/features/info/components/InvitationSizeGrid";
import PaperTypes from "@/features/info/components/PaperTypes";
import ProcessSteps from "@/features/info/components/ProcessSteps";

const InfoPemesananCetak = () => {
  return (
    <div className="w-full bg-background">
      <Hero />
      <InvitationSizeGrid />
      <PaperTypes />
      <ProcessSteps />
      <Cta />
    </div>
  );
};

export default InfoPemesananCetak;