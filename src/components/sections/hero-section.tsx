import React, { forwardRef } from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from "@/components/wrapper/scroll-anim";


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
                    backgroundImage: "url('/skeleton.png')",
                }}
            />
            <div className="z-10 w-full">
                <ScrollAnim direction="right">
                    <div className="absolute top-0 right-0 font-title text-4xl/10 text-shadow-lg text-right text-white tracking-tight p-8 md:p-16 md:text-5xl/14">
                        <p>최우혁<br />그리고<br />강은하</p>
                    </div>
                </ScrollAnim>

                <ScrollAnim direction="up" className="absolute bottom-0 right-0 left-0 flex justify-center pb-30" threshold={0.1}>
                    <div className='text-md/8 sm:text-xl/8 text-center bg-background/60 border-none shadow-md z-50 rounded-sm p-4 sm:p-8'>
                        <div className='shrink-0 bg-gray-500 h-[1px] w-full' />
                        <p className='p-6'>2026년 6월 13일 토요일 오후 1시<br />서울대학교 교수회관 웨딩홀</p>
                        <div className='shrink-0 bg-gray-500 h-[1px] w-full' />
                    </div>
                </ScrollAnim>
            </div>
        </Section >
    );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
