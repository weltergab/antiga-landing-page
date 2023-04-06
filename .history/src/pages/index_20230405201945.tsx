import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ExpandableImage from './components/ExpandableImage';

import curriculo from 'assets/curriculo.pdf';
import omnistack from 'assets/certificado_omnistack.pdf';
import estudosReact_1 from 'assets/estudosReact_1.png';
import estudosReact_2 from 'assets/estudosReact_2.jpg';
import estudosReact_3 from 'assets/estudosReact_3.jpg';
import mockup from 'assets/code-mockup.png';

import ScrollReveal from 'scrollreveal';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='bg-green-800'>Test</h1>

        
        <Link href="/sobre">Ir para pagina Sobre</Link>
      </main>
    </>
  )
}