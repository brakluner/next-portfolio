import Link from 'next/link';
import Head from "next/head";
import Router from "next/router";
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default ({ children, title }) => (
    <div>
        <Head>
            <title>Ted Web World</title>
            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
        </Head>
        <header className="root">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        </header>

        <h1>{title}</h1>
        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
        .root {
            display: flex;
            justify-content: left;
            align-items: left;
            flex-direction: right;
        }
        header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: #ff0059;
        }
        a {
            margin: auto;
            color: #00ff92;
        }
        a:hover {
            font-weight: bold;
            color: #00ffc8;
        }
        `}

        </style>
    </div>
)