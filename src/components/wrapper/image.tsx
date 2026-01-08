import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";


interface Props {
    src?: string,
    alt?: string,
    className?: string,
}


const Image = ({ src, alt, className }: Props) => {
    return (
        src ? <img src={src} alt={alt} className={className}/> : <Skeleton className={className}/>
    )
}

export default Image
