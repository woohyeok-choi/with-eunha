import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
    path: `.env`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: `최우혁 ♥ 강은하 결혼합니다!`,
        siteUrl: `https://woohyeok-choi.github.io/with-eunha/`,
        description: `2026년 6월 13일 토요일 오후 1시 서울대학교 교수회관 웨딩홀`,
        locale: "ko-KR",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: "/src/resources/static/",
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "resources",
                "path": "./src/resources/images/"
            },
            __key: "resources"
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "./src/resources/static/logo.png",
                name: "최우혁 ♥ 강은하 결혼합니다!",
                short_name: "ㅇㅎ ♥ ㅇㅎ",
                start_url: "/",
            }
        }

    ],
    pathPrefix: "/with-eunha",
};

export default config;
