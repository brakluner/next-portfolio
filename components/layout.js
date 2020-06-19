import Link from 'next/link';


export default ({ children, title }) => (
    <div>
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
        `}

        </style>
    </div>
)