import { Card } from "@/components/ui/card";
import patientCareImage from "@/assets/patient-care.jpg";

const stats = [
  {
    number: "50,000+",
    label: "Exames Realizados",
    description: "Com nossa plataforma"
  },
  {
    number: "200+",
    label: "Clínicas Ativas",
    description: "Em todo o Brasil"
  },
  {
    number: "99.9%",
    label: "Uptime Garantido",
    description: "Disponibilidade 24/7"
  },
  {
    number: "4.9/5",
    label: "Avaliação Média",
    description: "Satisfação dos usuários"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Confiança de Milhares de Profissionais
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nossa plataforma é utilizada por especialistas em todo o país, 
              oferecendo segurança, praticidade e resultados excepcionais.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in border border-border/50"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-patient rounded-2xl opacity-20 blur-xl animate-pulse-slow" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <img
                src={patientCareImage}
                alt="Cuidado ao paciente durante exame de ultrassom"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;