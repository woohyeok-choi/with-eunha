import React from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from '@/components/wrapper/scroll-anim';
import { isMobile } from 'react-device-detect';
import { Button } from "@/components/ui/button";
import loadable from "@loadable/component"


const Map = loadable(() => import("@/components/ui/naver-map"), { ssr: false });

const VenueSection = React.forwardRef<HTMLElement>((props, ref) => {
    const [lat, lng] = [37.457770, 126.953860];
    const zoom = 16;
    const encodedAddress = encodeURIComponent('서울대학교 교수회관 웨딩홀');
    const urlNaver = `https://map.naver.com/p/search/${encodedAddress}`;
    const urlKakao = `https://map.kakao.com/?p=${lat},${lng}&q=${encodedAddress}`;
    const urlTmap = `https://www.tmap.co.kr/tmap2/mobile/route.jsp?lat=${lat}&lon=${lng}&name=${encodedAddress}`;

    return (
        <Section id="venue" ref={ref}>
            <ScrollAnim>
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-2xl font-title font-bold text-center text-light-pink pb-12">오시는 길</h2>
                    <div className="flex flex-col items-center space-y-4 pb-4">
                        <h3 className="text-xl text-center font-bold">서울대학교 교수회관 웨딩홀</h3>
                        <p className='text-center mx-auto pb-6 leading-10 break-keep'>
                            2층 컨벤션홀<br />
                            서울특별시 관악구 관악로 1<br />
                            서울대학교 내 65동 교수회관
                        </p>
                    </div>

                    <Map zoom={zoom} center={[lat, lng]} text="서울대학교 <br/>교수회관 웨딩홀" />

                    <div className='grid grid-cols-3 gap-4 w-full pt-6 px-2'>
                        <a href={urlNaver} target={isMobile ? "_self" : "_blank"} className='w-full'>
                            <Button variant="outline" className='w-full flex flex-row items-center justify-center gap-2'>
                                <img src="/navermap.png" alt="naver map" className="h-4 md:h-6 aspect-square" />
                                <span className="text-xs md:text-base">네이버맵</span>
                            </Button>
                        </a>
                        <a href={urlKakao} target={isMobile ? "_self" : "_blank"} className='w-full'>
                            <Button variant="outline" className='w-full flex flex-row items-center justify-center gap-2'>
                                <img src="../../resources/kakao.png" alt="kakao map" className="h-4 md:h-6 spect-square" />
                                <span className="text-xs md:text-base">카카오맵</span>
                            </Button>
                        </a>
                        <a href={urlTmap} target={isMobile ? "_self" : "_blank"} className='w-full'>
                            <Button variant="outline" className='w-full flex flex-row items-center justify-center gap-2'>
                                <img src="/tmap.png" alt="tmap" className="h-4 md:h-6 aspect-square" />
                                <span className="text-xs md:text-base">티맵</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </ScrollAnim>
            <ScrollAnim direction='right'>
                <div className="w-full space-y-6 flex flex-col items-left px-8 pt-12">
                    <h2 className="text-xl font-title font-bold text-light-pink">대중교통</h2>
                    <p className='leading-10 break-keep text-md'>
                        <span className="font-bold">2호선 낙성대역 4번 출구</span><br />
                        <span>길 건너 관학02-1번 버스 - "공동기기원" 정류장에서 하차</span>
                    </p>
                    <p className='leading-10 break-keep text-md'>
                        <span className="font-bold">2호선 서울대입구역 3번 출구</span><br />
                        <span>5511번 버스 - "공동기기원" 정류장에서 하차</span>
                    </p>
                    <p className='leading-10 break-keep text-md'>
                        <span className="font-bold">신림선 관악산역 1번 출구</span><br />
                        <span>5516번 버스 - "공동기기원" 또는 "교수회관입구" 정류장에서 하차</span>
                    </p>
                </div>
                <div className="w-full space-y-6 flex flex-col items-left px-8 pt-12">
                    <h2 className="text-xl font-title font-bold text-light-pink">택시</h2>
                    <p className='leading-10 break-keep text-md'>
                        2호선 낙성대역, 서울대입구역에서 5-10분 소요
                    </p>
                </div>
                <div className="w-full space-y-6 flex flex-col items-left px-8 pt-12">
                    <h2 className="text-xl font-title font-bold text-light-pink">자가용</h2>
                    <p className='leading-10 break-keep text-md'>
                        "서울대학교 교수회관 웨딩홀"로 검색<br />
                        낙성대 근처의 "호암교수회관"이 아님
                    </p>
                </div>
            </ScrollAnim>
        </Section>
    );
});

VenueSection.displayName = "VenueSection";

export default VenueSection;
