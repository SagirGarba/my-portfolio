import React, { useState, useEffect } from 'react';

import sanityClient from "../client";
import leaf from "../static/images/Leaf.jfif";
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from 'react-social-icons';



const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
    return builder.image(source)
}

const Biography = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>;
    return (
        <main className="relative">
            <img src={leaf} alt="leaf flower" className="absolute object-cover w-full h-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img 
                    src={urlFor(author.authorImage).url()} 
                    className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" 
                    alt={author.name} 
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-3xl lg:text-6xl text-green-100 my-4">
                            I'm{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                           <BlockContent blocks={author.bio} projectId="9y3dt88m" dataset="production" />
                        </div>
                    </div>
                    <div className="inline-flex py-0.1 my-4">
                    <SocialIcon url="https://twitter.com/sager_garba" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.linkedin.com/in/sagirgarba/" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://github.com/SagirGarba" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
                    <SocialIcon url="https://www.freecodecamp.org/sagirgarbaisa" className="mr-1.5 lg:mr-4" target="_blank" fgColor="#fff" style={{ height: 25, width: 25 }} />
            </div>
                </section>
            </div>
        </main>
    )
}


export default Biography