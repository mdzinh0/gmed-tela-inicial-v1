import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-bg border-b border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-medical mb-6">
            <Activity className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sistema Integrado de{" "}
            <span className="text-primary">Ultrassom</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Plataforma completa para gestão médica e acompanhamento de
            exames obstétricos
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;