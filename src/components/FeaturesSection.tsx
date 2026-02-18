import featureTailored from "@/assets/feature-tailored.jpg";
import featurePrivacy from "@/assets/feature-privacy.jpg";
import featureExpertise from "@/assets/feature-expertise.jpg";

const features = [
  {
    image: featureTailored,
    title: "Tailored to Your Needs",
    description:
      "We design, develop and implement code based on your company's needs, tech stack, available resources and market. Product-market fit is a given with us.",
  },
  {
    image: featurePrivacy,
    title: "Your Data, Your IP",
    description:
      "All of our software packages will be fully integrated to your systems, and entirely your property. No competitor will have your model, as it is based on your data.",
  },
  {
    image: featureExpertise,
    title: "Guaranteed Success",
    description:
      "Through an extensive discovery phase, constant touchpoints and agile processes, we ensure the project is implemented and impactful for your business.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Every company can leverage AI. We show you how.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you offer products or services, cater for individuals or business, sell online or in person, Artificial Intelligence is a key factor in every business nowadays. From automated customer service to enhanced digital marketing, powerful machine learning models are shaping the way businesses operate.
          </p>
          <p className="text-muted-foreground mt-2 font-semibold">
            Don't be left behind. Monetize your data now.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-full h-48 mb-6 overflow-hidden rounded">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-heading font-bold uppercase tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
