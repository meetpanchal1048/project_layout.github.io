import React from 'react'
import birthday from './images/birthday.png'
import cal from './images/calculator.png'
import port2 from './images/portfolio2.png'
import sophie from './images/sophie.png'
import manage from './images/manage.png'
import qr from './images/qr code.png'
import techrec2 from './images/techrech 2.png'
import wise from './images/wisemissteps.png'

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
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/Sophieportfolio.github.io/'><img src={sophie} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Sophiee Portfolio</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/WiseMissteps/'><img src={wise} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">WiseMissteps</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/TechRec2.0/'><img src={techrec2} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">TechRec 2.0</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">Bootstrap</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/QR_FEM/'><img src={qr} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">QR_Front-end Mentor</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/modernapp/'><img src={manage} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Manage App</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">React JS</p>
                            <p class="pro-desc">HTML/CSS</p>
                            <p class="pro-desc">Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
