import React from 'react'
import Head from 'next/head'

class MyHead extends React.Component {
    render() {
        const {
            title,
            link,
            description,
            image,
            date,
            isArticle,
            titleNameFirst,
        } = this.props

        const headTitle = titleNameFirst
            ? `wweb.dev | ${title}`
            : `${title} | wweb.dev`

        return (
            <Head>
                <title>{headTitle}</title>
                <link rel='icon' href='/favicon.ico' type="image/x-icon" />
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content={description || title} />
                <meta name="robots" content="index, follow"></meta>
                { description && <meta name="description" content={description}></meta> }
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <script type="text/javascript" src="/analytics.js"></script>
                <script type="text/javascript" src="https://analytics.vincentwill.com/hokuspokusj"></script>
                <style> { 'html, body { margin: 0; }' } </style>

                { isArticle &&
                    <React.Fragment>
                        <link rel="canonical" href={link} />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content={link} />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={description} />
                        <meta name="twitter:creator" content="@wweb_dev" />
                        <meta name="twitter:image" content={`https://wweb.dev${image}`} />
                        <meta property="og:title" content={title} />
                        <meta property="og:image" content={`https://wweb.dev${image}`} />
                        <meta property="og:site_name" content="wweb.dev" />
                        <meta property="og:description" content={description} />
                        <meta property="og:url" content={link} />
                        <meta property="og:type" content="article" />

                        <link href="https://unpkg.com/octomments/build/ocs-ui.min.css" rel="stylesheet"></link>
                        <script type="application/ld+json">
                            {`
                                '@context': "http://schema.org",
                                "@type":"Article",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id":"${link}"
                                },
                                "headline": "${title}",
                                "datePublished":"${date}",
                                "image": {
                                    "@type":"ImageObject",
                                    "url":"https://wweb.dev${image}",
                                    "height":646,"width":1300
                                },
                                "description":"${description}",
                                "author": {
                                    "@type":"Person",
                                    "name":"Vincent Will"
                                },
                                "publisher": {
                                    "@type":"Organization",
                                    "name":"wweb.dev",
                                    "logo":{
                                        "@type":"ImageObject",
                                        "url":"https://wweb.dev/logo-text.png",
                                        "height":64,
                                        "width":64
                                    }
                                }
                            `}
                        </script>
                    </React.Fragment>
                }
            </Head>
        )
    }
}

export default MyHead