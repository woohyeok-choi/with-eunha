import React, { useState, useEffect } from 'react';
import Section from "@/components/wrapper/section";
import { differenceInSeconds, format, startOfMonth, getDay, addDays, isSameDay } from "date-fns";
import ScrollAnim from '../components/wrapper/scroll-anim';


const DateSection = React.forwardRef<HTMLElement>((props, ref) => {
    const targetDate = new Date('2026-06-13T13:00:00');
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = differenceInSeconds(targetDate, now);

            if (diff <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(diff / (3600 * 24));
            const hours = Math.floor((diff % (3600 * 24)) / 3600);
            const minutes = Math.floor((diff % 3600) / 60);
            const seconds = diff % 60;

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Section id="date" ref={ref}>
            <ScrollAnim>
                <div className="flex flex-col items-center w-full space-y-12 pb-24 px-4">
                    <p className="text-2xl text-left font-title text-light-pink font-bold w-full px-8">
                        2026년
                        <br />
                        유월의
                        <br />
                        열 세번째 날.
                    </p>
                    <div className="w-full mx-auto grid grid-cols-7 text-center border-y-2 border-gray-pink py-4">
                        {
                            ['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                                <div key={day} className={`py-2 text-md font-bold ${day === '일' ? 'text-gray-pink' : ''}`}>
                                    {day}
                                </div>
                            ))
                        }

                        {
                            Array.from({ length: getDay(startOfMonth(targetDate)) }).map((_, index) => (
                                <div key={`empty-${index}`} />
                            ))
                        }

                        {
                            Array.from({ length: 30 }).map((_, index) => {
                                const date = addDays(startOfMonth(targetDate), index);
                                const isTarget = isSameDay(date, targetDate);
                                return (
                                    <div
                                        key={index}
                                        className="aspect-square flex items-center justify-center text-md relative"
                                    >
                                        <div className={`sm:w-12 sm:h-12 h-8 w-8 flex items-center justify-center rounded-full transition-all
                                        ${isTarget
                                                ? 'bg-gray-pink text-white font-bold shadow-md'
                                                : ''
                                            }`
                                        }>
                                            {format(date, 'd')}
                                        </div>
                                        {isTarget && (
                                            <div className="absolute -mt-2 top-full left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-sm text-xs text-light-pink font-bold">
                                                오후 1시
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </ScrollAnim>
            <ScrollAnim direction={'right'}>
                <div className="flex flex-col items-center w-full space-y-12">

                    <div className="text-center mx-auto">
                        <span className='text-xl font-bold'>우혁</span>
                        <span className='text-xl font-bold text-light-gray'>&nbsp;&hearts;&nbsp;</span>
                        <span className='text-xl font-bold'>은하</span>
                        <span className='text-md'>&nbsp;결혼식까지</span>
                    </div>

                    <div className="grid grid-cols-4 text-center w-full">
                        {[
                            { label: 'Days', value: timeLeft.days },
                            { label: 'Hours', value: timeLeft.hours },
                            { label: 'Minutes', value: timeLeft.minutes },
                            { label: 'Seconds', value: timeLeft.seconds },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-pink rounded-full shadow-lg flex items-center justify-center mb-2">
                                    <span className="text-2xl md:text-2xl font-bold text-white">
                                        {item.value}
                                    </span>
                                </div>
                                <span className="text-sm tracking-widest">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAnim>
        </Section >
    );
});

DateSection.displayName = "DateSection";

export default DateSection;
