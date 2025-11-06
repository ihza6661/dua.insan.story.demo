import Cta from "@/components/info/Cta";
import Hero from "@/components/info/Hero";
import InvitationSizeGrid from "@/components/info/InvitationSizeGrid";
import PaperTypes from "@/components/info/PaperTypes";
import ProcessSteps from "@/components/info/ProcessSteps";

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