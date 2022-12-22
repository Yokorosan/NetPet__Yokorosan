import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video ,input , button,svg{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: 400;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        border: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        background-color: var(--grey-5);
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--grey-4);
        border-radius: 8px;
    }

    :root {
        --brand-1: #FFD7A8;
        --brand-2: #D77127;
        --brand-2-clear: #C18461;
        
        --grey-opacity: #16161680;
        --grey-1: #1E1E1E;
        --grey-2: #737885;
        --grey-3: #8A8B99;
        --grey-4: #D9DEE6;
        --grey-5: #FFEAD2;
        --white: #FFFFFF;
        --black:#000000;
    }

    .ReactModal__Overlay--after-open{
        z-index: 2;
    }
`;
