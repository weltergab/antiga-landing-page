import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

// import Link from 'next/link';

import { useEffect, useState } from 'react';


// import curriculo from './assets/curriculo.pdf';
// import omnistack from '../../public/assets/blur-background.png';
// import estudosReact_1 from '../../public/assets/blur-background.png';
// import estudosReact_2 from '../../public/assets/estudosReact_2.jpg';
// import estudosReact_3 from '../../public/assets/estudosReact_3.jpg';
// import mockup from '../../public/assets/code-mockup.png';

import ImageComponent from '../components/ImageComponent';
import {
  Heading,
  Button,
  Flex,
  Text,
  Box,
  SimpleGrid,
  useColorModeValue,
  Wrap,
  WrapItem,
  Center,
  Link,
} from '@chakra-ui/react';

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
      {/* <Layout>
      <Box pb={10}>
        <Cover technologies={technologies} />
        <Series series={series}/>
        <Footer />
      </Box>
    </Layout> */}
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

    </>
  )
}


import SerieCard from 'src/components/SerieCard';
// import useAuth from 'src/hooks/useAuth';
import Layout from '../components/Layout';
import Footer from 'src/components/Footer';
import { getAllTechnologies, getAllSeries } from 'src/lib/dato-cms';

const Cover = ({ technologies }) => {
  const [currentTechnologies, setTechnologies] = useState(technologies);
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');

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
    <Box bgColor={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={[4, 8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '52px', lg: '72px' }}
            mb={4}
            fontWeight="xBold"
          >
            Aprenda programação
            <Box>direto ao ponto </Box>
            <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>
          <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{' '}
            </Box>
            <Box>tecnologias que estão disponíveis no mercado!</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora começar!
            </Button>
          </Box>
          <Box>
            <Wrap>
              {currentTechnologies
                ?.filter((f) => f.defaultVisible)
                ?.map((tech) => (
                  <WrapItem>
                    <Center
                      w="100px"
                      h="100px"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      flexDirection="column"
                    >
                      <Image
                        src={tech.logo.url}
                        alt={tech.name}
                        width={40}
                        height={40}
                        title={tech.name}
                      />
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {tech.name}
                      </Text>
                    </Center>
                  </WrapItem>
                ))}
              {hiddenTechnologies > 0 && (
                <WrapItem>
                  <Center
                    w="100px"
                    h="100px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    flexDirection="column"
                  >
                    <Link onClick={handleShowAllTechnologies}>
                      <Text
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="bold"
                        mt={2}
                      >
                        {`+${hiddenTechnologies} outras`}
                      </Text>
                    </Link>
                  </Center>
                </WrapItem>
              )}
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const Series = ({ series }) => (
  <Flex id="series" justify="center">
    <Flex w="full" maxW="1200px" px={[4, 8]} mt={10} direction="column">
      <Heading mb={4}>Séries</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {series.map((serie) => (
          <SerieCard serie={serie} key={serie.id} />
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
);




export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();
  const series = await getAllSeries();

  return {
    props: {
      technologies,
      series,
    },
    revalidate: 120,
  };
};