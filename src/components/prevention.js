import React, { Component } from 'react'
import Hand from '../images/Hand.gif'
import Mask from '../images/mask.gif'
import Social from '../images/social.gif'
import Calender from '../images/calender.gif'

class Prevention extends Component {
    render() {
        return (

            <section class=" container section " id="photos">
                <h2 class="center indigo-text text-darken-4">Coronavirus Safety Tips for Everyone </h2>
                <div class="row " >
                    <div class="col s12 l4 ">
                        <img src={Hand} alt=" " class="responsive-img " />
                    </div>
                    <div class="col s12 l6 offset-l1 " id="safety">
                        <h2 class="indigo-text text-darken-4 ">Wash Hands</h2>
                        <h5>Clean your hands regularly.
                        Wash your hands with soap and water, and dry them thoroughly.
                    Use alcohol-based handrub if you don’t have immediate access to soap and water.</h5>
                    </div>
                </div>
                <div class="row ">
                    <div class="col s12 l4 push-l7 offset-l1">
                        <img src={Mask} alt=" " class="responsive-img " />
                    </div>
                    <div class="col s12 l6 pull-l5 right-align offset-l1  " id=" safety">
                        <h2 class="indigo-text text-darken-4 ">Use Mask</h2>
                        <h5 class="flow-text">Cover mouth and nose with mask and make sure there are no gaps between your face
                        and the mask. Avoid
                        touching the mask while using it. if you do, clean your hands with alcohol-based hand rub or soap
                        and water.
                </h5>
                    </div>
                </div>
                <div class="row ">
                    <div class="col s12 l4 ">
                        <img src={Social} alt=" " class="responsive-img " />
                    </div>
                    <div class="col s12 l6 offset-l1 " id="safety">
                        <h2 class="indigo-text text-darken-4 ">Social Distancing</h2>
                        <h5 class="flow-text">Limit close contact with others outside your household in indoor and outdoor
                        spaces. Since people
                        can spread the virus before they know they are sick, it is important to stay away from others when
                    possible, even if you—or they—have no symptoms.</h5>
                    </div>
                </div>
                <div class="row ">
                    <div class="col s12 l4 push-l7 offset-l1 ">
                        <img src={Calender} alt=" " class="responsive-img " />
                    </div>
                    <div class="col s12 l6 pull-l5 right-align offset-l1 " id="safety">
                        <h2 class="indigo-text text-darken-4 ">Support Lockdown</h2>
                        <h5 class="flow-text center">Support lockdown in this pandamic,Stay home and help Government to
                        flatten the
                        curve. You may hear
                        this called “social isolation.” Staying away from groups of people may
                        help you avoid being
                    exposed.</h5>
                    </div>
                </div>
            </section>
        )
    }
}
export default Prevention;