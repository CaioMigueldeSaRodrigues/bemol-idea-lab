import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Zap, 
  Shield, 
  Users2,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Análise Estratégica",
    description: "Due diligence profissional com foco em mercado, produto e viabilidade financeira"
  },
  {
    icon: Zap,
    title: "IA Especializada",
    description: "Inteligência artificial treinada para análise de negócios e geração de apresentações"
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Plataforma corporativa com total proteção das informações estratégicas"
  },
  {
    icon: Users2,
    title: "Expertise Bemol",
    description: "Respaldo da experiência e conhecimento de mercado da Bemol"
  }
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                A Força da{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Bemol
                </span>{" "}
                na Sua Ideia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Bemol Ideia Hub combina a tradição e expertise da Bemol com tecnologia 
                de ponta para criar um ambiente onde ideias inovadoras ganham vida através 
                de análises estruturadas e apresentações profissionais.
              </p>
              <p className="text-muted-foreground">
                Nossa plataforma não apenas avalia ideias, mas prepara colaboradores 
                para apresentar suas propostas com confiança e dados sólidos, 
                aumentando significativamente as chances de aprovação.
              </p>
            </div>

            <Button variant="corporate" size="lg" className="group">
              Conheça Nossa Metodologia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-elevated transition-smooth group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};