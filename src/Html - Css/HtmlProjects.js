import React from 'react'
import portfolio from './images/portfolio.png'
import techrec from './images/techrec.png'
import layer from './images/layered.png'
import timeline from './images/Timeline.png'

export const HtmlProjects = () => {
    return (
        <div>

            <div class="row">
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/MitPortfolio.github.io/'><img src={portfolio} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Portfolio 1.0</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                    <a href='https://meetpanchal1048.github.io/TechRec.github.io/'><img src={techrec} class="card-img-top card-img-right" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">TechRec</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                <a href='https://meetpanchal1048.github.io/Layered_Webpage.github.io/'><img src={layer} class="card-img-top card-img-right" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">Layered Page</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-2 mb-sm-0">
                <a href='https://meetpanchal1048.github.io/TimeLine.github.io/'><img src={timeline} class="card-img-top card-img-right" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="pro-title">TimeLine</h5>
                        <div className="pro-desc-top">
                            <p class="pro-desc">JavaScript</p>
                            <p class="pro-desc">HTML</p>
                            <p class="pro-desc">CSS</p>
                            <p class="pro-desc">JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
