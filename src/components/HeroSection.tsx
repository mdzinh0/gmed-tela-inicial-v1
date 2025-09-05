import { Button } from "@/components/ui/button";
import { Play, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/ultrasound-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Tecnologia Médica de{" "}
                <span className="text-primary">Nova Geração</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Sistema GMED oferece gravação em tempo real, análise inteligente 
                e gestão completa para exames de ultrassom obstétricos
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Gravação em Tempo Real</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Dados Seguros</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="medical" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Iniciar Agora
              </Button>
              <Button variant="outline" size="lg">
                Ver Demonstração
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-medical rounded-2xl opacity-20 blur-xl animate-pulse-slow" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <img
                src={heroImage}
                alt="Sistema de ultrassom moderno"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;