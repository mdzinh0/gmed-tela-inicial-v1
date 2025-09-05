import { Card } from "@/components/ui/card";
import { 
  Video, 
  Database, 
  FileText, 
  Monitor, 
  Cloud, 
  Smartphone,
  Clock,
  Users
} from "lucide-react";
import dashboardImage from "@/assets/medical-dashboard.jpg";
import reportsImage from "@/assets/medical-reports.jpg";

const features = [
  {
    icon: Video,
    title: "Gravação Avançada",
    description: "Sistema de captura em alta resolução com sincronização automática",
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Armazenamento Seguro",
    description: "Backup automático e criptografia de dados médicos",
    color: "text-secondary"
  },
  {
    icon: FileText,
    title: "Relatórios Automáticos",
    description: "Geração de laudos médicos com IA e templates personalizados",
    color: "text-primary"
  },
  {
    icon: Monitor,
    title: "Interface Intuitiva",
    description: "Dashboard moderno otimizado para fluxo de trabalho médico",
    color: "text-secondary"
  },
  {
    icon: Cloud,
    title: "Sincronização Cloud",
    description: "Acesso remoto seguro e sincronização entre dispositivos",
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "App Móvel",
    description: "Acompanhamento de exames via aplicativo para pacientes",
    color: "text-secondary"
  },
  {
    icon: Clock,
    title: "Histórico Completo",
    description: "Timeline detalhada de todos os exames e evolução",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Múltiplos Usuários",
    description: "Sistema multiusuário com níveis de acesso personalizados",
    color: "text-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tecnologia de Ponta para Ultrassom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso sistema oferece todas as ferramentas necessárias para um 
            fluxo de trabalho médico eficiente e seguro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Dashboard Inteligente
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Interface moderna com visualização em tempo real dos dados, 
              análises automáticas e insights baseados em IA para otimizar 
              o diagnóstico médico.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Análise automática de imagens</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm">Detecção de anomalias assistida por IA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Comparação com exames anteriores</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img
              src={dashboardImage}
              alt="Dashboard do sistema médico"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="animate-fade-in order-2 md:order-1">
            <img
              src={reportsImage}
              alt="Relatórios médicos digitais"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div className="animate-slide-up order-1 md:order-2">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Relatórios Profissionais
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Geração automática de laudos médicos com templates personalizáveis, 
              integração com sistemas hospitalares e assinatura digital certificada.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm">Templates personalizáveis por especialidade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Assinatura digital certificada ICP-Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm">Integração com PACS e HIS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;