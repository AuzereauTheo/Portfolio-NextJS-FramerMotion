import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaBook, FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Prêt à travailler <span className='text-purple'>ensemble</span>, et à écrire le code de demain?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Contacter moi des aujourd&apos;hui et réfléchissons à comment réaliser pour rêves.</p>
            <a href="mailto:theo.auzereau@hotmail.com">
                <MagicButton
                title="Télécharger mon CV"
                icon={<FaBook />}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Théo Auzereau</p>
            <div className='flex items-center md:gap-3 gap-6 mt-3 md:mt-0'>
                {socialMedia.map((profile) => (
                    <a key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' href={profile.link}>
                        <img src={profile.img} alt={profile.id} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer