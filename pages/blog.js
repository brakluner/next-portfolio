import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
    <li>
    <Link href={`/post?title=${title}`}>
                    <a>
                        {title}
                    </a>
    </Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <ul>
            <li>
                <PostLink title="Blog A"/>
                <PostLink title="Blog B"/>
                <PostLink title="Blog C"/>
            </li>
        </ul>
    </Layout>
)