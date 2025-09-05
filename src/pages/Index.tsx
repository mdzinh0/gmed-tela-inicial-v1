import { Heart, User } from "lucide-react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon={<Heart className="w-8 h-8 text-white" />}
            title="Área Da Clínica"
            description="Acesso completo ao sistema para profissionais de saúde. Gerencie pacientes, cadastre exames e acompanhe resultados."
            features={[
              "Cadastro e gestão de pacientes",
              "Registro e acompanhamento de exames",
              "Integração com sistema desktop"
            ]}
            buttonText="Acessar Sistema"
            buttonVariant="medical"
            iconBg="bg-gradient-medical"
          />
          
          <ServiceCard
            icon={<User className="w-8 h-8 text-white" />}
            title="Acesso do Paciente"
            description="Portal exclusivo para pacientes acompanharem seus exames e histórico médico de forma segura e conveniente."
            features={[
              "Visualização de exames realizados",
              "Histórico completo de consultas",
              "Acesso seguro e protegido"
            ]}
            buttonText="Entrar na Minha Área"
            buttonVariant="patient"
            iconBg="bg-gradient-patient"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;