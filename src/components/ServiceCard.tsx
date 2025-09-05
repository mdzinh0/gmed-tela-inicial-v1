import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "medical" | "patient";
  iconBg: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  buttonText, 
  buttonVariant,
  iconBg 
}: ServiceCardProps) => {
  return (
    <Card className="p-8 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border/50 bg-card">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-card-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
              buttonVariant === 'medical' ? 'text-primary' : 'text-secondary'
            }`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        variant={buttonVariant} 
        size="lg" 
        className="w-full group"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

export default ServiceCard;