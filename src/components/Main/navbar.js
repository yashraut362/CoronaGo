import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
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
        )
    }
}
export default Navbar;