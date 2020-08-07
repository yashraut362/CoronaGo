import React, { Component } from 'react'
import axios from 'axios'

class Table extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://covid19-india-adhikansh.herokuapp.com/states')
            .then(res => {
                console.log(res.data.state)
                this.setState({
                    posts: res.data.state
                })
            })
    }
    render() {
        
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <tbody key={post._id}>
                        <tr class="center">
                            <td >{post.name}</td>
                            <td >{post.active}</td>
                            <td>{post.cured}</td>
                            <td>{post.death}</td>
                            <td>{post.total}</td>
                        </tr>
                    </tbody>
                )
            })
        ) : (
                <div className="center">loading....</div>
            )
        return (
            <div>
                <div class="col s12 l8 ">
                    <div className="container hide-on-med-and-up indigo-text">
                        <h4>Use Larger Screen For Detailed State Information</h4>
                    </div>
                    <table class="responsive-table highlight hide-on-med-and-down">
                        <thead>
                            <tr>
                                <th>States Name</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {postList}
                    </table>
                </div>
            </div>
        )
    }
}
export default Table;

