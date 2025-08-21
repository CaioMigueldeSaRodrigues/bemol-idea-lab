import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Clock, Trophy } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden bg-gradient-hero p-12 text-center">
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Pronto para Transformar sua Ideia?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Junte-se aos colaboradores que já estão moldando o futuro da Bemol 
                através de suas ideias inovadoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 group"
              >
                Começar Minha Submissão
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Agendar Demonstração
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
                <Star className="w-5 h-5" />
                <span className="text-sm">Análise Profissional</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Resposta em 48h</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
                <Trophy className="w-5 h-5" />
                <span className="text-sm">Apresentação Pronta</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        </Card>
      </div>
    </section>
  );
};