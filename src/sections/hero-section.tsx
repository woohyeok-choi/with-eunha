import React, { forwardRef } from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from "@/components/wrapper/scroll-anim";
import HeroLogo from '@/components/svg/hero-logo'
import { StaticImage } from "gatsby-plugin-image";


const HeroSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section
            id="hero"
            ref={ref}
            className="grid overflow-hidden min-h-screen"
        >
            <StaticImage
                src="../resources/static/hero.jpg"
                alt="Hero Background"
                layout="fullWidth"
                placeholder="blurred"
                className="col-start-1 row-start-1 w-full h-full"
            />

            <div className="z-10 w-full relative h-full flex flex-col justify-center col-start-1 row-start-1">
                <ScrollAnim direction="right" className="absolute top-0 right-0">
                    <div className="p-12">
                        <HeroLogo className="h-30 w-auto drop-shadow-md drop-shadow-neutral-400/70 sm:h-48" />
                    </div>

                </ScrollAnim>

                <ScrollAnim direction="up" className="absolute bottom-30 left-1/2 -translate-x-1/2">
                    <div className='w-max text-md/8 sm:text-xl/8 text-center bg-background/60 border-none shadow-md z-50 rounded-sm p-4 sm:p-8'>
                        <div className='shrink-0 bg-gray-500 h-px w-full' />
                        <p className='p-6'>2026년 6월 13일 토요일 오후 1시<br />서울대학교 교수회관 웨딩홀</p>
                        <div className='shrink-0 bg-gray-500 h-px w-full' />
                    </div>
                </ScrollAnim>
            </div>
        </Section >
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
