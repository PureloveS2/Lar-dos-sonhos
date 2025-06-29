"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const regex = /[a-zA-Z]/;

const Login = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-blue-500 font-bold text-center">Entrar</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              required
              placeholder="Ex: Carlos Santana"
              value={name}
              onChange={e => setName(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              required
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            formAction={loginUser}
            type="submit"
            className={`cursor-pointer hover:bg-blue-400 active:bg-blue-300 w-full text-white font-semibold py-2 px-4 bg-blue-500  rounded-2xl transition`}
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Não tem uma conta? <Link href="/signup" className="text-blue-600 hover:underline">Crie uma</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
