import Link from 'next/link';


export default ({ children, title }) => (
    <div>
        <header>
            <Link href="/"><a>Home</a></Link><br />
            <Link href="/about"><a>About</a></Link><br />
            <Link href="/hireme"><a>Hire Me</a></Link><br />
        </header>

        <h1>{title}</h1>
        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
)