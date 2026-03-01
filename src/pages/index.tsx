import React from "react"
import type { HeadFC } from "gatsby"
import SEO from "@/components/wrapper/seo";
import {PaperTexture} from "@paper-design/shaders-react";
import HeroSection from "@/sections/hero-section";
import AboutSection from "@/sections/about-section";
import DateSection from "@/sections/date-section";
import VenueSection from "@/sections/venue-section";
import GallerySection from "@/sections/gallery-section";
import GiftSection from "@/sections/gift-section";
import {StaticImage} from "gatsby-plugin-image";


const App = () => {
    return (
        <>
            <div className="bg-beige scroll-smooth text-gray/70 font-body">
                <div className="border-x-0 md:border-x-2 max-w-2xl mx-auto items-center justify-center">
                    <PaperTexture
                        className="space-y-32 min-h-screen"
                        colorBack='#fafafa' colorFront='#f1f1f1' contrast={0.1} roughness={1.0} crumples={0.8} crumpleSize={0.3}>
                        <div className='min-h-screen flex'>
                            <div className='m-auto'>
                                <StaticImage className='w-full h-full object-cover' alt="Under construction" src={'../resources/static/underconstruction.png'} /> :
                                <h1 className='text-3xl text-center'>4월 중에 오픈됩니다. <br/> 조금만 기다려주세요.</h1>
                            </div>
                        </div>
                        <footer className="border-t py-8 text-center text-sm">
                            <p>&copy; 2026 Woohyeok &hearts; Eunha</p>
                        </footer>
                    </PaperTexture>
                </div>
            </div >

        </>
    )
}

export const Head: HeadFC = () => <SEO />

export default App
