import React from 'react'

import { SocialIcon } from 'react-social-icons';
import image from "../static/images/Leaf.jfif";
import sagir from "../static/images/sagir.jpg";

const Introduction = () => {
    return (
        <main className="static">
            <img src={image} alt="leaf" className="absolute object-cover w-full h-full" />
            <section className="relative justify-center min-h-screen pt-32 lg:pt-64 px-14">
            <div className="bg-green-800 px-14">
            <img src={sagir} alt="Sagir Smilling" className="rounded-full py-8 justify-center" style={{ height: 220, width: 200 }}/>
            <h4 className="text-6xl text-green-200 font-bold cursive leading-none lg:leading-snug home-name">Sagir Garba.</h4>
            <div className="inline-flex py-0.1 my-4">
                    <SocialIcon url="https://twitter.com/sager_garba" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.linkedin.com/in/sagirgarba/" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://github.com/SagirGarba" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.freecodecamp.org/sagirgarbaisa" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
            </div>
            </div>
            </section>
        </main>
    )
}


export default Introduction