import React from 'react'

import image from "../static/images/Leaf.jfif";

const Introduction = () => {
    return (
        <main>
            <img src={image} alt="leaf" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h4 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm Sagir.</h4>
            </section>
        </main>
    )
}


export default Introduction