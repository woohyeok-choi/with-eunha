import React, { useState, useRef } from 'react';
import Section from "@/components/wrapper/section";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import ScrollAnim from '../wrapper/scroll-anim';

interface Props {
    onOpenChange?: (isOpen: boolean) => void;
}

const GallerySection = React.forwardRef<HTMLElement, Props>(({ onOpenChange }, ref) => {
    const photos = Array.from({ length: 23 }, () => '/skeleton.png');
    const [isExpanded, setIsExpanded] = useState(false);
    const [_, setCurrentPhotoIndex] = useState(0);

    const initialPhotos = photos.slice(0, 9);
    const expandablePhotos = photos.slice(9);

    const internalRef = useRef<HTMLElement | null>(null);

    const toggleExpansion = () => {
        if (isExpanded && internalRef.current) {
            internalRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <Section
            id="gallery"
            ref={(node) => {
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
                internalRef.current = node;
            }}
        >
            <ScrollAnim>
                <div className="max-w-6xl mx-auto w-full px-0">
                    <h2 className="text-2xl font-title text-center text-light-pink font-bold pb-12">갤러리</h2>

                    {/* Initial Grid */}
                    <div className="grid grid-cols-6 gap-2">
                        {initialPhotos.map((photo, index) => {
                            const totalPhotos = initialPhotos.length;
                            const remainder = totalPhotos % 3;
                            const isLastRow = index >= totalPhotos - remainder;

                            let style;
                            if (!isLastRow || remainder === 0) {
                                style = { colSpan: "col-span-2", aspectRatio: "aspect-square" };
                            } else if (remainder === 1) {
                                style = { colSpan: "col-span-6", aspectRatio: "aspect-[3/1]" };
                            } else {
                                style = { colSpan: "col-span-3", aspectRatio: "aspect-[3/2]" };
                            }

                            return (
                                <div
                                    key={`initial-${index}`}
                                    className={`${style.colSpan} ${style.aspectRatio}`}
                                >
                                    <Dialog onOpenChange={onOpenChange}>
                                        <DialogTrigger asChild>
                                            <div
                                                className="cursor-pointer overflow-hidden rounded-xs hover:shadow-md h-full"
                                                onClick={() => setCurrentPhotoIndex(index)}
                                            >
                                                <div className={`${style.aspectRatio} relative w-full h-full`}>
                                                    <img
                                                        src={photo}
                                                        className="object-cover w-full h-full duration-300 hover:opacity-90 transition-opacity"
                                                    />
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="w-full bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
                                            <div className="relative overflow-hidden rounded-sm -mx-4 backdrop-blur-sm">
                                                <Carousel
                                                    className="w-full h-full"
                                                    opts={{
                                                        align: "center",
                                                        loop: true,
                                                        startIndex: index,
                                                    }}
                                                >
                                                    <CarouselContent className="">
                                                        {photos.map((p, i) => (
                                                            <CarouselItem key={i} className="basis-full">
                                                                <div className="flex items-center justify-center p-0">
                                                                    <img
                                                                        src={p}
                                                                        className="max-h-[85vh] w-auto object-contain rounded-sm"
                                                                    />
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <CarouselPrevious className="left-2 cursor-pointer bg-white/10 hover:bg-white/20 border-none text-white" />
                                                    <CarouselNext className="right-2 cursor-pointer bg-white/10 hover:bg-white/20 border-none text-white" />
                                                    <DialogClose className="absolute top-4 right-4 z-50 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 p-1.5 text-white hover:text-accent-foreground transition-colors">
                                                        <X className="h-5 w-5 " />
                                                        <span className="sr-only">Close</span>
                                                    </DialogClose>
                                                </Carousel>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="grid grid-cols-6 gap-2 pt-2">
                                {expandablePhotos.map((photo, localIndex) => {
                                    const index = localIndex + 9; // Global index
                                    const totalPhotos = expandablePhotos.length;
                                    const remainder = totalPhotos % 3;
                                    const isLastRow = localIndex >= totalPhotos - remainder;

                                    let style;
                                    if (!isLastRow || remainder === 0) {
                                        style = { colSpan: "col-span-2", aspectRatio: "aspect-square" };
                                    } else if (remainder === 1) {
                                        style = { colSpan: "col-span-6", aspectRatio: "aspect-[3/1]" };
                                    } else {
                                        style = { colSpan: "col-span-3", aspectRatio: "aspect-[3/2]" };
                                    }

                                    return (
                                        <div
                                            key={`expanded-${index}`}
                                            className={`${style.colSpan} ${style.aspectRatio}`}
                                        >
                                            <Dialog onOpenChange={onOpenChange}>
                                                <DialogTrigger asChild>
                                                    <div
                                                        className="cursor-pointer overflow-hidden rounded-xs hover:shadow-md h-full"
                                                        onClick={() => setCurrentPhotoIndex(index)}
                                                    >
                                                        <div className={`${style.aspectRatio} relative w-full h-full`}>
                                                            <img
                                                                src={photo}
                                                                className="object-cover w-full h-full duration-300 hover:opacity-90 transition-opacity"
                                                            />
                                                        </div>
                                                    </div>
                                                </DialogTrigger>
                                                <DialogContent className="w-full bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
                                                    <div className="relative overflow-hidden rounded-sm -mx-4 backdrop-blur-sm">
                                                        <Carousel
                                                            className="w-full h-full"
                                                            opts={{
                                                                align: "center",
                                                                loop: true,
                                                                startIndex: index,
                                                            }}
                                                        >
                                                            <CarouselContent className="">
                                                                {photos.map((p, i) => (
                                                                    <CarouselItem key={i} className="basis-full">
                                                                        <div className="flex items-center justify-center p-0">
                                                                            <img
                                                                                src={p}
                                                                                className="max-h-[85vh] w-auto object-contain rounded-sm"
                                                                            />
                                                                        </div>
                                                                    </CarouselItem>
                                                                ))}
                                                            </CarouselContent>
                                                            <CarouselPrevious className="left-2 cursor-pointer bg-white/10 hover:bg-white/20 border-none text-white" />
                                                            <CarouselNext className="right-2 cursor-pointer bg-white/10 hover:bg-white/20 border-none text-white" />
                                                            <DialogClose className="absolute top-4 right-4 z-50 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 p-1.5 text-white hover:text-accent-foreground transition-colors">
                                                                <X className="h-5 w-5 " />
                                                                <span className="sr-only">Close</span>
                                                            </DialogClose>
                                                        </Carousel>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={toggleExpansion}
                            className="bg-transparent flex flex-row items-center gap-2 cursor-pointer hover:text-gray-700 hover:scale-[1.02] transition-colors"
                        >
                            {isExpanded ? <ChevronUp /> : <ChevronDown />}
                            {isExpanded ? "접기" : "더 보기"}
                        </button>
                    </div>
                </div >
            </ScrollAnim>
        </Section >
    );
});

GallerySection.displayName = "GallerySection";

export default GallerySection;
