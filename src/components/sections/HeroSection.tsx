import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-innovation.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                Plataforma de Inovação Bemol
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme sua{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  ideia
                </span>{" "}
                em uma sociedade
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Uma plataforma completa para colaboradores apresentarem suas ideias de negócio 
                e receberem análise profissional com o poder da IA e expertise da Bemol.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Submeter Minha Ideia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Conhecer a Plataforma
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Colaboradores</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Ideias Avaliadas</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-3 mx-auto">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">25</div>
                <div className="text-sm text-muted-foreground">Projetos Aprovados</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Inovação e colaboração na Bemol" 
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-3xl opacity-20 transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};