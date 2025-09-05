import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-medical text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-medical hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
