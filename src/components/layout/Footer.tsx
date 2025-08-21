import bemolLogo from "@/assets/bemol-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={bemolLogo} alt="Bemol" className="h-8 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-bold">Bemol Ideia Hub</h3>
                <p className="text-xs text-primary-foreground/70">Inovação Corporativa</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Plataforma de inovação que conecta ideias de colaboradores 
              com a expertise estratégica da Bemol.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Plataforma</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Metodologia</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Suporte</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Guias</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Bemol</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Políticas</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2024 Bemol Ideia Hub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};