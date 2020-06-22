import Layout from '../components/layout';

const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Dolor aliquip commodo est amet. Velit deserunt dolore enim aliqua sit Lorem. Nostrud aliquip ad tempor est aliquip consectetur duis mollit aliqua ea nisi. Nulla consectetur Lorem anim anim veniam tempor ex id incididunt.</p>
    </Layout>
);

export default Post;