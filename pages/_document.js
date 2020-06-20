import Document, { Head, Main, Next } from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                <link rel="stylesheet" 
                 href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                 <meta name="description" content="A site for my programming portfolio" />
                 <meta name="robots" content="noindex, nofollow" />
                 <meta name="viewport" content="width=device-width" />
                </Head>
            </html>
        )
    }

}