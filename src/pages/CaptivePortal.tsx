import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaptivePortal() {
  const navigate = useNavigate();

  useEffect(() => {
    const enviarPresenca = async () => {
      try {
        // Captura dados básicos para simular presença
        const data = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
        };

        await fetch('https://seu-backend.com/api/presenca', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        console.log('Presença registrada');
      } catch (error) {
        console.error('Erro ao registrar presença:', error);
      }
    };

    enviarPresenca();

    // Redireciona para o app após 2 segundos
    const timer = setTimeout(() => navigate('/'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-[#1A1A1A]">
      <h1 className="text-2xl font-bold mb-2">Conectado com sucesso!</h1>
      <p className="text-muted mb-4">Aguarde, você está sendo redirecionado...</p>
    </div>
  );
}