import { Heart, User } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Escolha Sua Área de Acesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema integrado com portais específicos para profissionais de saúde e pacientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <ServiceCard
            icon={<Heart className="w-8 h-8 text-white" />}
            title="Área Da Clínica"
            description="Acesso completo ao sistema para profissionais de saúde. Gerencie pacientes, realize gravações de ultrassom e acompanhe resultados em tempo real."
            features={[
              "Gravação de ultrassom em alta definição",
              "Gestão completa de pacientes e prontuários",
              "Geração automática de relatórios médicos",
              "Integração com equipamentos de ultrassom",
              "Dashboard analítico com métricas avançadas"
            ]}
            buttonText="Acessar Sistema"
            buttonVariant="medical"
            iconBg="bg-gradient-medical"
          />
          
          <ServiceCard
            icon={<User className="w-8 h-8 text-white" />}
            title="Acesso do Paciente"
            description="Portal exclusivo para pacientes acompanharem seus exames, visualizarem ultrassons e histórico médico de forma segura e conveniente."
            features={[
              "Visualização de exames de ultrassom",
              "Download de relatórios e imagens",
              "Histórico completo de consultas",
              "Notificações de novos resultados",
              "Acesso mobile seguro e protegido"
            ]}
            buttonText="Entrar na Minha Área"
            buttonVariant="patient"
            iconBg="bg-gradient-patient"
          />
        </div>
      </main>
      
      <FeaturesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;