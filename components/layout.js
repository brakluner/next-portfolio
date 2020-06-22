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
    <div className="root">
        <Head>
            <title>Ted Web World</title>
         </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
        </header>

        <h1>{title}</h1>
        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
        .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
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