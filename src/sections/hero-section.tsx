import React, { forwardRef } from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from "@/components/wrapper/scroll-anim";
import { HeroLogo } from '@/components/ui/hero-logo'
// @ts-ignore
import background from '../resources/static/skeleton.png'

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section
            id="hero"
            ref={ref}
            className="relative overflow-hidden min-h-screen"
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            />
            <div className="z-10 w-full">
                <ScrollAnim direction="right">
                    <div className="absolute top-0 right-0 py-12 px-6 sm:px-24 md:p-16">
                        <HeroLogo className="h-30 w-auto drop-shadow-md drop-shadow-neutral-400/70 "/>
                    </div>

                </ScrollAnim>

                <ScrollAnim direction="up" className="absolute bottom-0 right-0 left-0 flex justify-center pb-30" threshold={0.1}>
                    <div className='text-md/8 sm:text-xl/8 text-center bg-background/60 border-none shadow-md z-50 rounded-sm p-4 sm:p-8'>
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
