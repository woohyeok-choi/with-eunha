import React from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from '../wrapper/scroll-anim';

const AboutSection = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="about" ref={ref}>
            <ScrollAnim>
                <div className="space-y-12 pb-12">
                    <h2 className="text-2xl font-title text-center text-light-pink font-bold">소중한 분들을 초대합니다.</h2>
                    <p className='text-center mx-auto pb-6 leading-10 break-keep'>
                        서로가 잘생기고 예뻐보이는 것보다,
                        <br />
                        귀여워 보이면 평생 간다는 말이 있습니다.
                        <br />
                        저희 둘은 3년 전부터
                        <br />
                        지금까지 서로가 너무 귀여워서 큰일입니다.
                        <br />
                        앞으로도 서로를 평생 귀여워하며 살겠습니다.
                        <br />
                        <br />
                        부부라는 이름으로 새로이 시작하는 오늘,
                        <br />
                        귀한 걸음 하시어 가까이에서
                        <br />
                        축복해주시면 감사하겠습니다.
                    </p>
                </div>
            </ScrollAnim>

            <ScrollAnim direction='right'>
                <div className="grid grid-cols-2 gap-4 items-start px-2">
                    <div className="space-y-6 text-center">
                        <div className="relative aspect-[1/1] rounded-sm shadow-sm w-full overflow-hidden hover:scale-102 transition-transform duration-500">
                            <img src="/skeleton.png" className='w-full h-full object-cover' />
                        </div>
                        <p className='justify-center'>
                            <span className="text-md text-blue pr-4">신랑</span> <span className="text-lg">최 우 혁</span><br />
                        </p>
                        <p className="text-md pt-6 justify-center">최종문&middot;최명숙의 아들</p>
                    </div>

                    <div className="space-y-6 text-center">
                        <div className="relative aspect-[1/1] rounded-sm shadow-sm w-full overflow-hidden hover:scale-102 transition-transform duration-500">
                            <img src="/skeleton.png" className='w-full h-full object-cover' />
                        </div>
                        <p className='justify-center'>
                            <span className="text-md text-gray-pink pr-4">신부</span> <span className="text-lg">강 은 하</span><br />
                        </p>
                        <p className="text-md pt-6 justify-center">강ㅇㅇ&middot;ㅇㅇㅇ의 딸</p>
                    </div>
                </div>
            </ScrollAnim>
        </Section >
    );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
