import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpeg";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8">
          These companies have worked with us to leverage their data and AI initiatives
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src={client1} alt="Client" className="h-16 object-contain" />
          <img src={client2} alt="Client" className="h-16 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
