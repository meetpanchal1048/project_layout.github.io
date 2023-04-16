import React from 'react'
import birthday from './images/birthday.png'
import cal from './images/calculator.png'
import port2 from './images/portfolio2.png'

export const ReactProjects = () => {
    return (
        <div>

            <div class="row">

                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/Portfolio_2_/'><img src={port2} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Portfolio 2.0</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/MIT_React_Calculator1.github.io/'><img src={cal} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Calculator</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/MIT_React_BirthdayReminder.github.io/'><img src={birthday} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Birthday Reminder</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
