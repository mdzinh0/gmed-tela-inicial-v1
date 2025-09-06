import { Button } from "@/components/ui/button";
import { Activity, Heart, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <header className="bg-gradient-bg border-b border-border">
      {/* Top Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-medical">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-bold text-lg text-foreground">GMED - Sistema Avançado de Gravação de Ultrassom</div>
            </div>
            
            <div className="flex gap-3 items-center">
              <ThemeToggle />
              <Button variant="medical" className="group">
                <Heart className="w-4 h-4" />
                Área Da Clínica
              </Button>
              <Button variant="patient" className="group">
                <User className="w-4 h-4" />
                Acesso do Paciente
              </Button>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;