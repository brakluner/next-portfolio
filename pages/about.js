import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from 'react';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/brakluner')
        const data = await res.json();

        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // });

        return { user: data};
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
        const { user } = this.props;

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
    

