import Link from "next/link";
import Layout from "../components/Layout";

export default () => (

<Layout>
    <Link href='/'>Home</Link>
    <Link href='/hireme'>Hire Me</Link>
    <h1>About</h1>
    <p>Web Dev Team</p>
    <img src="/static/mustache.jpg" alt="mustache"/>
</Layout>
);

