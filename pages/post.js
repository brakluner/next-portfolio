import Layout from '../components/layout';

const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum</p>
    </Layout>
);

export default Post;