import logoBlack from "@/assets/logo-black.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/20" />
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="mb-6">
          <img src={logoBlack} alt="Codebending Solutions" className="h-14 bg-background/80 p-2 rounded" />
        </div>
        <div className="max-w-2xl bg-background/85 backdrop-blur-sm p-8 rounded">
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight text-foreground mb-4">
            Solve your business problems with AI, suited to your needs
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We develop ad-hoc, tailored solutions, based on the state-of-the-art machine learning, boosting your company's competitiveness and bringing it to the foremost of your market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
