import logoWhite from "@/assets/logo-white.png";

const FooterSection = () => {
  return (
    <footer className="bg-cta py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <img src={logoWhite} alt="Codebending Solutions" className="h-10" />
        <p className="text-cta-foreground/70 text-sm font-body">
          Easy, By Design &middot; © Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
