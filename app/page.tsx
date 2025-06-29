'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaTelegram } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { MdMoreHoriz } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

let isAnimationFunctionRunning = false;

const Home = () => {
  const [buttonBgColor1, setButtonBgColor1] = useState("bg-blue-400");
  const [buttonBgColor2, setButtonBgColor2] = useState("bg-white");
  const [buttonBgColor3, setButtonBgColor3] = useState("bg-white");
  const [buttonBgColor4, setButtonBgColor4] = useState("bg-white");
  const [buttonBgColor5, setButtonBgColor5] = useState("bg-white");
  const [buttonBgColor6, setButtonBgColor6] = useState("bg-white");

  const [activeButton, setActiveButton] = useState<string>("1");

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const [buttonTextTitle, setButtonTextTitle] = useState("BEM-VINDO!")
  const [buttonTextSubtitle, setButtonTextSubtitle] = useState("Encontre o lar perfeito para realizar seus sonhos. Nossa equipe está pronta para ajudar você em cada passo.");

  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const [isFixedHeaderActivated, setIsFixedHeaderActivated] = useState(false);
  const [isScroolButtonActivated, setIsScroolButtonActivated] = useState(true);

  function fun(id: string) {
    if (isAnimationFunctionRunning === false && id !== activeButton) {
      setActiveButton(id);
      clearTimeout(timeoutId)
      isAnimationFunctionRunning = true;

      setIsAnimationRunning(true)

      if (id === "1") {
        setButtonBgColor1("bg-blue-400 transition");

        setButtonBgColor2("bg-white transition");
        setButtonBgColor3("bg-white transition");
        setButtonBgColor4("bg-white transition");
        setButtonBgColor5("bg-white transition");
        setButtonBgColor6("bg-white transition");

        setTimeout(() => setButtonTextTitle("BEM-VINDO!"), 1000);
        setTimeout(() => setButtonTextSubtitle("Encontre o lar perfeito para realizar seus sonhos. Nossa equipe está pronta para ajudar você em cada passo."), 1000);

      } else if (id === "2") {
        setButtonBgColor2("bg-blue-400 transition");

        setButtonBgColor1("bg-white transition");
        setButtonBgColor3("bg-white transition");
        setButtonBgColor4("bg-white transition");
        setButtonBgColor5("bg-white transition");
        setButtonBgColor6("bg-white transition");

        setTimeout(() => setButtonTextTitle("QUEM SOMOS?"), 1000);
        setTimeout(() => setButtonTextSubtitle("No Lar dos Sonhos, somos uma equipe apaixonada e dedicada a ajudar você a encontrar o lar ideal. Oferecemos atendimento personalizado para tornar sua jornada de compra tranquila e satisfatória."), 1000);

      } else if (id === "3") {
        setButtonBgColor3("bg-blue-400 transition");

        setButtonBgColor1("bg-white transition");
        setButtonBgColor2("bg-white transition");
        setButtonBgColor4("bg-white transition");
        setButtonBgColor5("bg-white transition");
        setButtonBgColor6("bg-white transition");

        setTimeout(() => setButtonTextTitle("VARIEDADE DE IMÓVEIS"), 1000);
        setTimeout(() => setButtonTextSubtitle("Oferecemos uma ampla gama de propriedades, desde apartamentos aconchegantes até casas de luxo, atendendo a diferentes orçamentos e preferências."), 1000);

      } else if (id === "4") {
        setButtonBgColor4("bg-blue-400 transition");

        setButtonBgColor1("bg-white transition");
        setButtonBgColor2("bg-white transition");
        setButtonBgColor3("bg-white transition");
        setButtonBgColor5("bg-white transition");
        setButtonBgColor6("bg-white transition");

        setTimeout(() => setButtonTextTitle("EXPÊRIENCIA DO USUÁRIO"), 1000);
        setTimeout(() => setButtonTextSubtitle("O site é intuitivo e fácil de navegar, permitindo que os usuários encontrem rapidamente o imóvel que desejam. As fotos de alta qualidade e as descrições detalhadas ajudam na tomada de decisão."), 1000);

      } else if (id === "5") {
        setButtonBgColor5("bg-blue-400 transition");

        setButtonBgColor1("bg-white transition");
        setButtonBgColor2("bg-white transition");
        setButtonBgColor3("bg-white transition");
        setButtonBgColor4("bg-white transition");
        setButtonBgColor6("bg-white transition");

        setTimeout(() => setButtonTextTitle("COMPROMISSOS COM A COMUNIDADE"), 1000);
        setTimeout(() => setButtonTextSubtitle("Estamos comprometidos em contribuir para o desenvolvimento da comunidade local, promovendo imóveis que valorizam a região e melhoram a qualidade de vida dos moradores."), 1000);

      } else {
        setButtonBgColor6("bg-blue-400 transition");

        setButtonBgColor1("bg-white transition");
        setButtonBgColor2("bg-white transition");
        setButtonBgColor3("bg-white transition");
        setButtonBgColor4("bg-white transition");
        setButtonBgColor5("bg-white");

        setTimeout(() => setButtonTextTitle("ATENDIMENTO PERSONALIZADO"), 1000);
        setTimeout(() => setButtonTextSubtitle("Nossa equipe de corretores é altamente treinada e está disponível para oferecer suporte personalizado, ajudando os clientes a encontrar a casa perfeita de acordo com suas necessidades."), 1000);

      };

      setTimeout(() => {
        isAnimationFunctionRunning = false;
        setIsAnimationRunning(false);
      }, 2000);
    };
  };

  useEffect(() => {
    const set = setTimeout(() => {
      if (parseInt(activeButton) >= 6) {
        fun("1");
      }

      else {
        fun(String(parseInt(activeButton) + 1))
      }

    }, 8000);
    setTimeoutId(set);
  }, [activeButton]);

  function activateFixedHeader() {
    if (document.documentElement.scrollTop > 65) {
      setIsFixedHeaderActivated(true);
    } else {
      setIsFixedHeaderActivated(false);
    };
  };

  function activateScroolButton() {
    if (document.documentElement.scrollTop < 550) {
      setIsScroolButtonActivated(true);
    } else {
      setIsScroolButtonActivated(false);
    };
  };

  useEffect(() => {
    window.onscroll = () => {
      activateFixedHeader();
      activateScroolButton();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className='flex flex-col items-center'>
        <nav className={`w-full bg-blue-500 text-white flex items-center justify-between px-4 py-2`}>
          <Image
            width={1000}
            height={1000}
            src={"/logo.png"}
            alt='Apartamento'
            className='w-16'
          />
          <ul className='flex gap-4 items-center'>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Sociais</Link>
            </li>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Sobre</Link>
            </li>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Contatos</Link>
            </li>

            <li className='hover:scale-105 active:scale-95 transition'>
              <Link href={"/signup"} className='font-semibold p-2 px-4 border border-blue-800/20 bg-blue-700/50 hover:bg-blue-600/50 rounded-2xl transition'>Criar uma conta</Link>
            </li>
            <li className='hover:scale-105 active:scale-95 transition'>
              <Link href={"/login"} className='font-semibold border p-2 px-4 rounded-2xl hover:bg-white/20 transition'>Entrar</Link>
            </li>
          </ul>
        </nav>

        <nav className={`${isFixedHeaderActivated ? "top-4 opacity-100" : "top-[-70] opacity-0"} rounded-2xl transition-all fixed z-20 w-[90%] lg:w-[60%] bg-blue-500/50 backdrop-blur-2xl text-white flex items-center justify-between px-4 py-2`}>
          <Image
            width={1000}
            height={1000}
            src={"/logo.png"}
            alt='Apartamento'
            className='w-16'
          />
          <ul className='flex gap-4 items-center'>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Sociais</Link>
            </li>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Sobre</Link>
            </li>
            <li>
              <Link href={"#footer"} className='font-semibold hover:text-zinc-100 active:text-zinc-200 transition'>Contatos</Link>
            </li>

            <li className='hover:scale-105 active:scale-95 transition'>
              <Link href={"/signup"} className='font-semibold p-2 px-4 border border-blue-800/20 bg-blue-700/50 hover:bg-blue-600/50 rounded-2xl transition'>Criar uma conta</Link>
            </li>
            <li className='hover:scale-105 active:scale-95 transition'>
              <Link href={"/login"} className='font-semibold border p-2 px-4 rounded-2xl hover:bg-white/20 transition'>Entrar</Link>
            </li>
          </ul>
        </nav>

      </header>

      <main>
        <section className="relative z-10 shadow-lg mb-16 h-[500] w-full bg-center bg-[url('/Ocean-fish-swimming-in-crystal-clear-waters.jpg')] flex">
          <div className='backdrop-blur-lg w-full h-full absolute'></div>
          <div className='z-10 h-[540] w-[35%]'>
            <Image
              width={1000}
              height={1000}
              src={"/filha-feliz-se-divertindo-com-seus-pais-enquanto-se-muda-para-um-novo-apartamento.jpg"}
              alt='Apartamento'
              className='rounded-br-[150] object-cover shadow-lg h-full w-full'
            />
          </div>

          <div className='flex w-full justify-end mr-8'>
            <div className='m-auto w-[30%]'>

            </div>

            <div className='flex items-center w-[50%] gap-4'>
              <div className='text-end w-full'>
                <h2 className={`relative text-3xl lg:text-5xl mb-1 font-bold text-gray-100 ${isAnimationRunning ? "animate-fadein" : ""}`}>{buttonTextTitle}</h2>
                <p className={`relative font-semibold lg:text-2xl text-gray-100 ${isAnimationRunning ? "animate-fadein" : ""}`}>
                  {buttonTextSubtitle}
                </p>
              </div>

              <ul className='z-10'>
                <li>
                  <button id='1' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor1}`}></button>
                </li>
                <li>
                  <button id='2' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor2}`}></button>
                </li>
                <li>
                  <button id='3' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor3}`}></button>
                </li>
                <li>
                  <button id='4' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor4}`}></button>
                </li>
                <li>
                  <button id='5' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor5}`}></button>
                </li>
                <li>
                  <button id='6' onClick={e => fun((e.target as HTMLElement).id)} type='button' className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full ${buttonBgColor6}`}></button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Link href={"#scroolButton"} id='scroolButton' className={` ${isScroolButtonActivated ? "opacity-100" : "opacity-0"} transition-all bg-blue-500 hover:bg-blue-400 active:bg-blue-300 shadow-2xl w-12 h-12 rounded-full m-auto animate-bounce flex items-center justify-center`}>
          <FaArrowDown className='text-white' />
        </Link>

        <section className='px-6 mt-16'>
          <div className='flex lg:w-[85%] m-auto justify-between items-center relative'>
            <div>
              <h2 className="text-2xl text-zinc-800 m-auto md:m-0 font-semibold">IMÓVEIS <span className='text-blue-500'>EM DESTAQUE</span></h2>
              <p className='text-zinc-600 font-semibold'>Explore as melhores propriedades disponíveis no mercado!</p>
            </div>

            <button className='cursor-not-allowed text-white font-semibold p-2 px-4 border border-blue-800/20 bg-blue-700/50 hover:bg-blue-600/50 active:bg-blue-500/50 rounded-2xl hidden md:flex transition'>Descobrir mais</button>
            <MdMoreHoriz className='md:hidden rounded-full absolute right-0 text-4xl p-2 hover:bg-zinc-400/10 active:bg-zinc-400/20 transition' />
          </div>

          <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[85%] m-auto gap-6">
            {/* Exemplo de listagem de imóveis */}
            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 27, 2025, 04_13_34 PM.png"}
                alt='Apartamento'
                className='w-full max-h-[310] object-cover rounded-lg mb-2'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Casa em João Pessoa</h3>
                  <p className='text-zinc-600'>3 quartos, 2 banheiros, 150m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 300.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>

            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 20, 2025, 04_09_18 PM.png"}
                alt='Apartamento'
                className='w-full rounded-lg mb-2'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Apartamento na Praia</h3>
                  <p className='text-zinc-600'>2 quartos, 1 banheiro, 80m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 200.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>

            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 27, 2025, 04_14_42 PM.png"}
                alt='Apartamento'
                className='w-full rounded-lg object-cover mb-2 max-h-[310]'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Chácara em Campina Grande</h3>
                  <p className='text-zinc-600'>4 quartos, 3 banheiros, 300m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 500.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>
          </section>

          <div className='mt-8 flex lg:w-[85%] m-auto justify-between items-center relative'>
            <div>
              <h2 className="text-2xl m-auto md:m-0 text-zinc-800 font-semibold">IMÓVEIS <span className='text-blue-500'>MAIS RECENTES</span></h2>
              <p className='text-zinc-600 font-semibold'>Descubra os imóveis mais recentes e modernos do mercado!</p>
            </div>

            <button className='cursor-not-allowed text-white font-semibold p-2 px-4 border border-blue-800/20 bg-blue-700/50 hover:bg-blue-600/50 active:bg-blue-500/50 rounded-2xl hidden md:flex transition'>Descobrir mais</button>

            <MdMoreHoriz className='md:hidden rounded-full absolute right-0 text-4xl p-2 hover:bg-zinc-400/10 active:bg-zinc-400/20 transition' />
          </div>

          <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[85%] m-auto gap-6">
            {/* Exemplo de listagem de imóveis */}
            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 27, 2025, 04_13_34 PM.png"}
                alt='Apartamento'
                className='w-full max-h-[310] object-cover rounded-lg mb-2'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Chácara dos Ventos, João Pessoa</h3>
                  <p className='text-zinc-600'>5 quartos, 4 banheiros, 450m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 700.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>

            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 20, 2025, 04_09_18 PM.png"}
                alt='Apartamento'
                className='w-full rounded-lg mb-2'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Casa em Chácara dos Ventos</h3>
                  <p className='text-zinc-600'>3 quartos, 2 banheiro, 80m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 400.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>

            <Link href={"/"} className="bg-white/40 shadow-lg rounded-lg p-4 hover:bg-white/60 hover:shadow-2xl active:bg-white/80 transition">
              <Image
                width={1000}
                height={1000}
                src={"/moradias/ChatGPT Image Jun 27, 2025, 04_14_42 PM.png"}
                alt='Apartamento'
                className='w-full rounded-lg object-cover mb-2 max-h-[310]'
              />
              <div className='m-2 flex items-center justify-between'>
                <div>
                  <h3 className="font-semibold text-zinc-800">Casa em Brisa do Atlântico</h3>
                  <p className='text-zinc-600'>2 quartos, 2 banheiros, 200m²</p>
                </div>
                <p className="text-blue-500 font-semibold">R$ 350.000</p>
              </div>

              <button className='m-2 w-full flex items-center text-white font-semibold p-2 border border-blue-800/20 bg-blue-700/50 rounded'>
                <FaShoppingCart className='absolute' />
                <p className='m-auto'>Comprar</p>
              </button>

            </Link>
          </section>

          <div className='lg:w-[80%] mt-16 m-auto'>
            <h2 className=" text-zinc-800 text-2xl font-semibold w-fit">EXPERIÊNCIAS DE <span className='text-blue-600'>NOSSOS CLIENTES</span></h2>
            <p className='text-zinc-600 font-semibold'>Cada depoimento reflete momentos emocionantes!</p>
          </div>

          <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] m-auto gap-6">
            {/* Exemplo de listagem de imóveis */}
            <div className="rounded-lg p-8 bg-blue-600/10">
              <p className='text-zinc-800'>"Encontrar a casa dos meus sonhos foi uma experiência incrível com o Lar dos Sonhos! A equipe foi super atenciosa e me ajudou em cada passo do processo. Estou tão feliz na minha nova casa!"</p>
              <h3 className='text-zinc-800 font-semibold mt-4'>Ana Souza</h3>
              <div className='flex gap-1 mt-1'>
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
              </div>
            </div>
            <div className="rounded-lg p-8 bg-blue-600/10">
              <p className='text-zinc-800'>"O Lar dos Sonhos realmente entende o que significa encontrar um lar. Eles ouviram minhas necessidades e me mostraram opções que se encaixavam perfeitamente no que eu procurava. Recomendo a todos"</p>
              <h3 className='text-zinc-800 font-semibold mt-4'>Carlos Oliveira</h3>
              <div className='flex gap-1 mt-1'>
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
              </div>
            </div>
            <div className="rounded-lg p-8 bg-blue-600/10">
              <p className='text-zinc-800'>"Comprar minha primeira casa parecia assustador, mas o Lar dos Sonhos tornou tudo tão fácil. Eles me guiaram em cada etapa e estavam sempre disponíveis para responder minhas perguntas. Sou eternamente grato!"</p>
              <h3 className='font-semibold mt-4'>Lucas Mendes</h3>
              <div className='flex gap-1 mt-1'>
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
                <FaStar className='text-blue-500' />
              </div>
            </div>
          </section>

          <div className='lg:w-[80%] mt-16 m-auto'>
            <h2 className=" text-zinc-800 text-2xl font-semibold w-fit">NOSSOS <span className='text-blue-600'>PARCEIROS</span></h2>
            <p className='text-zinc-600 font-semibold'>No setor imobiliário, confiança e colaboração são fundamentais.</p>
          </div>

          <section className="bg-white/40 shadow-lg p-2 rounded-2xl mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[80%] m-auto gap-6">
            {/* Exemplo de listagem de imóveis */}
            <figure>

              <Image
                width={1000}
                height={1000}
                src={"/logos/logo-parceiro.jpg"}
                alt='Apartamento'
                className='w-[50%] rounded-full m-auto shadow-lg'
              />
              <figcaption className='text-zinc-800 text-center mt-4'>A Doce Lar é especialista em encontrar imóveis acolhedores para quem busca conforto, praticidade e aquele toque especial de lar. Com atendimento próximo e personalizado, ajudamos você a encontrar o lugar perfeito para viver bem e com tranquilidade.</figcaption>
            </figure>
            <figure>

              <Image
                width={1000}
                height={1000}
                src={"/logos/logo-parceiro-2.jpg"}
                alt='Apartamento'
                className='w-[50%] rounded-full m-auto shadow-lg'
              />
              <figcaption className='text-zinc-800 text-center mt-4'>Com foco em imóveis de alto padrão e oportunidades de investimento, a Real Estate une expertise de mercado e inovação para oferecer as melhores negociações. Nosso compromisso é com segurança, transparência e rentabilidade para nossos clientes.</figcaption>
            </figure>
            <figure>

              <Image
                width={1000}
                height={1000}
                src={"/logos/logo-parceiro-3.png"}
                alt='Apartamento'
                className='w-[50%] rounded-full m-auto shadow-lg'
              />
              <figcaption className='text-zinc-800 text-center mt-4'>Há mais de 10 anos no mercado, a Eliane Imóveis é referência em confiança e bom atendimento. Atuamos com imóveis residenciais e comerciais, sempre com atenção aos detalhes e o objetivo de facilitar a sua conquista do imóvel ideal.</figcaption>
            </figure>
          </section>
        </section>
      </main>

      <footer id='footer' className="bg-blue-500 text-white p-8 mt-16 justify-around flex">
        <section>
          <p className='font-semibold mb-4'>REDES SOCIAIS</p>
          <div className='flex gap-4 justify-center'>
            <FaInstagramSquare className='text-2xl' />
            <FaFacebook className="text-2xl" />
            <TbBrandLinkedinFilled className="text-2xl" />
          </div>
        </section>

        <section className='w-[40%] text-center'>
          <p className='font-semibold mb-4'>SOBRE NÓS</p>
          <p>No Lar dos Sonhos Imobiliária, sabemos que encontrar o imóvel ideal é mais do que uma transação — é a realização de um sonho. Por isso, desde o nosso primeiro dia, temos o compromisso de oferecer muito mais do que casas e apartamentos: oferecemos lugares onde histórias começam.</p>
        </section>

        <section className='flex flex-col items-center gap-2'>
          <p className='font-semibold mb-2'>NOS CONTATE</p>
          <div className='flex justify-center gap-4'>
            <FaTelegram className='text-2xl' />
            <TbBrandWhatsappFilled className='text-2xl' />
          </div>
          <div>
            <small>contato@lardossonhos.com.br</small>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Home;
