import { Link } from 'react-router-dom';

export default function CaptivePortal() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao MesaLivre</h1>
      <p className="mb-8 text-center max-w-md">Escolha seu tipo de acesso para continuar.</p>
      <div className="flex gap-4">
        <Link
          to="/cliente"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold"
        >
          Sou Cliente
        </Link>
        <Link
          to="/admin"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold"
        >
          Sou da Equipe
        </Link>
      </div>
    </div>
  );
}
