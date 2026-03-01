import React, { useState, useRef } from 'react';
import { X, ChevronDown, ChevronUp } from "lucide-react";
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
import ScrollAnim from '@/components/wrapper/scroll-anim';
import { useImage } from '@/hooks/use-image';
import ImageSharp = Queries.ImageSharp;
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
    onOpenChange?: (isOpen: boolean) => void;
}

const getGridStyle = (index: number, totalPhotos: number) => {
    const remainder = totalPhotos % 3;
    const isLastRow = index >= totalPhotos - remainder;

    if (!isLastRow || remainder === 0) {
        return { colSpan: "col-span-2", aspectRatio: "aspect-square" };
    } else if (remainder === 1) {
        return { colSpan: "col-span-6", aspectRatio: "aspect-[3/1]" };
    } else {
        return { colSpan: "col-span-3", aspectRatio: "aspect-[3/2]" };
    }
};

interface PhotoGridItemProps {
    photo: ImageSharp;
    index: number;
    style: { colSpan: string; aspectRatio: string };
    allPhotos: ImageSharp[];
    onOpenChange?: (isOpen: boolean) => void;
    onPhotoClick: (index: number) => void;
}

const PhotoGridItem: React.FC<PhotoGridItemProps> = ({
    photo,
    index,
    style,
    allPhotos,
    onOpenChange,
    onPhotoClick,
}) => {
    return (
        <div className={`${style.colSpan} ${style.aspectRatio}`}>
            <Dialog onOpenChange={onOpenChange}>
                <DialogTrigger asChild>
                    <div
                        className="cursor-pointer overflow-hidden rounded-xs hover:shadow-md h-full"
                        onClick={() => onPhotoClick(index)}
                    >
                        <div className={`${style.aspectRatio} relative w-full h-full`}>
                            <GatsbyImage
                                image={photo.gatsbyImageData}
                                className="object-cover w-full h-full duration-300 hover:opacity-90 transition-opacity"
                                alt='Wedding photo'
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
                                {allPhotos.map((p, i) => (
                                    <CarouselItem key={i} className="basis-full">
                                        <div className="flex items-center justify-center p-0">
                                            <GatsbyImage
                                                image={p.gatsbyImageData}
                                                className="max-h-[85vh] w-full object-contain rounded-sm"
                                                alt='Wedding photo (Large)'
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
};

const GallerySection = React.forwardRef<HTMLElement, Props>(({ onOpenChange }, ref) => {
    const photos: ImageSharp[] = useImage()

    const [isExpanded, setIsExpanded] = useState(false);
    const [_, setCurrentPhotoIndex] = useState(0);

    const initialPhotos: ImageSharp[] = photos.slice(0, 9);
    const expandablePhotos: ImageSharp[] = photos.slice(9);

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

                    <div className="grid grid-cols-6 gap-2">
                        {initialPhotos.map((photo, index) => (
                            <PhotoGridItem
                                key={`initial-${index}`}
                                photo={photo}
                                index={index}
                                style={getGridStyle(index, initialPhotos.length)}
                                allPhotos={photos}
                                onOpenChange={onOpenChange}
                                onPhotoClick={setCurrentPhotoIndex}
                            />
                        ))}
                    </div>

                    <div
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="grid grid-cols-6 gap-2 pt-2">
                                {expandablePhotos.map((photo, localIndex) => {
                                    const globalIndex = localIndex + 9;
                                    return (
                                        <PhotoGridItem
                                            key={`expanded-${globalIndex}`}
                                            photo={photo}
                                            index={globalIndex}
                                            style={getGridStyle(localIndex, expandablePhotos.length)}
                                            allPhotos={photos}
                                            onOpenChange={onOpenChange}
                                            onPhotoClick={setCurrentPhotoIndex}
                                        />
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
