import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Link from 'next/link';

import { useEffect, useState } from 'react';


// import curriculo from './assets/curriculo.pdf';
// import omnistack from '../../public/assets/blur-background.png';
// import estudosReact_1 from '../../public/assets/blur-background.png';
// import estudosReact_2 from '../../public/assets/estudosReact_2.jpg';
// import estudosReact_3 from '../../public/assets/estudosReact_3.jpg';
// import mockup from '../../public/assets/code-mockup.png';

import ImageComponent from '../components/ImageComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ technologies, series }) {

  const [count, setCount] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <Link href="/sobre">Ir para pagina Sobre</Link>
        </div>
      </main>


      <Cover technologies={technologies} />



      <div>
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center bg-center">
          {/* Titulos */}
          <div technologies={technologies}>

          </div>
          <div>
            {technologies.map(t => (
              t.defaultVisible = true
            ))}
          </div>
          <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
            <div className="header">
              <div className="max-w-[640px]">
                <h1 className="mt-8 text-[2.5rem] leading-tight">
                  Landing Page - Gabriel Welter
                </h1>
                <h2>
                  <a href="/assets/curriculo.pdf" target="_blank">
                    Curriculo
                  </a>
                </h2>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Destaca-se no conhecimento em HTML, CSS, Tailwind, GitHub, Unity, C#.
                </p>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Este site foi desenvolvido com HTML, CSS, Tailwind, React, TS, Next e a hospedagem foi feita utilizando o serviço da Vercel.
                </p>
                <h1 className="mt-8 text-[2.5rem] leading-tight italic">
                  <strong className="text-blue-500">Em construção...</strong>
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Os links para todos os sites e projetos no git ainda serão adicionados.
                </p>
              </div>
            </div>
          </div>

          {/* // Publicacoes */}

          <div class="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto"> {/* items-center  */}
            <div class="max-w-[640px] postagem">
              <h1 class="mt-8 text-[2.5rem] leading-tight">
                <strong class="text-blue-500">Site Rocketseat</strong>
              </h1>
              <p class="mt-4 text-gray-200 leading-relaxed">
                06/2022 <br />
                Essa semana estou participando do evento Ignite Lab da Rocketseat.
                O evento tem como objetivo o desenvolvimento de uma aplicação com foco em React. <br />
                O que mais gostei de aprender no evento até aqui foi conhecer e usar várias ferramentas: Vite, Tailwind, Graphcms, Apollo. <br />
                #reactjs #rocketseat
              </p>
            </div>
          </div>
          <div class="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div class="max-w-[640px] postagem">
              <h1 class="mt-8 text-[2.5rem] leading-tight">
                <strong class="text-blue-500">Site InverseVR</strong>
              </h1>
              <p class="mt-4 text-gray-200 leading-relaxed">
                05/2022 <br />
                Desenvolvimento do site da InverseVR LTDA usando HTML e CSS. <br />
                <a href="https://inversevr.com.br/" target="_blank">💻 https://inversevr.com.br/</a><br />
                #html #css #bootstrap #frontend
              </p>
            </div>
          </div>

          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Estudos em React Danki Code e Rocketseat</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                04/2022 <br />
                Iniciando os estudos em React por meio dos conteúdos da Danki Code e Rocketseat.
                React é uma biblioteca JavaScript para construção de interfaces de usuário. <br />
                #javascript #react #frontend
              </p>
              <div className='flex justify-between mt-5'>
                <ImageComponent imageSrc="/assets/estudosReact_1.png" />
                <ImageComponent imageSrc="/assets/estudosReact_2.jpg" />
                <ImageComponent imageSrc="/assets/estudosReact_3.jpg" />
              </div>

            </div>
          </div>

          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Carteira de Investimentos</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Site para organizar investimentos realizado como trabalho final da disciplina de Programação Web da UFSM.
                Foi desenvolvido com HTML, CSS, Taiwindcss, PHP.
                Bernardo Gatto foi responsável pelo Backend em PHP.
              </p>
            </div>
          </div>
          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">OmniStack 11 - Rocketseat</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                03/2020 <br />
                Participei da semana de desenvolvimento prático da Rocketseat e tive uma introdução a Node.js, ReactJS e React Native. <br />
                <a href='/assets/certificado_omnistack.pdf' target="_blank">Certificado OmniStack 11</a>
              </p>
            </div>
          </div>

          <div className='footer'>
            <img src='/assets/code-mockup.png' className="mt-10 headline" alt="" />
          </div>
        </div>
      </div>
      <div className="technologies">
        <h1>{technologies[0].name}</h1>
        
      </div>
      <div className="technologies">
        {technologies.map((tech) => (
          <div key={tech.id}>
            {/* <h1>{tech.name}</h1> */}
            <img src={tech.logo.url} alt={tech.name} />
          </div>
        ))}
      </div>
    </>
  )
}


import { getAllTechnologies, getAllSeries } from '../../lib/dato-cms';

const Cover = ({ technologies }) => {
  const [currentTechnologies, setTechnologies] = useState(technologies);

  const handleShowAllTechnologies = () => {
    const tecs = currentTechnologies.map((t) => {
      t.defaultVisible = true;
      return t;
    });
    setTechnologies(tecs);
  };

  const hiddenTechnologies = currentTechnologies?.filter(
    (t) => !t.defaultVisible,
  ).length;

  return (
    <div></div>
  );
};


export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();

  return {
    props: {
      technologies,
    },
    revalidate: 120,
  };
};