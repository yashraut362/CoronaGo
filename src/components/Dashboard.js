import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
    state = {
        summary: []
    }
    componentDidCatch() {
        axios.get('https://covid19-india-adhikansh.herokuapp.com/summary')
            .then(res => {
                console.log(res)
            })
    }
    render() {

        return (
            <div className="container">
                <h3 className="indigo-text">Dashboard</h3>
                <div className="row">
                    <div className="col s12 l3">
                        <div class="card">
                            <blockquote style={{
                                borderLeftColor: 'red'
                            }}>
                                <div class="card-content">
                                    <span class="card-title">Value Here</span>
                                    <h4 className="indigo-text">Confirmed</h4>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div class="card">
                            <blockquote style={{
                                borderLeftColor: 'green'
                            }}>
                                <div class="card-content">
                                    <span class="card-title">Value Here</span>
                                    <h4 className="indigo-text">Recovered</h4>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div class="card">
                            <blockquote style={{
                                borderLeftColor: 'black'
                            }}>
                                <div class="card-content">
                                    <span class="card-title">Value Here</span>
                                    <h4 className="indigo-text">Death</h4>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div class="card">
                            <blockquote style={{
                                borderLeftColor: 'orange'
                            }}>
                                <div class="card-content">
                                    <span class="card-title">Value Here</span>
                                    <h4 className="indigo-text">Total</h4>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Dashboard;