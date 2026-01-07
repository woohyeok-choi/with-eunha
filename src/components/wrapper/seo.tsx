import React from 'react'
import { useSiteMetadata } from '@/hooks/use-site-metadata'

interface Props {
    title?: string
    description?: string
    path?: string
    children?: React.ReactNode
}

const SEO: React.FC<Props> = ({ title, description, path, children }) => {
    const { title: defTitle, description: defDesc, image, siteUrl, icon } = useSiteMetadata()
    const seo = {
        title: title || defTitle,
        description: description || defDesc,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${path || ''}`,
        icon: `${siteUrl}${icon}`
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name='image' content={seo.image} />
            <link rel="icon" href={seo.icon} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            {children}
        </>
    )
}

export default SEO

