import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'


class Navbar extends Component {
    componentDidMount() {
        M.Sidenav.init(this.Sidenav);
        let instance = M.Sidenav.getInstance(this.Sidenav);
    }
    render() {
        return (
            <div>
                <nav class="nav-wrapper indigo">
                    <div class="container">
                        <a href="#" class="brand-logo white-text"><i className=" large material-icons">all_inclusive</i>CoronaGo</a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Dashboard">Dashboard</Link></li>
                            <li><Link to="/Prevention">Prevention</Link></li>
                            {/* <li><Link to="/Donation">Donation</Link></li> */}
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-links" ref={Sidenav => {
                    this.Sidenav = Sidenav
                }}>
                    <li>
                        <a href="#" class="indigo">
                            <i class="material-icons white-text">looks</i>
                            <span class="white-text">Covid Tracker India</span>
                        </a>
                    </li>
                    <li><Link class="sidenav-close" to="/">Home</Link></li>
                    <li><Link class="sidenav-close" to="/Dashboard">Dashboard</Link></li>
                    <li><Link class="sidenav-close" to="/Prevention">Prevention</Link></li>
                    {/* <li><a class="sidenav-close" href="/Donation">Donation</a></li> */}
                </ul>
            </div>
        )
    }
}
export default withRouter(Navbar);