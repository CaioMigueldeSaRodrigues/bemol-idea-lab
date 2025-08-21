import { Button } from "@/components/ui/button";
import bemolLogo from "@/assets/bemol-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={bemolLogo} alt="Bemol" className="h-8 w-auto" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Bemol Ideia Hub</h1>
            <p className="text-xs text-muted-foreground">Inovação Corporativa</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
            Início
          </a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
            Como Funciona
          </a>
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
            Sobre
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button variant="corporate" size="sm">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};