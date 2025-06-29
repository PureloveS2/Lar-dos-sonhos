"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const regex = /[a-zA-Z]/;

const SignUp = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isNameValid, setIsNameValid] = useState<boolean>();
  const [isNameLengtValid, setIsNameLengthValid] = useState<boolean>();
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>();

  useEffect(() => {
    setIsNameValid(regex.test(name));
    setIsNameLengthValid(name.replace(/ +/g, ' ').trim().length >= 6 ? true : false )
    verifyPasswordLenght();
    verifyFormValidationStatus();
  }, [name, password]);

  const createUser = () => {
    if ( isNameValid && isNameLengtValid && isPasswordValid ) {
      router.push("/");
    } else {
      console.log("Nome inválido");
    };
  };

  const verifyPasswordLenght = () => {
    if ( password.length >= 8) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    };
  };

  const verifyFormValidationStatus = () => {
    if ( isNameValid && isNameLengtValid && isPasswordValid ) {
      return true
    } else {
      return false
    };
  };
    
  return (
    <div className="flex items-center justify-center min-h-dvh bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-blue-500 font-bold text-center">Criar Conta</h2>
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
            <ul className={`bg-red-600 py-2 px-4 m-1 rounded mt-2 list-disc ${isNameValid && isNameLengtValid ? "hidden" : "static"}`}>
              <li className={`text-[12px] text-white font-semibold ${isNameValid ? "hidden" : "static"}`}>Nome inválido</li>
              <li className={`text-[12px] text-white font-semibold ${isNameLengtValid ? "hidden" : "static"}`}>Nome precisa ser maior que 6 caracteres</li>
            </ul>
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
            <ul className={`${isPasswordValid ? "hidden" : "static"} bg-red-600 py-2 px-4 m-1 rounded mt-2 list-disc`}>
              <li className={`text-[12px] text-white font-semibold ${isPasswordValid ? "hidden" : "static"}`}>A senha precisa ter pelo menos 8 caracteres</li>
            </ul>
          </div>
          <button
            formAction={createUser}
            type="submit"
            className={`${verifyFormValidationStatus() ? "cursor-pointer hover:bg-blue-400 active:bg-blue-300" : "cursor-not-allowed hover:bg-blue-500 active:bg-blue-500"} w-full text-white font-semibold py-2 px-4 bg-blue-500  rounded-2xl transition`}
          >
            Criar Conta
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Já tem uma conta? <Link href="/login" className="text-blue-600 hover:underline">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
