import React from 'react';

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center text-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Login Administrativo</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Usuário</label>
            <input
              type="text"
              placeholder="admin"
              className="w-full px-3 py-2 bg-[#2C2C2C] text-white rounded border border-[#444]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-[#2C2C2C] text-white rounded border border-[#444]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded text-sm font-bold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}