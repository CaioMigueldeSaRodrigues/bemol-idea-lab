import { Card } from "@/components/ui/card";
import { 
  User, 
  FileText, 
  Brain, 
  Presentation,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Cadastro e Login",
    description: "Acesse a plataforma com suas credenciais corporativas da Bemol",
    color: "primary"
  },
  {
    icon: FileText,
    title: "Due Diligence",
    description: "Preencha o questionário detalhado sobre mercado, produto e estratégia",
    color: "accent"
  },
  {
    icon: Brain,
    title: "Análise por IA",
    description: "Nossa IA processa os dados e gera insights estratégicos profissionais",
    color: "success"
  },
  {
    icon: Presentation,
    title: "Apresentação",
    description: "Receba uma apresentação estruturada pronta para a banca avaliadora",
    color: "primary"
  },
  {
    icon: CheckCircle,
    title: "Acompanhamento",
    description: "Dashboard para acompanhar o status e feedback da sua submissão",
    color: "accent"
  }
];

export const ProcessSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um fluxo estruturado e profissional para transformar sua ideia em uma proposta de negócio sólida
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-6 h-full text-center hover:shadow-elevated transition-smooth group">
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                    ${step.color === 'primary' ? 'bg-primary/10' : ''}
                    ${step.color === 'accent' ? 'bg-accent/10' : ''}
                    ${step.color === 'success' ? 'bg-success/10' : ''}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className={`
                      w-8 h-8
                      ${step.color === 'primary' ? 'text-primary' : ''}
                      ${step.color === 'accent' ? 'text-accent' : ''}
                      ${step.color === 'success' ? 'text-success' : ''}
                    `} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Passo {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};