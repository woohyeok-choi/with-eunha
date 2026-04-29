import React from 'react';
import Section from "@/components/wrapper/section";
import ScrollAnim from '../components/wrapper/scroll-anim';
import {GatsbyImage, getImage } from 'gatsby-plugin-image';
import Funeral from "@/components/svg/funeral"
import {graphql, useStaticQuery} from "gatsby";

const AboutSection = React.forwardRef<HTMLElement>((props, ref) => {
    const data = useStaticQuery(graphql`
        query {
          groom: file(relativePath: {eq: "about-groom.jpg"}) {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED, 
                formats: [AUTO, AVIF],
                avifOptions: {quality: 50}
              )
            }
          }
          bride: file(relativePath: {eq: "about-bride.jpg"}) {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED, 
                formats: [AUTO, AVIF],
                avifOptions: {quality: 50}
              )
            }
          }
        }
    `)

    const imgGroom = getImage(data.groom)
    const imgBride = getImage(data.bride)

    return (
        <Section id="about" ref={ref}>
            <ScrollAnim>
                <div className="space-y-12 pb-12">
                    <h2 className="text-2xl font-title text-center text-light-pink font-bold">소중한 분들을 초대합니다.</h2>
                    <p className='text-center mx-auto pb-6 leading-10 break-keep'>
                        처음 만난 날부터 지금까지
                        <br />
                        서로가 귀여워 웃음이 끊이지 않았던 저희,
                        <br />
                        앞으로도 그렇게 웃으며
                        <br />
                        서로를 아끼고 사랑하며 살아가겠습니다.
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
                    <div className="text-center">
                        <div className="relative aspect-square rounded-sm shadow-sm w-full overflow-hidden hover:scale-102 transition-transform duration-500">
                            {
                                imgGroom !== undefined && <GatsbyImage className='w-full h-full object-cover' alt="Groom photo" image={imgGroom} />
                            }
                        </div>
                        <p className='pt-4 justify-center'>
                            <span className="text-md text-blue pr-4">신랑</span> <span className="text-lg">최 우 혁</span><br />
                        </p>
                        <p className="text-md pt-6 justify-center">최종문&middot;최명숙의 아들</p>
                    </div>

                    <div className="text-center">
                        <div className="relative aspect-square rounded-sm shadow-sm w-full overflow-hidden hover:scale-102 transition-transform duration-500">
                            {
                                imgBride !== undefined && <GatsbyImage className='w-full h-full object-cover' alt="Groom photo" image={imgBride} />
                            }
                        </div>
                        <p className='pt-4 justify-center'>
                            <span className="text-md text-gray-pink pr-4">신부</span> <span className="text-lg">강 은 하</span><br />
                        </p>
                        <p className="flex items-center text-md pt-6 justify-center stroke-gray-300"><Funeral className='w-4 h-4'/>강영철&middot;김덕순의 딸</p>
                    </div>
                </div>
            </ScrollAnim>
        </Section >
    );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
