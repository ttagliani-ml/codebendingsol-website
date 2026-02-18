import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
      setEmail("");
    }
  };

  return (
    <section className="bg-cta py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-cta-foreground uppercase tracking-widest text-sm font-heading font-semibold mb-6">
          Enter your email to schedule an introductory call
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-0">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-none sm:rounded-l bg-background border-none h-12 text-foreground"
            required
          />
          <Button
            type="submit"
            className="h-12 rounded-none sm:rounded-r bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-wider px-8 hover:opacity-90"
          >
            Reach Out
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CtaSection;
