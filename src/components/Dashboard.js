import React, { Component } from 'react'
import axios from 'axios'
import Table from '../components/table'
import Graphs from './graphs'
import Graph from './graphs'

class Dashboard extends Component {
    state = {
        confirmed: null,
        recovered: null,
        Death: null,
        total: null,
    }
    componentDidMount() {
        axios.get('https://covid19-india-adhikansh.herokuapp.com/summary')
            .then(res => {
                // console.log(res.data["Total Cases"])
                this.setState({
                    Death: res.data.Death,
                    total: res.data["Total Cases"],
                    recovered: res.data["Cured/Discharged/Migrated"],
                    confirmed: res.data["Active cases"]
                })
                // console.log(this.state.total)
            })
    }
    render() {
        return (
            <div className="container">
                <h3 className="indigo-text">Dashboard India</h3>
                <div className="row">
                    <div className="col s12 l3">
                        <div class="card">
                            <blockquote style={{
                                borderLeftColor: 'red'
                            }}>
                                <div class="card-content">
                                    <span class="card-title"><h3>{this.state.confirmed}</h3></span>
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
                                    <span class="card-title"><h3>{this.state.recovered}</h3></span>
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
                                    <span class="card-title"><h3>{this.state.Death}</h3></span>
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
                                    <span class="card-title"><h3>{this.state.total}</h3></span>
                                    <h4 className="indigo-text">Total</h4>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <h4 className="indigo-text">State-Wise Dashboard</h4>
                <Table />
            </div>
        )
    }
}
export default Dashboard;
{/* <div className="row">
    <div className="col s12 l8">
        <Table />
        <Graph />
    </div>
</div> */}