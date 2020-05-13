import React, { Component } from 'react'
import Homescreen from '../images/Homescreen.jpg'
import security from '../images/security.svg'
import face from '../images/face.svg'
import social from '../images/social-distance.svg'


class Home extends Component {
    render() {
        return (
            <div class="container" id="Home">
                <div class="row">
                    <div className="col s12 l4">
                        <img style={{
                            height: '380px',
                            width: '400px'
                        }} src={Homescreen} alt="" />
                    </div>
                    <div class="col s12 l6 offset-l2">
                        <div class="indigo-text text-darken-3" id="info">
                            <h3>What is Corona Virus ?</h3>
                            <h6>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered
                            coronavirus.
                            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover
                        without special treatment.</h6>
                            <a href="#" class="btn indigo waves-effect waves-light right">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class=" center indigo-text text-darken-3" id="head-spread">
                    <h4>How Can It Spread ?</h4>
                    <div class="row">
                        <div class="col s12 l4" id="spread">
                            <img src={security} style={{ height: '100px' }} alt="coughing" />
                            <h5>Contaminated Objects</h5>
                            <p>A person can possibly get COVID-19 by touching a surface or an object (e.g. doorknobs and table) that
                    has the virus on it and then touching his own mouth, nose, or eyes.</p>
                        </div>
                        <div class="col s12 l4" id="spread">
                            <img src={face} style={{ height: '100px' }} alt="coughing" />
                            <h5>Air Transmission of Droplets</h5>
                            <p>Droplet transmission occurs when a person is in in close contact (within 1 m) with someone who has
                    respiratory symptoms exposed to potentially infective respiratory droplets. </p>
                        </div>
                        <div class="col s12 l4" id="spread">
                            <img src={social} style={{ height: '100px' }} alt="coughing" />
                            <h5>Transmission Among Humans</h5>
                            <p> some coronaviruses can be transmitted from person to person, usually after close contact with an
                    infected patient, for example, in a household workplace, or health care centre.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;