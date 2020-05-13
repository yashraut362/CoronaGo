import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer grey darken-3">
                <div class="container">
                    <div class="row">
                        <div class="col s12 l6">
                            <h5>About Me</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="col s12 l4 offset-l2">
                            <h5>Contact Me</h5>
                            <ul>
                                <li>
                                    <a href="#" class="grey-text text-lighten-3">Github</a>
                                </li>
                                <li>
                                    <a href="#" class="grey-text text-lighten-3">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" class="grey-text text-lighten-3">Facebook</a>
                                </li>
                                <li>
                                    <a href="#" class="grey-text text-lighten-3">Linked-In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright grey darken-4 ">
                    <div class="container center-align ">&copy; 2020 Yash Raut</div>
                </div>
            </footer>

        )
    }
}
export default Footer;