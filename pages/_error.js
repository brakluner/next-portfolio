import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error!">
        {statusCode ? `could not load your data: Status Code ${statusCode}
        ` : 'Couldnt get that page, Sorry'}
        
    </Layout>
);