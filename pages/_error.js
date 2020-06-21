import Layout from '../components/layout';

export default ({ statusCode }) => (
    <Layout title="Error!">
        {statusCode ? `could not load your data: Status Code ${statusCode}
        ` : 'Couldnt get that page, Sorry'}
        
    </Layout>
);