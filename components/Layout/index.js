import React from 'react'

import '../../ui/code-style/github.css';
import { Head, Header, Footer } from '../'
import * as S from './styled'
import { GlobalStyle } from '../../ui/global.js'

function Layout ({
    title,
    children,
    isArticle,
    date,
    link,
    image,
    description,
    titleNameFirst,
}) {
    const d = date ? new Date(date) : undefined

    return (
        <S.Container className="content">
            <GlobalStyle />
            <Head
                title={title}
                link={link}
                image={image}
                description={description}
                date={d}
                isArticle={isArticle}
                titleNameFirst={titleNameFirst}
            />
            <Header>
                <h1>{title}</h1>
                { isArticle && <p><S.Time datetime={d.toISOString()}>{date}</S.Time></p> }
            </Header>

            <main>
                { children }
            </main>

            <Footer />
        </S.Container>
    )
}

export default Layout
