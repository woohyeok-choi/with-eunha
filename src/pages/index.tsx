import React, { useState, useEffect, useRef } from "react"
import type { HeadFC } from "gatsby"
import SEO from "@/components/wrapper/seo";
import Navbar from "@/components/ui/nav-bar";
import MusicControl from "@/components/ui/music-control";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import DateSection from "@/components/sections/date-section";
import VenueSection from "@/components/sections/venue-section";
import GallerySection from "@/components/sections/gallery-section";
import GiftSection from "@/components/sections/gift-section";
import FixedOverlay from "@/components/wrapper/fixed-overlay";
import { PaperTexture } from "@paper-design/shaders-react";
import { NavermapsProvider } from "react-naver-maps";
import { Toaster } from "@/components/ui/sonner"


const App = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    // Section Refs
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const dateRef = useRef<HTMLElement>(null);
    const venueRef = useRef<HTMLElement>(null);
    const galleryRef = useRef<HTMLElement>(null);
    const giftRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const links = [
        { name: '메인', onClick: () => scrollToSection(heroRef) },
        { name: '소개', onClick: () => scrollToSection(aboutRef) },
        { name: '날짜', onClick: () => scrollToSection(dateRef) },
        { name: '오시는 길', onClick: () => scrollToSection(venueRef) },
        { name: '갤러리', onClick: () => scrollToSection(galleryRef) },
        { name: '마음 전하실 곳', onClick: () => scrollToSection(giftRef) },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsNavVisible(!entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);
    return (
        <>
            <NavermapsProvider ncpKeyId={process.env.GATSBY_NAVER_MAP_API_KEY || ''}>
                <FixedOverlay>
                    <div className="w-full pointer-events-auto">
                        <Navbar links={links} visible={isNavVisible} />
                    </div>
                    <div className="pointer-events-auto fixed bottom-8 right-4 animate-in fade-in zoom-in duration-300">
                        <MusicControl visible={isNavVisible && !isGalleryOpen} />
                    </div>
                </FixedOverlay>
                <div className="bg-beige scroll-smooth text-gray/70 font-body">
                    <div className="border-x-0 md:border-x-2 max-w-2xl mx-auto items-center justify-center">
                        <PaperTexture
                            className="space-y-32 min-h-screen"
                            colorBack='#fafafa' colorFront='#f1f1f1' contrast={0.1} roughness={1.0} crumples={0.8} crumpleSize={0.3}>
                            <HeroSection ref={heroRef} />
                            <AboutSection ref={aboutRef} />
                            <DateSection ref={dateRef} />
                            <VenueSection ref={venueRef} />
                            <GallerySection ref={galleryRef} onOpenChange={setIsGalleryOpen} />
                            <GiftSection ref={giftRef} />
                            <footer className="border-t py-8 text-center text-sm">
                                <p>&copy; 2026 Woohyeok &hearts; Eunha</p>
                            </footer>
                        </PaperTexture>
                    </div>
                </div >
                <Toaster />
            </NavermapsProvider>
        </>
    )
}

export const Head: HeadFC = () => <SEO />

export default App