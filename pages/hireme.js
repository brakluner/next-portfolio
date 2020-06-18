import Link from "next/link"
import Layout from "../components/Layout"

const HireMe = () => (
    <Layout>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <h1>Hire Me To Do Your Web Bidding!</h1>
        <p>Hire Me At
            <a
            href="mailto:tedblount01@gmail.com">TedBlount01@GMAIL.COM</a>
        </p>
    </Layout>
)

export default HireMe