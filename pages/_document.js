import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                <link rel="stylesheet" 
                 href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                 <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
                 <meta name="description" content="A site for my programming portfolio" />
                 <meta name="robots" content="noindex, nofollow" />
                 <meta name="viewport" content="width=device-width" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
        <style global jsx>{`
        body {
            font-family: 'Fredoka One', cursive;
        }
        `}</style>
            </html>
        )
    }

}