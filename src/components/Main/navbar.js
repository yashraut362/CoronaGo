import React, { Component } from 'react'
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
                        <a href="#" class="brand-logo white-text">Covid</a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/Dashboard">Dashboard</a></li>
                            <li><a href="/Prevention">Prevention</a></li>
                            <li><a href="/Donation">Donation</a></li>
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
                    <li><a class="sidenav-close" href="/">Home</a></li>
                    <li><a class="sidenav-close" href="/Dashboard">Dashboard</a></li>
                    <li><a class="sidenav-close" href="/Prevention">Prevention</a></li>
                    <li><a class="sidenav-close" href="/Donation">Donation</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar;