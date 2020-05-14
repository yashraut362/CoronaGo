// import React, { Component } from 'react'
// import { Pie } from 'react-chartjs-2'
// import Axios from 'axios'

// class Graph extends Component {
//     state = {
//         labels: ["Active", "Discharged", "Death"],
//         datasets: [{
//             data: [],
//             backgroundColor: ['Red', 'Green', 'Black']
//         }]
//     }
//     componentDidMount() {
//         Axios.get('https://covid19-india-adhikansh.herokuapp.com/summary')
//             .then(res => {
//                 console.log(res.data)
//                 this.setState({

//                 })
//             })
//     }
//     render() {
//         return (
//             <div className="container">
//                 <Pie
//                     data={{
//                         labels: this.state.labels,
//                         datasets: this.state.datasets
//                     }}
//                     height="100%"
//                 />
//             </div>
//         )
//     }
// }
// export default Graph;