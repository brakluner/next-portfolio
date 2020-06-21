import Layout from "../components/Layout";
import Error from './_error'
import fetch from "isomorphic-unfetch";
import { Component } from 'react';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/brakluner')
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // });

        return { user: data, statusCode};
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/brakluner')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             user: data
    //         })
    //     })
    // }
    

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img 
                src={user.avatar_url}
                alt="profile pic"/>
            </Layout>
        )
    }
}
    

